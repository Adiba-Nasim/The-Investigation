import { shuffleArray } from '../data/spots'
import { getSeededCase } from '../data/seeded'

const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY

// ── SESSION CACHE ─────────────────────────────────────────────────────────
const sessionCache = {}

// ── CASE POOLS BY ROOM ────────────────────────────────────────────────────
const CASES = {
  1: [
    'The Sodder Children Disappearance',
    'The Somerton Man',
    'The Beaumont Children',
    'The Flannan Isles Lighthouse Mystery',
    'The Isabella Stewart Gardner Museum Theft',
  ],
  2: [
    'The Black Dahlia Murder',
    'The JonBenét Ramsey Case',
    'The Disappearance of Maura Murray',
    'The Delphi Murders',
    'The Chicago Tylenol Murders',
  ],
  3: [
    'The Zodiac Killer',
    'Jack the Ripper',
    'The Golden State Killer',
    'The Axeman of New Orleans',
    'The Texarkana Moonlight Murders',
  ],
}

const usedCases = { 1: [], 2: [], 3: [] }

export function pickCase(roomNum) {
  const pool = CASES[roomNum]
  const used = usedCases[roomNum]
  const available = pool.filter(c => !used.includes(c))
  const from = available.length > 0 ? available : pool
  const pick = from[Math.floor(Math.random() * from.length)]
  usedCases[roomNum] = available.length > 1 ? [...used, pick] : [pick]
  return pick
}

// ── MAIN FETCH ────────────────────────────────────────────────────────────
export async function fetchCaseClues(caseName, spotsPool, roomNum) {
  // 1. Return from session cache instantly
  if (sessionCache[caseName]) {
    console.log(`[CCF] Cache hit: ${caseName}`)
    return assignToSpots(sessionCache[caseName], spotsPool)
  }

  // 2. Try seeded first if no Gemini key
  if (!GEMINI_KEY) {
    console.log(`[CCF] No Gemini key — using seeded for: ${caseName}`)
    return loadSeeded(caseName, spotsPool, roomNum)
  }

  // 3. Try Gemini with retry + fallback model
  try {
    const data = await fetchFromGeminiWithRetry(caseName)
    sessionCache[caseName] = data
    return assignToSpots(data, spotsPool)
  } catch (err) {
    console.warn(`[CCF] Gemini failed (${err.message}) — falling back to seeded`)
    return loadSeeded(caseName, spotsPool, roomNum)
  }
}

function loadSeeded(caseName, spotsPool, roomNum) {
  console.log(`[CCF] Loading seeded case: "${caseName}" room ${roomNum}`)
  const seeded = getSeededCase(roomNum, caseName)

  if (seeded) {
    console.log(`[CCF] Seeded found: ${seeded.clues.length} clues`)
    sessionCache[caseName] = seeded
    return assignToSpots(seeded, spotsPool)
  }

  // Last resort — try all rooms if roomNum mismatch
  for (let r = 1; r <= 3; r++) {
    const found = getSeededCase(r, caseName)
    if (found) {
      console.log(`[CCF] Seeded found in room ${r} (roomNum was ${roomNum})`)
      sessionCache[caseName] = found
      return assignToSpots(found, spotsPool)
    }
  }

  console.warn(`[CCF] No seeded match for "${caseName}" — using generic fallback`)
  const generic = buildGenericFallback(caseName)
  sessionCache[caseName] = generic
  return assignToSpots(generic, spotsPool)
}

// ── ASSIGN CLUES TO SPOTS ─────────────────────────────────────────────────
function assignToSpots(caseData, spotsPool) {
  const shuffledSpots = shuffleArray([...spotsPool])
  const chosen = shuffledSpots.slice(0, 7)
  const shuffledClues = shuffleArray([...caseData.clues])

  const clueSpotIds = chosen.map(s => s.id)
  const clueMap = {}
  chosen.forEach((s, i) => {
    clueMap[s.id] = {
      icon: '🔍',
      fact: shuffledClues[i].fact,
      source: shuffledClues[i].source,
      ref: shuffledClues[i].ref,
      isReal: shuffledClues[i].isReal,
      falseExplanation: shuffledClues[i].falseExplanation || null,
    }
  })

  return {
    clueSpotIds,
    clueMap,
    theories: shuffleArray([...caseData.theories]),
    correctTheoryExplanation: caseData.correctTheoryExplanation,
  }
}

// ── GEMINI WITH RETRY + FALLBACK MODEL ────────────────────────────────────
const MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash-latest',
]

async function fetchFromGeminiWithRetry(caseName) {
  let lastError

  for (const model of MODELS) {
    // Try each model up to 2 times with backoff
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const data = await fetchFromGemini(caseName, model)
        console.log(`[CCF] Gemini success: model=${model} attempt=${attempt}`)
        return data
      } catch (err) {
        lastError = err
        const is429 = err.message.includes('429')
        console.warn(`[CCF] ${model} attempt ${attempt} failed: ${err.message}`)

        if (is429 && attempt === 1) {
          // Wait before retry — exponential backoff
          const wait = model === MODELS[0] ? 1500 : 800
          console.log(`[CCF] Rate limited — waiting ${wait}ms before retry`)
          await new Promise(r => setTimeout(r, wait))
        } else if (!is429) {
          // Non-rate-limit error — skip retrying this model
          break
        }
      }
    }
  }

  throw lastError || new Error('All Gemini models failed')
}

async function fetchFromGemini(caseName, model = 'gemini-2.0-flash') {
  const prompt = `You are a writer for a dark atmospheric cold case investigation game.
The player is secretly investigating: "${caseName}"

Generate a complete case package. The CASE NAME must NEVER appear in any clue text.

Return ONLY raw valid JSON, no markdown, no backticks, no explanation.

{
  "clues": [
    {
      "fact": "Second-person clue text. Never name the case, victim, or location. Write as physical evidence found. 1-3 sentences.",
      "source": "Real source — Publication, Year",
      "ref": "domain.com/path",
      "isReal": true,
      "falseExplanation": null
    }
  ],
  "theories": [
    { "label": "Correct theory — descriptors only, no names. 1-2 sentences.", "isCorrect": true },
    { "label": "Wrong theory — plausible but incorrect. 1-2 sentences.", "isCorrect": false },
    { "label": "Wrong theory — made attractive by the false clues. 1-2 sentences.", "isCorrect": false }
  ],
  "correctTheoryExplanation": "2-3 sentences on what the evidence pointed to and the real outcome."
}

RULES:
- Exactly 7 clues: 5 isReal:true, 2 isReal:false
- False clues need a falseExplanation string explaining the deception
- Real clues: falseExplanation must be null
- Arc: clues 1-2 background, 3-4 incident, 5-6 suspects, 7 haunting unanswered note
- NEVER name victim, killer, location, or case name in any clue
- Second person only ("You find...", "You notice...")
- Exactly 1 theory isCorrect:true
- Return ONLY the JSON object, nothing else`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.72, maxOutputTokens: 3000 },
      }),
    }
  )

  if (!response.ok) throw new Error(`${response.status}`)

  const data = await response.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error('Empty response')

  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('No JSON in response')

  const parsed = JSON.parse(jsonMatch[0])
  if (!parsed.clues || parsed.clues.length < 7) throw new Error('Too few clues')
  if (!parsed.theories || parsed.theories.length < 3) throw new Error('Too few theories')

  return {
    clues: parsed.clues.slice(0, 7),
    theories: parsed.theories.slice(0, 3),
    correctTheoryExplanation: parsed.correctTheoryExplanation || '',
  }
}

// ── GENERIC FALLBACK ──────────────────────────────────────────────────────
function buildGenericFallback(caseName) {
  return {
    clues: [
      { fact: "You find a photograph with the edges burned. The date on the back has been scratched out — deliberately.", source: `${caseName} — Case Archives`, ref: "fbi.gov/history/famous-cases", isReal: true, falseExplanation: null },
      { fact: "A handwritten note describes the subject's last known routine. Three days are missing with no explanation.", source: `${caseName} — Investigative Records`, ref: "loc.gov/collections", isReal: true, falseExplanation: null },
      { fact: "The timeline does not hold. Two witnesses place them in different locations on the same evening.", source: `${caseName} — Witness Statements`, ref: "courtlistener.com", isReal: true, falseExplanation: null },
      { fact: "Physical evidence was logged, then quietly removed from the official record eighteen months later.", source: `${caseName} — Evidence Log`, ref: "pacer.gov", isReal: true, falseExplanation: null },
      { fact: "A person of interest was interviewed three times. Each time their story changed in the same small detail.", source: `${caseName} — Interview Transcripts`, ref: "newspapers.com", isReal: true, falseExplanation: null },
      { fact: "Forensic analysis is said to have confirmed the suspect's presence at the scene — but the report has never been released.", source: `${caseName} — Forensic Report`, ref: "nij.ojp.gov", isReal: false, falseExplanation: "No forensic confirmation was ever made public. This detail was circulated by press but has no documentary basis." },
      { fact: "You find one final detail that no official report mentions. You don't know what it means. Nobody does. The file simply stops here.", source: `${caseName} — Cold Case Review`, ref: "fbi.gov/wanted/coldcases", isReal: true, falseExplanation: null },
    ],
    theories: [
      { label: "Someone within the victim's immediate circle — with intimate knowledge of their routine and access to their private life — who was never seriously investigated.", isCorrect: true },
      { label: "An opportunistic outsider whose presence was coincidental — the inward-pointing evidence a result of deliberate misdirection.", isCorrect: false },
      { label: "An organised operation involving multiple parties — the removal of evidence from official records suggesting institutional involvement.", isCorrect: false },
    ],
    correctTheoryExplanation: "The most credible theory points to someone within the victim's immediate circle. The case remains officially open and no charges have ever been filed.",
  }
}
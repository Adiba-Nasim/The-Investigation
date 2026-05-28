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
  if (sessionCache[caseName]) {
    console.log(`[CCF] Cache hit: ${caseName}`)
    return assignToSpots(sessionCache[caseName], spotsPool)
  }

  if (!GEMINI_KEY) {
    console.log(`[CCF] No Gemini key — using seeded for: ${caseName}`)
    return loadSeeded(caseName, spotsPool, roomNum)
  }

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
  const seeded = getSeededCase(roomNum, caseName)
  if (seeded) {
    sessionCache[caseName] = seeded
    return assignToSpots(seeded, spotsPool)
  }
  for (let r = 1; r <= 3; r++) {
    const found = getSeededCase(r, caseName)
    if (found) {
      sessionCache[caseName] = found
      return assignToSpots(found, spotsPool)
    }
  }
  const generic = buildGenericFallback(caseName)
  sessionCache[caseName] = generic
  return assignToSpots(generic, spotsPool)
}

// ── ASSIGN CLUES TO SPOTS ─────────────────────────────────────────────────
function assignToSpots(caseData, spotsPool) {
  const shuffledSpots = shuffleArray([...spotsPool])
  const chosen = shuffledSpots.slice(0, 10)
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
          const wait = model === MODELS[0] ? 1500 : 800
          await new Promise(r => setTimeout(r, wait))
        } else if (!is429) {
          break
        }
      }
    }
  }
  throw lastError || new Error('All Gemini models failed')
}

async function fetchFromGemini(caseName, model = 'gemini-2.0-flash') {
  const prompt = `You are writing fragments of a dark, atmospheric investigation game. The player is physically searching a room, and each clue they find is a piece of an unfolding story — a real cold case they must piece together themselves.

The case is: "${caseName}"

The CASE NAME, victim name, location name, and any identifying proper nouns must NEVER appear in any clue text.

Write in second person. The player is discovering these fragments in a dimly lit room — finding notes tucked in drawers, photographs behind mirrors, items left behind. Each clue should feel like a piece of a story slowly assembling itself. Atmospheric, eerie, curious. Not a list of facts — a narrative the player is stepping into.

Return ONLY raw valid JSON, no markdown, no backticks, no explanation.

{
  "clues": [
    {
      "fact": "Second-person discovery. Written as if the player physically finds this in the room — a document, object, photograph, note, or detail they observe. Atmospheric and specific. Never names the case. 2-4 sentences.",
      "source": "Real or plausible source — Publication, Year",
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
- Exactly 10 clues: 6 isReal:true, 4 isReal:false
- Story arc across the 10 clues:
    1-2: atmosphere and setting — who these people were, the world they inhabited
    3-4: the incident — what happened, the moment things broke
    5-6: the investigation begins — what was found, what was noticed
    7-8: contradiction and suspicion — what didn't add up, who behaved strangely
    9: the false trail deepens — the most convincing wrong lead
    10: the haunting unanswered note — what was never explained, never recovered, never understood
- False clues (4 total) must be woven naturally into the arc — they should feel as real as the real ones
- Each false clue needs a falseExplanation string explaining why it misled
- Real clues: falseExplanation must be null
- NEVER name victim, killer, location, or case in any clue
- Second person only ("You find...", "You notice...", "Tucked behind...", "The photograph shows...")
- Exactly 1 theory isCorrect:true
- Return ONLY the JSON object, nothing else`

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.75, maxOutputTokens: 4000 },
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
  if (!parsed.clues || parsed.clues.length < 10) throw new Error('Too few clues')
  if (!parsed.theories || parsed.theories.length < 3) throw new Error('Too few theories')

  return {
    clues: parsed.clues.slice(0, 10),
    theories: parsed.theories.slice(0, 3),
    correctTheoryExplanation: parsed.correctTheoryExplanation || '',
  }
}

// ── GENERIC FALLBACK ──────────────────────────────────────────────────────
function buildGenericFallback(caseName) {
  return {
    clues: [
      { fact: "You find a photograph tucked behind the frame of a mirror — a family, unremarkably posed, on an unremarkable day. Someone has circled one face in pencil. The circle is pressed so hard into the paper it nearly tore through.", source: `${caseName} — Case Archives`, ref: "fbi.gov/history/famous-cases", isReal: true, falseExplanation: null },
      { fact: "A newspaper clipping is folded inside a dictionary, marking a word someone underlined long ago. The clipping describes the beginning. The word they marked was 'vanished.'", source: `${caseName} — Newspaper Archive`, ref: "newspapers.com", isReal: true, falseExplanation: null },
      { fact: "You find a handwritten calendar on the desk. Three days have been crossed out in red. The days after them are blank — as though whoever kept this diary already knew what was coming, and stopped writing.", source: `${caseName} — Personal Effects`, ref: "loc.gov/collections", isReal: true, falseExplanation: null },
      { fact: "A sealed envelope is taped beneath the drawer. Inside: a list of names in two columns. One column has been crossed through entirely. The other is untouched. You do not recognise any of them.", source: `${caseName} — Investigative Records`, ref: "courtlistener.com", isReal: true, falseExplanation: null },
      { fact: "The phone on the desk still works. You check the last number dialled. It connects to nothing — a disconnected line. The call was made at 2:14am. The incident occurred four hours later.", source: `${caseName} — Phone Records`, ref: "pacer.gov", isReal: true, falseExplanation: null },
      { fact: "A logbook near the door records arrivals and departures in careful handwriting. The night in question shows one entry — a time, a signature, and then a second line scratched over so completely you cannot read what it said.", source: `${caseName} — Location Records`, ref: "nationalarchives.gov.uk", isReal: true, falseExplanation: null },
      { fact: "You find a typed statement — three pages, signed at the bottom. But the signature does not match the name typed at the top. Someone else signed this. The discrepancy appears in the official file without comment.", source: `${caseName} — Witness Statements`, ref: "fbi.gov/vault", isReal: false, falseExplanation: "The signature discrepancy was a clerical error — a statement signed on behalf of another witness by their attorney. It was noted and explained in a supplementary file that was rarely cross-referenced." },
      { fact: "A forensic summary pinned to the board claims physical evidence confirmed the suspect's presence. But the summary has no case number, no examining officer, and no chain of custody stamp. Someone printed this and added it to the file.", source: `${caseName} — Forensic Summary`, ref: "nij.ojp.gov", isReal: false, falseExplanation: "This document was a press summary, not an official forensic report. It was included in a journalist's research file that became mixed with official materials during a records transfer." },
      { fact: "You find a second photograph — taken at the same location, but months earlier. In the background, barely visible, stands a figure facing the camera. The same figure appears in photographs from three separate events that year. No one knows who they are.", source: `${caseName} — Photo Evidence`, ref: "archives.gov", isReal: false, falseExplanation: "The repeated background figure was identified as a local press photographer who routinely covered public events in the area. Their presence was coincidental and they were eliminated from the investigation early on." },
      { fact: "At the very back of the file, behind everything else, is a single index card. On it, one sentence in different handwriting from everything else in the room: 'We never found out why they came back.' No name. No date. No explanation of what it means.", source: `${caseName} — Cold Case Review`, ref: "fbi.gov/wanted/coldcases", isReal: false, falseExplanation: "This note referred to a separate, unrelated matter in a different case file that was misfiled here. The 'they' it references was never connected to this investigation." },
    ],
    theories: [
      { label: "Someone within the victim's immediate circle — with intimate knowledge of their routine and access to their private life — who was never seriously investigated.", isCorrect: true },
      { label: "An opportunistic outsider whose presence was coincidental — the inward-pointing evidence a result of deliberate misdirection.", isCorrect: false },
      { label: "An organised operation involving multiple parties — the removal of evidence from official records suggesting institutional involvement.", isCorrect: false },
    ],
    correctTheoryExplanation: "The most credible theory points to someone within the victim's immediate circle. The case remains officially open and no charges have ever been filed.",
  }
}
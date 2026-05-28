import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/useGameStore'
import { fetchGeminiFacts } from '../hooks/useGemini'
import { SPOTS, shuffleArray } from '../data/spots'
import LoadingScreen from '../components/LoadingScreen'

export default function KeywordScreen() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const startCase = useGameStore(s => s.startCase)

  async function handleSubmit() {
    const kw = value.trim().toLowerCase()
    if (!kw) return
    setLoading(true)
    setErr('')

    try {
      const facts = await fetchGeminiFacts(kw)
      const shuffled = shuffleArray([...SPOTS])
      const chosen = shuffled.slice(0, 7)
      const shuffledFacts = shuffleArray([...facts])
      const clueSpotIds = chosen.map(s => s.id)
      const clueMap = {}
      chosen.forEach((s, i) => { clueMap[s.id] = shuffledFacts[i] })
      startCase({ keyword: kw, clueSpotIds, clueMap })
    } catch (e) {
      setErr('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" keyword={value.trim()} />}
      </AnimatePresence>

      <div className="fixed inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,#1a1208,#080604)]">
        <motion.div
          className="flex flex-col items-center w-[min(480px,90vw)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full flex items-center justify-center gap-0 mb-7">
            <div className="flex-1 h-px bg-gold/10" />
            <span className="font-mono text-[8px] tracking-[0.4em] text-muted uppercase px-4">
              Open Investigation — Case File 047
            </span>
            <div className="flex-1 h-px bg-gold/10" />
          </div>

          <p className="font-crimson italic text-paper text-center leading-[1.4] mb-9"
             style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}>
            "What's the case<br />we're solving today?"
          </p>

          <input
            className="w-full bg-transparent border-b border-gold/35 text-paper font-elite text-center outline-none caret-gold pb-2.5 mb-2 transition-colors duration-300 placeholder:text-gold/20 focus:border-gold"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', letterSpacing: '0.06em' }}
            placeholder="e.g. lemons"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            maxLength={28}
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />

          <p className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase mb-8">
            Type any word. The room holds its secrets.
          </p>

          {err && <p className="font-mono text-[9px] text-crimson mb-4 tracking-wider">{err}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading || !value.trim()}
            className="bg-gold border border-gold text-ink font-mono text-[10px] tracking-[0.2em] uppercase px-10 py-4 transition-opacity duration-300 hover:opacity-82 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-ink/50 border-t-ink rounded-full animate-spin" />
                Opening case...
              </span>
            ) : 'Open the case →'}
          </button>

          <p className="font-mono text-[8px] tracking-[0.15em] text-muted/50 uppercase mt-5">
            Try: lemons · coffee · honey · sleep · ocean · fire · music · space
          </p>
        </motion.div>
      </div>
    </>
  )
}
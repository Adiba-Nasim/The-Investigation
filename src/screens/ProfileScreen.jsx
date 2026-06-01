import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import useGameStore from '../store/useGameStore'
import html2canvas from 'html2canvas'

const ROOM_META = {
  1: { label: 'Room I', labelSub: 'Cold Cases', stampColor: '#293929', tintBg: 'rgba(20,50,20,0.08)', tintBorder: 'rgba(10, 10, 10, 0.5)', accent: '#6a9e6a' },
  2: { label: 'Room II', labelSub: 'Homicides', stampColor: '#5a4619', tintBg: 'rgba(50,38,10,0.08)', tintBorder: 'rgba(8, 10, 8, 0.88)', accent: '#c9a96e' },
  3: { label: 'Room III', labelSub: 'Serial Cases', stampColor: '#3d0b0b', tintBg: 'rgba(50,12,12,0.08)', tintBorder: 'rgba(8, 10, 8, 0.88)', accent: '#b06060' },
}

function CaseCard({ entry, onClick }) {
  const meta = ROOM_META[entry.room] || ROOM_META[2]
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left p-4 relative group"
      style={{ background: '#d3ba89', border: `2px solid ${meta.tintBorder}` }}
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: meta.accent }} />
      <div className="absolute top-0 bottom-0 left-[36px] w-px bg-red-800/10 pointer-events-none" />
      <div className="flex items-start justify-between mb-2">
        <span className="font-mono text-[7px] tracking-[0.3em] uppercase font-bold" style={{ color: meta.stampColor }}>{meta.label}</span>
        <span className="font-mono text-[7px] tracking-[0.2em] text-stone-600 uppercase">{meta.labelSub}</span>
      </div>
      <h3 className="font-crimson text-stone-900 font-bold text-base leading-tight mb-3">{entry.caseName}</h3>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] tracking-[0.15em] uppercase font-semibold"
          style={{ color: entry.theoryCorrect ? 'rgba(45,90,30,0.9)' : 'rgba(160,30,30,0.85)' }}>
          {entry.theoryCorrect ? '✓ Confirmed' : '✗ Rejected'}
        </span>
        <span className="font-mono text-[7px] tracking-[0.1em] text-stone-600">{entry.dateSolved}</span>
      </div>
    </motion.button>
  )
}

function CaseModal({ entry, onClose }) {
  const meta       = ROOM_META[entry.room] || ROOM_META[2]
  const stampColor = entry.theoryCorrect ? meta.stampColor : '#8b1a1a'
  const realClues  = entry.clues?.filter(c => c.isReal !== false) ?? []
  const falseClues = entry.clues?.filter(c => c.isReal === false) ?? []

  const paperRef   = useRef(null)
  const [shareBlob, setShareBlob] = useState(null)
  const [copied, setCopied]       = useState(false)

  // Build share image after modal mounts
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!paperRef.current) return

      const motionEls = paperRef.current.querySelectorAll('[style*="opacity"]')
      const overrides = []
      motionEls.forEach(el => {
        overrides.push({ el, opacity: el.style.opacity, transform: el.style.transform })
        el.style.opacity = '1'
        el.style.transform = 'none'
      })

      try {
        const full = await html2canvas(paperRef.current, {
          backgroundColor: '#d3ba89',
          scale: 2,
          useCORS: true,
          logging: false,
          removeContainer: true,
        })

        overrides.forEach(({ el, opacity, transform }) => {
          el.style.opacity = opacity
          el.style.transform = transform
        })

        if (full.width === 0 || full.height === 0) return

        // Add footer
        const footerH = 160
        const final = document.createElement('canvas')
        final.width  = full.width
        final.height = full.height + footerH
        const ctx = final.getContext('2d')

        ctx.drawImage(full, 0, 0)

        ctx.fillStyle = '#151210'
        ctx.fillRect(0, full.height, full.width, footerH)

        const cx = final.width / 2
        const line1 = entry.theoryCorrect
          ? '🕵️  I cracked the case — The Investigation'
          : '🕵️  The false trails got me — The Investigation'
        const line2 = `Case: "${entry.caseName}"  ·  ${entry.theoryCorrect ? 'Theory: Confirmed ✓' : 'Theory: Rejected ✗'}`
        const line3 = 'theInvestigation.app'

        ctx.textAlign = 'center'
        ctx.fillStyle = '#c9a96e'
        ctx.font = `600 ${final.width * 0.031}px monospace`
        ctx.fillText(line1, cx, full.height + footerH * 0.30)

        ctx.fillStyle = '#9a8060'
        ctx.font = `400 ${final.width * 0.026}px monospace`
        ctx.fillText(line2, cx, full.height + footerH * 0.57)

        ctx.fillStyle = '#aa8752'
        ctx.font = `400 ${final.width * 0.023}px monospace`
        ctx.fillText(line3, cx, full.height + footerH * 0.80)

        final.toBlob(blob => { if (blob) setShareBlob(blob) }, 'image/png')
      } catch (e) {
        console.error(e)
        overrides.forEach(({ el, opacity, transform }) => {
          el.style.opacity = opacity
          el.style.transform = transform
        })
      }
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  async function handleShare() {
    if (!shareBlob) return
    const file = new File([shareBlob], 'case-file.png', { type: 'image/png' })
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'The Investigation' })
        setCopied(true); setTimeout(() => setCopied(false), 2500)
      } catch (e) { /* cancelled */ }
    } else {
      const url = URL.createObjectURL(shareBlob)
      const a = document.createElement('a')
      a.href = url; a.download = `case-file-${Date.now()}.png`; a.click()
      URL.revokeObjectURL(url)
      setCopied(true); setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4"
      style={{ background: 'rgba(224, 167, 110, 0.92)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={paperRef}
        className="w-full max-w-[580px] relative my-6"
        style={{
          background: '#d3ba89',
          boxShadow: '0 0 0 2px #1a1208, 0 40px 100px rgba(0,0,0,0.9)',
          overflowY: 'auto',
          maxHeight: '85vh',
          flexShrink: 0,
        }}
        initial={{ scale: 0.94, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-0 bottom-0 left-[72px] w-px bg-red-800/14 pointer-events-none" />

        <div className="px-10 py-10">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
            className="absolute top-6 right-7 font-elite text-sm tracking-[0.1em] border-2 px-2.5 py-1 rotate-[6deg] opacity-70"
            style={{ color: stampColor, borderColor: stampColor }}
          >
            {entry.theoryCorrect ? 'CONFIRMED' : 'REJECTED'}
          </motion.div>

          <p className="font-elite text-[8px] tracking-[0.3em] text-stone-600 uppercase mb-0.5">Case File</p>
          <p className="font-elite text-[7px] tracking-[0.2em] text-stone-500 uppercase mb-1">{meta.label} — {meta.labelSub}</p>
          <h2 className="font-crimson text-stone-900 text-2xl leading-tight mb-1">{entry.caseName}</h2>
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-500 uppercase mb-4">Filed — {entry.dateSolved}</p>

          <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />

          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-500 uppercase mb-4">
            {entry.theoryCorrect ? 'Theory Confirmed — Correct Verdict' : 'Theory Rejected — Evidence Misread'}
          </p>

          {realClues.length > 0 && (
            <>
              <p className="font-mono text-[7px] tracking-[0.2em] text-stone-500 uppercase mb-4">
                Evidence Collected — {realClues.length} clue{realClues.length !== 1 ? 's' : ''}
              </p>
              <ul className="flex flex-col gap-4 mb-6">
                {realClues.map((c, i) => (
                  <motion.li key={i} className="flex gap-3 font-crimson text-stone-800 leading-[1.6]" style={{ fontSize: '0.93rem' }}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.06 }}
                  >
                    <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                    <span>
                      {c.fact}
                      <span className="block font-mono text-[0.65rem] text-stone-500 mt-1">{c.source}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </>
          )}

          {falseClues.length > 0 && (
            <>
              <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />
              <p className="font-mono text-[7px] tracking-[0.2em] text-stone-500 uppercase mb-4">
                False Trail{falseClues.length > 1 ? 's' : ''} — Planted Evidence
              </p>
              <ul className="flex flex-col gap-4 mb-6">
                {falseClues.map((c, i) => (
                  <motion.li key={i} className="flex gap-3 font-crimson leading-[1.6]" style={{ fontSize: '0.93rem' }}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.06 }}
                  >
                    <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5 flex-shrink-0">✗</span>
                    <span>
                      <span className="text-stone-500" style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(180,40,40,0.7)', textDecorationThickness: '1.5px' }}>
                        {c.fact}
                      </span>
                      <span className="block font-mono text-[0.65rem] text-stone-500 mt-1">{c.source}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </>
          )}

          {!entry.clues?.length && (
            <p className="font-crimson italic text-stone-500 text-sm mb-6">No clues recorded for this case.</p>
          )}

          <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />

          {/* Footer row with share + close */}
          <div className="flex items-center justify-between">
            <span className="font-crimson italic text-sm" style={{ color: entry.theoryCorrect ? 'rgba(35,100,30,0.85)' : 'rgba(160,30,30,0.85)' }}>
              {entry.theoryCorrect ? '"Your instincts were right."' : '"The evidence misled you."'}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                disabled={!shareBlob}
                className="font-mono text-[8px] tracking-[0.2em] uppercase px-4 py-2.5 border border-stone-400 text-stone-500 hover:border-stone-600 hover:text-stone-700 transition-all flex items-center gap-1.5 disabled:opacity-40"
              >
                {!shareBlob
                  ? <><span className="inline-block w-2.5 h-2.5 border border-stone-400 border-t-stone-700 rounded-full animate-spin" /> Preparing…</>
                  : copied ? 'Shared ✓' : 'Share'
                }
              </button>
              <button
                onClick={onClose}
                className="font-mono text-[8px] tracking-[0.2em] uppercase px-5 py-2.5 border border-stone-500 text-stone-600 hover:border-stone-700 hover:text-stone-800 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProfileScreen() {
  const user           = useGameStore(s => s.user)
  const logout         = useGameStore(s => s.logout)
  const setScreen      = useGameStore(s => s.setScreen)
  const refreshProfile = useGameStore(s => s.refreshProfile)

  const [activeCase, setActiveCase] = useState(null)
  const [loading, setLoading]       = useState(true)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      await refreshProfile()
      if (!cancelled) setLoading(false)
    })()
    return () => { cancelled = true }
  }, [])
  if (!user) return null

  const solved       = user.solvedCases || []
  const correctCount = solved.filter(c => c.theoryCorrect).length

  return (
    <motion.div
      className="fixed inset-0 z-[800] flex flex-col"
      style={{ background: 'rgba(213, 157, 101, 0.75)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`absolute w-8 h-8 border-solid pointer-events-none ${
          pos === 'tl' ? 'top-4 left-4 border-t border-l border-stone-900/30' :
          pos === 'tr' ? 'top-4 right-4 border-t border-r border-stone-900/30' :
          pos === 'bl' ? 'bottom-4 left-4 border-b border-l border-stone-900/30' :
          'bottom-4 right-4 border-b border-r border-stone-900/30'
        }`} />
      ))}

      {/* Header paper */}
      <div
        className="flex-shrink-0 mx-4 mt-6"
        style={{ background: '#dbc8a2', boxShadow: '0 0 0 2px #1a1208' }}
      >
        <div className="relative px-10 py-8">
          <div className="absolute top-0 bottom-0 left-[72px] w-px bg-red-800/14 pointer-events-none" />

          <div className="absolute top-5 right-7 font-elite text-sm tracking-[0.1em] border-2 px-2.5 py-1 rotate-[-4deg] opacity-70"
            style={{ color: '#1a1208', borderColor: '#1a1208' }}
          >
            ON FILE
          </div>

          <p className="font-elite text-[8px] tracking-[0.3em] text-stone-600 uppercase mb-0.5">Investigator File</p>
          <h1 className="font-crimson text-stone-900 text-2xl leading-tight mb-1">{user.name}</h1>
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-600 uppercase mb-4">{user.email}</p>

          <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />

          <div className="flex items-end justify-between">
            <div className="flex gap-8">
              <div>
                <span className="block font-crimson text-stone-900 text-3xl leading-none">{loading ? '–' : solved.length}</span>
                <span className="font-mono text-[7px] tracking-[0.2em] text-stone-600 uppercase">Cases Solved</span>
              </div>
              <div>
                <span className="block font-crimson text-stone-900 text-3xl leading-none">{loading ? '–' : correctCount}</span>
                <span className="font-mono text-[7px] tracking-[0.2em] text-stone-600 uppercase">Theories Confirmed</span>
              </div>
            </div>
            <div className="flex gap-2 pb-0.5">
              <button onClick={() => setScreen('door')} className="font-mono text-[7px] tracking-[0.2em] uppercase px-4 py-2 border border-stone-500 text-stone-600 hover:border-stone-700 hover:text-stone-800 transition-all">
                Investigate
              </button>
              <button onClick={logout} className="font-mono text-[7px] tracking-[0.2em] uppercase px-4 py-2 border border-stone-400 text-stone-500 hover:border-stone-600 transition-all">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case archive */}
      <div className="flex-1 overflow-y-auto px-4 pt-3 pb-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="font-crimson italic text-stone-900/60 text-lg mb-2">Retrieving case files…</p>
            <p className="font-mono text-[8px] tracking-[0.2em] text-stone-900/40 uppercase">Querying archives.</p>
          </div>
        ) : solved.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="font-crimson italic text-stone-900/60 text-lg mb-2">No cases solved yet.</p>
            <p className="font-mono text-[8px] tracking-[0.2em] text-stone-900/40 uppercase">Enter a room and start investigating.</p>
          </div>
        ) : (
          <>
            <p className="font-mono text-[7px] tracking-[0.35em] text-stone-900/50 uppercase mb-3 px-1">Case Archive</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {solved.map((entry, i) => (
                <motion.div key={entry.caseName + i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                  <CaseCard entry={entry} onClick={() => setActiveCase(entry)} />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {activeCase && <CaseModal entry={activeCase} onClose={() => setActiveCase(null)} />}
      </AnimatePresence>
    </motion.div>
  )
}
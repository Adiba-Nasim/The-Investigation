import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/useGameStore'
import html2canvas from 'html2canvas'

export default function CaseFileScreen({ onClose }) {
  const { selectedCase, selectedRoom, foundClues, resetCase, isGuest, setScreen } = useGameStore()
  const solved = foundClues.length === 7
  const [copied, setCopied] = useState(false)
  const [capturing, setCapturing] = useState(false)
  const paperRef = useRef(null)

  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const ROOM_LABELS = { 1: 'Room I — Cold Cases', 2: 'Room II — Homicides', 3: 'Room III — Serial Cases' }
  const STAMP_COLORS = { 1: '#293929', 2: '#5a4619', 3: '#3d0b0bb4' }
  const stampColor = STAMP_COLORS[selectedRoom] || '#a7966b'
  const roomLabel = ROOM_LABELS[selectedRoom] || 'Room II'

  const shareText = solved
    ? `🕵️ I just cracked a cold case on The Investigation.\n\nCase: "${selectedCase}"\nClues found: 7/7 ✓\n\n${foundClues[0]?.fact}\n\nThink you can solve it? theInvestigation.app`
    : `🕵️ I'm investigating "${selectedCase}" on The Investigation — ${foundClues.length}/7 clues found.\n\ntheInvestigation.app`

  async function handleShareImage() {
    if (!paperRef.current) return
    setCapturing(true)
    try {
      const canvas = await html2canvas(paperRef.current, { backgroundColor: '#e8d9bc', scale: 2, useCORS: true, logging: false })
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'case-file.png', { type: 'image/png' })
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ title: 'Cold Case Files', text: shareText, files: [file] })
        } else {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url; a.download = `case-file-${Date.now()}.png`; a.click()
          URL.revokeObjectURL(url)
        }
        setCapturing(false)
      }, 'image/png')
    } catch (e) { console.error(e); setCapturing(false) }
  }

  async function handleShareText() {
    if (navigator.share) {
      try { await navigator.share({ title: 'The Investigation', text: shareText, url: window.location.href }); return } catch (e) {}
    }
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true); setTimeout(() => setCopied(false), 2500)
    } catch (e) {}
  }

  return (
    <motion.div
      className="fixed inset-0 z-[1100] flex items-start justify-center"
      style={{ background: 'rgba(8,6,4,0.93)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={paperRef}
        className="w-full max-w-[600px] relative my-8 mx-4"
        style={{ background: '#e8d9bc', boxShadow: '0 0 0 1px rgba(201,169,110,0.28), 0 40px 100px rgba(0,0,0,0.85)', flexShrink: 0 }}
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 bottom-0 left-[72px] w-px bg-red-800/14 pointer-events-none" />

        <div className="px-10 py-11">
          {/* Stamp */}
          <div
            className="absolute top-6 right-7 font-elite text-base tracking-[0.1em] border-2 px-2.5 py-1 rotate-[7deg] opacity-70"
            style={{ color: solved ? stampColor : '#888', borderColor: solved ? stampColor : '#888' }}
          >
            {solved ? 'CASE CLOSED' : 'CASE OPEN'}
          </div>

          <p className="font-elite text-[8px] tracking-[0.3em] text-stone-500 uppercase mb-0.5">Cold Case Files</p>
          <p className="font-elite text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-1">{roomLabel}</p>
          <h2 className="font-crimson text-stone-800 leading-tight mb-1" style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}>
            {selectedCase}
          </h2>
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">
            Filed — {today}
          </p>
          <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">
            Evidence Collected — {foundClues.length} / 7
          </p>

          {foundClues.length === 0 ? (
            <p className="font-crimson italic text-stone-400 text-sm mb-6">No evidence logged yet.</p>
          ) : (
            <ul className="flex flex-col gap-4 mb-6">
              {foundClues.map((c, i) => (
                <motion.li
                  key={c.spotId}
                  className="flex gap-3 items-start font-crimson text-stone-800 leading-[1.6]"
                  style={{ fontSize: '0.93rem' }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5">{String(i+1).padStart(2,'0')}.</span>
                  <span>
                    {c.fact}
                    <span className="block font-mono text-[0.65rem] text-stone-400 mt-1">{c.source} — {c.ref}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Guest register nudge */}
          {isGuest && solved && (
            <div className="border border-stone-300 px-4 py-3 mb-5 bg-stone-50/50">
              <p className="font-crimson text-stone-600 text-sm mb-2">Register to save this case file to your archive.</p>
              <button
                onClick={() => setScreen('auth')}
                className="font-mono text-[7px] tracking-[0.2em] uppercase text-stone-500 border border-stone-400 px-3 py-1.5 hover:border-stone-600 transition-colors"
              >
                Register →
              </button>
            </div>
          )}

          <div className="border-t border-stone-300/50 pt-4">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <span className="font-elite text-[0.72rem] text-stone-400">{today}</span>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={handleShareImage}
                  disabled={capturing}
                  className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-400 text-stone-500 hover:bg-stone-700 hover:text-stone-100 hover:border-stone-700 transition-all flex items-center gap-1.5 disabled:opacity-50"
                >
                  {capturing ? <span className="inline-block w-3 h-3 border border-stone-400 border-t-stone-700 rounded-full animate-spin" /> : null}
                  {capturing ? 'Capturing…' : 'Save image'}
                </button>
                <button
                  onClick={handleShareText}
                  className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-300 text-stone-400 hover:border-stone-500 hover:text-stone-600 transition-all"
                >
                  {copied ? 'Copied ✓' : 'Share'}
                </button>
                <button onClick={onClose} className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-300 text-stone-400 hover:border-stone-500 transition-all">Back</button>
                <button onClick={resetCase} className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 bg-stone-800 text-stone-100 hover:opacity-80 transition-opacity">New case →</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
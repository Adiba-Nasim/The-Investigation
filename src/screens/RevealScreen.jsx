import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import useGameStore from '../store/useGameStore'
import html2canvas from 'html2canvas'

export default function RevealScreen({ onClose }) {
  const {
    selectedCase, selectedRoom, foundClues,
    chosenTheory, correctTheoryExplanation,
    saveToProfile, user, isGuest, setScreen, resetCase,
  } = useGameStore()

  const isCorrect = chosenTheory?.isCorrect === true
  const realClues = foundClues.filter(c => c.isReal !== false)
  const falseClues = foundClues.filter(c => c.isReal === false)

  const [copied, setCopied] = useState(false)
  const [shareBlob, setShareBlob] = useState(null)
  const paperRef = useRef(null)
  const cropRef = useRef(null)

  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const ROOM_LABELS = { 1: 'Room I — Cold Cases', 2: 'Room II — Homicides', 3: 'Room III — Serial Cases' }
  const STAMP_COLORS = { 1: '#293929', 2: '#5a4619', 3: '#3d0b0b' }
  const stampColor = isCorrect ? (STAMP_COLORS[selectedRoom] || '#293929') : '#8b1a1a'
  const roomLabel = ROOM_LABELS[selectedRoom] || 'Room I'

  useEffect(() => { if (user) saveToProfile() }, [])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!paperRef.current || !cropRef.current) return
      const rect = paperRef.current.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const motionEls = paperRef.current.querySelectorAll('[style*="opacity"]')
      const overrides = []
      motionEls.forEach(el => {
        overrides.push({ el, opacity: el.style.opacity, transform: el.style.transform })
        el.style.opacity = '1'
        el.style.transform = 'none'
      })

      try {
        const full = await html2canvas(paperRef.current, {
          backgroundColor: '#e8d9bc',
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

        const paperTop = paperRef.current.getBoundingClientRect().top
        const cropBottom = cropRef.current.getBoundingClientRect().top
        const cropY = Math.round((cropBottom - paperTop) * 2)

        const footerH = 160
        const final = document.createElement('canvas')
        final.width = full.width
        final.height = cropY + footerH
        const ctx = final.getContext('2d')

        ctx.drawImage(full, 0, 0, full.width, cropY, 0, 0, full.width, cropY)

        ctx.fillStyle = '#151210'
        ctx.fillRect(0, cropY, full.width, footerH)

        const cx = final.width / 2
        const line1 = isCorrect
          ? '🕵️  I cracked the case — The Investigation'
          : '🕵️  The false trails got me — The Investigation'
        const line2 = `Case: "${selectedCase}"  ·  ${isCorrect ? 'Theory: Confirmed ' : 'Theory: Rejected ✗'}`
        const line3 = 'theInvestigation.app'

        ctx.textAlign = 'center'
        ctx.fillStyle = '#c9a96e'
        ctx.font = `600 ${final.width * 0.031}px monospace`
        ctx.fillText(line1, cx, cropY + footerH * 0.30)

        ctx.fillStyle = '#9a8060'
        ctx.font = `400 ${final.width * 0.026}px monospace`
        ctx.fillText(line2, cx, cropY + footerH * 0.57)

        ctx.fillStyle = '#5a4a32'
        ctx.font = `400 ${final.width * 0.023}px monospace`
        ctx.fillText(line3, cx, cropY + footerH * 0.80)

        final.toBlob((blob) => { if (blob) setShareBlob(blob) }, 'image/png')
      } catch (e) {
        console.error(e)
        overrides.forEach(({ el, opacity, transform }) => {
          el.style.opacity = opacity
          el.style.transform = transform
        })
      }
    }, 2000)
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
      a.href = url; a.download = `case-reveal-${Date.now()}.png`; a.click()
      URL.revokeObjectURL(url)
      setCopied(true); setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[900] flex items-start justify-center"
      style={{ background: 'rgba(8,6,4,0.93)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
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

          {/* Verdict stamp */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.35 }}
            className="absolute top-6 right-7 font-elite text-base tracking-[0.1em] border-2 px-2.5 py-1 rotate-[7deg] opacity-70"
            style={{ color: stampColor, borderColor: stampColor }}
          >
            {isCorrect ? 'CONFIRMED' : 'REJECTED'}
          </motion.div>

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
            {isCorrect ? 'Theory Confirmed — Correct Verdict' : 'Theory Rejected — Evidence Misread'}
          </p>

          <p className="font-crimson italic text-stone-600 leading-[1.75] mb-2" style={{ fontSize: '0.95rem' }}>
            {correctTheoryExplanation}
          </p>
          <p className="font-crimson italic mb-5" style={{
            fontSize: '0.92rem',
            color: isCorrect ? 'rgba(35,100,30,0.75)' : 'rgba(160,30,30,0.75)',
          }}>
            {isCorrect ? '"Your instincts were right."' : '"The evidence misled you."'}
          </p>

          <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />

          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">
            Evidence Collected — {foundClues.length} / 7 &nbsp;·&nbsp; {realClues.length} Real &nbsp;·&nbsp; {falseClues.length} False
          </p>

          <ul className="flex flex-col gap-4 mb-6">
            {realClues.map((c, i) => (
              <motion.li
                key={c.spotId}
                className="flex gap-3 items-start font-crimson text-stone-800 leading-[1.6]"
                style={{ fontSize: '0.93rem' }}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.07 }}
              >
                <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span>
                  {c.fact}
                  <span className="block font-mono text-[0.65rem] text-stone-400 mt-1">{c.source} — {c.ref}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Crop point — share image footer starts here */}
          <div ref={cropRef} />

          {falseClues.length > 0 && (
            <>
              <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />
              <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">
                False Trail{falseClues.length > 1 ? 's' : ''} — Planted Evidence
              </p>
              <ul className="flex flex-col gap-4 mb-6">
                {falseClues.map((c, i) => (
                  <motion.li
                    key={c.spotId}
                    className="flex gap-3 items-start font-crimson leading-[1.6]"
                    style={{ fontSize: '0.93rem' }}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.07 }}
                  >
                    <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5">✗</span>
                    <span>
                      <span
                        className="text-stone-400"
                        style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(180,40,40,0.7)', textDecorationThickness: '1.5px' }}
                      >
                        {c.fact}
                      </span>
                      {c.falseExplanation && (
                        <span className="block font-mono text-[0.65rem] text-stone-400 mt-1">
                          Why it misled you: {c.falseExplanation}
                        </span>
                      )}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </>
          )}

          {/* Guest prompt */}
          {isGuest && (
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

          {/* Saved confirmation — case is auto-saved on mount */}
          {user && (
            <p className="font-mono text-[7px] tracking-[0.2em] uppercase text-center mb-4" style={{ color: 'rgba(45,90,30,0.65)' }}>
              ✓ Case file saved to your archive
            </p>
          )}

        </div>

        {/* Footer — never captured in share image */}
        <div className="px-10 pb-8">
          <div className="border-t border-stone-300/50 pt-4">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <span className="font-elite text-[0.72rem] text-stone-400">{today}</span>
              <div className="flex gap-2 flex-wrap">

                <button
                  onClick={handleShare}
                  disabled={!shareBlob}
                  className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-300 text-stone-400 hover:border-stone-500 hover:text-stone-600 transition-all flex items-center gap-1.5 disabled:opacity-40"
                >
                  {!shareBlob
                    ? <><span className="inline-block w-3 h-3 border border-stone-400 border-t-stone-700 rounded-full animate-spin" />&nbsp;Preparing…</>
                    : copied ? 'Shared ' : 'Share'
                  }
                </button>

                {/* Archive button — case is already saved, just navigate to profile */}
                {user && (
                  <button
                    onClick={() => setScreen('profile')}
                    className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-300 text-stone-400 hover:border-stone-500 transition-all"
                  >
                    View in Archive →
                  </button>
                )}

                {onClose && (
                  <button
                    onClick={onClose}
                    className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 border border-stone-300 text-stone-400 hover:border-stone-500 transition-all"
                  >
                    Back
                  </button>
                )}

                <button
                  onClick={resetCase}
                  className="font-mono text-[7px] tracking-[0.15em] uppercase px-4 py-2.5 bg-stone-800 text-stone-100 hover:opacity-80 transition-opacity"
                >
                  New case →
                </button>

              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useGameStore from '../store/useGameStore'

export default function TheoryScreen({ onClose }) {
  const theories = useGameStore(s => s.theories)
  const chooseTheory = useGameStore(s => s.chooseTheory)
  const [selected, setSelected] = useState(null)

  function handleSelect(theory, i) {
    if (selected !== null) return
    setSelected(i)
    setTimeout(() => chooseTheory(theory), 900)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[800] flex items-start justify-center"
      style={{ background: 'rgba(8,6,4,0.93)', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <motion.div
        className="w-full max-w-[600px] relative ruled-paper my-8 mx-4"
        style={{
          background: '#e8d9bc',
          boxShadow: '0 0 0 1px rgba(201,169,110,0.28), 0 40px 100px rgba(0,0,0,0.85)',
          flexShrink: 0,
        }}
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Margin line */}
        <div className="absolute top-0 bottom-0 left-[72px] w-px bg-crimson/14 pointer-events-none" />

        <div className="px-10 py-11">

          {/* Stamp */}
          <div className="absolute top-6 right-7 font-elite text-base tracking-[0.08em] border-2 px-2.5 py-1 rotate-[7deg] opacity-65 text-crimson border-crimson">
            Unresolved
          </div>

          {/* Header */}
          <p className="font-elite text-[9px] tracking-[0.3em] text-muted uppercase mb-1">
            Cold Case Files — Evidence Review
          </p>
          <h2 className="font-crimson text-ink capitalize mb-1 leading-none"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)' }}>
            Name Your Theory
          </h2>
          <p className="font-mono text-[8px] tracking-[0.2em] text-muted uppercase mb-4">
            Evidence Collected — 7 / 7 Findings
          </p>

          <div className="h-px bg-gradient-to-r from-ink to-transparent opacity-15 mb-4" />

          {/* Pills */}
          <p className="font-mono text-[8px] tracking-[0.2em] text-muted uppercase mb-4">
            5 May Be Real &nbsp;·&nbsp; 2 May Be False
          </p>

          {/* Instruction */}
          <p className="font-crimson italic text-ink/80 leading-[1.7] mb-6" style={{ fontSize: '0.97rem' }}>
            You have reviewed all available evidence. Study the leads below with care —
            not every piece of evidence is what it seems. Select the theory that best
            accounts for what you have seen.
          </p>

          {/* Theory cards */}
          <ul className="flex flex-col gap-4 mb-6">
            {theories.map((theory, i) => {
              const isSelected = selected === i
              const isFaded = selected !== null && selected !== i

              return (
                <motion.li
                  key={i}
                  className="flex gap-3 items-start font-crimson text-ink leading-[1.6] cursor-pointer"
                  style={{ fontSize: '0.94rem', opacity: isFaded ? 0.3 : 1 }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: isFaded ? 0.3 : 1, x: isSelected ? 4 : 0 }}
                  transition={{ delay: isFaded || isSelected ? 0 : 0.08 * i, duration: 0.35 }}
                  onClick={() => handleSelect(theory, i)}
                >
                  {/* Letter */}
                  <span className="font-elite text-crimson text-[0.85rem] min-w-[22px] pt-0.5 flex-shrink-0">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="flex-1">
                    <span className="block font-mono text-[0.68rem] text-muted mb-1 uppercase tracking-[0.15em]">
                      Theory {String(i + 1).padStart(3, '0')}
                    </span>
                    {theory.label}
                    {/* Selected stamp */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-block ml-3 font-elite text-[10px] tracking-[0.18em] uppercase align-middle"
                          style={{ color: 'rgba(35,90,25,0.7)', border: '2px solid rgba(35,90,25,0.5)', padding: '1px 7px', transform: 'rotate(-2deg)' }}
                        >
                          Selected
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </motion.li>
              )
            })}
          </ul>

          {/* Hand note */}
          <p className="font-crimson italic text-muted mb-5 leading-[1.55]"
            style={{ fontSize: '0.88rem', paddingLeft: '0.7rem', borderLeft: '2px solid rgba(100,75,25,0.2)' }}>
            Choose carefully. The false trails were placed with intent.
          </p>

          {/* Footer */}
          <div className="border-t border-ink/12 pt-4 flex justify-between items-center flex-wrap gap-3">
            <span className="font-elite text-[0.75rem] text-muted">File No. CCF-001</span>
            <div className="flex gap-2 flex-wrap">
              {onClose && (
                <button
                  onClick={onClose}
                  className="font-mono text-[8px] tracking-[0.15em] uppercase px-4 py-2.5 border border-ink/25 text-muted hover:border-ink hover:text-ink transition-all duration-200"
                >
                  Back
                </button>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ data, onClose, onLog }) {
  if (!data) return null

  const { label, isClue, alreadyFound, icon, fact, source, ref, fallback } = data

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] flex items-end justify-center"
        style={{ background: 'rgba(8,6,4,0.78)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="w-full max-w-lg bg-gradient-to-b from-[#141008] to-[#0d0b06] border border-gold/14 border-b-0 rounded-t-2xl overflow-y-auto"
          style={{ maxHeight: '80vh' }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          {/* Handle */}
          <div className="w-9 h-0.5 rounded-full bg-gold/16 mx-auto mt-3" />

          <div className="px-7 pb-9 pt-5">
            {/* Eyebrow */}
            <span className="block text-[8px] tracking-[0.3em] text-muted uppercase mb-1 font-mono">
              {isClue ? 'Evidence found' : 'Observation'}
            </span>

            {/* Object name */}
            <span className="block font-elite text-[1.1rem] text-paper mb-5">
              {label}
            </span>

            {/* Icon */}
            <span className="block mb-3">
              {isClue ? (
                /* Magnifying glass — clue found */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7"/>
                  <line x1="16.5" y1="16.5" x2="22" y2="22"/>
                </svg>
              ) : (
                /* Eye — observation / nothing here */
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="#7a6a52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </span>

            {/* Tag */}
            <span className={`
              inline-block px-2.5 py-0.5 text-[8px] tracking-[0.2em] uppercase font-mono mb-3.5 border
              ${isClue
                ? 'border-crimson/40 text-crimson'
                : 'border-muted/30 text-muted'
              }
            `}>
              {isClue ? 'Clue' : 'Nothing here'}
            </span>

            {/* Fact / flavour */}
            <p className="font-crimson text-[1.1rem] leading-[1.75] text-paper mb-4">
              {isClue ? fact : fallback}
            </p>

            {/* Source */}
            {isClue && (
              <div className="text-[9px] tracking-[0.06em] text-muted border-t border-gold/08 pt-3 font-mono">
                <strong className="text-gold block mb-0.5">{source}</strong>
                {ref}
              </div>
            )}

            {/* Button */}
            <button
              disabled={alreadyFound}
              onClick={isClue ? onLog : onClose}
              className={`
                w-full mt-5 font-mono text-[9px] tracking-[0.2em] uppercase py-3.5
                border transition-all duration-300
                ${alreadyFound
                  ? 'border-gold/20 text-muted/40 cursor-not-allowed'
                  : isClue
                    ? 'border-gold text-gold hover:bg-gold hover:text-ink cursor-pointer'
                    : 'border-gold/22 text-muted hover:bg-gold hover:text-ink cursor-pointer'
                }
              `}
            >
              {alreadyFound ? 'Already logged ✓' : isClue ? 'Log as evidence →' : 'Move on →'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import useGameStore from '../store/useGameStore'

const ROOM_TINTS = {
  1: { bg: 'rgba(20,50,20,0.55)', border: 'rgba(80,140,80,0.3)', accent: '#6a9e6a', label: 'Room I', labelSub: 'Cold Cases' },
  2: { bg: 'rgba(50,38,10,0.55)', border: 'rgba(180,140,40,0.3)', accent: '#c9a96e', label: 'Room II', labelSub: 'Homicides' },
  3: { bg: 'rgba(50,12,12,0.55)', border: 'rgba(160,50,50,0.3)', accent: '#a84040', label: 'Room III', labelSub: 'Serial Cases' },
}

function CaseCard({ entry, onClick }) {
  const tint = ROOM_TINTS[entry.room] || ROOM_TINTS[2]
  return (
    <motion.button
      onClick={onClick}
      className="w-full text-left p-4 relative"
      style={{ background: tint.bg, border: `1px solid ${tint.border}` }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="font-mono text-[7px] tracking-[0.3em] uppercase" style={{ color: tint.accent }}>
          {tint.label}
        </span>
        <span className="font-mono text-[7px] tracking-[0.2em] text-muted/50 uppercase">{tint.labelSub}</span>
      </div>
      <h3 className="font-crimson text-paper text-base leading-tight mb-3">{entry.caseName}</h3>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] tracking-[0.15em] text-muted/60 uppercase">Solved</span>
        <span className="font-mono text-[7px] tracking-[0.1em] text-muted/50">{entry.dateSolved}</span>
      </div>
    </motion.button>
  )
}

function CaseModal({ entry, onClose }) {
  const tint = ROOM_TINTS[entry.room] || ROOM_TINTS[2]
  return (
    <motion.div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,3,2,0.92)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="w-full max-w-[580px] relative my-6"
        style={{ background: '#e8d9bc', boxShadow: '0 40px 100px rgba(0,0,0,0.9)', overflowY: 'auto', maxHeight: '85vh' }}
        initial={{ scale: 0.94, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', damping: 24, stiffness: 260 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-0 bottom-0 left-[72px] w-px bg-red-800/14 pointer-events-none" />
        <div className="px-10 py-10">
          <div className="absolute top-5 right-6 font-elite text-sm tracking-widest border-2 border-green-800 text-green-800 px-2.5 py-1 rotate-[6deg] opacity-60">
            SOLVED
          </div>
          <p className="font-elite text-[8px] tracking-[0.3em] text-stone-500 uppercase mb-1">Case File</p>
          <h2 className="font-crimson text-stone-800 text-2xl leading-tight mb-1">{entry.caseName}</h2>
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">{tint.label} · {entry.dateSolved}</p>
          <div className="h-px bg-stone-400/30 mb-4" />
          <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4">
            Evidence Collected — {entry.clues?.length || 0} / 7
          </p>
          <ul className="flex flex-col gap-4 mb-6">
            {(entry.clues || []).map((c, i) => {
              const isFalse = c.isReal === false
              return (
                <li key={i} className="flex gap-3 font-crimson text-[0.93rem] leading-[1.6]">
                  <span className="font-elite text-red-700 text-[0.82rem] min-w-[22px] pt-0.5 flex-shrink-0">
                    {isFalse ? '✗' : String(i + 1).padStart(2, '0') + '.'}
                  </span>
                  <span>
                    <span
                      className={isFalse ? 'text-stone-400' : 'text-stone-800'}
                      style={isFalse ? {
                        textDecoration: 'line-through',
                        textDecorationColor: 'rgba(180,40,40,0.7)',
                        textDecorationThickness: '1.5px',
                      } : undefined}
                    >
                      {c.fact}
                    </span>
                    <span className="block font-mono text-[0.65rem] text-stone-400 mt-1">{c.source}</span>
                  </span>
                </li>
              )
            })}
          </ul>
          <button onClick={onClose} className="font-mono text-[8px] tracking-[0.2em] uppercase px-5 py-2.5 border border-stone-400 text-stone-500 hover:border-stone-600 hover:text-stone-700 transition-all">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProfileScreen() {
  const user = useGameStore(s => s.user)
  const logout = useGameStore(s => s.logout)
  const setScreen = useGameStore(s => s.setScreen)
  const [activeCase, setActiveCase] = useState(null)

  if (!user) return null

  const solved = user.solvedCases || []

  return (
    <motion.div
      className="fixed inset-0 z-[800] flex flex-col"
      style={{ background: 'radial-gradient(ellipse 80% 90% at 50% 100%, #1a1208, #080604 60%, #040302)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {/* Corner brackets */}
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`absolute w-8 h-8 border-gold/12 border-solid ${
          pos === 'tl' ? 'top-4 left-4 border-t border-l' :
          pos === 'tr' ? 'top-4 right-4 border-t border-r' :
          pos === 'bl' ? 'bottom-4 left-4 border-b border-l' :
          'bottom-4 right-4 border-b border-r'
        }`} />
      ))}

      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gold/10 flex-shrink-0">
        <div>
          <p className="font-mono text-[7px] tracking-[0.4em] text-muted uppercase mb-1">Investigator File</p>
          <h1 className="font-crimson text-paper text-2xl leading-tight">{user.name}</h1>
          <p className="font-mono text-[7px] tracking-[0.2em] text-muted/50 uppercase mt-0.5">{user.email}</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="text-right">
            <span className="block font-crimson text-gold text-3xl leading-none">{solved.length}</span>
            <span className="font-mono text-[7px] tracking-[0.2em] text-muted uppercase">Cases Solved</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setScreen('door')}
              className="font-mono text-[7px] tracking-[0.2em] text-gold uppercase border border-gold/30 px-3 py-1.5 hover:border-gold transition-colors"
            >
              Investigate
            </button>
            <button
              onClick={logout}
              className="font-mono text-[7px] tracking-[0.2em] text-muted/50 uppercase hover:text-muted transition-colors px-2 py-1.5"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Case stash */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {solved.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="font-crimson italic text-muted text-lg mb-2">No cases solved yet.</p>
            <p className="font-mono text-[8px] tracking-[0.2em] text-muted/40 uppercase">Enter a room and start investigating.</p>
          </div>
        ) : (
          <>
            <p className="font-mono text-[7px] tracking-[0.35em] text-muted uppercase mb-5">Case Archive</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {solved.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
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
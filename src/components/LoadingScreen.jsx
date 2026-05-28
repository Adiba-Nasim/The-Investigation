import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MESSAGES = [
  'Accessing archives…',
  'Reviewing classified records…',
  'Cross-referencing evidence…',
  'Tracing the timeline…',
  'Following cold leads…',
  'Dusting for prints…',
  'Connecting the dots…',
]

function CyclingMessage() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % MESSAGES.length), 1400)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.span
      key={idx}
      className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {MESSAGES[idx]}
    </motion.span>
  )
}

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Evidence table background */}
      <img
        src="/evidence-table.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.18) saturate(0.5) sepia(0.4)' }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(8,6,4,0.45) 0%, rgba(4,3,2,0.92) 100%)' }}
      />

      {/* Corner brackets */}
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`absolute w-8 h-8 border-gold/20 border-solid ${
          pos === 'tl' ? 'top-5 left-5 border-t border-l' :
          pos === 'tr' ? 'top-5 right-5 border-t border-r' :
          pos === 'bl' ? 'bottom-5 left-5 border-b border-l' :
          'bottom-5 right-5 border-b border-r'
        }`} />
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Spinning magnifier */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
            stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
        </motion.div>

        {/* Static label — no case name */}
        <div className="text-center">
          <span className="block font-mono text-[7px] tracking-[0.5em] text-muted uppercase mb-2">
            Cold Case Files
          </span>
          <span className="block font-crimson text-paper/70 text-lg italic">
            Opening the file…
          </span>
        </div>

        <CyclingMessage />

        {/* Dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
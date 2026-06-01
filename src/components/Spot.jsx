import { motion } from 'framer-motion'

export default function Spot({ spot, found, onClick, delay = 0 }) {
  const CW = 1200
  const CH = 675

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{
        left: `${(spot.x / 100) * CW}px`,
        top:  `${(spot.y / 100) * CH}px`,
        zIndex: 10,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.04, duration: 0.4, ease: 'backOut' }}
      onClick={(e) => onClick(e)}
    >


      {/* Main ring */}
      <div
        className={`
          relative flex items-center justify-center rounded-full
          border transition-all duration-200
          group-hover:scale-125
          ${found
            ? 'border-crimson/50 w-9 h-9'
            : 'border-gold/45 w-9 h-9 group-hover:border-gold/90'
          }
        `}
      >
        {/* Centre dot */}
        <div
          className={`
            w-2.5 h-2.5 rounded-full transition-transform duration-200
            group-hover:scale-125
            ${found
              ? 'bg-crimson shadow-[0_0_8px_rgba(139,32,32,0.7)]'
              : 'bg-gold shadow-[0_0_10px_rgba(201,169,110,0.85)]'
            }
          `}
        />

        {/* Found tick */}
        {found && (
          <span className="absolute text-crimson text-[8px] font-bold -top-0.5 -right-0.5"></span>
        )}
      </div>

      {/* Hover label */}
      <div className="
        absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 translate-y-1
        whitespace-nowrap
        bg-dark/93 border border-gold/20
        text-gold font-mono text-[8px] tracking-[0.2em] uppercase
        px-2.5 py-1.5
        opacity-0 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200
        pointer-events-none
        after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
        after:border-4 after:border-transparent after:border-t-gold/20
      ">
        {spot.label}
      </div>
    </motion.div>
  )
}
export default function BottomBar({ found, total = 7 }) {
  const allFound = found === total

  return (
    <div className="
      h-[52px] flex-shrink-0 flex items-center justify-center gap-1.5 px-5
      bg-gradient-to-t from-dark/98 to-dark/70
      border-t border-gold/08 relative
    ">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            w-[7px] h-[7px] rounded-full border transition-all duration-500
            ${i < found
              ? 'bg-gold border-gold shadow-[0_0_6px_rgba(201,169,110,0.6)]'
              : 'border-gold/20'
            }
          `}
          style={{ transitionDelay: `${i * 60}ms` }}
        />
      ))}

      <span className="absolute right-5 font-mono text-[8px] tracking-[0.15em] text-muted uppercase">
        {allFound ? 'All clues found' : 'Pan to explore'}
      </span>
    </div>
  )
}

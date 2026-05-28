export default function TopBar({ keyword, clueCount, onOpenFile, allFound }) {
  return (
    <div className="
      h-[52px] flex-shrink-0 flex items-center justify-between px-5
      bg-gradient-to-b from-dark/98 to-dark/70
      border-b border-gold/10 relative z-50
    ">
      <div className="flex flex-col gap-0.5">
        <span className="text-[8px] tracking-[0.3em] text-muted uppercase font-mono">
          Case No. 047
        </span>
        <span className="font-elite text-[0.95rem] text-paper capitalize">
          {keyword}
        </span>
      </div>

      <div className="flex items-center gap-3.5">
        <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-muted uppercase">
          Clues
          <strong className="text-gold font-elite text-base">{clueCount}</strong>
          /7
        </div>

        <button
          onClick={onOpenFile}
          className={`
            font-mono text-[8px] tracking-[0.18em] uppercase px-3.5 py-1.5
            border transition-all duration-300
            ${allFound
              ? 'border-crimson text-crimson hover:bg-crimson hover:text-paper'
              : 'border-gold/22 text-muted hover:border-gold/50 hover:text-gold'
            }
          `}
        >
          {allFound ? '★ Solve Case' : 'Case File'}
        </button>
      </div>
    </div>
  )
}

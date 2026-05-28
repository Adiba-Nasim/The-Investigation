import { motion } from 'framer-motion'
import useGameStore from '../store/useGameStore'

export default function LandingScreen() {
  const setScreen = useGameStore(s => s.setScreen)
  const setAuthMode = useGameStore(s => s.setAuthMode)
  const playAsGuest = useGameStore(s => s.playAsGuest)

  function goRegister() {
    setAuthMode('register')
    setScreen('auth')
  }
  function goLogin() {
    setAuthMode('login')
    setScreen('auth')
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ background: '#050202' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hallway background */}
      <img
        src="/hallway.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.38) saturate(0.7)', pointerEvents: 'none' }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(4,2,2,0.75) 100%)' }}
      />

      {/* Corner brackets */}
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`absolute w-10 h-10 border-gold/20 border-solid ${
          pos === 'tl' ? 'top-5 left-5 border-t border-l' :
          pos === 'tr' ? 'top-5 right-5 border-t border-r' :
          pos === 'bl' ? 'bottom-5 left-5 border-b border-l' :
          'bottom-5 right-5 border-b border-r'
        }`} />
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center w-[min(400px,88vw)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.3 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 w-full">
          <div className="flex-1 h-px bg-gold/15" />
          <span className="font-mono text-[7px] tracking-[0.45em] text-muted uppercase">Cold Case Files</span>
          <div className="flex-1 h-px bg-gold/15" />
        </div>

        {/* Title */}
        <h1
          className="font-crimson text-paper text-center leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 7vw, 3rem)', textShadow: '0 0 40px rgba(201,169,110,0.2)' }}
        >
          The Investigation
        </h1>
        <p className="font-mono text-[8px] tracking-[0.3em] text-muted uppercase mb-10 text-center">
          Some cases were never meant to be solved.
        </p>

        {/* Dialogue box */}
        <div
          className="w-full relative px-7 py-6 mb-2"
          style={{
            background: 'rgba(8,6,4,0.88)',
            border: '1px solid rgba(201,169,110,0.18)',
          }}
        >
          <span className="block font-mono text-[7px] tracking-[0.35em] text-gold uppercase mb-3">◈ Before You Enter</span>
          <p className="font-crimson text-paper/80 text-sm leading-[1.75] mb-6">
            Register to track your solved cases and build your archive. Or step inside as a guest — the rooms don't ask for names.
          </p>

          <div className="flex flex-col gap-2.5">
            <button
              onClick={goRegister}
              className="w-full font-mono text-[9px] tracking-[0.25em] uppercase py-3.5 bg-gold text-ink transition-opacity hover:opacity-85"
            >
              Create Account →
            </button>
            <button
              onClick={goLogin}
              className="w-full font-mono text-[9px] tracking-[0.25em] uppercase py-3 border border-gold/35 text-gold transition-colors hover:border-gold"
            >
              Sign In
            </button>
            <button
              onClick={playAsGuest}
              className="w-full font-mono text-[8px] tracking-[0.2em] uppercase py-2.5 text-muted/60 transition-colors hover:text-muted"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
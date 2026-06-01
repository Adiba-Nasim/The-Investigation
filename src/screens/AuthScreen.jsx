import { useState } from 'react'
import { motion } from 'framer-motion'
import useGameStore from '../store/useGameStore'

export default function AuthScreen() {
  const authMode = useGameStore(s => s.authMode)
  const setAuthMode = useGameStore(s => s.setAuthMode)
  const setScreen = useGameStore(s => s.setScreen)
  const register = useGameStore(s => s.register)
  const login = useGameStore(s => s.login)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  const isRegister = authMode === 'register'

  async function handleSubmit() {
    setErr('')
    if (isRegister && !name.trim()) return setErr('Please enter your name.')
    if (!email.trim()) return setErr('Please enter your email.')
    if (!password.trim()) return setErr('Please enter a password.')
    setLoading(true)

    const result = isRegister
      ? await register({ name: name.trim(), email: email.trim().toLowerCase(), password })
      : await login({ email: email.trim().toLowerCase(), password })

    if (result?.error) {
      setErr(result.error)
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ background: '#050202' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/hallway.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.32) saturate(0.6)', pointerEvents: 'none' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(4,2,2,0.8) 100%)' }}
      />

      {['tl', 'tr', 'bl', 'br'].map(pos => (
        <div key={pos} className={`absolute w-10 h-10 border-gold/20 border-solid ${pos === 'tl' ? 'top-5 left-5 border-t border-l' :
            pos === 'tr' ? 'top-5 right-5 border-t border-r' :
              pos === 'bl' ? 'bottom-5 left-5 border-b border-l' :
                'bottom-5 right-5 border-b border-r'
          }`} />
      ))}

      <motion.div
        className="relative z-10 w-[min(380px,88vw)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-7 w-full">
          <div className="flex-1 h-px bg-gold/15" />
          <span className="font-mono text-[7px] tracking-[0.4em] text-muted uppercase">
            {isRegister ? 'Open a File' : 'Resume Investigation'}
          </span>
          <div className="flex-1 h-px bg-gold/15" />
        </div>

        <div
          className="w-full px-7 py-7"
          style={{ background: 'rgba(8,6,4,0.9)', border: '1px solid rgba(201,169,110,0.18)' }}
        >
          <span className="block font-mono text-[7px] tracking-[0.35em] text-gold uppercase mb-5">
            ◈ {isRegister ? 'Register' : 'Sign In'}
          </span>

          <div className="flex flex-col gap-4 mb-5">
            {isRegister && (
              <div>
                <label className="block font-mono text-[7px] tracking-[0.25em] text-muted uppercase mb-1.5">Full Name</label>
                <input
                  className="w-full bg-transparent border-b border-gold/25 text-paper font-elite outline-none caret-gold pb-1.5 transition-colors focus:border-gold placeholder:text-muted/30"
                  style={{ fontSize: '0.95rem' }}
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
            )}
            <div>
              <label className="block font-mono text-[7px] tracking-[0.25em] text-muted uppercase mb-1.5">Email</label>
              <input
                className="w-full bg-transparent border-b border-gold/25 text-paper font-elite outline-none caret-gold pb-1.5 transition-colors focus:border-gold placeholder:text-muted/30"
                style={{ fontSize: '0.95rem' }}
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block font-mono text-[7px] tracking-[0.25em] text-muted uppercase mb-1.5">Password</label>
              <input
                className="w-full bg-transparent border-b border-gold/25 text-paper font-elite outline-none caret-gold pb-1.5 transition-colors focus:border-gold placeholder:text-muted/30"
                style={{ fontSize: '0.95rem' }}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>
          </div>

          {err && (
            <p className="font-mono text-[8px] text-crimson tracking-wider mb-4">{err}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full font-mono text-[9px] tracking-[0.25em] uppercase py-3.5 bg-gold text-ink transition-opacity hover:opacity-85 disabled:opacity-40 mb-4"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-3 h-3 border border-ink/50 border-t-ink rounded-full animate-spin" />
                {isRegister ? 'Creating file…' : 'Checking records…'}
              </span>
            ) : isRegister ? 'Open My File →' : 'Enter →'}
          </button>

          <button
            onClick={() => { setErr(''); setAuthMode(isRegister ? 'login' : 'register') }}
            className="w-full font-mono text-[7px] tracking-[0.2em] text-muted/70 uppercase transition-colors hover:text-muted"
          >
            {isRegister ? 'Already have a file? Sign in' : 'No file yet? Register'}
          </button>
        </div>

        <button
          onClick={() => setScreen('landing')}
          className="mt-5 w-full font-mono text-[11px] tracking-[0.2em] text-gold uppercase transition-colors hover:text-gold/80"
        >
          ← Back
        </button>
      </motion.div>
    </motion.div>
  )
}
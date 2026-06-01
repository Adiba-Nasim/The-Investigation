import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TypeWriter from '../components/TypeWriter'
import useGameStore from '../store/useGameStore'
import { fetchCaseClues, pickCase } from '../hooks/useGemini'
import { SPOTS_R1, SPOTS_R2, SPOTS_R3_MEMORIAL as SPOTS_R3 } from '../data/spots'
import LoadingScreen from '../components/LoadingScreen'

const INTRO = "You're standing in the corridor. The lights flicker at the far end. Three doors — each one a different kind of darkness. Behind one, a disappearance. Behind another, a murder. Behind the last, something worse. Choose carefully. Not every case has an answer."

const ROOMS = [
  {
    num: 1,
    label: 'Room I',
    sub: 'Cold Cases · Disappearances',
    desc: 'The quiet ones. The cases where someone simply vanished.',
    spots: 15,
    accent: '#6a9e6a',
    stampColor: '#293929',
    tintBg: 'rgba(20,50,20,0.08)',
    tintBorder: 'rgba(80,140,80,0.25)',
  },
  {
    num: 2,
    label: 'Room II',
    sub: 'Unsolved Homicides',
    desc: 'A body was found. The killer never was.',
    spots: 21,
    accent: '#c9a96e',
    stampColor: '#5a4619',
    tintBg: 'rgba(50,38,10,0.08)',
    tintBorder: 'rgba(180,140,40,0.25)',
  },
  {
    num: 3,
    label: 'Room III',
    sub: 'Serial Killings · Violent Cases',
    desc: 'Multiple victims. Multiple failures. Still open.',
    spots: 20,
    accent: '#b06060',
    stampColor: '#3d0b0b',
    tintBg: 'rgba(50,12,12,0.08)',
    tintBorder: 'rgba(160,50,50,0.25)',
  },
]

export default function DoorScreen() {
  const [phase, setPhase] = useState('intro')
  const [introDone, setIntroDone] = useState(false)
  const [loadingCase, setLoadingCase] = useState(null)

  const user = useGameStore(s => s.user)
  const isGuest = useGameStore(s => s.isGuest)
  const setScreen = useGameStore(s => s.setScreen)
  const selectRoom = useGameStore(s => s.selectRoom)
  const startCase = useGameStore(s => s.startCase)
  const logout = useGameStore(s => s.logout)

  async function handleRoomSelect(room) {
    selectRoom(room.num)
    const caseName = pickCase(room.num)
    setLoadingCase(caseName)
    setPhase('loading')

    try {
      const spotsPool = room.num === 1 ? SPOTS_R1 : room.num === 2 ? SPOTS_R2 : SPOTS_R3
      const { clueSpotIds, clueMap, theories, correctTheoryExplanation } = await fetchCaseClues(caseName, spotsPool, room.num)
      startCase({ caseName, clueSpotIds, clueMap, theories, correctTheoryExplanation })
    } catch (e) {
      console.error(e)
      setPhase('rooms')
    }
  }

  return (
    <>
      <AnimatePresence>
        {phase === 'loading' && <LoadingScreen key="loading" caseName={loadingCase} />}
      </AnimatePresence>

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
          style={{ filter: 'brightness(0.35) saturate(0.65)', pointerEvents: 'none' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 15%, rgba(4,2,2,0.78) 100%)' }}
        />

        {/* Corner brackets */}
        {['tl', 'tr', 'bl', 'br'].map(pos => (
          <div key={pos} className={`absolute w-10 h-10 border-gold/15 border-solid pointer-events-none ${pos === 'tl' ? 'top-5 left-5 border-t border-l' :
            pos === 'tr' ? 'top-5 right-5 border-t border-r' :
              pos === 'bl' ? 'bottom-5 left-5 border-b border-l' :
                'bottom-5 right-5 border-b border-r'
            }`} />
        ))}

        {/* Top bar */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="h-px w-12 bg-gold/15" />
          <span className="font-mono text-[7px] tracking-[0.4em] text-muted uppercase">Cold Case Files</span>
          <div className="h-px w-12 bg-gold/15" />
        </div>

        {/* Profile / logout */}
        {user && (
          <div className="absolute top-4 right-6 flex items-center gap-3 z-20">
            <button
              onClick={() => setScreen('profile')}
              className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              {user.name.split(' ')[0]}
            </button>
            <button onClick={logout} className="font-mono text-[10px] tracking-[0.2em] text-muted/40 uppercase hover:text-muted transition-colors">
              Out
            </button>
          </div>
        )}

        {/* Main content */}
        <motion.div
          className="relative z-10 w-[min(460px,90vw)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.25 }}
        >
          <AnimatePresence mode="wait">

            {/* ── PHASE: INTRO ── */}
            {phase === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="w-full px-7 py-7 relative"
                style={{ background: 'rgba(8,6,4,0.9)', border: '1px solid rgba(201,169,110,0.18)' }}
              >
                <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '9px solid rgba(201,169,110,0.18)' }} />
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{ borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '7px solid rgba(8,6,4,0.9)' }} />

                <span className="block font-mono text-[7px] tracking-[0.35em] text-gold uppercase mb-3">◈ Dispatch</span>
                <p className="font-crimson text-paper/85 text-[0.97rem] leading-[1.78] mb-6 min-h-[100px]">
                  <TypeWriter text={INTRO} speed={20} onDone={() => setIntroDone(true)} />
                </p>

                <motion.button
                  onClick={() => setPhase('rooms')}
                  className="border border-gold text-gold font-mono text-[8px] tracking-[0.25em] uppercase px-7 py-3 relative overflow-hidden group transition-colors hover:text-ink"
                  initial={{ opacity: 0, y: 8 }}
                  animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative">Choose a Room →</span>
                </motion.button>
              </motion.div>
            )}

            {/* ── PHASE: ROOMS — paper aesthetic ── */}
            {phase === 'rooms' && (
              <motion.div
                key="rooms"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="w-full relative"
                style={{
                  background: '#e8d9bc',
                  boxShadow: '0 0 0 1px rgba(201,169,110,0.28), 0 40px 100px rgba(0,0,0,0.85)',
                }}
              >
                {/* Margin rule */}
                <div className="absolute top-0 bottom-0 left-[52px] w-px bg-red-800/14 pointer-events-none" />

                <div className="px-8 py-8">

                  {/* Header */}
                  <p className="font-elite text-[8px] tracking-[0.3em] text-stone-500 uppercase mb-0.5">Cold Case Files</p>
                  <h2 className="font-crimson text-stone-800 text-xl leading-tight mb-1">The Corridor</h2>
                  <p className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase mb-4 italic font-crimson">
                    "Which room do you enter?"
                  </p>

                  <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-5" />

                  {/* Room cards */}
                  <div className="flex flex-col gap-2 mb-6">
                    {ROOMS.map((room, i) => (
                      <motion.button
                        key={room.num}
                        onClick={() => handleRoomSelect(room)}
                        className="w-full text-left px-4 py-4 relative group transition-all duration-200"
                        style={{
                          background: room.tintBg,
                          border: `1px solid ${room.tintBorder}`,
                        }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 + 0.1 }}
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        {/* Left accent bar */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ background: room.accent }}
                        />

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className="font-mono text-[7px] tracking-[0.3em] uppercase"
                                style={{ color: room.stampColor }}
                              >
                                {room.label}
                              </span>
                              <span className="font-mono text-[7px] text-stone-400/50">·</span>
                              <span className="font-mono text-[7px] tracking-[0.15em] text-stone-400 uppercase">{room.sub}</span>
                            </div>
                            <p className="font-crimson italic text-stone-500 text-sm leading-snug">{room.desc}</p>
                          </div>
                          <span
                            className="font-mono text-[10px] text-stone-300 group-hover:text-stone-600 transition-colors duration-200 ml-4 flex-shrink-0"
                          >→</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-stone-600 to-transparent opacity-15 mb-4" />

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setPhase('intro')}
                      className="font-mono text-[7px] tracking-[0.2em] text-stone-400 uppercase hover:text-stone-600 transition-colors"
                    >
                      ← Back
                    </button>
                    <span className="font-elite text-[0.7rem] text-stone-400">
                      {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>

        {/* Guest register nudge */}
        {isGuest && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <button
              onClick={() => setScreen('auth')}
              className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase hover:text-gold/80 transition-colors"
            >
              Register to save your case files
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}
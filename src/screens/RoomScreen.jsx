import { useRef, useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useGameStore from '../store/useGameStore'
import { SPOTS_R1, SPOTS_R2, SPOTS_R3_MEMORIAL as SPOTS_R3 } from '../data/spots'
import Spot from '../components/Spot'
import Modal from '../components/Modal'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'

const CW = 1200
const CH = 675

const ROOM_IMAGES = {
  1: '/office.jpg',
  2: '/fbi-office.jpg',
  3: '/memorial-study.webp',
}

const ROOM_SPOTS = {
  1: SPOTS_R1,
  2: SPOTS_R2,
  3: SPOTS_R3,
}

export default function RoomScreen() {
  const {
    selectedRoom, foundClues, clueSpotIds, clueMap,
    logClue, setScreen,
  } = useGameStore()

  const spots = ROOM_SPOTS[selectedRoom] || SPOTS_R1
  const roomImage = ROOM_IMAGES[selectedRoom] || '/office.webp'

  const wrapRef = useRef(null)
  const [transform, setTransform] = useState({ x: 0, y: 0, s: 1 })
  const txRef = useRef({ x: 0, y: 0, s: 1 })
  const isDragging = useRef(false)
  const didDrag = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })
  const touchAnchor = useRef({ x: 0, y: 0, px: 0, py: 0 })
  const pinchRef = useRef({ dist: null, scale: 1 })

  const [modal, setModal] = useState(null)
  const [isDraggingState, setIsDraggingState] = useState(false)
  const [allFoundBanner, setAllFoundBanner] = useState(false)

  const clamp = useCallback((x, y, s) => {
    const wrap = wrapRef.current
    if (!wrap) return { x, y }
    const ww = wrap.clientWidth
    const wh = wrap.clientHeight
    const nx = CW * s < ww ? (ww - CW * s) / 2 : Math.min(0, Math.max(ww - CW * s, x))
    const ny = CH * s < wh ? (wh - CH * s) / 2 : Math.min(0, Math.max(wh - CH * s, y))
    return { x: nx, y: ny }
  }, [])

  const fit = useCallback(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const ww = wrap.clientWidth
    const wh = wrap.clientHeight
    const s = Math.max(ww / CW, wh / CH)
    const { x, y } = clamp((ww - CW * s) / 2, (wh - CH * s) / 2, s)
    txRef.current = { x, y, s }
    setTransform({ x, y, s })
  }, [clamp])

  useEffect(() => {
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [fit])

  function apply(x, y, s) {
    const next = clamp(x, y, s ?? txRef.current.s)
    txRef.current = { ...next, s: s ?? txRef.current.s }
    setTransform({ ...next, s: s ?? txRef.current.s })
  }

  function onMouseDown(e) { if (modal) return; isDragging.current = true; didDrag.current = false; lastPos.current = { x: e.clientX, y: e.clientY }; setIsDraggingState(true) }
  function onMouseMove(e) {
    if (!isDragging.current) return
    const dx = e.clientX - lastPos.current.x; const dy = e.clientY - lastPos.current.y
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) didDrag.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
    apply(txRef.current.x + dx, txRef.current.y + dy)
  }
  function onMouseUp() { isDragging.current = false; setIsDraggingState(false) }

  function onTouchStart(e) {
    if (e.touches.length === 1) { touchAnchor.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, px: txRef.current.x, py: txRef.current.y }; didDrag.current = false }
    else if (e.touches.length === 2) { pinchRef.current = { dist: Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY), scale: txRef.current.s } }
  }
  function onTouchMove(e) {
    e.preventDefault()
    if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - touchAnchor.current.x; const dy = e.touches[0].clientY - touchAnchor.current.y
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) didDrag.current = true
      apply(touchAnchor.current.px + dx, touchAnchor.current.py + dy)
    } else if (e.touches.length === 2 && pinchRef.current.dist) {
      const dist = Math.hypot(e.touches[1].clientX - e.touches[0].clientX, e.touches[1].clientY - e.touches[0].clientY)
      apply(txRef.current.x, txRef.current.y, Math.min(2.5, Math.max(0.6, pinchRef.current.scale * (dist / pinchRef.current.dist))))
    }
  }
  function onTouchEnd() { pinchRef.current.dist = null }

  function tapSpot(e, spot) {
    e.stopPropagation()
    if (didDrag.current) return
    const isClue = clueSpotIds.includes(spot.id)
    const alreadyFound = foundClues.some(f => f.spotId === spot.id)
    setModal({ spotId: spot.id, label: spot.label, isClue, alreadyFound, fallback: spot.fallback, ...(isClue ? clueMap[spot.id] : {}) })
  }

  function handleLog() {
    if (modal?.isClue && !modal.alreadyFound) logClue(modal.spotId)
    setModal(null)
  }

  // Trigger banner when all 7 found
  useEffect(() => {
    if (foundClues.length === 7) {
      setTimeout(() => setAllFoundBanner(true), 400)
    }
  }, [foundClues.length])

  const { x, y, s } = transform

  return (
    <div className="fixed inset-0 flex flex-col bg-dark select-none">
      {/* TopBar — never shows case name, shows Open Investigation */}
      <TopBar
        keyword="Open Investigation"
        clueCount={foundClues.length}
        onOpenFile={() => {}}
        allFound={foundClues.length === 7}
        hideFileButton={foundClues.length < 7}
      />

      <div
        ref={wrapRef}
        className="flex-1 overflow-hidden relative"
        style={{ touchAction: 'none', cursor: isDraggingState ? 'grabbing' : 'grab' }}
        onMouseDown={onMouseDown} onMouseMove={onMouseMove}
        onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      >
        <div style={{
          position: 'absolute', width: CW, height: CH,
          transformOrigin: '0 0',
          transform: `translate(${x}px, ${y}px) scale(${s})`,
          willChange: 'transform',
        }}>
          <img
            src={roomImage} alt="Investigation Room" draggable={false}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill', pointerEvents: 'none', filter: 'brightness(0.83) contrast(1.06) saturate(0.87)' }}
          />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(13,11,8,0.48) 100%)' }} />
          {spots.map((spot, i) => (
            <Spot key={spot.id} spot={spot} found={foundClues.some(f => f.spotId === spot.id)} onClick={(e) => tapSpot(e, spot)} delay={i} />
          ))}
        </div>
      </div>

      <BottomBar found={foundClues.length} />

      <AnimatePresence>
        {modal && <Modal data={modal} onClose={() => setModal(null)} onLog={handleLog} />}
      </AnimatePresence>

      {/* All clues found — go to theory */}
      <AnimatePresence>
        {allFoundBanner && (
          <motion.div
            className="fixed inset-0 z-[900] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-dark/60 pointer-events-auto" onClick={() => setScreen('theory')} />
            <motion.div
              className="relative z-10 flex flex-col items-center text-center pointer-events-auto cursor-pointer px-10 py-10"
              style={{ background: 'linear-gradient(160deg, #141008, #0d0b06)', border: '1px solid rgba(201,169,110,0.25)' }}
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.15 }}
              onClick={() => setScreen('theory')}
            >
              <motion.div
                className="font-elite text-gold border-2 border-gold px-4 py-1 text-lg tracking-widest mb-6"
                style={{ transform: 'rotate(-2deg)' }}
                initial={{ scale: 0.5 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.35 }}
              >
                ALL EVIDENCE COLLECTED
              </motion.div>
              <p className="font-elite text-[9px] tracking-[0.35em] text-muted uppercase mb-3">7 of 7 clues recovered</p>
              <p className="font-crimson text-paper/70 text-sm italic mb-8">
                You have seen what others missed.<br />Now name your theory.
              </p>
              <motion.div
                className="flex items-center gap-3 border border-gold text-gold font-mono text-[9px] tracking-[0.25em] uppercase px-8 py-3"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                Name Your Theory →
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
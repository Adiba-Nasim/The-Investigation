import { AnimatePresence } from 'framer-motion'
import useGameStore from './store/useGameStore'
import LandingScreen from './screens/LandingScreen'
import AuthScreen from './screens/AuthScreen'
import DoorScreen from './screens/DoorScreen'
import RoomScreen from './screens/RoomScreen'
import TheoryScreen from './screens/TheoryScreen'
import RevealScreen from './screens/RevealScreen'
import ProfileScreen from './screens/ProfileScreen'

export default function App() {
  const screen = useGameStore(s => s.screen)
  const setScreen = useGameStore(s => s.setScreen)

  const roomActive = screen === 'room' || screen === 'theory' || screen === 'reveal'

  return (
    <>
      {/* Base screens — mutually exclusive, swap with exit animation */}
      <AnimatePresence mode="wait">
        {screen === 'landing'  && <LandingScreen  key="landing"  />}
        {screen === 'auth'     && <AuthScreen      key="auth"     />}
        {screen === 'door'     && <DoorScreen      key="door"     />}
        {screen === 'profile'  && <ProfileScreen   key="profile"  />}
      </AnimatePresence>

      {/* RoomScreen stays mounted while room / theory / reveal are active */}
      {roomActive && <RoomScreen key="room" />}

      {/* Overlays rendered on top of RoomScreen */}
      <AnimatePresence>
        {screen === 'theory' && (
          <TheoryScreen
            key="theory"
            onClose={() => setScreen('room')}
          />
        )}
        {screen === 'reveal' && (
          <RevealScreen
            key="reveal"
            onClose={() => setScreen('room')}
          />
        )}
      </AnimatePresence>
    </>
  )
}
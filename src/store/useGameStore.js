import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  // ── SCREENS ────────────────────────────────────────────────────
  // 'landing' | 'auth' | 'door' | 'room' | 'theory' | 'reveal' | 'casefile'
  screen: 'landing',
  setScreen: (screen) => set({ screen }),

  // ── AUTH ───────────────────────────────────────────────────────
  authMode: 'register',
  user: null,
  isGuest: false,
  setAuthMode: (authMode) => set({ authMode }),

  register: ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('ccf_users') || '{}')
    if (users[email]) return { error: 'An account with this email already exists.' }
    const passwordHash = btoa(password)
    users[email] = { name, email, passwordHash, solvedCases: [] }
    localStorage.setItem('ccf_users', JSON.stringify(users))
    localStorage.setItem('ccf_session', email)
    set({ user: users[email], isGuest: false, screen: 'door' })
    return { success: true }
  },

  login: ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('ccf_users') || '{}')
    const user = users[email]
    if (!user) return { error: 'No account found with this email.' }
    if (user.passwordHash !== btoa(password)) return { error: 'Incorrect password.' }
    localStorage.setItem('ccf_session', email)
    set({ user, isGuest: false, screen: 'door' })
    return { success: true }
  },

  logout: () => {
    localStorage.removeItem('ccf_session')
    set({ user: null, isGuest: false, screen: 'landing' })
  },

  playAsGuest: () => set({ isGuest: true, user: null, screen: 'door' }),

  restoreSession: () => {
    const email = localStorage.getItem('ccf_session')
    if (!email) return
    const users = JSON.parse(localStorage.getItem('ccf_users') || '{}')
    if (users[email]) set({ user: users[email], isGuest: false, screen: 'door' })
  },

  // ── ROOM / CASE ────────────────────────────────────────────────
  selectedRoom: null,
  selectedCase: null,
  clueSpotIds: [],
  clueMap: {},
  foundClues: [],

  // ── THEORY / REVEAL ────────────────────────────────────────────
  theories: [],                   // [{label, isCorrect}] shuffled
  correctTheoryExplanation: '',
  chosenTheory: null,             // the theory object the user picked
  caseRevealed: false,            // true only after theory is chosen

  selectRoom: (room) => set({ selectedRoom: room }),

  startCase: ({ caseName, clueSpotIds, clueMap, theories, correctTheoryExplanation }) => set({
    selectedCase: caseName,
    clueSpotIds,
    clueMap,
    foundClues: [],
    theories,
    correctTheoryExplanation,
    chosenTheory: null,
    caseRevealed: false,
    screen: 'room',
  }),

  logClue: (spotId) => {
    const { clueMap, foundClues, clueSpotIds } = get()
    if (!clueSpotIds.includes(spotId)) return
    if (foundClues.some(f => f.spotId === spotId)) return
    const c = clueMap[spotId]
    set({ foundClues: [...foundClues, { spotId, ...c }] })
  },

  // User picks a theory → go to reveal
  chooseTheory: (theory) => {
    set({ chosenTheory: theory, caseRevealed: true, screen: 'reveal' })
  },

  saveToProfile: () => {
    const { user, selectedRoom, selectedCase, foundClues, chosenTheory } = get()
    if (!user) return
    const users = JSON.parse(localStorage.getItem('ccf_users') || '{}')
    const u = users[user.email]
    if (!u) return
    if (u.solvedCases.find(c => c.caseName === selectedCase)) return
    u.solvedCases.push({
      caseName: selectedCase,
      room: selectedRoom,
      dateSolved: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      clues: foundClues,
      theoryCorrect: chosenTheory?.isCorrect || false,
    })
    users[user.email] = u
    localStorage.setItem('ccf_users', JSON.stringify(users))
    set({ user: u })
  },

  resetCase: () => {
    const { isGuest } = get()
    set({
      selectedCase: null,
      selectedRoom: null,
      clueSpotIds: [],
      clueMap: {},
      foundClues: [],
      theories: [],
      correctTheoryExplanation: '',
      chosenTheory: null,
      caseRevealed: false,
      screen: isGuest ? 'landing' : 'door',
    })
  },
}))

export default useGameStore
import { create } from 'zustand'
import { supabase } from '../lib/supabase'

const useGameStore = create((set, get) => ({

  // ── SCREENS ────────────────────────────────────────────────────
  screen: 'landing',
  setScreen: (screen) => set({ screen }),

  // ── AUTH ───────────────────────────────────────────────────────
  authMode: 'register',
  user: null,
  isGuest: false,
  setAuthMode: (authMode) => set({ authMode }),

  register: async ({ name, email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    })
    if (error) return { error: error.message }
    const user = { name, email, solvedCases: [] }
    set({ user, isGuest: false, screen: 'door' })
    return { success: true }
  },

  login: async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    await get().restoreSession()
    return { success: true }
  },

  logout: async () => {
    await supabase.auth.signOut()
    set({ user: null, isGuest: false, screen: 'landing' })
  },

  playAsGuest: () => set({ isGuest: true, user: null, screen: 'door' }),

  // ── FETCH SOLVED CASES ─────────────────────────────────────────
  fetchSolvedCases: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return []

    const { data: rows, error } = await supabase
      .from('solved_cases')
      .select(`
        id,
        case_name,
        room_id,
        date_solved,
        theory_correct,
        solved_clues (
          fact,
          source,
          is_real,
          sort_order
        )
      `)
      .eq('user_id', session.user.id)
      .order('date_solved', { ascending: false })

    if (error) {
      console.error('fetchSolvedCases error:', error.message)
      return []
    }

    return (rows ?? []).map(r => ({
      caseName: r.case_name,
      room: r.room_id,
      dateSolved: r.date_solved,
      theoryCorrect: r.theory_correct,
      clues: (r.solved_clues ?? [])
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
        .map(c => ({ fact: c.fact, source: c.source, isReal: c.is_real })),
    }))
  },

  restoreSession: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return

    const authUser = session.user
    const name = authUser.user_metadata?.name ?? authUser.email

    const solvedCases = await get().fetchSolvedCases()
    set({ user: { name, email: authUser.email, solvedCases }, isGuest: false, screen: 'door' })
  },

  refreshProfile: async () => {
    const { user } = get()
    if (!user) return
    const solvedCases = await get().fetchSolvedCases()
    set(s => ({ user: { ...s.user, solvedCases } }))
  },

  hydrate: async () => get().restoreSession(),

  // ── ROOM / CASE ────────────────────────────────────────────────
  selectedRoom: null,
  selectedCase: null,
  selectedCaseId: null,
  clueSpotIds: [],
  clueMap: {},
  foundClues: [],

  // ── THEORY / REVEAL ────────────────────────────────────────────
  theories: [],
  correctTheoryExplanation: '',
  chosenTheory: null,
  caseRevealed: false,

  selectRoom: (room) => set({ selectedRoom: room }),

  startCase: ({ caseName, caseId, clueSpotIds, clueMap, theories, correctTheoryExplanation }) => set({
    selectedCase: caseName,
    selectedCaseId: caseId ?? null,
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

  chooseTheory: (theory) => {
    set({ chosenTheory: theory, caseRevealed: true, screen: 'reveal' })
  },

  saveToProfile: async () => {
    const { user, selectedRoom, selectedCase, selectedCaseId, foundClues, chosenTheory, _saving } = get()
    if (!user || _saving) return

    set({ _saving: true })

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) { set({ _saving: false }); return }

    const dateSolved = new Date().toISOString().split('T')[0]

    const { data: existing } = await supabase
      .from('solved_cases')
      .select('id')
      .eq('user_id', session.user.id)
      .eq('case_name', selectedCase)
      .maybeSingle()

    if (existing) { set({ _saving: false }); return }

    const { data: savedCase, error: caseError } = await supabase
      .from('solved_cases')
      .insert({
        user_id: session.user.id,
        case_name: selectedCase,
        room_id: selectedRoom,
        date_solved: dateSolved,
        theory_correct: chosenTheory?.isCorrect || false,
      })
      .select('id')
      .single()

    if (caseError) {
      console.error('saveToProfile case error:', caseError.message)
      set({ _saving: false })
      return
    }

    if (foundClues.length > 0) {
      const clueRows = foundClues.map((c, i) => ({
        solved_case_id: savedCase.id,
        fact: c.fact,
        source: c.source,
        is_real: c.isReal ?? true,
        sort_order: i,
      }))

      const { error: cluesError } = await supabase
        .from('solved_clues')
        .insert(clueRows)

      if (cluesError) console.error('saveToProfile clues error:', cluesError.message)
    }

    const newEntry = {
      caseName: selectedCase,
      room: selectedRoom,
      dateSolved,
      clues: foundClues.map(c => ({ fact: c.fact, source: c.source, isReal: c.isReal ?? true })),
      theoryCorrect: chosenTheory?.isCorrect || false,
    }

    set(s => ({ user: { ...s.user, solvedCases: [newEntry, ...(s.user.solvedCases ?? [])] }, _saving: false }))
  },
  resetCase: () => {
    const { isGuest } = get()
    set({
      selectedCase: null,
      selectedCaseId: null,
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

// Sync auth state on tab focus / token expiry
supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') {
    useGameStore.setState({ user: null, screen: 'landing' })
  }
})

export default useGameStore
import { create } from 'zustand'
import { User } from '@clerk/nextjs/server'

interface UserState {
  user: User | null
  isSignedIn: boolean
  setUser: (user: User | null) => void
  clearUser: () => void
}

const useStore = create<UserState>((set) => ({
  user: null,
  isSignedIn: false,
  setUser: (user) => set({ 
    user,
    isSignedIn: !!user 
  }),
  clearUser: () => set({ 
    user: null,
    isSignedIn: false 
  }),
}))

export default useStore 
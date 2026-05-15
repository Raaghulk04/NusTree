import { create } from 'zustand'

export const useModuleStore = create((set) => ({
  // State
  completedMods: [], // Use a COMMA here

  // Action
  addModule: (newMod) => 
    set((state) => ({ 
      completedMods: [...state.completedMods, newMod] 
    })), // Use a COMMA here (optional for the last item)

  resetModules: () => set({ completedMods: [] })
}))
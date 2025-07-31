import { create } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persist, createJSONStorage } from 'zustand/middleware'

type userState = {
    hasFinishedOnboarding: boolean,
    toggleHasOnboarded: () => void
}

export const useUserStore = create(persist<userState>((set) => ({
    hasFinishedOnboarding: false,
    toggleHasOnboarded: () => {
        set((state) => {
            return {
                ...state,
                hasFinishedOnboarding: !state.hasFinishedOnboarding
            }
        })
    }
}), {
    name: 'plantly-user-store',
    storage: createJSONStorage(() => AsyncStorage)
    }
))
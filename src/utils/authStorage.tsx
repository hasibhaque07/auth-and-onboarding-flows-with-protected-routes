import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  isVip: boolean;
  hasCompletedOnboarding: boolean;
  _hasHydrated: boolean;
  logIn: () => void;
  logOut: () => void;
  logInAsVip: () => void;
  completedOnboarding: () => void;
  resetOnboarding: () => void;
  setHasHydrated: (value: boolean) => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      isVip: false,
      hasCompletedOnboarding: false,
      _hasHydrated: false,
      logIn: () => set({ isLoggedIn: true }),
      logInAsVip: () => set({ isLoggedIn: true, isVip: true }),
      logOut: () => set({ isLoggedIn: false, isVip: false }),
      completedOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () =>
        set({ hasCompletedOnboarding: false, isLoggedIn: false }),
      setHasHydrated: (value: boolean) => set({ _hasHydrated: value }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => ({
        getItem: (key: string) => SecureStore.getItemAsync(key),
        setItem: (key: string, value: string) =>
          SecureStore.setItemAsync(key, value),
        removeItem: (key: string) => SecureStore.deleteItemAsync(key),
      })),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    }
  )
);

import { GetUserResponse } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  user: GetUserResponse | null;
  setUser: (user: GetUserResponse) => void;
  clearUser: () => void;
  getState: () => any;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get, state) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
      clearUser: () => set(() => ({ user: null })),
      getState: () => state,
    }),
    {
      name: "user-storage",
      partialize: (state) => ({ user: state.user }),
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

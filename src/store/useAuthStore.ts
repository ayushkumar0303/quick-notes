import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  email: string | null;
} | null;

type AuthState = {
  user: User;
  loading: boolean;
  setUser: (user: User) => void;
  setLoading: (laoding: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: "auth-storage", // key in storage
    }
  )
);

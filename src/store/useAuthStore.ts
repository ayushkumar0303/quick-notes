import { create } from "zustand";

type User = {
  email: string | null;
} | null;

type AuthState = {
  user: User;
  loading: boolean;
  setUser: (user: User) => void;
  setLoading: (laoding: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));

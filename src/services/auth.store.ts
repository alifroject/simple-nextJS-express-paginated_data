import { create } from "zustand";
import type { LoginResponse } from "../types/auth.type";

interface AuthState {
    user: LoginResponse | null;
    setUser: (user: LoginResponse) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user: LoginResponse) => set({ user }),
    clearUser: () => set({ user: null }),
}));

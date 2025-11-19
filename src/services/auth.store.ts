import { create } from "zustand";
import type {  LoginResponse } from "../types/auth.type";

interface AuthState {
    user: LoginResponse | null;
    setUser: (user: LoginResponse | null) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}));

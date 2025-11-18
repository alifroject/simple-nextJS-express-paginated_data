import type { LoginResponse } from "../types/auth.type";

const API_URL = import.meta.env.API_URL;

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include cookies  http-only
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    const data: LoginResponse = await response.json();
    return data;
}


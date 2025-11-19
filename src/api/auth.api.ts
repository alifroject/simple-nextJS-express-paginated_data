import type { LoginInput, LoginResponse } from "../types/auth.type";


export const login = async ({ email, password }: LoginInput): Promise<LoginResponse> => {
    const response = await fetch("http://localhost:8080/admin/login", {
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

export const getCurrentUser = async () => {
    const response = await fetch("http://localhost:8080/admin/me", {
        method: "GET",
        credentials: "include",
    });
    if (!response.ok) throw new Error("Not logged in")
    return response.json();
}

export const logout = async () => {
    const response = await fetch("http://localhost:8080/admin/logout", {
        method: 'POST',
        credentials: 'include',
    });
    if (!response.ok) throw new Error('Logout failed');
    return response.json();
}


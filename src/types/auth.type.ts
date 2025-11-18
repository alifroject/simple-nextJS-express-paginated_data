export interface LoginResponse {
    token: string;
    role: string; // "admin" | "user"
    email: string;
    id: number;
    firstName?: string;
    lastName?: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface AuthResponse {
  user: LoginResponse;
  token?: string; // optional if backend returns separately in JSON
}


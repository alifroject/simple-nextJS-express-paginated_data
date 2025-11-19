import { useEffect, useState, type ReactNode } from "react";

import { getCurrentUser } from "../api/auth.api";
import { useAuthStore } from "../services/auth.store";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { setUser } = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((user) => setUser(user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);
    if (loading) return <div>Loading...</div>;
    return <>{children}</>;
}
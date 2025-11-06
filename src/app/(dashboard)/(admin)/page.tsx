"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    role?: string;
    exp?: number;
}

export default function AdminPage() {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/login";
            return;
        }

        try {
            const decoded = jwtDecode<DecodedToken>(token);
            if (decoded.role === "Admin") {
                setAllowed(true);
            } else {
                alert("Access denied.");
                window.location.href = "/dashboard";
            }
        } catch {
            window.location.href = "/login";
        }
    }, []);

    if (!allowed) return null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Welcome, Admin!</h1>
            <p className="mt-2">This page is protected and only for Admins.</p>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

interface DecodedToken {
  email?: string;
  role?: string;
  exp?: number;
}

export default function DashboardPage() {
  const [userInfo, setUserInfo] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      setUserInfo(decoded);
    } catch {
      window.location.href = "/login";
    }
  }, []);

  if (!userInfo) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {userInfo.email}</h1>
      <p className="mt-2">Your role: {userInfo.role}</p>
    </div>
  );
}

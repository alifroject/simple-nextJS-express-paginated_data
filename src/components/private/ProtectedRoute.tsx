import React from "react"; // <-- required sometimes even with react-jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../services/auth.store";

interface ProtectedProps {
  children: React.ReactNode;
}


const ProtectedRoute = ({ children }: ProtectedProps) => {
  const { user } = useAuthStore();

  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;

// src/components/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAuthStore();
  if (user) {
    // If user is logged in, redirect them to the protected page
    return <Navigate to="/categories" replace />;
  }
  return children;
};

export default PublicRoute;

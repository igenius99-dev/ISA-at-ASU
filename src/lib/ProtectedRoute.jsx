import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>loading....</div>;
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;

  return children;
}

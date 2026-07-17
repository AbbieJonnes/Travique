import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Temporary admin check
  if (currentUser.email !== "admin@travique.com") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
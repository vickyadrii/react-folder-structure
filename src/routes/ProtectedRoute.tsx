import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
    // note: replace with your real auth logic, e.g., from context or a hook
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

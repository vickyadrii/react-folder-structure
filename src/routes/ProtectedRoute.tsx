import { Navigate, Outlet } from "react-router";
import { isTokenValid } from "@/lib/utils";
import { useAuthStore } from "@/stores";

export const ProtectedRoute = () => {
    const { isAuthenticated, user, logout } = useAuthStore();

    const hasValidToken = isTokenValid(user?.accessToken);

    if (!isAuthenticated || !hasValidToken) {
        if (isAuthenticated && !hasValidToken) {
            logout();
        }
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;

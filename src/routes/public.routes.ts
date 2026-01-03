import type { RouteObject } from "react-router";
import { AuthLayout } from "@/layouts";
import { authRoutes } from "./auth/auth.routes";

export const publicRoutes: RouteObject[] = [
    {
        Component: AuthLayout,
        children: [...authRoutes],
    },
];

import type { RouteObject } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { dashboardRoutes } from "./dashboard/dashboard.routes";
import { AppLayout } from "@/layouts";

export const privateRoutes: RouteObject[] = [
    {
        Component: ProtectedRoute,
        children: [
            {
                Component: AppLayout,
                children: [...dashboardRoutes],
            },
        ],
    },
];

import type { RouteObject } from "react-router";
import { AppLayout } from "@/layouts";
import { ProtectedRoute } from "./ProtectedRoute";
import { dashboardRoutes } from "./dashboard/dashboard.routes";
import { settingsRoutes } from "./settings/settings.routes";
import { usersRoutes } from "./users/users.routes";

export const privateRoutes: RouteObject[] = [
    {
        Component: ProtectedRoute,
        children: [
            {
                Component: AppLayout,
                children: [...dashboardRoutes, ...usersRoutes, ...settingsRoutes],
            },
        ],
    },
];

import type { RouteObject } from "react-router";
import { DashboardPage } from "@/pages";

export const dashboardRoutes: RouteObject[] = [
    {
        path: "/",
        Component: DashboardPage,
        handle: { title: "Dashboard" },
    },
];

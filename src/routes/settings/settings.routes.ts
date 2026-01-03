import type { RouteObject } from "react-router";
import { SettingsPage } from "@/pages";

export const settingsRoutes: RouteObject[] = [
    {
        path: "/settings",
        Component: SettingsPage,
        handle: { title: "Settings" },
    },
];

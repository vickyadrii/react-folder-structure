import type { RouteObject } from "react-router";
import { LoginPage } from "@/pages";

export const authRoutes: RouteObject[] = [
    {
        path: "/login",
        Component: LoginPage,
        handle: { title: "Login" },
    },
];

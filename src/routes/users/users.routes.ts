import type { RouteObject } from "react-router";
import { UsersPage } from "@/pages";

export const usersRoutes: RouteObject[] = [
    {
        path: "/users",
        Component: UsersPage,
        handle: { title: "Users" },
    },
];

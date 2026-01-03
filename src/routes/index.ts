import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/layouts/RootLayout";
import { NotFoundPage } from "@/pages";
import { privateRoutes } from "./private.routes";
import { publicRoutes } from "./public.routes";

export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            ...publicRoutes,
            ...privateRoutes,
            {
                path: "*",
                Component: NotFoundPage,
                handle: { title: "404 - Not Found" },
            },
        ],
    },
]);

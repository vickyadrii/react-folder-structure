import { createBrowserRouter } from "react-router";
import { publicRoutes } from "./public.routes";
import { privateRoutes } from "./private.routes";

export const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

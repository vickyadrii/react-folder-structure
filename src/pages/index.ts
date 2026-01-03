import { lazy } from "react";

export const LoginPage = lazy(() => import("./auth/LoginPage"));
export const DashboardPage = lazy(() => import("./dashboard/DashboardPage"));
export const SettingsPage = lazy(() => import("./settings/SettingsPage"));
export const UsersPage = lazy(() => import("./users/UsersPage"));
export const NotFoundPage = lazy(() => import("./errors/NotFoundPage"));

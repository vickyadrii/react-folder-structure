import { LayoutDashboard, Settings, Users } from "lucide-react";
import type { ISidebarItem } from "@/types";

export const sidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
    },
    {
        title: "Users",
        icon: Users,
        path: "/users",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
];

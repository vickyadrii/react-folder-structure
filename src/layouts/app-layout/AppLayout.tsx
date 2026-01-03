import { Outlet, useMatches } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { IRouteHandle } from "@/types";
import { AppSidebar } from "./AppSidebar";

const AppLayout = () => {
    const matches = useMatches();
    const currentRoute = [...matches].reverse().find((m) => (m.handle as IRouteHandle)?.title);
    const pageTitle = (currentRoute?.handle as IRouteHandle)?.title || "Dashboard";

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">
                <div className="border-b bg-background">
                    <div className="flex h-14 items-center gap-4 px-4">
                        <SidebarTrigger />
                        <h1 className="text-lg font-semibold">{pageTitle}</h1>
                    </div>
                </div>
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    );
};

export default AppLayout;

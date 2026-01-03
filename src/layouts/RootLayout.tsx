import { Outlet } from "react-router";
import { useDocumentTitle } from "@/hooks/use-document-title";

export const RootLayout = () => {
    useDocumentTitle();
    return <Outlet />;
};

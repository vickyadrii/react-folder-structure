import { useEffect } from "react";
import { useMatches } from "react-router";
import type { IRouteHandle } from "@/types";

export function useDocumentTitle() {
    const matches = useMatches();

    useEffect(() => {
        const match = [...matches].reverse().find((m) => (m.handle as IRouteHandle)?.title);

        if (match) {
            const title = (match.handle as IRouteHandle).title;
            document.title = `${title} | React Folder Structure`;
        } else {
            document.title = "React Folder Structure";
        }
    }, [matches]);
}

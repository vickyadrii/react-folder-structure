import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: <CircleCheckIcon className="size-4" />,
                info: <InfoIcon className="size-4" />,
                warning: <TriangleAlertIcon className="size-4" />,
                error: <OctagonXIcon className="size-4" />,
                loading: <Loader2Icon className="size-4 animate-spin" />,
            }}
            toastOptions={{
                classNames: {
                    success: "bg-success-50 text-success-700 border-success-200",
                    info: "bg-primary-50 text-primary-700 border-primary-200",
                    warning: "bg-warning-50 text-warning-700 border-warning-200",
                    error: "bg-error-50 text-error-700 border-error-200",
                    default: "bg-popover text-popover-foreground border-border",
                },
            }}
            position="top-center"
            {...props}
        />
    );
};

export { Toaster };

import * as React from "react";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface SpinProps {
    spinning?: boolean;
    children?: React.ReactNode;
    tip?: string;
    size?: "small" | "default" | "large";
    className?: string;
    delay?: number;
}

const sizeMap = {
    small: "size-4",
    default: "size-6",
    large: "size-8",
};

const Spin = React.forwardRef<HTMLDivElement, SpinProps>(({ spinning = true, children, tip, size = "default", className, delay = 0 }, ref) => {
    const [showSpinner, setShowSpinner] = React.useState(delay === 0);

    React.useEffect(() => {
        if (delay > 0 && spinning) {
            const timer = setTimeout(() => {
                setShowSpinner(true);
            }, delay);

            return () => clearTimeout(timer);
        } else {
            setShowSpinner(spinning);
        }
    }, [spinning, delay]);

    if (!children) {
        return showSpinner ? (
            <div ref={ref} className={cn("flex items-center justify-center", className)}>
                <div className="flex flex-col items-center gap-2">
                    <Spinner className={cn(sizeMap[size])} />
                    {tip && <div className="text-sm text-muted-foreground">{tip}</div>}
                </div>
            </div>
        ) : null;
    }

    return (
        <div ref={ref} className={cn("relative", className)}>
            {showSpinner && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50">
                    <div className="flex flex-col items-center gap-2">
                        <Spinner className={cn(sizeMap[size])} />
                        {tip && <div className="text-sm text-muted-foreground">{tip}</div>}
                    </div>
                </div>
            )}
            <div className={cn(showSpinner && "pointer-events-none opacity-50 select-none")}>{children}</div>
        </div>
    );
});

Spin.displayName = "Spin";

export { Spin };
export type { SpinProps };

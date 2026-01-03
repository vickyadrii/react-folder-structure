import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
            <div className="w-full max-w-md space-y-8">
                <div className="relative mx-auto h-64 w-full max-w-sm">
                    <img src="/assets/illustrators/ils-not-found.svg" alt="404 Not Found" className="h-full w-full animate-in duration-500 fade-in zoom-in" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
                    <p className="text-lg text-muted-foreground">Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate(-1)}
                        className="gap-2 border-sky-200 hover:bg-sky-50 hover:text-sky-600 dark:border-sky-800 dark:hover:bg-sky-950/50 dark:hover:text-sky-400"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </Button>

                    <Button size="lg" onClick={() => navigate("/")} className="gap-2 bg-sky-500 text-white shadow-sky-200 hover:bg-sky-600 dark:shadow-none">
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

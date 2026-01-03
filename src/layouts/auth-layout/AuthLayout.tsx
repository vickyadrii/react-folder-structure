import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="mx-auto flex h-screen max-h-screen w-full max-w-xl items-center justify-center p-5">
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;

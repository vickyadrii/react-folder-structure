import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="mx-auto flex h-screen max-h-screen max-w-xl items-center justify-center p-5">
            <Outlet />
        </div>
    );
};

export default AuthLayout;

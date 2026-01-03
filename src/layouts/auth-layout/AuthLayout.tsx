import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="bg-red-500 text-white">
            <Outlet />
        </div>
    );
};

export default AuthLayout;

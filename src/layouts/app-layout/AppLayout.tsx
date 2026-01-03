import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <div className="bg-blue-500">
            <Outlet />
        </div>
    );
};

export default AppLayout;

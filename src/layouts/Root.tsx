import { Outlet } from "react-router";

const Root = () => {
    return (
        <main className="min-h-screen bg-[#1a1919]">
            <Outlet />
        </main>
    );
};

export default Root;

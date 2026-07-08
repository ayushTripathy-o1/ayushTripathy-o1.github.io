import { useLocation, useNavigate } from "react-router"
import { routes } from "../routes";

const AdaptiveNavbar = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const getCurrentRoute = () => {
        return loc.pathname.substring(1);
    }
    const formatRoute = (route: string) => {
        if (!route) {
            return "";
        }
        const capitalized = route.charAt(0).toUpperCase() + route.slice(1);
        return `/${capitalized}`;
    }

    return (
        <div className="flex w-screen items-center justify-center">
            <div className="flex flex-row items-center justify-between gap-2 p-4">
                <h3 className="text-blue-400 cursor-pointer font-jetbrains hover:text-blue-500" onClick={() => navigate("/")}>[ .. ]</h3>
                {routes && routes.map((route) => {
                    const isActive = getCurrentRoute() === route;
                    return (
                        <h3 key={route} className={`cursor-pointer font-jetbrains transition-colors px-4 ${isActive ? "text-blue-500" : "text-blue-400 hover:text-blue-500"}`} onClick={() => navigate(route)}>
                            {formatRoute(route)}
                        </h3>
                    );
                })
                }
            </div>
        </div>
    )
}

export default AdaptiveNavbar

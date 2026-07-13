import { useLocation, useNavigate } from "react-router"
import { routes } from "../routes";

const AdaptiveNavbar = () => {
    const loc = useLocation();
    const navigate = useNavigate();
    const getRootroute = () => {
        const decodedRoute = decodeURIComponent(loc.pathname);
        const segments = decodedRoute.split("/").filter(Boolean);
        return segments[0] || "";
    }
    const formatRoute = (route: string) => {
        if (!route) {
            return "";
        }
        const cleanRoute = route.replace(/^\//, "");
        return `/${cleanRoute.charAt(0).toUpperCase() + cleanRoute.slice(1)}`;
    }
    const currentRoute = getRootroute();
    return (
        <div className="flex w-screen items-center justify-center">
            <div className="flex flex-row items-center justify-between gap-2 p-4">
                <h3 className="text-blue-400 cursor-pointer font-jetbrains hover:text-blue-500" onClick={() => navigate("/")}>[ .. ]</h3>
                {routes && routes.map((route) => {
                    const cleanRouteRefrence = route.replace(/^\//, "");
                    const isActive = currentRoute === cleanRouteRefrence;
                    return (
                        <h3 key={route} className={`cursor-pointer font-jetbrains transition-colors px-4 ${isActive ? "text-blue-500" : "text-blue-400 hover:text-blue-500"}`} onClick={() => navigate(cleanRouteRefrence)}>
                            {formatRoute(cleanRouteRefrence)}
                        </h3>
                    );
                })
                }
            </div>
        </div>
    )
}

export default AdaptiveNavbar

import { Outlet } from "react-router"
import AdaptiveNavbar from "../components/AdaptiveNavbar"

const View = () => {
    return (
        <main className="flex flex-col">
            <AdaptiveNavbar />
            <Outlet />
            <div>Custom Foot</div>
        </main>
    )
}

export default View

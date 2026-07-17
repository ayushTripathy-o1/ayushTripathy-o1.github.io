import { Outlet } from "react-router"
import AdaptiveNavbar from "../components/AdaptiveNavbar"
import GlobalFooter from "../components/GlobalFooter"

const View = () => {
    return (
        <main className="flex flex-col">
            <AdaptiveNavbar />
            <Outlet />
            <GlobalFooter />
        </main>
    )
}

export default View

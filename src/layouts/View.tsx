import { Outlet } from "react-router"

const View = () => {
    return (
        <main className="flex flex-col">
            <div>Custom Nav</div>
            <Outlet />
            <div>Custom Foot</div>
        </main>
    )
}

export default View

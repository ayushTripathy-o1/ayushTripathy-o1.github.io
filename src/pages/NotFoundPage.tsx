import { useLocation, useNavigate } from "react-router"

const NotFoundPage = () => {
    const navigate = useNavigate();
    const loc = useLocation();
    const isProjectsPath = loc.pathname.includes("projects");
    return (
        <main className="flex min-h-screen items-center justify-center px-6 font-jetbrains">
            <div className="max-w-md text-center">
                <h1 className="text-8xl tracking-tight">404</h1>
                <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
                <p className="mt-3 text-neutral-400">The Page you're looking for doesn't exist, may have been moved, or the URL: '{loc?.pathname}' is incorrect.</p>
                <div className="mt-8 flex justify-center gap-4">
                    <h3 className="text-blue-400 hover:text-blue-500 cursor-pointer" onClick={() => navigate(-1)}>[ Go Back ]</h3>
                    {!isProjectsPath ? (<h3 className="text-blue-400 hover:text-blue-500 cursor-pointer" onClick={() => navigate("/")}>[ Home ]</h3>) : ""}
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage

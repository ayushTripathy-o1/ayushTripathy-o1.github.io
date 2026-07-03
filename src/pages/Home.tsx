import { useNavigate } from "react-router"
import BackgroundCanvas from "../components/BackgroundCanvas"
import ShinyText from "../components/ShinyText"

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <BackgroundCanvas />
            <div className="flex flex-col min-h-screen justify-center items-center relative z-10">
                <ShinyText />
                <div className="lg:flex lg:flex-row pt-3 gap-2 font-jetbrains md:grid md:grid-cols-2">
                    <h3 className="text-blue-400 cursor-pointer hover:text-blue-500" onClick={() => navigate("/about")}>[ /About ]</h3>
                    <h3 className="text-blue-400 cursor-pointer hover:text-blue-500" onClick={() => navigate("/projects")}>[ /Projects ]</h3>
                    <h3 className="text-blue-400 cursor-pointer hover:text-blue-500" onClick={() => navigate("/skills")}>[ /Skills ]</h3>
                    <h3 className="text-blue-400 cursor-pointer hover:text-blue-500" onClick={() => navigate("/connect")}>[ /Connect ]</h3>
                </div>
            </div>
        </>
    )
}
export default Home

import { Link } from "react-router"
import BackgroundCanvas from "../components/BackgroundCanvas"
import ShinyText from "../components/ShinyText"

const Home = () => {
    return (
        <>
            <BackgroundCanvas />
            <div className="flex flex-col min-h-screen justify-center items-center relative z-10">
                <ShinyText />
                <div className="lg:flex lg:flex-row pt-3 gap-2 font-jetbrains md:grid md:grid-cols-2">
                    <Link className="text-blue-400 cursor-pointer hover:text-blue-500" to={"about"} >[ /About ]</Link>
                    <Link className="text-blue-400 cursor-pointer hover:text-blue-500" to={"projects"} >[ /Projects ]</Link>
                    <Link className="text-blue-400 cursor-pointer hover:text-blue-500" to={"skills"}>[ /Skills ]</Link>
                    <Link className="text-blue-400 cursor-pointer hover:text-blue-500" to={"connect"}>[ /Connect ]</Link>
                </div>
            </div>
        </>
    )
}
export default Home

import BackgroundCanvas from "../components/BackgroundCanvas"
import ShinyText from "../components/ShinyText"

const Home = () => {
    return (
        <>
            <BackgroundCanvas />
            <div className="flex flex-col min-h-screen justify-center items-center relative z-10">
                <ShinyText />
                <div className=" flex flex-row pt-3 gap-2 font-jetbrains">
                    <h3 className="text-blue-400 cursor-pointer">[ /About ]</h3>
                    <h3 className="text-blue-400 cursor-pointer">[ /Projects ]</h3>
                    <h3 className="text-blue-400 cursor-pointer">[ /Skills ]</h3>
                </div>
            </div>
        </>
    )
}
export default Home

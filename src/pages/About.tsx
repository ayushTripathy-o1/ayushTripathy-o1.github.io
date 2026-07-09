import { useNavigate } from "react-router"

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            <div className="flex flex-row items-center justify-between mt-2">
                <div></div>
                {/* Hero Middle */}
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-bold font-jetbrains underline underline-offset-5">About Me
                    </h2>
                    <div className="mt-4 font-semibold font-jetbrains w-2xl">
                        Hi, I'm <strong className="font-extrabold">Ayush Tripathy</strong>,
                        a Computer Science Engineer passionate about building scalable Backend Systems and Modern Web Apps (Sometimes).
                        <div className="mt-8 font-semibold font-jetbrains w-2xl">
                            I enjoy solving complex problems, designing clean architectures, understanding how softwares works beneath the framework level.
                        </div>
                        <div className="mt-4 font-semibold font-jetbrains w-2xl">
                            Building reliable backend systems with Java, Spring Boot, and Web technologies.
                        </div>
                        <div className="mt-6 font-semibold font-jetbrains w-2xl">
                            You can check my work at <strong className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" onClick={() => navigate("/projects")}>/Projects</strong> or at my <strong className=" cursor-pointer font-bold text-blue-400 hover:text-blue-500">Github</strong>.
                        </div>
                        <div className="mt-7 font-semibold font-jetbrains">
                            If you want to know what i am doing now, head over to <strong className="font-bold cursor-pointer text-blue-400 hover:text-blue-500" onClick={() => navigate("/now")}>/Now</strong>.
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default About

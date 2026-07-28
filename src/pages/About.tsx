import { Link } from "react-router"
import socialLinks from "../data/links"
import { CiMail } from "react-icons/ci"
import { MyImage } from "./images"

const About = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-between mt-2">
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
                            You can check my work at <Link className="font-bold text-blue-400 hover:text-blue-500 cursor-pointer" to={"/projects"}>/Projects</Link> or at my <Link to={socialLinks["github"]} target="_blank" rel="noopener noreferrer"><strong className=" cursor-pointer font-bold text-blue-400 hover:text-blue-500">Github</strong></Link>.
                        </div>
                        <div className="mt-7 font-semibold font-jetbrains">
                            If you want to know what i am doing now, head over to <Link className="font-bold cursor-pointer text-blue-400 hover:text-blue-500" to={"/now"}>/Now</Link>.
                        </div>
                        <div className="mt-7 font-semibold font-jetbrains">
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <img src={MyImage} alt="MyImage" className="w-60 aspect-3/4 object-cover p-1 shadow-md rounded-xs" />
                            <h3 className="mt-5 font-semibold flex flex-row gap-3">
                                Wanna talk?
                                <a href={`mailto:${socialLinks["gmail"]}`} className="flex flex-row items-center gap-1 text-gray-300 hover:text-blue-500 transition-colors duration-200">
                                    Send email <CiMail className="text-xl" />
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

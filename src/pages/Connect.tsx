import { FaLinkedin } from "react-icons/fa6"
import SocialIcons from "../components/SocialIcons"
import { SiGmail } from "react-icons/si"
import { PiMicrosoftOutlookLogo } from "react-icons/pi"
import { LuGithub } from "react-icons/lu"
import { Link } from "react-router"

const Connect = () => {
    return (
        <div className="min-h-screen">
            <div className="font-jetbrains flex flex-col h-150 items-center justify-center">
                <h1 className="mt-2 text-2xl font-semibold tracking-tight underline underline-offset-8">
                    Social Links</h1>
                <h3 className="mt-5 font-semibold"> Choose any suitable method: </h3>
                <div className="mt-3 p-4 grid grid-cols-2 gap-4">
                    <Link to={"/"}><SocialIcons icon={FaLinkedin} LinkName="LinkedIn" /></Link>
                    <SocialIcons icon={SiGmail} LinkName="Gmail" />
                    <SocialIcons icon={PiMicrosoftOutlookLogo} LinkName="Outlook" />
                    <SocialIcons icon={LuGithub} LinkName="Github" />
                </div>
                <div>
                    <h3 className="mt-5 font-semibold">if you want my resume, please email me at...<Link to={"/"} className="text-blue-400 hover:text-blue-500 font-semibold cursor-pointer">Gmail.</Link></h3>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500 font-medium">
                    Thank you for visiting my portfolio!
                </p>
                <i className="mt-2 text-center text-sm text-gray-500 font-medium">
                    ~ Ayush Tripathy
                </i>
            </div>
        </div>
    )
}

export default Connect

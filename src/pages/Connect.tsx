import SocialIcons from "../components/SocialIcons"
import { SiGmail } from "react-icons/si"
import { PiMicrosoftOutlookLogo } from "react-icons/pi"
import { LuGithub } from "react-icons/lu"
import socialLinks from "../data/links"
import { Link } from "react-router"

const Connect = () => {
    return (
        <div className="min-h-screen">
            <div className="font-jetbrains flex flex-col h-150 items-center justify-center">
                <h1 className="mt-2 text-2xl font-semibold tracking-tight underline underline-offset-8">
                    Social Links</h1>
                <h3 className="mt-5 font-semibold"> Choose any suitable method: </h3>
                <div className="mt-3 p-4 flex flex-row gap-4">
                    <a href={`mailto:${socialLinks["gmail"]}`}><SocialIcons icon={SiGmail} LinkName="Gmail" /> </a>
                    <a href={`mailto:${socialLinks["outlook"]}`}><SocialIcons icon={PiMicrosoftOutlookLogo} LinkName="Outlook" /> </a>
                    <Link to={socialLinks["github"]!} target="_blank" rel="noopener noreferrer"><SocialIcons icon={LuGithub} LinkName="Github" /> </Link>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500 font-medium">
                    Thank you for visiting my portfolio!
                </p>
                <i className="mt-2 text-center text-sm text-gray-500 font-medium">
                    ~ Ayush Tripathy
                </i>
            </div>
        </div >
    )
}

export default Connect

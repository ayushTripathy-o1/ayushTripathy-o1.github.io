import type { IconType } from "react-icons"

type SocialIconsProps = { icon: IconType, LinkName: string }
const SocialIcons = ({ icon: Icon, LinkName }: SocialIconsProps) => {
    return (
        <div className=" cursor-pointer flex flex-row gap-2 items-center text-blue-400 hover:text-blue-500 font-jetbrains">
            <Icon className="text-xl" />
            <p className="font-semibold">[ {LinkName} ]</p>
        </div>
    )
}

export default SocialIcons

import { type IconType } from "react-icons"

type SkillIconProps = { icon: IconType, skillName: string }
const SkillIcon = ({ icon: Icon, skillName }: SkillIconProps) => {
    return (
        <div className="group flex flex-col items-center p-4 border border-zinc-800 rounded-xl 
                        transition-all duration-300 ease-in-out cursor-pointer
                        hover:-translate-y-1 hover:border-blue-500 hover:bg-zinc-900/5">
            <div className="text-3xl mb-2 text-zinc-400 transition-colors duration-300 group-hover:text-blue-400">
                <Icon />
            </div>
            <span className="text-sm font-jetbrains font-medium text-zinc-300 transition-colors duration-300 group-hover:text-blue-400">
                {skillName}
            </span>
        </div>
    )
}
export default SkillIcon

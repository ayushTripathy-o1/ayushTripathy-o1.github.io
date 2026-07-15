import { FaJava, FaReact } from "react-icons/fa6"
import SkillIcon from "../components/SkillIcon"
import { SiAxios, SiJavascript, SiMysql, SiPostgresql, SiPrisma, SiReactrouter, SiShadcnui, SiSpringboot, SiSpringsecurity, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si"
import { FlowBiteIcon } from "../components/CustomIcons"
import { LiaReact } from "react-icons/lia"

const Skills = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-jetbrains font-bold text-2xl underline underline-offset-8 p-4 mt-5">Technologies i can work with</h2>

                <h2 className="text-xl font-semibold mt-3 p-2 underline underline-offset-8">Languages</h2>
                <div className="grid grid-cols-3 justify-center p-5 gap-4">
                    <SkillIcon icon={FaJava} skillName="Java" />
                    <SkillIcon icon={SiJavascript} skillName="Javascript" />
                    <SkillIcon icon={SiTypescript} skillName="Typescript" />
                </div>
                <h2 className="text-xl font-semibold mt-3 p-2 underline underline-offset-8">Frameworks</h2>
                <div className="grid grid-cols-4 justify-center p-5 gap-4">
                    <SkillIcon icon={SiSpringboot} skillName="Spring Boot" />
                    <SkillIcon icon={SiSpringsecurity} skillName="Spring Security" />
                    <SkillIcon icon={FaReact} skillName="React" />
                    <SkillIcon icon={SiReactrouter} skillName="React Router" />
                </div>
                <h2 className="text-xl font-semibold mt-3 p-2 underline underline-offset-8">Databases</h2>
                <div className="grid grid-cols-3 justify-center p-5 gap-4">
                    <SkillIcon icon={SiPostgresql} skillName="Postgresql" />
                    <SkillIcon icon={SiMysql} skillName="Mysql" />
                    <SkillIcon icon={SiSqlite} skillName="Sqlite" />
                </div>
                <h2 className="text-xl font-semibold mt-3 p-2 underline underline-offset-8">UI Frameworks</h2>
                <div className="grid grid-cols-3 justify-center p-5 gap-4">
                    <SkillIcon icon={SiTailwindcss} skillName="Tailwind css" />
                    <SkillIcon icon={SiShadcnui} skillName="Shadcn UI" />
                    <SkillIcon icon={FlowBiteIcon} skillName="Flowbite" />
                </div>
                <h2 className="text-xl font-semibold mt-3 p-2 underline underline-offset-8">Libraries</h2>
                <div className="grid grid-cols-3 justify-center p-5 gap-4">
                    <SkillIcon icon={SiAxios} skillName="Axios" />
                    <SkillIcon icon={LiaReact} skillName="react-icons" />
                    <SkillIcon icon={SiPrisma} skillName="Prisma" />
                </div>
            </div>
        </div>
    )
}

export default Skills

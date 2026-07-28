import { RiTargetLine } from "react-icons/ri"

const Now = () => {
    return (
        <div className="min-h-screen flex flex-col items-center mt-12 gap-4">
            <RiTargetLine className="h-10 w-10" />
            <div className="font-jetbrains font-semibold  max-w-xl px-4 leading-relaxed">
                <p className="mb-4">
                    Currently focusing on strengthening <span className="text-blue-400">backend skills</span> and <span className="text-blue-400">web design</span>.
                </p>
                <p className="mb-4">
                    Sharpening database management skills.
                </p>
                <p className="mb-4">
                    Planning to learn a new language soon...currently deciding on the right one.
                </p>
                <p className="text-slate-400 text-lg">
                    Next steps: cloud engineering and DevOps.
                </p>
            </div>
        </div>
    )
}

export default Now

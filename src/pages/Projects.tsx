const Projects = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-row items-center justify-between mt-2 mb-0 font-jetbrains">
                {/* Headings */}
                <div className="flex flex-col items-center justify-center gap-2 w-64">
                    <h2 className="underline underline-offset-6 mt-3 mb-4">[ Index ]</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-64">
                    <h2 className="underline underline-offset-6 mt-3 mb-4">[ Project Details ]</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-64">
                    <h2 className="underline underline-offset-6 mt-3 mb-4">[ Controls ]</h2>
                </div>
            </div>
            <div className="flex flex-row h-screen justify-between mt-2 mb-0 font-jetbrains">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default Projects

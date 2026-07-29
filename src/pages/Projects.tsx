import { Link, useParams } from "react-router";
import ProjectViewComponent from "../components/ProjectViewComponent";
import projects from "../data/projects"
import NotFoundPage from "./NotFoundPage";

const Projects = () => {
    const { projectName } = useParams<{ projectName: string }>();
    const currentIndex = projects.findIndex(p => p.name === decodeURIComponent(projectName ?? ""));
    if (currentIndex === -1) {
        return <NotFoundPage />;
    }
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    return (
        <div className="min-h-screen">
            <div className="flex flex-row items-center justify-between mt-2 mb-0 font-jetbrains">
                {/* Headings */}
                <div className="flex flex-col items-center justify-center gap-2 w-64">
                    <h2 className="text-xl underline underline-offset-6 mt-3 mb-4">[ Index ]</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-64">
                    <h2 className="text-xl underline underline-offset-6 mt-3 mb-4">[ Project Details ]</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-58">
                    <h2 className="text-xl underline underline-offset-6 mt-3 mb-4">[ Controls ]</h2>
                </div>
            </div>
            <div className="flex flex-row h-screen justify-between mt-2 mb-0 font-jetbrains">
                <div className="w-120 gap-4">
                    {projects.map((p, idx) => {
                        const isActive = projectName === p.name;
                        return (
                            <Link key={idx} to={`/projects/${encodeURIComponent(p.name)}`} className={`block ml-3 pb-2 transition-colors ${isActive ? 'text-blue-500' : 'text-blue-400 hover:text-blue-500'}`}>[ {p?.name} ]</Link>
                        );
                    })}
                </div>
                <div className="w-screen mx-2 p-2">
                    <div className="h-screen flex flex-col">
                        <ProjectViewComponent projectName={projectName} />
                    </div>
                </div>
                <div className="w-85 flex flex-col items-center text-lg">
                    {projects.length > 1 && nextProject && prevProject && (

                        <>
                            <Link to={`/projects/${encodeURIComponent(nextProject.name)}`} className="text-blue-400 hover:text-blue-500">[ Next ]</Link>
                            <Link to={`/projects/${encodeURIComponent(prevProject.name)}`} className="text-blue-400 hover:text-blue-500">[ Prev ]</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects

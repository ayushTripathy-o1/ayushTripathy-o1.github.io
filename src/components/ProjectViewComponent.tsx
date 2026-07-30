import projects from "../data/projects";
import ProjectImageComponent from "./ProjectImageComponent";

type ProjectViewComponentProps = {
    projectName: string;
}
const ProjectViewComponent = ({ projectName }: ProjectViewComponentProps) => {
    const selectedProject = projects.find(p => p.name === projectName);
    return (
        <div className="px-4">
            <div className="text-2xl tracking-tight font-bold">{selectedProject.name}</div><hr className="border-2 border-slate-300 mt-2" />
            <div className="flex flex-col items-center m-5 p-2"> <ProjectImageComponent imgSrc={selectedProject.image} /> </div>
            <p className="text-xl mt-2 font-bold">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 items-baseline mt-8">
                <span className="text-xl font-bold">Tech Stack:</span>
                {selectedProject.techStack.map((stack) => (
                    <span key={stack} className="text-base text-blue-400">[ {stack} ]</span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 items-baseline mt-8">
                <p className="text-xl font-bold">Features:</p>
                <ul>
                    {selectedProject.features.map((feat) => (
                        <li key={feat} className="text-base text-blue-400">* [ {feat} ]</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap items-baseline gap-4 mt-4">
                <span className="text-xl font-bold">View More on:</span>
                {Object.entries(selectedProject.links).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:underline hover:text-blue-500 text-base">[{key.charAt(0).toUpperCase() + key.substring(1, key.length)}]</a>
                ))}
            </div>
        </div>
    )
}

export default ProjectViewComponent

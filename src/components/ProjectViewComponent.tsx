type ProjectViewComponentProps = {
    projectName: string;
}
const ProjectViewComponent = ({ projectName }: ProjectViewComponentProps) => {
    return (
        <div>{projectName}</div>
    )
}

export default ProjectViewComponent

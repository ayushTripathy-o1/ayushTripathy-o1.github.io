type ProjectImageComponentProps = { imgSrc: string };
const ProjectImageComponent = ({ imgSrc }: ProjectImageComponentProps) => {
    return (
        <div>Rendering for {imgSrc}</div>
    )
}

export default ProjectImageComponent

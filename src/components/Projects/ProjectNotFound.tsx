import { useLocalFormatHook } from "../../common/hooks/localFormatHook"

const ProjectNotFound = () => {
    const {formatText} = useLocalFormatHook()
    
    return (
        <div className="project-not-found">
            <h2>{formatText("projectNotFoundTitle")}</h2>
            <p className="project-not-found-description">
                {formatText("projectNotFoundDescription")}
            </p>
        </div>
    )
}

export default ProjectNotFound
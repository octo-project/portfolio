import { Link } from 'react-router-dom'
import { Projects } from '../../../constant/projectListConstant'

const ProjectLists = () => {
  return (
    <div className="projectCard">
      {Projects.map((project, index) => {
        return (
            <div
              className="card"
              style={
                project?.background
                  ? { background: project?.background, color: 'white' }
                  : {}
              }
            >
              <Link to={{ pathname: project.link, state: project }} className='card-link' key={index}>
                  <img
                    src={project.logo}
                    style={
                      project?.logoSize
                        ? { width: project.logoSize, height: project.logoSize }
                        : {}
                    }
                    className="logo"
                    alt="casque.jpg"
                  />
                  <span style={{color: project.textColor || "#29293e"}}>{project.name}</span>
              </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectLists

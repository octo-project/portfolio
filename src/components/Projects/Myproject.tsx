import './style.css'
import { FC } from 'react'
import ProjectNotFound from './ProjectNotFound'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useLocalFormatHook } from '../../common/hooks/localFormatHook'
import { useProjectConstant } from '../../constant/projectListConstant'

const MyProject: FC = () => {
  const params = useParams()
  const location = useLocation()
  const {Projects} = useProjectConstant()
  const search = new URLSearchParams(params)
  const {formatText} = useLocalFormatHook()
  const projectName = search.get('name') || null

  const currentProject = Projects.find(el => el.name.toLowerCase() === projectName?.toLowerCase());
  const logo = currentProject ? currentProject?.logo : undefined;

  return (
    <div className="containerProject">
      <h3 className="containerProjectTitle">
        <Link to="/projects" style={{ textDecoration: 'none', fontSize: 18 }}>
          {formatText("projects").toUpperCase()}
        </Link>
        {projectName && (
          <>
            <span style={{ fontWeight: 'normal', position: "relative", letterSpacing: '2px', display: 'flex', flexDirection:'row', alignItems:'end' }}>
              <span>/</span>
              {logo && (<img src={logo} alt="project" style={{marginLeft: "3px", left:8, top: -3, position: "absolute", width: 38}}/>)}
              <span className='projectTitle' style={{marginLeft: logo ? "44px": "10px"}}>
                {` ${projectName}`}
              </span>
            </span>
          </>
        )}
      </h3>

      {
        !projectName && (<ProjectLists />)
      }
      {
        projectName && currentProject && (<ProjectDetails project={location.state} />)
      }
      {
        projectName && !currentProject && (<ProjectNotFound/>)
      }
    </div>
  )
}

export default MyProject

import './style.css'
import { FC } from 'react'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'
import { useLocalFormatHook } from '../../common/hooks/localFormatHook'
import { useProjectConstant } from '../../constant/projectListConstant'
import { Link, useLocation, useParams, useHistory } from 'react-router-dom'

const MyProject: FC = () => {
  const params = useParams()
  const location = useLocation()
  const {Projects} = useProjectConstant()
  const history  = useHistory()
  const search = new URLSearchParams(params)
  const {formatText} = useLocalFormatHook()
  const projectName = search.get('name') || null

  const currentProject = Projects.find(el => el.name.toLowerCase() === projectName?.toLowerCase());
  const logo = currentProject ? currentProject?.logo : undefined;

  if(projectName && !currentProject){
    history.replace("/random-path")
  }

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
              <span className='projectTitle' style={{marginLeft: "44px"}}>
                {` ${projectName}`}
              </span>
            </span>
          </>
        )}
      </h3>

      {!projectName ? (
        <ProjectLists />
      ) : (
        <ProjectDetails project={location.state} />
      )}
    </div>
  )
}

export default MyProject

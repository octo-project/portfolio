import './style.css'
import { FC } from 'react'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'
import { Projects } from '../../constant/projectListConstant'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useLocalFormatHook } from '../../common/hooks/localFormatHook'

const MyProject: FC = () => {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(params)
  const {formatText} = useLocalFormatHook()
  const projectName = search.get('name') || null

  const logo = Projects.find(el => el.name.toLowerCase() === projectName?.toLowerCase())?.logo;

  return (
    <div className="containerProject">
      <h3 className="containerProjectTitle">
        <Link to="/" style={{ textDecoration: 'none', fontSize: 18 }}>
          {formatText("projects").toUpperCase()}
        </Link>
        {projectName && (
          <>
            <span style={{ fontWeight: 'normal', letterSpacing: '2px', display: 'flex', flexDirection:'row', alignItems:'end' }}>
              <span>/</span>
              {logo && (<img src={logo} alt="project" style={{marginLeft: "3px"}} width={25}/>)}
              <span style={{marginLeft: "3px"}}>
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

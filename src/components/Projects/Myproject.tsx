import './style.css'
import { FC } from 'react'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'
import { Projects } from '../../constant/projectListConstant'
import { Link, useLocation, useParams } from 'react-router-dom'

const MyProject: FC = () => {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(params)


  const projectName = search.get('name') || null

  const logo = Projects.find(el => el.name.toLowerCase() === projectName?.toLowerCase())?.logo;

  console.log("logo : ", logo);

  return (
    <div className="containerProject">
      <h3 className="containerProjectTitle">
        <Link to="/" style={{ textDecoration: 'none', fontSize: 18 }}>
          PROJECTS
        </Link>
        {projectName && (
          <>
            
            <span style={{ fontWeight: 'normal', letterSpacing: '2px' }}>
              / 
              {logo && (<img src={logo}/>)}
              {` ${projectName}`}
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

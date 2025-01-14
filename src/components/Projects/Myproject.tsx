import './style.css'
import { FC } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'

const MyProject: FC = () => {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(params)


  const projectName = search.get('name') || null

  return (
    <div className="containerProject">
      <h3 className="containerProjectTitle">
        <Link to="/" style={{ textDecoration: 'none', fontSize: 18 }}>
          PROJECTS
        </Link>
        {projectName && (
          <span style={{ fontWeight: 'normal', letterSpacing: '2px' }}>{`/ ${projectName}`}</span>
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

import './style.css'
import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectLists from './ProjectLists/ProjectLists'
import ProjectDetails from './ProjectDetail/ProjectDetail'

const MyProject: FC = () => {
  const params = useParams()
  const search = new URLSearchParams(params)

  const projectName = search.get('name') || null

  return (
    <div className="containerProject">
      <h3 className="containerProjectTitle">
        <Link to="/" style={{ textDecoration: 'none' }}>
          PROJECTS
        </Link>{' '}
        {projectName && (
          <span style={{ fontWeight: 'bold' }}>{`/ ${projectName}`}</span>
        )}
      </h3>

      {!projectName ? <ProjectLists /> : <ProjectDetails />}
    </div>
  )
}

export default MyProject

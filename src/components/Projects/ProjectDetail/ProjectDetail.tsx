import './styles.css'
import About from './About/About'
import React, { FC, useState } from 'react'
import casque from '../../../assets/casque.jpg'
import Screenshoot from './ScreenShoot/ScreenShoot'

type tabType = 'about' | 'screenshoot'
interface ProjectDetailsProps {
  project: any
}

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { project } = props
  const [tab, setTab] = useState<tabType>('about')

  const handleSelectTab = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tab: tabType,
  ) => {
    setTab(tab)
  }

  const GET_CURRENT_TAB: Record<tabType, JSX.Element> = {
    about: <About about={project.about} />,
    screenshoot: <Screenshoot />,
  }

  return (
    <div style={{ paddingLeft: '80px' }}>
      <div className="detailsTitlesContainer">
        <div className="detailsTitles">
          <div
            className="btnDetails"
            onClick={(event) => handleSelectTab(event, 'about')}
          >
            about
          </div>
          <div
            className="btnDetails"
            onClick={(event) => handleSelectTab(event, 'screenshoot')}
          >
            screenshoot
          </div>
        </div>
        <div className="detailLogoContainer">
          <img src={project.logo} className="detailLogo" alt="casque.jpg" />
        </div>
      </div>
      {GET_CURRENT_TAB[tab]}
    </div>
  )
}

export default ProjectDetails

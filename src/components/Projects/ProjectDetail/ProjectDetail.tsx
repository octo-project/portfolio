import './styles.css'
import About from './About/About'
import React, { FC, useState } from 'react'
import Screenshoot from './ScreenShoot/ScreenShoot'
import { useLocalFormatHook } from '../../../common/hooks/localFormatHook'

type tabType = 'about' | 'screenshoot'

interface ProjectDetailsProps {
  project: any
}

const ProjectDetails: FC<ProjectDetailsProps> = (props) => {
  const { project } = props
  const [tab, setTab] = useState<tabType>('about')
  const {formatText} = useLocalFormatHook()

  const handleSelectTab = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tab: tabType,
  ) => {
    setTab(tab)
  }

  const GET_CURRENT_TAB: Record<tabType, JSX.Element> = {
    about: <About about={project.about} />,
    screenshoot: <Screenshoot screenShoots={project.screenShoots} screenShootType={project.screenShootType} />,
  }

  return (
    <div style={{ paddingLeft: '20px' }}>
      <div className="detailsTitlesContainer">
        <div className="detailsTitles">
          <div
            className="btnDetails animate"
            onClick={(event) => handleSelectTab(event, 'about')}
          >
            {formatText("about")}
          </div>
          <div
            className="btnDetails animate"
            onClick={(event) => handleSelectTab(event, 'screenshoot')}
          >
            {formatText("screenshoot")}
          </div>
        </div>
        <div className="detailLogoContainerx">
          <div className="detailLogoContainer">
            <img src={project.logo} className="detailLogo" alt="casque.jpg" />
            <div className="info">
              <h5>Authentification :</h5>
              <div>
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="columnTitle">user:</td>
                      <td className="columnMdp">demoUser</td>
                    </tr>
                    <tr>
                      <td className="columnTitle">password:</td>
                      <td className="columnMdp">demoPassword</td>
                    </tr>
                    <tr>
                      <td className="columnTitle">url:</td>
                      <td className="columnMdp">
                        <a href="https://asdasdasd.xyz" target='_blank' rel='noopener noreferrer'>https://asdasdasd.xyz</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {GET_CURRENT_TAB[tab]}
    </div>
  )
}

export default ProjectDetails

import React, { FC } from 'react'
import Adom from './projects/Adom/Adom'
import Itts from './projects/Itts/Itts'
import FourMp from './projects/4MP/4Mp'
import { Link } from 'react-router-dom'
import OSAW from './projects/OSAW/OSAW'
import Yoomum from './projects/Yoomum/Yoomum'
import Lappsys from './projects/Lappsys/Lappsys'
import Markaiter from './projects/Markaiter/Markaiter'
import Konsistent from './projects/Konsistent/Konsistent'
import HapticComposer from './projects/HapticComposer/HapticComposer'
import { useLocalFormatHook } from '../../../../common/hooks/localFormatHook'

interface ExperienceProps {
  refer: React.MutableRefObject<null>
}

const Experience: FC<ExperienceProps> = (props) => {
  const { refer } = props
  const {formatText} = useLocalFormatHook()
  
  return (
    <section className="content" ref={refer}>
      <h3>{formatText("experienceAndProjects")}</h3>
      <h4>{formatText("professionalProjects")}</h4>
      
      <Konsistent/>
      <HapticComposer/>
      <Yoomum/>
      <Markaiter/>
      <FourMp/>
      <Adom/>
      <Lappsys/>
      <Itts/>
      <OSAW/>

      <h4>{formatText("personaProjects")}</h4>
      <div className="project-perso animate">
        <Link to={'/projects'}>
          {formatText("myAchievements")}
        </Link> 
      </div>
    </section>
  )
}

export default Experience

import React, { FC } from 'react'
import Yoomum from './projects/Yoomum/Yoomum'
import D3Chip from '../../../TechnosChip/D3Chip'
import NodeChip from '../../../TechnosChip/NodeChip'
import ReactChip from '../../../TechnosChip/ReactChip'
import Konsistent from './projects/Konsistent/Konsistent'
import AntDesignChip from '../../../TechnosChip/AntDesignChip'
import MaterialUiChip from '../../../TechnosChip/MaterialUiChip'
import TypescriptChip from '../../../TechnosChip/TypescriptChip'
import HapticComposer from './projects/HapticComposer/HapticComposer'
import Markaiter from './projects/Markaiter/Markaiter'

interface ExperienceProps {
  refer: React.MutableRefObject<null>
}

const Experience: FC<ExperienceProps> = (props) => {
  const { refer } = props
  return (
    <section className="content" ref={refer}>
      <h3>Experiences & Projects</h3>
      <h4>Project professionel</h4>
      
      <Konsistent/>
      <HapticComposer/>
      <Yoomum/>
      <Markaiter/>

      {/*  
      <h4>Project personnel</h4>
      <div className="experience-card">
        <span className="experience-card-title">Avatar Generator:</span>
        <div>
          <p>
            Une module npm pour generer des avatars en randoom ou
            personalisable.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Creation from scratch.</li>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>React, Typescript</p>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Experience

import React, { FC } from 'react'
import Adom from './projects/Adom/Adom'
import Itts from './projects/Itts/Itts'
import FourMp from './projects/4MP/4Mp'
import Yoomum from './projects/Yoomum/Yoomum'
import Lappsys from './projects/Lappsys/Lappsys'
import Markaiter from './projects/Markaiter/Markaiter'
import Konsistent from './projects/Konsistent/Konsistent'
import HapticComposer from './projects/HapticComposer/HapticComposer'

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
      <Adom/>
      <Lappsys/>
      <Itts/>
      <FourMp/>
      {/* Easy chain */}
      {/* Leviathan loi en vigeur  Angular */}
      
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

import { FC } from 'react'
import TechnoCard from '../../../../common/cards/technoCard/TechnoCard'

interface AboutProps {
  about: any
}

const About: FC<AboutProps> = (props) => {
  const { about } = props
  return (
    <div className="projectDetails">
      <div style={{display: 'flex'}}>
        <h5>
          <u>
            <a href={about.demoUrl} target='_blank' rel='noopener noreferrer'>See demo</a>
          </u>
        </h5>
        <h5>
          <u>
            <a href={about.gitHubRepository} target='_blank' rel='noopener noreferrer'>Repository</a>
          </u>
        </h5>
      </div>
      <h5>Application descriptions : </h5>
      <p style={{ maxWidth: '67%', marginLeft: '9px', fontSize:12, textAlign: 'justify' }}>
        {about.description}
      </p>
      <h5>Animation : All animation is made with after effect and lottie</h5>
      <h5>
        Functionnality :
        {about.functionnalities.map((item: any) => {
          return <span className="functionnalityCard purpleBg">{item}</span>
        })}
      </h5>
      <h5>Technos : </h5>
      <div className="technoGrid">
        {about.technos.map((techno: any) => {
          return <TechnoCard text={techno} img={null} />
        })}
      </div>
    </div>
  )
}

export default About

import React, { FC } from 'react'
import TechnoCard from '../../../../common/cards/technoCard/TechnoCard'

interface AboutProps {
  about: any
}

const About: FC<AboutProps> = (props) => {
  const { about } = props
  return (
    <div className="projectDetails">
      <h5>
        Demo : <u>{about.demoUrl}</u>
      </h5>
      <h5>
        Repository : <u>{about.gitHubRepository}</u>
      </h5>
      <h5>Application descriptions : </h5>
      <p style={{ maxWidth: '67%', textAlign: 'justify' }}>
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
          return <TechnoCard text={techno} />
        })}
      </div>
    </div>
  )
}

export default About

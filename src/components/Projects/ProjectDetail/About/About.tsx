import { FC } from 'react'
import TechnoCard from '../../../../common/cards/technoCard/TechnoCard'
import { useLocalFormatHook } from '../../../../common/hooks/localFormatHook';

interface AboutProps {
  about: any;
}

const About: FC<AboutProps> = (props) => {
  const { about } = props
  const {formatText} = useLocalFormatHook()

  return (
    <div className="projectDetails">
      <div style={{display: 'flex'}}>
        <h5>
          <u>
            <a href={about.demoUrl} target='_blank' rel='noopener noreferrer'>{formatText("seeDemo")}</a>
          </u>
        </h5>
        <h5>
          <u>
            <a href={about.gitHubRepository} target='_blank' rel='noopener noreferrer'>{formatText("repository")}</a>
          </u>
        </h5>
      </div>
      <h5>{formatText("whatItDoes")} : </h5>
      <p style={{ maxWidth: '67%', marginLeft: '9px', fontSize:12, textAlign: 'justify' }}>
        {about.description}
      </p>
      <h5>{formatText("missions")} : </h5>
      <ul>
        {(about?.missions || []).map((mission: any, index: number) => {
          return (
            <li key={index}>{mission}</li>           
          )
        })}
      </ul>
      {/* <h5>Animation :</h5>
      <div className="technoGrid">
        All animation is made with after effect and lottie
      </div> */}
      <h5>
        {formatText("Functionnality")} :
      </h5>
      <div className="technoGrid">
        {about.functionnalities.map((item: any, index: number) => {
          return <span className="functionnalityCard purpleBg animate" key={index}>{item}</span>
        })}
      </div>
      <h5>{formatText("tech")} : </h5>
      <div className="technoGrid">
        {about.technos.map((techno: any, index: number) => {
          return <TechnoCard text={techno} key={index}/>
        })}
      </div>
    </div>
  )
}

export default About

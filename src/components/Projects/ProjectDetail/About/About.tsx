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
        <h5 style={{fontSize: '15px', color: "black"}}>
          <u>
            <a href={about.demoUrl} target='_blank' rel='noopener noreferrer'>{formatText("seeDemo")}</a>
          </u>
        </h5>
        <h5 style={{fontSize: '15px', color: "black"}}>
          <u>
            <a href={about.gitHubRepository} target='_blank' rel='noopener noreferrer'>{formatText("repository")}</a>
          </u>
        </h5>
      </div>
      <h5>
        <span className='spkear-medium animate'>🔉</span>
        {formatText("whatItDoes")} : 
      </h5>
      <p style={{ marginLeft: '9px', marginRight: '9px', fontSize: '16px', textAlign: 'justify' }}>
        {formatText(about.description)}
      </p>
      <h5>
        <span className='spkear-medium animate'>🔉</span>
        {formatText("missions")} : 
      </h5>
      <ul>
        {(about?.missions || []).map((mission: any, index: number) => {
          return (
            <li key={index}>{formatText(mission)}</li>           
          )
        })}
      </ul>
      <h5>
        {formatText("Functionnality")} :
      </h5>
      <div className="technoGrid">
        {about.functionnalities.map((item: any, index: number) => {
          return <span className="functionnalityCard purpleBg animate" key={index}>{formatText(item)}</span>
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

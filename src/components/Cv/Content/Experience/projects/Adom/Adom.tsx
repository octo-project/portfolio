import Gatsby from "../../../../../TechnosChip/Gatsby"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"

const Adom = () => {
  const {formatText} = useLocalFormatHook()

  return (
    <div className="experience-card">
    <div className="experience-card-header-container">
      {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
        <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
      </Link> */}
      <span className="experience-card-title">Adom :</span>
    </div>
    <div>
      <p className='project-description'>
        {formatText("projectAdomOverview")}
      </p>
      <div>
        <span className="experience-card-subtitle">Missions :</span>
        <ol>
          <li>{formatText("projectAdmoMission1")}</li>
          <li>{formatText("projectAdmoMission2")}</li>
          <li>{formatText("projectAdmoMission3")}</li>
        </ol>
      </div>
      <div>
        <span className="experience-card-subtitle">Technos:</span>
        <div className="technos-content">
          <Gatsby /> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default Adom
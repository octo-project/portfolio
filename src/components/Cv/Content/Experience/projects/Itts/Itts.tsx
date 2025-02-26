import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"
import LaravelChip from "../../../../../TechnosChip/LaravelChip"
import StripeChip from "../../../../../TechnosChip/StripeChip"

const Itts = () => {
    const {formatText} = useLocalFormatHook()
    return (
            <div className="experience-card">
      <div className="experience-card-header-container">
        {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
          <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
        </Link> */}
        <span className="experience-card-title">Itts :</span>
      </div>
      <div>
        <p className='project-description'>
          {formatText("projectIttsOverview")}
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>{formatText("projectIttsMission1")}</li>
            <li>{formatText("projectIttsMission2")}</li>
            <li>{formatText("projectIttsMission3")}</li>
            <li>{formatText("projectIttsMission4")}</li>
          </ol>
        </div>
        <div>
          <span className="experience-card-subtitle">Technos:</span>
          <div className="technos-content">
            <LaravelChip /> 
            <StripeChip/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Itts
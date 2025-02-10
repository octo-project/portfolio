import Link from "../../../../../Link"
import D3Chip from "../../../../../TechnosChip/D3Chip"
import ReactChip from "../../../../../TechnosChip/ReactChip"
import ElectronChip from "../../../../../TechnosChip/ElectronChip"
import AntDesignChip from "../../../../../TechnosChip/AntDesignChip"
import TypescriptChip from "../../../../../TechnosChip/TypescriptChip"
import InterhapticsLogo from "../../../../../../assets/EsnLogo/interhaptics.png"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"

const HapticComposer = () => {
  const {formatText} = useLocalFormatHook()

  return (
    <div className="experience-card">
      <div className="experience-card-header-container">
        <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
          <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
        </Link>
        <span className="experience-card-title">Haptic Composer:</span>
      </div>
      <div>
        <p className='project-description'>
          {formatText("projectHapticOverview")}
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>{formatText("projectHapticMission1")}</li>
            <li>{formatText("projectHapticMission2")}</li>
            <li>{formatText("projectHapticMission3")}</li>
            <li>{formatText("projectHapticMission4")}</li>
            <li>{formatText("projectHapticMission5")}</li>
            <li>{formatText("projectHapticMission6")}</li>
            <li>{formatText("projectHapticMission7")}</li>
            <li>Optimisation des rendu D3</li>
          </ol>
        </div>
        <div>
          <span className="experience-card-subtitle">Technos:</span>
          <div className="technos-content">
            <ReactChip /> 
            <TypescriptChip /> 
            <AntDesignChip />
            <D3Chip/>
            <ElectronChip/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HapticComposer
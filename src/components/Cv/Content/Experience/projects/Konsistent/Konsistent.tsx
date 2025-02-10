import NodeChip from "../../../../../TechnosChip/NodeChip"
import ReactChip from "../../../../../TechnosChip/ReactChip"
import MaterialUiChip from "../../../../../TechnosChip/MaterialUiChip"
import TypescriptChip from "../../../../../TechnosChip/TypescriptChip"
import KonsistentLogo from "../../../../../../assets/EsnLogo/konsistent.png"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"

const Konsistent = () => {
    const {formatText} = useLocalFormatHook()
    
    return (
        <div className="experience-card">
          <div className="experience-card-header-container">
            <img src={KonsistentLogo} className="esn-logo" alt="konsistent"/>
            <span className="experience-card-title">Konsistent :</span>
          </div>
          <div>
            <p className='project-description'>
              {formatText("projectKonsistentOverview")}
            </p>
            <div>
              <span className="experience-card-subtitle">Missions :</span>
              <ol>
                <li>{formatText("projectKonsistentMission1")}</li>
                <li>{formatText("projectKonsistentMission2")}</li>
                <li>{formatText("projectKonsistentMission3")}</li>
                <li>{formatText("projectKonsistentMission4")}</li>
                <li>{formatText("projectKonsistentMission5")}</li>
                <li>
                supervisé la qualité et la cohérence du code tout au long du processus de développement pour garantir la conformité aux normes de codage, optimiser les performances et assurer une maintenabilité à long terme</li>  
              </ol>
            </div>
            <div>
              <span className="experience-card-subtitle">Technos:</span>
              <div className="technos-content">
                <ReactChip /> 
                <TypescriptChip /> 
                <NodeChip />
                <MaterialUiChip /> 
              </div>
            </div>
          </div>
      </div>
    )
}

export default Konsistent
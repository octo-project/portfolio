import { ReactChip } from "../../../../../TechnosChip"
import OsawLogo from "../../../../../../assets/EsnLogo/osaw.png"
import LaravelChip from "../../../../../TechnosChip/LaravelChip"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"

const OSAW = () => {
    const {formatText} = useLocalFormatHook()
    return (
        <div className="experience-card">
            <div className="experience-card-header-container">
                <img src={OsawLogo} className="esn-osaw-logo" alt="interhaptics"/>
                {/* <span className="experience-card-title">OSAW :</span> */}
            </div>
            <div>
            <p className='project-description'>
               {formatText("projectOsawOverview")}
            </p>
            <div>
                <span className="experience-card-subtitle">Missions :</span>
                <ol>
                    <li>{formatText("projectOsawMission1")}</li>
                    <li>{formatText("projectOsawMission2")}</li>
                    <li>{formatText("projectOsawMission3")}</li>
                    <li>{formatText("projectOsawMission4")}</li>
                    <li>{formatText("projectOsawMission5")}</li>
                    <li>{formatText("projectOsawMission6")}</li>
                    <li>{formatText("projectOsawMission7")}</li>
                </ol>
            </div>
            <div>
                <span className="experience-card-subtitle">Technos:</span>
                <div className="technos-content">
                <ReactChip />
                <LaravelChip/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OSAW
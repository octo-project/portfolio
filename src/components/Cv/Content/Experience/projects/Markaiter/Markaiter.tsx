import Link from "../../../../../Link"
import MarkaiterLogo from "../../../../../../assets/EsnLogo/markaiter.png"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"
import { FacebookSDKChip, GraphqlChip, MaterialUiChip, PrismaChip, PythonChip, ReactChip } from "../../../../../TechnosChip"

const Markaiter = () => {
    const {formatText} = useLocalFormatHook()

    return (
        <div className="experience-card">
            <div className="experience-card-header-container">
                <Link target={"https://www.markaiter.com/"} >
                    <img src={MarkaiterLogo} className="esn-yoomum-logo" alt="markaiter"/>
                </Link>
                <span className="experience-card-title">Markaiter:</span>
            </div>
            <div>
            <p className='project-description'>
               {formatText("projectMarketerOverview")}
            </p>
            <div>
                <span className="experience-card-subtitle">Missions :</span>
                <ol>
                    <li>{formatText("projectMarketerMission1")}</li>
                    <li>{formatText("projectMarketerMission2")}</li>
                    <li>{formatText("projectMarketerMission3")}</li>
                    <li>{formatText("projectMarketerMission4")}</li>
                    <li>{formatText("projectMarketerMission5")}</li>
                    <li>{formatText("projectMarketerMission6")}</li>
                </ol>
            </div>
            <div>
              <span className="experience-card-subtitle">Technos:</span>
              <div className="technos-content">
                <PythonChip/>
                <ReactChip />
                <MaterialUiChip />
                <GraphqlChip/>
                <FacebookSDKChip/>
                <PrismaChip/>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Markaiter
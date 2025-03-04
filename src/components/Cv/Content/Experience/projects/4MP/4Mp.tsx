import ReactNativeChip from "../../../../../TechnosChip/ReactNativeChip"
import { GraphqlChip, PrismaChip, ReactChip } from "../../../../../TechnosChip"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"
import { lazy, Suspense } from "react"

const ProjectDescription = lazy(() => import('../../../../Header/HeaderDescription'))

const FourMp = () => {
  const {formatText} = useLocalFormatHook()
    return (
      <div className="experience-card">
        <div className="experience-card-header-container">
          {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
            <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
          </Link> */}
          <span className="experience-card-title">4Mp :</span>
        </div>
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <ProjectDescription text='project4MpOverview' className="project-description"/>
          </Suspense>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>{formatText("project4MpSubTitle")} :</li>
              <ul>
                <li>{formatText("project4MpMission1")}</li>
                <li>{formatText("project4MpMission2")}</li>
                <li>{formatText("project4MpMission3")}</li>
              </ul>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <ReactChip />
              <GraphqlChip/>
              <ReactNativeChip/>
              <PrismaChip/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FourMp
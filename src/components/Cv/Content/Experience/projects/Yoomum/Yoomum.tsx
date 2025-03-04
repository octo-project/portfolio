import Link from "../../../../../Link"
import SymfonyChip from "../../../../../TechnosChip/Symfony"
import KotlinChip from "../../../../../TechnosChip/KotlinChip"
import YoomumLogo from "../../../../../../assets/EsnLogo/yoomum.png"
import ApiPlatformeChip from "../../../../../TechnosChip/ApiPlatforme"
import FirebaseDBChip from "../../../../../TechnosChip/FirebaseDBChip"
import FirebaseAuthChip from "../../../../../TechnosChip/FirebaseAuthChip"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"
import FirebaseDynamicLinkChip from "../../../../../TechnosChip/FirebaseDynamicLinksChip"
import { lazy, Suspense } from "react"

const ProjectDescription = lazy(() => import('../../../../Header/HeaderDescription'))

const Yoomum = () => {
    const {formatText} = useLocalFormatHook()
    return (
        <div className="experience-card">
        <div className="experience-card-header-container">
            <Link target={"https://www.yoomum.com/"}>
              <img src={YoomumLogo} className="esn-yoomum-logo" loading='lazy' alt="yoomum"/>
            </Link>
            <span className="experience-card-title">YOOMUM:</span>
          </div>
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <ProjectDescription text='projectYoomumOverview' className="project-description"/>
          </Suspense>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>{formatText("projectYoomumMission1")}</li>
              <li>{formatText("projectYoomumMission2")}</li>
              <li>{formatText("projectYoomumMission3")}</li>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <SymfonyChip /> 
              <ApiPlatformeChip/>
              <FirebaseAuthChip /> 
              <FirebaseDBChip/>
              <FirebaseDynamicLinkChip/>
              <KotlinChip/>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Yoomum
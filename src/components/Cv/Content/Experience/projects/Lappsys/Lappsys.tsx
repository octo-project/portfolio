import Link from "../../../../../Link"
import Minio from "../../../../../TechnosChip/Minio"
import LappsysLogo from "../../../../../../assets/EsnLogo/neoptim.png"
import { GraphqlChip, PrismaChip, ReactChip } from "../../../../../TechnosChip"
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook"
import { lazy, Suspense } from "react"

const ProjectDescription = lazy(() => import('../../../../Header/HeaderDescription'))

const Lappsys = () => {
    const {formatText} = useLocalFormatHook()
    return (
      <div className="experience-card">
        <div className="experience-card-header-container">
          <Link target={"https://neoptimconsulting.com/"} >
            <img src={LappsysLogo} className="esn-neoptim-logo" loading='lazy' alt="neoptim"/>
          </Link>
          <span className="experience-card-title">Lappsys :</span>
        </div>
        <div>
          <Suspense fallback={<div>Loading ...</div>}>
            <ProjectDescription text='projectLappsysOverview' className="project-description"/>
          </Suspense>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>{formatText("projectLappsysTitle")}</li>
              <ul>
                <li>{formatText("projectLappsysMission1")}</li>
                <li>{formatText("projectLappsysMission2")}</li>
                <li>{formatText("projectLappsysMission3")}</li>
                <li>{formatText("projectLappsysMission4")}</li>
                <li>{formatText("projectLappsysMission5")}</li>
                <li>{formatText("projectLappsysMission6")}</li>
                <li>{formatText("projectLappsysMission7")}</li>
              </ul>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <Minio /> 
              <ReactChip />
              <GraphqlChip/>
              <PrismaChip/>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Lappsys
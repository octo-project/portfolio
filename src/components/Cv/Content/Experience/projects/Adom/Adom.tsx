import Gatsby from "../../../../../TechnosChip/Gatsby";
import { useLocalFormatHook } from "../../../../../../common/hooks/localFormatHook";
import { lazy, Suspense } from "react";

const ProjectDescription = lazy(
  () => import("../../../../Header/HeaderDescription"),
);

const Adom = () => {
  const { formatText } = useLocalFormatHook();

  return (
    <div className="experience-card">
      <div className="experience-card-header-container">
        {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
        <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
      </Link> */}
        <span className="experience-card-title">Adom :</span>
      </div>
      <div>
        <Suspense fallback={<div>Loading ...</div>}>
          <ProjectDescription
            text="projectAdomOverview"
            className="project-description"
          />
        </Suspense>
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
  );
};

export default Adom;

import "./styles.css";
import About from "./About/About";
import React, { useState } from "react";
import Screenshoot from "./ScreenShoot/ScreenShoot";

type tabType = "about" | "screenshoot";

const ProjectDetails = () => {
  const [tab, setTab] = useState<tabType>("about");

  const handleSelectTab = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tab: tabType
  ) => {
    setTab(tab);
  };

  const GET_CURRENT_TAB: Record<tabType, JSX.Element> = {
    about: <About />,
    screenshoot: <Screenshoot />,
  };

  return (
    <div style={{paddingLeft: '80px'}}>
      <div className="detailsTitles">
        <div
          className="btnDetails"
          onClick={(event) => handleSelectTab(event, "about")}
        >
          about
        </div>
        <div
          className="btnDetails"
          onClick={(event) => handleSelectTab(event, "screenshoot")}
        >
          screenshoot
        </div>
      </div>
      {GET_CURRENT_TAB[tab]}
    </div>
  );
};

export default ProjectDetails;

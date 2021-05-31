import React from "react";
import TechnoCard from "../../../../common/cards/technoCard/TechnoCard";

const Screenshoot = () => {
  return (
    <div className="projectDetails">
      <h5>
        Demo : <u>https://podcast-app-web.com</u>
      </h5>
      <div className="screenShootMobile">
        <TechnoCard text="Home page" width={200} height={350} />
        <TechnoCard text="Login page" width={200} height={350} />
        <TechnoCard text="Reset password page" width={200} height={350} />
        <TechnoCard text="Message page" width={200} height={350} />
        <TechnoCard text="Setting page" width={200} height={350} />
        <TechnoCard text="User account page" width={200} height={350} />
        <TechnoCard text="Tracking page" width={200} height={350} />
      </div>
    </div>
  );
};

export default Screenshoot;

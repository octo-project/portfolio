import "./header.css";
import React, { FC, useContext } from "react";
import { CvContext } from "../../../provider/CvProvider/CvProvider";
import { CV_TAB, SET_CURRENT_TAB } from "../../../reducer/CvReducer/CvReducer";
import MyCvPicture from "../../../assets/Portfolio Design V2/Assets/Cv_picture.jpg";

const Header: FC = (props) => {
  const { dispatchCvState } = useContext(CvContext);

  const handleSetCurrentTab = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tab: CV_TAB
  ) => {
    dispatchCvState({
      type: SET_CURRENT_TAB,
      value: tab,
    });
  };

  return (
    <div className="CvHeaderContainer">
      <div className="photoCv">
        <img src={MyCvPicture} width={170} alt="no img" />
      </div>
      <div className="CvContent">
        <div>
          <span>TSIALONINA Heriniaina Mathieu</span>
          <p>Born on 11 october 1996</p>
        </div>
        <div className="cvMenu">
          <div
            className="btnCustom"
            onClick={(event) => handleSetCurrentTab(event, "Dîplome")}
          >
            Dîplomes/Certifications
          </div>
          <div
            className="btnCustom"
            onClick={(event) => handleSetCurrentTab(event, "Parcour")}
          >
            Parcours
          </div>
          <div
            className="btnCustom"
            onClick={(event) => handleSetCurrentTab(event, "Experience")}
          >
            Expériences
          </div>
          <div
            className="btnCustom"
            onClick={(event) => handleSetCurrentTab(event, "Passion")}
          >
            Passions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

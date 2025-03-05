import "../TechnosChip.css";
import Link from "../../Link";
import Mui from "../../../assets/techsLogo/mui.png";

const MaterialUiChip = () => {
  return (
    <Link target={"https://mui.com/"}>
      <div className="chip-card animate white-bg">
        <img src={Mui} className="mui-logo" alt="Mui Chip" loading="lazy" />
      </div>
    </Link>
  );
};

export default MaterialUiChip;

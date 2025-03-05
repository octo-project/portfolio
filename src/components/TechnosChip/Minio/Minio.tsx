import "../TechnosChip.css";
import Link from "../../Link";
import MinioLogo from "../../../assets/techsLogo/minio.png";

const Minio = () => {
  return (
    <Link target={"https://min.io/"}>
      <div className="chip-card animate white-bg">
        <img
          src={MinioLogo}
          className="Minio-logo"
          alt="card content"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default Minio;

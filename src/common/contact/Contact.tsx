import "./contact.css";
import { FC } from "react";
import Link from "../../components/Link";

interface contactProp {
  icon: any;
  link: string;
  content?: string;
}

const Contact: FC<contactProp> = (props) => {
  const { icon, link, content } = props;

  return (
    <div className="contactContainer" id={link}>
      <Link target={link}>
        <img src={icon} width={20} height={20} alt="contact" loading="lazy" />
        <label htmlFor={link} className="label-link">{content}</label>
      </Link>
    </div>
  );
};

export default Contact;

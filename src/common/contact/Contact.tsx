import Link from '../../components/Link';
import './contact.css'
import { FC } from 'react'

interface contactProp{
    icon: any;
    link: string;
}

const Contact:FC<contactProp> = (props) => {
    const {icon, link} = props;

    return (
        <div className="contactContainer">
            <Link target={link}>
                <img src={icon} width={25} height={25} alt=""/>
            </Link>
        </div>
    )
}

export default Contact;
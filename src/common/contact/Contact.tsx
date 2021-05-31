import './contact.css'
import { FC } from 'react'

interface contactProp{
    icon: any;
    contact: string;
}

const Contact:FC<contactProp> = (props) => {
    const {icon, contact} = props;

    return (
        <div className="contactContainer">
            <img src={icon} width={25} height={25} alt=""/>
            <span className="contact">{contact}</span>
        </div>
    )
}

export default Contact;
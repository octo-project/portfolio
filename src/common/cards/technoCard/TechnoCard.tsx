import "./style.css"
import { FC } from "react"

interface technoCardProps{
    text: string
    width?: number
    height?: number
}

const TechnoCard: FC<technoCardProps> = (props) => {
    const {text, width, height} = props;

    return (
        <div className="cardTechno" style={{height, width}}>
            {text}
        </div>
    )
}

export default TechnoCard;
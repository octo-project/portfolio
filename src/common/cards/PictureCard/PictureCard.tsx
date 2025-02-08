import './style.css'
import { FC } from "react";

type PictureCardProps = {
    label: string; 
    image: string;
    handleSeePicture: (picture: string) => void;
}

const PictureCard: FC<PictureCardProps> = (props) => {
    const {image, handleSeePicture} = props;

    return (
        <img src={image} onClick={() => handleSeePicture(image)} className="picture-card-img animate-up" alt="recovering" />
    )
}

export default PictureCard
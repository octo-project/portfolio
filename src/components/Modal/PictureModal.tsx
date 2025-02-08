import './modal.css'
import { FC } from 'react';
import RightChevron from '../../assets/chevron-right.png'

type PictureModalProps = {
    picture: string;
    closeModal: () => void; 
    moovImage: (direction: string) => void;
}

const PictureModal: FC<PictureModalProps> = (props) => {
    const {closeModal, picture, moovImage} = props
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className='right absolute-btn animate-up' onClick={() => moovImage("right")}>
                    <img src={RightChevron} width={50} alt="chevron" />
                </button>
                <button className='left absolute-btn animate-up' onClick={() => moovImage("left")}>
                    <img src={RightChevron} width={50} style={{transform: "rotate(180deg)"}} alt="chevron" />
                </button>
                <img src={picture} className='big-img' alt="big-modal" />
                <button className='picture-modal-close-btn animate-up' onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default PictureModal
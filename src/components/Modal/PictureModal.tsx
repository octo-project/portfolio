import "./modal.css";
import { FC } from "react";
import RightChevron from "../../assets/chevron-right.png";

type PictureModalProps = {
  picture: string;
  containerClass: string;
  closeModal: () => void;
  moovImage: (direction: string) => void;
};

const PictureModal: FC<PictureModalProps> = (props) => {
  const { closeModal, picture, moovImage, containerClass } = props;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="right absolute-btn animate-up"
          onClick={() => moovImage("right")}
        >
          <img src={RightChevron} className="chevron-right" width={50} alt="chevron" loading="lazy" />
        </button>
        <button
          className="left absolute-btn animate-up"
          onClick={() => moovImage("left")}
        >
          <img
            width={50}
            alt="chevron"
            loading="lazy"
            src={RightChevron}
            className="chevron-left"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <img
          src={picture}
          loading="lazy"
          alt="big-modal"
          style={{maxWidth: "86%"}}
          className={`${containerClass} picture-modal`}
        />
        <button
          className="picture-modal-close-btn animate-up"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PictureModal;

import { FC, useState } from 'react'
import { PictureModal } from '../../../Modal';
import PictureCard from '../../../../common/cards/PictureCard/PictureCard';

interface ScreenShootProps {
  screenShoots: any[];
  screenShootType: string;
}

const Screenshoot: FC<ScreenShootProps> = (props) => {
  const [openPictureModal, setOpenPictureModal] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<string|null>(null);
  
  const { screenShoots , screenShootType} = props
  const containerClass = screenShootType === 'Mobile' ? 'screenShootMobile' : 'screenShootWeb'

  const handleSeePicture = (picture: string) => {
    setSelectedPicture(picture)
    setOpenPictureModal(true)
  }

  const handleCloseModalPicture = () => setOpenPictureModal(false)

  const moveImage = (direction: string) => {
    if (selectedPicture) {
      const indexOfPicture = screenShoots.findIndex(el => el.image === selectedPicture);
      const maxIndex = screenShoots.length - 1;
      
      const newIndex = direction === 'right' 
        ? indexOfPicture + 1
        : indexOfPicture - 1;
  
      const correctIndex = newIndex < 0 ? maxIndex : (newIndex > maxIndex ? 0 : newIndex);
  
      setSelectedPicture(screenShoots[correctIndex].image);
    }
  };

  return (
    <div className="projectDetails">
      <div className={containerClass}>
        {screenShoots.map((item) => {
          return (
            <PictureCard image={item.image} label={item.label} handleSeePicture={handleSeePicture}/>
          )
        })}
      </div>
      {
        openPictureModal && selectedPicture  && (
          <PictureModal moovImage={moveImage} picture={selectedPicture} closeModal={handleCloseModalPicture}/>
        )
      }
    </div>
  )
}

export default Screenshoot

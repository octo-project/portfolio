import './header.css'
import React, { FC } from 'react'
import { useLocalFormatHook } from '../../../common/hooks/localFormatHook'
import MyCvPicture from '../../../assets/Portfolio Design V2/Assets/Cv_picture.jpg'

interface HeaderProps {
  passionRef: React.MutableRefObject<null>
  diplomeRef: React.MutableRefObject<null>
  parcourRef: React.MutableRefObject<null>
  experienceRef: React.MutableRefObject<null>
  qualityAndDefautRef: React.MutableRefObject<null>
}

const Header: FC<HeaderProps> = (props) => {
  const {
    diplomeRef,
    parcourRef,
    passionRef,
    experienceRef,
    qualityAndDefautRef,
  } = props
  const {formatText} = useLocalFormatHook()

  const handleMenuClick = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log("ref doesn't exist")
    }
  }

  return (
    <div className='bigCvContainer'>
      <div className="CvHeaderContainer">
        <div className="photoCv">
          <img src={MyCvPicture} style={{zIndex:'-1 !important'}} width={100} alt="no img" />
        </div>
        <div className="CvContent">
          <div>
            <span style={{fontSize: '20px'}}>TSIALONINA Heriniaina Mathieu</span>
            <p style={{fontSize: '16px'}}>
              {formatText("cvDescription")}
            </p>
          </div>
        </div>
      </div>
      <div className="cvMenu">
          <div
            className="btnCustom btnCertifications animate"
            onClick={() => handleMenuClick(diplomeRef)}
          >
            {/* Dîplomes/Certifications */}
            {formatText("diplomas")}
          </div>
          <div
            className="btnCustom animate"
            onClick={() => handleMenuClick(parcourRef)}
          >
            {/* Parcours */}
            {formatText("parcour")}
          </div>
          <div
            className="btnCustom animate"
            onClick={() => handleMenuClick(experienceRef)}
          >
            {/* Expériences */}
            {formatText("experience")}
          </div>
          <div
            className="btnCustom animate"
            onClick={() => handleMenuClick(qualityAndDefautRef)}
          >
            {/* Quality */}
            {formatText("quality")}
          </div>
          <div
            className="btnCustom animate"
            onClick={() => handleMenuClick(passionRef)}
          >
            {/* Passions */}
            {formatText("passion")}
          </div>
      </div>
    </div>
  )
}

export default Header

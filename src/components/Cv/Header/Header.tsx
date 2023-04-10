import './header.css'
import React, { FC, useContext, useRef } from 'react'
import { CvContext } from '../../../provider/CvProvider/CvProvider'
import { CV_TAB, SET_CURRENT_TAB } from '../../../reducer/CvReducer/CvReducer'
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
    experienceRef,
    parcourRef,
    passionRef,
    qualityAndDefautRef,
    children,
  } = props

  const handleMenuClick = (ref: any) => {
    if (ref && ref.current) {
      console.log('ref exist')
      ref.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log("ref doesn't exist")
    }
  }

  return (
    <div className="CvHeaderContainer">
      <div className="photoCv">
        <img src={MyCvPicture} width={170} alt="no img" />
      </div>
      <div className="CvContent">
        <div>
          <span>TSIALONINA Heriniaina Mathieu</span>
          <p>
            Je suis passionnée par la technologie informatique que ce soit sur
            le domaine du web, du mobile, et desktop; avec les technos les plus
            récents.
          </p>
        </div>
        <div className="cvMenu">
          <div
            className="btnCustom"
            onClick={() => handleMenuClick(diplomeRef)}
          >
            Dîplomes/Certifications
          </div>
          <div
            className="btnCustom"
            onClick={() => handleMenuClick(parcourRef)}
          >
            Parcours
          </div>
          <div
            className="btnCustom"
            onClick={() => handleMenuClick(experienceRef)}
          >
            Expériences
          </div>
          <div
            className="btnCustom"
            onClick={() => handleMenuClick(qualityAndDefautRef)}
          >
            Quality
          </div>
          <div
            className="btnCustom"
            onClick={() => handleMenuClick(passionRef)}
          >
            Passions
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

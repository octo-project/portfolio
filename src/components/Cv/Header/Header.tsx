import './header.css'
import React, { FC } from 'react'
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
            En tant que développeur full-stack, je suis passionné par la
            création de solutions technologiques innovantes pour répondre aux
            besoins des clients et des utilisateurs finaux. Je suis expert dans
            la conception, le développement et la maintenance de sites Web et
            d'applications, du front-end au back-end.
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

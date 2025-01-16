import './content.css'
import { FC } from 'react'
import Diplome from './Diplome/Diplome'
import Parcour from './Parcour/Parcour'
import Passion from './Passion/Passion'
import Experience from './Experience/Experience'
import QualityAndDefaut from './QualityAndDefaut/QualityAndDefaut'

interface ContentProps {
  passionRef: React.MutableRefObject<null>
  diplomeRef: React.MutableRefObject<null>
  parcourRef: React.MutableRefObject<null>
  experienceRef: React.MutableRefObject<null>
  qualityAndDefautRef: React.MutableRefObject<null>
}

const Content: FC<ContentProps> = (props) => {
  const {
    diplomeRef,
    parcourRef,
    passionRef,
    experienceRef,
    qualityAndDefautRef,
  } = props

  return (
    <div id="slideshow-container">
      <Parcour refer={parcourRef} />
      <Experience refer={experienceRef} />
      {/* <Diplome refer={diplomeRef} />
      <QualityAndDefaut refer={qualityAndDefautRef} />
      <Passion refer={passionRef} /> */}

      <div className="footerc">&#169; TSIALONINA Heriniaina Mathieu 2023</div>
    </div>
  )
}

export default Content

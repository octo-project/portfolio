import './content.css'
import { FC, useContext } from 'react'
import Diplome from './Diplome/Diplome'
import Parcour from './Parcour/Parcour'
import Passion from './Passion/Passion'
import Experience from './Experience/Experience'
import { CvContext } from '../../../provider/CvProvider/CvProvider'

interface ContentProps {
  passionRef: React.MutableRefObject<null>
  diplomeRef: React.MutableRefObject<null>
  parcourRef: React.MutableRefObject<null>
  experienceRef: React.MutableRefObject<null>
}

const Content: FC<ContentProps> = (props) => {
  const { diplomeRef, experienceRef, parcourRef, passionRef, children } = props

  return (
    <div id="slideshow-container">
      <Diplome refer={diplomeRef} />
      <Parcour refer={parcourRef} />
      <Experience refer={experienceRef} />
      <Passion refer={passionRef} />

      <div className="footerc">&#169; TSIALONINA Heriniaina Mathieu 2023</div>
    </div>
  )
}

export default Content

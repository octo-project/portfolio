import './content.css'
import { FC, useContext } from 'react'
import Diplome from './Diplome/Diplome'
import Parcour from './Parcour/Parcour'
import Passion from './Passion/Passion'
import Experience from './Experience/Experience'
import { CV_TAB } from '../../../reducer/CvReducer/CvReducer'
import { CvContext } from '../../../provider/CvProvider/CvProvider'

const Content: FC = () => {
  const { currentTab } = useContext(CvContext)

  return (
    <div id="slideshow-container">
      <Diplome />
      <Parcour />
      <Experience />
      <Passion />

      <div className="footerc">&#169; TSIALONINA Heriniaina Mathieu 2023</div>
    </div>
  )
}

export default Content

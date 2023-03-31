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
    <div className="contentContainer">
      <div id="slideshow-container">
        <div className="slide" id="slide-1">
          <Diplome />
        </div>
        <div className="slide" id="slide-2">
          <Parcour />
        </div>
        <div className="slide" id="slide-3">
          <Experience />
        </div>
        <div className="slide" id="slide-4">
          <Passion />
        </div>
      </div>
      <div className="slide-indicators">
        <div className="slide-indicator active"></div>
        <div className="slide-indicator"></div>
        <div className="slide-indicator"></div>
        <div className="slide-indicator"></div>
      </div>
    </div>
  )
}

export default Content

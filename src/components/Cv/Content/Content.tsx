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

  const GET_CURRENT_COMPONENT: Record<CV_TAB, any> = {
    Dîplome: <Diplome />,
    Experience: <Experience />,
    Parcour: <Parcour />,
    Passion: <Passion />,
  }

  return (
    <div className="contentContainer">
      {GET_CURRENT_COMPONENT[currentTab]}
      <div className="slide-container">
        <div className="slide">
          <h2>Slide 1</h2>
          <p>Contenu de la slide 1</p>
        </div>
        <div className="slide">
          <h2>Slide 2</h2>
          <p>Contenu de la slide 2</p>
        </div>
        <div className="slide">
          <h2>Slide 3</h2>
          <p>Contenu de la slide 3</p>
        </div>
      </div>
    </div>
  )
}

export default Content

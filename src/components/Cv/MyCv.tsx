import './style.css'
import { FC, useRef } from 'react'
import Header from './Header/Header'
import Content from './Content/Content'

const MyCv: FC = () => {
  const passionRef = useRef(null)
  const diplomeRef = useRef(null)
  const parcourRef = useRef(null)
  const experienceRef = useRef(null)
  const qualityAndDefautRef = useRef(null)

  return (
    <div className="cvContainer titleCv">
      <Header
        passionRef={passionRef}
        diplomeRef={diplomeRef}
        parcourRef={parcourRef}
        experienceRef={experienceRef}
        qualityAndDefautRef={qualityAndDefautRef}
      />
      <Content
        passionRef={passionRef}
        diplomeRef={diplomeRef}
        parcourRef={parcourRef}
        experienceRef={experienceRef}
        qualityAndDefautRef={qualityAndDefautRef}
      />
    </div>
  )
}

export default MyCv

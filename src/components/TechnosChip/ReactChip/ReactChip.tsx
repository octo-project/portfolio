import '../TechnosChip.css'
import Link from '../../Link'
import React from '../../../assets/techsLogo/react.png'

const ReactChip = () => {
  return (
    <Link target={'https://fr.react.dev/'}>
      <div className="chip-card animate">
        <span>React</span>
        <img src={React} className="react-logo" alt="card content" />
      </div>
    </Link>
  )
}

export default ReactChip

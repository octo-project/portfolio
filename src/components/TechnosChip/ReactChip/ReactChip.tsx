import '../TechnosChip.css'
import React from '../../../assets/techsLogo/react.png'

const ReactChip = () => {
  return (
    <div className="chip-card">
      <span>React</span>
      <img src={React} className="react-logo" alt="no-image" />
    </div>
  )
}

export default ReactChip

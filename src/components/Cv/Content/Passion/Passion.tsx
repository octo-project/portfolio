import { FC } from 'react'
import Manette from '../../../../assets/manette.png'
import Musique from '../../../../assets/musique.png'
import Techno from '../../../../assets/tech1.png'

const Passion: FC = () => {
  return (
    <div className="content">
      <h3>Passions</h3>
      <div className="passion-content">
        <div className="passion-item game-card">
          <img src={Manette} width="250px" alt="manette" />
        </div>
        <div className="passion-item musique-card">
          <img src={Musique} width="250px" alt="manette" />
        </div>
        <div className="passion-item technologie-card">
          <img src={Techno} width="250px" alt="manette" />
        </div>
      </div>
    </div>
  )
}

export default Passion

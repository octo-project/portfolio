import { FC } from 'react'
import Techno from '../../../../assets/tech1.png'
import Manette from '../../../../assets/manette.png'
import Musique from '../../../../assets/musique.png'
import Dota from '../../../../assets/dota.png'
import Pubg from '../../../../assets/pubg.png'
import Fifa from '../../../../assets/fifa.png'

const Passion: FC = () => {
  return (
    <div className="content">
      <h3>Passions</h3>
      <div className="passion-content">
        <div className="passion-item game-card">
          <img
            src={Manette}
            className="passion-logo logo-gaming"
            alt="manette"
          />
          <div className="passion-detail">
            <div>
              <img src={Dota} className="game-icon" alt="manette" />
            </div>
            <div>
              <img src={Pubg} className="pubg-icon" alt="manette" />
            </div>
            <div>
              <img src={Fifa} className="fifa-icon" alt="manette" />
            </div>
          </div>
        </div>
        <div className="passion-item musique-card">
          <img
            src={Musique}
            className="passion-logo logo-musique"
            alt="manette"
          />
          <div className="passion-detail">
            <div>Spotify</div>
          </div>
        </div>
        <div className="passion-item technologie-card">
          <img src={Techno} width="250px" alt="manette" />
        </div>
      </div>
    </div>
  )
}

export default Passion

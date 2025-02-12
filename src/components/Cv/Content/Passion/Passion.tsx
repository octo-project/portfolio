import { FC } from 'react'
import Techno from '../../../../assets/tech1.png'
import Manette from '../../../../assets/manette.png'
import Musique from '../../../../assets/musique.png'
import { gamingData, musicData, technoData } from './constant/passion-constant'
import { useLocalFormatHook } from '../../../../common/hooks/localFormatHook'

interface PassionProps {
  refer: React.MutableRefObject<null>
}

const Passion: FC<PassionProps> = (props) => {
  const { refer } = props
  const {formatText} = useLocalFormatHook()

  return (
    <section className="content content-passion" ref={refer}>
      <h3>{formatText("interestAndPassionTitle")}</h3>
      <div className="passion-content">
        <div className="passion-item game-card">
          <img
            src={Manette}
            alt="manette"
            className="passion-logo logo-gaming"
          />
          <div className="passion-detail">
            {gamingData.map((game, index) => {
              return (
                <a href={game.url} key={index} target="_blank" rel='noopener noreferrer'>
                  <img src={game.img} className="game-icon" alt={game.name} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="passion-item musique-card">
          <img
            src={Musique}
            alt="musique"
            className="passion-logo logo-musique"
          />
          <div className="passion-detail">
            {musicData.map((music, index) => {
              return (
                <a href={music.url} key={index} target="_blank" rel='noopener noreferrer'>
                  <img
                    src={music.img}
                    alt={music.name}
                    className="spotify-icon"
                  />
                </a>
              )
            })}
          </div>
        </div>
        <div className="passion-item technologie-card">
          <img
            src={Techno}
            width="100px"
            alt="manette"
            className="logo-techno"
          />
          <div className="passion-detail">
            {technoData.map((techno, index) => {
              return (
                <a href={techno.url} key={index} target="_blank" rel='noopener noreferrer'>
                  <img
                    src={techno.img}
                    className="spotify-icon"
                    alt={techno.name}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Passion

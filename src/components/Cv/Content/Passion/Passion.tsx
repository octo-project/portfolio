import { FC } from 'react'
import JDN from '../../../../assets/jdn.jpg'
import Dota from '../../../../assets/dota.png'
import Pubg from '../../../../assets/pubg.png'
import Fifa from '../../../../assets/fifa.png'
import Techno from '../../../../assets/tech1.png'
import Futura from '../../../../assets/futura.svg'
import Deezer from '../../../../assets/deezer.png'
import Musique from '../../../../assets/musique.png'
import Manette from '../../../../assets/manette.png'
import Spotify from '../../../../assets/spotify.png'

const Passion: FC = () => {
  const gamingData = [
    {
      img: Dota,
      name: 'dota 2',
      url: 'https://www.dota2.com/home',
    },
    {
      img: Pubg,
      name: 'pubg',
      url: 'https://play.battlegrounds.pubg.com/',
    },
    {
      img: Fifa,
      name: 'fifa',
      url: 'https://www.ea.com/fr-fr/games/fifa',
    },
  ]

  const musicData = [
    {
      img: Spotify,
      name: 'spotify',
      url: 'https://open.spotify.com/?',
    },
    {
      img: Deezer,
      name: 'deezer',
      url: 'https://www.deezer.com/',
    },
  ]

  const technoData = [
    {
      img: Futura,
      name: 'futura',
      url: 'https://www.futura-sciences.com/tech/actualites/',
    },
    {
      img: JDN,
      name: 'JDN',
      url: 'https://www.journaldunet.com/',
    },
  ]

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
            {gamingData.map((game) => {
              return (
                <a href={game.url} target="blank">
                  <img src={game.img} className="game-icon" alt={game.name} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="passion-item musique-card">
          <img
            src={Musique}
            alt="manette"
            className="passion-logo logo-musique"
          />
          <div className="passion-detail">
            {musicData.map((music) => {
              return (
                <a href={music.url} target="blank">
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
            width="250px"
            alt="manette"
            className="logo-techno"
          />
          <div className="passion-detail">
            {technoData.map((techno) => {
              return (
                <a href={techno.url} target="blank">
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
    </div>
  )
}

export default Passion

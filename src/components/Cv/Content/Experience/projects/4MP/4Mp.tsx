import ReactNativeChip from "../../../../../TechnosChip/ReactNativeChip"
import { GraphqlChip, PrismaChip, ReactChip } from "../../../../../TechnosChip"

const FourMp = () => {
    return (
      <div className="experience-card">
        <div className="experience-card-header-container">
          {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
            <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
          </Link> */}
          <span className="experience-card-title">4Mp :</span>
        </div>
        <div>
          <p className='project-description'>
            Chain for wallet une application se basant sur la bloc chain.
            pour effectuer des transition sur COIN, CCOIN et CCOIN.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Correction des retours :</li>
              <ul>
                <li>Mise en place du custom identifiant pour le login </li>
                <li>Correction sur les modification en temps reel</li>
                <li>Fix bug sur le balance </li>
                <li>Creation de la page FAQ </li>
              </ul>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <ReactChip />
              <GraphqlChip/>
              <ReactNativeChip/>
              <PrismaChip/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FourMp
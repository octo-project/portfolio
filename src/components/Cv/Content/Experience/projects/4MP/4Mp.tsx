import Gatsby from "../../../../../TechnosChip/Gatsby"

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
          pour effectuer des transition.
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>Dynamisation des formulaires d'achat et de livraison </li>
            <li>Correction de la responsive design </li>
          </ol>
        </div>
        <div>
          <span className="experience-card-subtitle">Technos:</span>
          <div className="technos-content">
            <Gatsby /> 
          </div>
        </div>
      </div>
    </div>
    )
}

export default FourMp
import Gatsby from "../../../../../TechnosChip/Gatsby"

const Itts = () => {
    return (
            <div className="experience-card">
      <div className="experience-card-header-container">
        {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
          <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
        </Link> */}
        <span className="experience-card-title">Itts :</span>
      </div>
      <div>
        <p className='project-description'>
          C’est une application web dedier au livraison de marchandise durant
          la periode de confinement (covid 19).
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

export default Itts
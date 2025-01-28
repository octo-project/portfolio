import LaravelChip from "../../../../../TechnosChip/LaravelChip"

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
          Une application web pour les familles, amies ayant besoin d'organiser leur voyage.
          depuis la selection de l'endroit, l'hotel, jusaqu'au payement.
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>Mettre en place le service de payement stripe</li>
            <li>Envoie automatique d'email (inscription, confirmation de payement, newsLetter)</li>
            <li>Mise en œuvre d'une interface utilisateur ergonomique et responsive pour la reservation et la gestion des paiements.</li>
            <li>Conception du model conceptuel de donnee</li>
          </ol>
        </div>
        <div>
          <span className="experience-card-subtitle">Technos:</span>
          <div className="technos-content">
            <LaravelChip /> 
          </div>
        </div>
      </div>
    </div>
    )
}

export default Itts
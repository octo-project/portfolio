import Gatsby from "../../../../../TechnosChip/Gatsby"

const Adom = () => {
    return (
            <div className="experience-card">
      <div className="experience-card-header-container">
        {/* <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
          <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
        </Link> */}
        <span className="experience-card-title">Adom :</span>
      </div>
      <div>
        <p className='project-description'>
          C’est une application web dedier de l'achat au livraison de marchandises durant
          la periode de confinement (covid 19).
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>Dynamisation des formulaire sur le front : </li>
            <ul>
              <li>Dynamiser la page d'authentification </li>
              <li>Dynamiser la page de création de commande </li>
              <li>Dynamiser la page confirmation de commande </li>
              <li>Dynamiser la page récapitulatif de commande</li>
              <li>Dynamiser la page liste de commande </li>
              <li>Dynamiser le mode de livraison express </li>
              <li>Dynamiser la page de paiement </li>
              <li>Dynamiser la page d'adresse de récupération et de livraison </li>
              <li>Modification des informations personnelles </li>
              <li>Ajouter, Modifier, supprimer et consulter mes adresses </li>
              <li>Correction sur les bug design</li>
            </ul>
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

export default Adom
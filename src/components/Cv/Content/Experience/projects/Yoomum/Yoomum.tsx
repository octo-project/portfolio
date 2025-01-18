import Link from "../../../../../Link"
import SymfonyChip from "../../../../../TechnosChip/Symfony"
import KotlinChip from "../../../../../TechnosChip/KotlinChip"
import YoomumLogo from "../../../../../../assets/EsnLogo/yoomum.png"
import ApiPlatformeChip from "../../../../../TechnosChip/ApiPlatforme"
import FirebaseDBChip from "../../../../../TechnosChip/FirebaseDBChip"
import FirebaseAuthChip from "../../../../../TechnosChip/FirebaseAuthChip"
import FirebaseDynamicLinkChip from "../../../../../TechnosChip/FirebaseDynamicLinksChip"

const Yoomum = () => {

    return (
        <div className="experience-card">
        <div className="experience-card-header-container">
            <Link target={"https://www.yoomum.com/"}>
              <img src={YoomumLogo} className="esn-yoomum-logo" alt="yoomum"/>
            </Link>
            <span className="experience-card-title">YOOMUM:</span>
          </div>
        <div>
          <p className='project-description'>
            Une application mobile disponible pour android et Ios, pour
            regrouper les mamans et les aides a facilité leur grossesse,
            a trouvé : des hôpitaux, des pharmacies, etc... et a cree des
            evenements
            par rapport à sa position.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Remplacer une module Php deprecated par retrofit 2.</li>
              <li>Corriger la lenteur des appels API vers le serveur.</li>
              <li>
                Verifier et ameliorer le bon fonctionnement des fonctionnalites
                anciennes.
              </li>
              <li>
                Ajout d'un SSO pour la creation de compte et l'authentification
                (la boite rose).
              </li>
            </ol>
          </div>
          {/* <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>
              Symfony 4, API Plateforme, Firebase (Authentification, Real Time
              Database, Dynamic Links), MySQL.
            </p>
          </div> */}
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <SymfonyChip /> 
              <ApiPlatformeChip/>
              <FirebaseAuthChip /> 
              <FirebaseDBChip/>
              <FirebaseDynamicLinkChip/>
              <KotlinChip/>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Yoomum
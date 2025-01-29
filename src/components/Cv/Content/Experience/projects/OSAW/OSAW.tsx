import { ReactChip } from "../../../../../TechnosChip"
import OsawLogo from "../../../../../../assets/EsnLogo/osaw.png"
import LaravelChip from "../../../../../TechnosChip/LaravelChip"

const OSAW = () => {
    return (
        <div className="experience-card">
            <div className="experience-card-header-container">
                <img src={OsawLogo} className="esn-osaw-logo" alt="interhaptics"/>
                {/* <span className="experience-card-title">OSAW :</span> */}
            </div>
            <div>
            <p className='project-description'>
                Application web de référencement des sociétés et établissements
                malagasy par géolocalisation, développé avec laravel et React.
            </p>
            <div>
                <span className="experience-card-subtitle">Missions :</span>
                <ol>
                    <li>Conception et gestion des routes pour la navigation entre les pages de l'application. </li>
                    <li>Integration de la page d'acceuil avec un map de madagascar ainsi que les 26 regions cliquable pour permettre a l'utilisateur de filtrer ces recherche.</li>
                    <li>Affichage par defaut de quelques etablissement (Pharmacie, Poste de Police, Hopital) sur la map pour une interaction plus ergonomique et rapide.</li>
                    <li>Mise en place des modeles concuptuel de donnees (Societe, Annexe, Evenement, Information, Produit) pour assurer une structure optimale des donnees sauvegarder.
                    </li>
                    <li>Integration et affichage des evenements avec geolocalisation afin d'aider l'utilisateur a reserver directement son billet sans plus se soucier de la localisation.
                    </li>
                    <li>Affichage des Produits vendue par un etablissement pour avoir plus d'information.
                    </li>
                    <li>Conception du dashboard pour l'admnistrateur de l'application afin qu'il puisse gerer les societes, les annexes, les evenements et le produits en vente.</li>
                </ol>
            </div>
            <div>
                <span className="experience-card-subtitle">Technos:</span>
                <div className="technos-content">
                <ReactChip />
                <LaravelChip/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OSAW
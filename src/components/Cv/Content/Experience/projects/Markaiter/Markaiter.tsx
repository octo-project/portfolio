import Link from "../../../../../Link"
import MarkaiterLogo from "../../../../../../assets/EsnLogo/markaiter.png"
import { FacebookSDKChip, GraphqlChip, MaterialUiChip, PrismaChip, PythonChip, ReactChip } from "../../../../../TechnosChip"

const Markaiter = () => {
    return (
        <div className="experience-card">
            <div className="experience-card-header-container">
                <Link target={"https://www.markaiter.com/"} >
                    <img src={MarkaiterLogo} className="esn-yoomum-logo" alt="markaiter"/>
                </Link>
                <span className="experience-card-title">Markaiter:</span>
            </div>
            <div>
            <p className='project-description'>
                Une application Web pour lancer des campagnes publicitaire
                personnaliser sur les réseaux (Facebook, Gmail, Youtube, LinkedIn)
            </p>
            <div>
                <span className="experience-card-subtitle">Missions :</span>
                <ol>
                <li>Ajout des fonctionnalite.</li>
                <li>Creation du modele conceptuel de donnees.</li>
                <li>Recuperation des coreItems depuis un dataLake.</li>
                <li>
                    Mise en place d'un cron en python pour la recuperation reguliere
                    des insights sur facebook .
                </li>
                </ol>
            </div>
            <div>
              <span className="experience-card-subtitle">Technos:</span>
              <div className="technos-content">
                <PythonChip/>
                <ReactChip />
                <MaterialUiChip />
                <GraphqlChip/>
                <FacebookSDKChip/>
                <PrismaChip/>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Markaiter
import Link from "../../../../../Link"
import Minio from "../../../../../TechnosChip/Minio"
import LappsysLogo from "../../../../../../assets/EsnLogo/neoptim.png"
import { GraphqlChip, PrismaChip, ReactChip } from "../../../../../TechnosChip"

const Lappsys = () => {
    return (
      <div className="experience-card">
        <div className="experience-card-header-container">
          <Link target={"https://neoptimconsulting.com/"} >
            <img src={LappsysLogo} className="esn-neoptim-logo" alt="neoptim"/>
          </Link>
          <span className="experience-card-title">Lappsys :</span>
        </div>
        <div>
          <p className='project-description'>
          Cette application innovante est conçue pour faciliter la gestion des établissements, des bénéficiaires et des interventions au sein d'un même outil. Elle permet aux utilisateurs de gérer efficacement les différents processus liés aux bénéficiaires et aux interventions, tout en offrant des fonctionnalités simples et intuitives.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Corriger les éventuels bug sur l'application : </li>
              <ul>
                <li>Création du rapport d'intervention</li>
                <li>Bug d'exportation PDF</li>
                <li>Téléchargement des photos sur l'établissement et le bénéficiaire </li>
                <li>Upload de la signature bénéficiaire sur l'application mobile</li>
                <li>Mise à jour en temps réel sur l'application mobile </li>
                <li>Importer la liste des bénéficiaires depuis Excel</li>
                <li>Filtrer les intervenants et les bénéficiaires surla planification</li>
              </ul>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <div className="technos-content">
              <Minio /> 
              <ReactChip />
              <GraphqlChip/>
              <PrismaChip/>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Lappsys
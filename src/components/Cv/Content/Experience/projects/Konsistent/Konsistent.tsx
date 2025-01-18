import NodeChip from "../../../../../TechnosChip/NodeChip"
import ReactChip from "../../../../../TechnosChip/ReactChip"
import MaterialUiChip from "../../../../../TechnosChip/MaterialUiChip"
import TypescriptChip from "../../../../../TechnosChip/TypescriptChip"
import KonsistentLogo from "../../../../../../assets/EsnLogo/konsistent.png"

const Konsistent = () => {
    
    return (
        <div className="experience-card">
          <div className="experience-card-header-container">
            <img src={KonsistentLogo} className="esn-logo" alt="konsistent"/>
            <span className="experience-card-title">Konsistent :</span>
          </div>
          <div>
            <p className='project-description'>
              C'est un extension chrome, similaire a grammarly, il est utilisé
              pour assurer la communication  entre personnel dans plusieurs
              organisations. Pour éviter les harcèlements sexuel,
              le harcèlement moral, l’exclusion. Il est disponible sur la
              plateforme web et desktop.
            </p>
            <div>
              <span className="experience-card-subtitle">Missions :</span>
              <ol>
                <li>Correction des bugs critiques.</li>
                <li>Ajout de nouvelle règles.</li>
                <li>Amélioration du qualite des codes de l'extension.</li>
                <li>
                  Mise en place de fonction de cryptage asymétrique des données.
                </li>
                <li>
                  Création from scratch du projet en version desktop.
                </li>
              </ol>
            </div>
            <div>
              <span className="experience-card-subtitle">Technos:</span>
              <div className="technos-content">
                <ReactChip /> 
                <TypescriptChip /> 
                <NodeChip />
                <MaterialUiChip /> 
              </div>
            </div>
          </div>
      </div>
    )
}

export default Konsistent
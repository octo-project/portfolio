import Link from "../../../../../Link"
import D3Chip from "../../../../../TechnosChip/D3Chip"
import ReactChip from "../../../../../TechnosChip/ReactChip"
import ElectronChip from "../../../../../TechnosChip/ElectronChip"
import AntDesignChip from "../../../../../TechnosChip/AntDesignChip"
import TypescriptChip from "../../../../../TechnosChip/TypescriptChip"
import InterhapticsLogo from "../../../../../../assets/EsnLogo/interhaptics.png"

const HapticComposer = () => {
  return (
    <div className="experience-card">
      <div className="experience-card-header-container">
        <Link target={"https://www.interhaptics.com/tech/haptic-composer"} >
          <img src={InterhapticsLogo} className="esn-interhaptics-logo" alt="interhaptics"/>
        </Link>
        <span className="experience-card-title">Haptic Composer:</span>
      </div>
      <div>
        <p className='project-description'>
          C’est une application desktop pour faciliter la création de
          matériaux haptique en seulement quelques cliques, a l'aide
          des perceptions (Actuellement racheter par razer).
        </p>
        <div>
          <span className="experience-card-subtitle">Missions :</span>
          <ol>
            <li>Creation de l'architecture projet.</li>
            <li>Mise en relation des appels typer de js vers c++.</li>
            <li>Integration des interfaces depuis la maquette XD.</li>
            <li>Ajout des fonctionnalites de base de l'application.</li>
          </ol>
        </div>
        <div>
          <span className="experience-card-subtitle">Technos:</span>
          <div className="technos-content">
            <ReactChip /> 
            <TypescriptChip /> 
            <AntDesignChip />
            <D3Chip/>
            <ElectronChip/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HapticComposer
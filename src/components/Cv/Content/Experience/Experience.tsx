import React, { FC } from 'react'
import NodeChip from '../../../TechnosChip/NodeChip'
import ReactChip from '../../../TechnosChip/ReactChip'
import MaterialUiChip from '../../../TechnosChip/MaterialUiChip'
import TypescriptChip from '../../../TechnosChip/TypescriptChip'
import AntDesignChip from '../../../TechnosChip/AntDesignChip'
import D3Chip from '../../../TechnosChip/D3Chip'

interface ExperienceProps {
  refer: React.MutableRefObject<null>
}

const Experience: FC<ExperienceProps> = (props) => {
  const { refer } = props
  return (
    <section className="content" ref={refer}>
      <h3>Experiences & Projects</h3>
      <h4>Project professionel</h4>
      <div className="experience-card">
        <span className="experience-card-title">Konsistent :</span>
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
      
      <div className="experience-card">
        <span className="experience-card-title">Haptic Composer:</span>
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
            </div>
            {/* <p> D3Js, Typescript, C++, Ant Design, Electron.</p> */}
          </div>
        </div>
      </div>
      {/*
      <div className="experience-card">
        <span className="experience-card-title">YOOMUM:</span>
        <div>
          <p>
            Une application mobile disponible pour android et Ios, pour
            regrouper les mamans et les aides <br /> a facilité leur grossesse,
            a trouvé : des hôpitaux, des pharmacies, etc... et a cree des
            evenements <br />
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
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>
              Symfony 4, API Plateforme, Firebase (Authentification, Real Time
              Database, Dynamic Links), MySQL.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-card">
        <span className="experience-card-title">Markaiter:</span>
        <div>
          <p>
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
            <p>
              Python, Java, ReactJs, Typescript, PostGreSQL, Facebook SDK, …
            </p>
          </div>
        </div>
      </div>
      <h4>Project personnel</h4>
      <div className="experience-card">
        <span className="experience-card-title">Avatar Generator:</span>
        <div>
          <p>
            Une module npm pour generer des avatars en randoom ou
            personalisable.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Creation from scratch.</li>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>React, Typescript</p>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Experience

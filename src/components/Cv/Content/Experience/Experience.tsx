import React, { FC } from 'react'

const Experience: FC = () => {
  return (
    <div className="content">
      <h3>Experiences & Projects</h3>
      <h4>Project professionel</h4>
      <div className="experience-card">
        <span className="experience-card-title">Konsistent :</span>
        <div>
          <p>
            C'est un extension chrome, similaire a grammarly, il est utilisé
            pour assurer la communication <br /> entre personnel dans plusieurs
            organisations. Pour éviter les harcèlements sexuel,
            <br /> le harcèlement moral, l’exclusion. Il est disponible sur la
            plateforme web et desktop.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Correction des bugs critiques.</li>
              <li>Ajout de nouvelle fonctionnalites.</li>
              <li>Amelioration du qualite des codes de l'extension.</li>
              <li>
                Mise en place de fonction de cryptage asymetrique des donnees.
              </li>
              <li>
                Creation from scratch du projet en version desktop en utilisant
                electron.
              </li>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>
              ReactJS, Typescript, NodeJS, MongoDB, Electron, Material Design.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-card">
        <span className="experience-card-title">Haptic Composer:</span>
        <div>
          <p>
            C’est une application desktop pour faciliter la création de
            matériaux haptique en seulement <br /> quelques cliques, a l'aide
            des perceptions.
          </p>
          <div>
            <span className="experience-card-subtitle">Missions :</span>
            <ol>
              <li>Creation de l'architecture projet.</li>
              <li>Mise en relation des appels typer de js vers c++.</li>
              <li>Integration des interfaces depuis la maquette.</li>
              <li>Ajout des fonctionnalites de base de l'application.</li>
            </ol>
          </div>
          <div>
            <span className="experience-card-subtitle">Technos:</span>
            <p>ReactJS, D3Js, Typescript, C++, Ant Design, Electron.</p>
          </div>
        </div>
      </div>
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
                Ajout d'un SSO pour la creation de compte et l'authentification.
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
                de donnee.
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
      </div>
    </div>
  )
}

export default Experience

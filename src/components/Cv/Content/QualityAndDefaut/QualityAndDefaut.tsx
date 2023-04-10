import React, { FC } from 'react'

interface QualityAndDefaultProps {
  refer: React.MutableRefObject<null>
}

const QualityAndDefaut: FC<QualityAndDefaultProps> = (props) => {
  const { refer } = props

  return (
    <section className="content" ref={refer}>
      <h3>Quality</h3>
      <div className="qualityContainer">
        <div>
          <span className="qualitySubTitle">Quality</span>
          <div>
            <ul>
              <li>
                Passionné par la programmation et toujours en quête de nouvelles
                connaissances et technologies pour améliorer mes compétences en
                tant que développeur full-stack.
              </li>
              <li>
                Capacité à travailler de manière autonome ou en équipe pour
                atteindre les objectifs de projet tout en respectant les délais.
              </li>
              <li>
                Souci du détail et de la qualité pour fournir un code efficace
                et maintenable.
              </li>
              <li>
                Excellente communication et capacité à travailler avec des
                équipes interdisciplinaires pour garantir la satisfaction des
                clients et la livraison réussie des projets.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className="qualitySubTitle">Defaut</span>
          <div>
            <ul>
              <li>
                Parfois trop exigeant envers moi-même et envers les autres, ce
                qui peut me pousser à vouloir perfectionner chaque petit détail.
              </li>
              <li>
                J'ai tendance à m'investir tellement dans mes projets que je
                peux parfois oublier de prendre des pauses nécessaires pour
                maintenir un équilibre vie professionnelle/vie privée.
              </li>
              <li>
                Parfois, j'ai besoin de plus de temps pour prendre des décisions
                importantes, car je veux m'assurer d'avoir considéré toutes les
                options et de faire le meilleur choix pour l'équipe et les
                clients.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityAndDefaut

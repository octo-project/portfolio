import { Link } from 'react-router-dom'
import casque from '../../../assets/casque.jpg'
import todoApp from '../../../assets/TodoApp/logo.png'
import FAQ from '../../../assets/Buyer Persona/FAQ.png'
import Avis from '../../../assets/Buyer Persona/Avis.png'
import orderEase from '../../../assets/OrderEase/logo.png'
import About from '../../../assets/Buyer Persona/About.png'
import BPLogo from '../../../assets/Buyer Persona/Logo-BP.png'
import Welcome from '../../../assets/Buyer Persona/Welcome.png'
import Setting from '../../../assets/Buyer Persona/Setting.png'
import Loading from '../../../assets/Buyer Persona/Loading.png'
import orderEaseError from '../../../assets/OrderEase/Error.png'
import gestionFond from '../../../assets/GestionDeFond/logo.jpg'
import Generator from '../../../assets/Buyer Persona/Generator.png'
import orderEaseFacture from '../../../assets/OrderEase/Facture.png'
import GeneratedFile from '../../../assets/Buyer Persona/generated-file.png'
import orderEaseConfirmation from '../../../assets/OrderEase/Confirmation.png'
import orderEaseDetailsPlats from '../../../assets/OrderEase/DetailsPlats.png'
import SuccessGenerate from '../../../assets/Buyer Persona/SuccessGenerate.png'
import SuccessDownload from '../../../assets/Buyer Persona/SuccessDownload.png'

const Projects = [
  {
    logo: casque,
    name: 'Podcast-app',
    link: '/project/podcast-app',
    about: {
      demoUrl: 'https://podcast-app-web.com',
      gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
      description: `L'application mobile de podcast est conçue pour permettre aux utilisateurs de découvrir, écouter et suivre facilement leurs émissions de podcast préférées. Elle propose une grande variété de podcasts dans différentes catégories, telles que l'actualité, la culture, la science, la technologie et bien plus encore.
      Les utilisateurs peuvent parcourir les émissions de podcast les plus populaires, découvrir de nouveaux contenus en fonction de leurs intérêts et marquer leurs épisodes préférés pour une écoute ultérieure. L'application propose également des fonctionnalités de recherche avancées pour aider les utilisateurs à trouver des émissions de podcast spécifiques, en fonction de leur titre, de leur sujet ou de leur animateur.
      L'application de podcast fournit une expérience d'écoute de haute qualité, avec des options de lecture en continu ou de téléchargement pour une écoute hors ligne. Elle est également équipée de fonctionnalités de personnalisation qui permettent aux utilisateurs de modifier la vitesse de lecture, de créer des listes de lecture personnalisées et de recevoir des recommandations en fonction de leurs habitudes d'écoute.
      Enfin, l'application offre une fonctionnalité de synchronisation multi-appareils pour permettre aux utilisateurs de reprendre leur écoute sur différents appareils, sans avoir à chercher ou à reprendre leur position de lecture.
      Dans l'ensemble, cette application mobile de podcast offre une expérience d'écoute conviviale, avec une grande variété de contenus à découvrir et des fonctionnalités de personnalisation pour s'adapter aux préférences de chaque utilisateur.`,
      animation: 'All animation is made with after effect and lottie',
      functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
      technos: ['React', 'NodeJs', 'GraphQL', 'Apollo', 'Prisma', 'Typescript'],
    },
    screenShoots: [],
  },
  {
    logo: orderEase,
    name: 'Resto-app',
    link: '/project/resto-app',
    about: {
      demoUrl: 'https://podcast-app-web.com',
      gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
      description: `L'application est une plateforme de commande de repas en ligne qui permet aux utilisateurs de consulter les menus des restaurants locaux et de passer des commandes depuis leur téléphone portable. L'application est facile à utiliser et permet aux clients de parcourir les menus, de sélectionner les plats qu'ils souhaitent commander, d'ajouter des instructions spéciales et de passer leur commande en quelques clics.
      L'une des fonctionnalités clés de l'application est le paiement mobile, qui permet aux utilisateurs de payer leurs commandes directement à partir de leur téléphone portable. Les utilisateurs peuvent enregistrer leurs informations de paiement dans l'application pour un processus de commande plus rapide et plus facile.
      L'application fournit également une fonctionnalité de suivi de commande en temps réel qui permet aux utilisateurs de suivre l'état de leur commande de la préparation à la livraison. Les utilisateurs reçoivent des notifications sur leur téléphone portable pour les tenir informés de l'avancement de leur commande.
      L'application est conçue pour être conviviale et intuitive, avec une interface utilisateur attrayante et facile à naviguer. Elle est également dotée de fonctionnalités de filtrage pour aider les utilisateurs à trouver rapidement les plats qu'ils recherchent, en fonction de leur type de cuisine préféré, de leur prix ou de leur disponibilité.
      Dans l'ensemble, cette application permet aux utilisateurs de commander des plats en ligne et de payer facilement avec leur téléphone portable, offrant une expérience de commande rapide et pratique pour les clients et une source de revenus supplémentaire pour les restaurants locaux.`,
      functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
      technos: ['React', 'NodeJs', 'GraphQL', 'Apollo', 'Prisma', 'Typescript'],
    },
    screenShoots: [
      { label: 'Erreur', image: orderEaseError },
      { label: 'Facture', image: orderEaseFacture },
      { label: 'Confirmation', image: orderEaseConfirmation },
      { label: 'Details Plats', image: orderEaseDetailsPlats },
    ],
  },
  {
    logo: gestionFond,
    name: 'Gestion-fond',
    link: '/project/getsion-fond',
    about: {
      demoUrl: 'https://podcast-app-web.com',
      gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
      description: `L'application mobile de gestion de fonds permet aux utilisateurs de suivre leurs finances personnelles, de gérer leur budget et d'investir dans différents types de fonds d'investissement.
      Les utilisateurs peuvent facilement connecter leurs comptes bancaires et cartes de crédit pour suivre leurs dépenses et leurs revenus en temps réel. L'application offre des fonctionnalités de catégorisation des dépenses pour aider les utilisateurs à mieux comprendre leurs habitudes de dépenses et à établir des budgets réalistes.
      En outre, l'application permet aux utilisateurs d'investir dans des fonds communs de placement, des ETF et d'autres produits d'investissement. Les utilisateurs peuvent choisir parmi une variété de portefeuilles recommandés en fonction de leur profil de risque et de leurs objectifs d'investissement.
      L'application fournit également des outils d'analyse et de visualisation de données pour aider les utilisateurs à suivre leurs investissements, à évaluer leur performance et à prendre des décisions éclairées.
      Enfin, l'application offre des fonctionnalités de sécurité de pointe pour protéger les informations financières des utilisateurs et assurer la confidentialité de leurs données.
      Dans l'ensemble, cette application de gestion de fonds est conçue pour aider les utilisateurs à mieux gérer leur argent, à investir dans des produits d'investissement à long terme et à atteindre leurs objectifs financiers.`,
      animation: 'All animation is made with after effect and lottie',
      functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
      technos: ['React', 'NodeJs', 'GraphQL', 'Typescript'],
    },
    screenShoots: [],
  },
  {
    logo: todoApp,
    name: 'Todo-app',
    link: '/project/todo-app',
    about: {
      demoUrl: 'https://podcast-app-web.com',
      gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
      description: `L'application mobile Todo est un outil de gestion de tâches simple et efficace qui permet aux utilisateurs de créer, organiser et suivre leur liste de tâches quotidiennes.
      Les utilisateurs peuvent facilement ajouter des tâches à leur liste, les organiser par priorité et suivre leur progression en temps réel. L'application propose des fonctionnalités de rappel pour aider les utilisateurs à ne pas oublier les tâches importantes et des options de répétition pour les tâches récurrentes.
      L'application Todo permet également aux utilisateurs de créer des projets et des listes de tâches pour différents domaines de leur vie, tels que le travail, la maison ou les loisirs. Les utilisateurs peuvent définir des objectifs, des échéances et des sous-tâches pour chaque projet et suivre leur progression de manière organisée.
      En outre, l'application offre une fonctionnalité de partage de tâches, permettant aux utilisateurs de partager des tâches avec des amis, des collègues ou des membres de la famille et de collaborer en temps réel pour accomplir des projets communs.
      Enfin, l'application Todo est conçue pour être simple et facile à utiliser, avec une interface conviviale et intuitive qui permet aux utilisateurs de se concentrer sur leurs tâches et de rester organisés.
      Dans l'ensemble, cette application mobile Todo est un outil pratique pour aider les utilisateurs à gérer leur liste de tâches quotidiennes, à organiser des projets et à collaborer avec d'autres personnes pour accomplir des tâches plus importantes.`,
      functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
      technos: ['React', 'NodeJs', 'GraphQL', 'Apollo', 'Prisma', 'Typescript'],
    },
    screenShoots: [],
  },
  {
    logo: BPLogo,
    logoSize: '90px',
    background: '#22222f',
    name: 'Buyer-persona',
    link: '/project/buyer-persona-app',
    about: {
      demoUrl: 'https://podcast-app-web.com',
      gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
      description: `This is project is made for testing chatGpt integration with a chrome add-on, the target is to create bayer personas in less click`,
      functionnalities: [
        'ChatGPT',
        'Marketing cibling',
        'Persona generator',
        'chrome extension',
      ],
      technos: ['React', 'NodeJs', 'Express', 'Typescript'],
    },
    screenShoots: [
      { label: 'Welcome', image: Welcome },
      { label: 'SuccessGenerate', image: SuccessGenerate },
      { label: 'SuccessDownload', image: SuccessDownload },
      { label: 'Setting', image: Setting },
      { label: 'Loading', image: Loading },
      { label: 'Generator', image: Generator },
      { label: 'GeneratedFile', image: GeneratedFile },
      { label: 'FAQ', image: FAQ },
      { label: 'Avis', image: Avis },
      { label: 'About', image: About },
    ],
  },
]

const ProjectLists = () => {
  return (
    <div className="projectCard">
      {Projects.map((project, index) => {
        return (
            <div
              className="card"
              style={
                project?.background
                  ? { background: project?.background, color: 'white' }
                  : {}
              }
            >
              <Link to={{ pathname: project.link, state: project }} key={index}>
                  <img
                    src={project.logo}
                    style={
                      project?.logoSize
                        ? { width: project.logoSize, height: project.logoSize }
                        : {}
                    }
                    className="logo"
                    alt="casque.jpg"
                  />
                  <span>{project.name}</span>
              </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectLists

import vatsy from '../assets/vatsy_icon.png'
// import todoApp from '../assets/TodoApp/logo.png'
import FAQ from '../assets/Buyer Persona/FAQ.png'
import Avis from '../assets/Buyer Persona/Avis.png'
// import orderEase from '../assets/OrderEase/logo.png'
import About from '../assets/Buyer Persona/About.png'
import BPLogo from '../assets/Buyer Persona/Logo-BP.png'
import Welcome from '../assets/Buyer Persona/Welcome.png'
import Setting from '../assets/Buyer Persona/Setting.png'
import Loading from '../assets/Buyer Persona/Loading.png'
// import orderEaseError from '../assets/OrderEase/Error.png'
import gestionFond from '../assets/GestionDeFond/logo.jpg'
import Generator from '../assets/Buyer Persona/Generator.png'
// import orderEaseFacture from '../assets/OrderEase/Facture.png'
import GeneratedFile from '../assets/Buyer Persona/generated-file.png'
// import orderEaseConfirmation from '../assets/OrderEase/Confirmation.png'
// import orderEaseDetailsPlats from '../assets/OrderEase/DetailsPlats.png'
import SuccessGenerate from '../assets/Buyer Persona/SuccessGenerate.png'
import SuccessDownload from '../assets/Buyer Persona/SuccessDownload.png'

import expense_tracking_home from '../assets/GestionDeFond/home.png'
import expense_tracking_expenses from '../assets/GestionDeFond/expenses.png'
import expense_tracking_finance_home from '../assets/GestionDeFond/finance-home.png'
import expense_tracking_new_buy_plan from '../assets/GestionDeFond/new-buy-plan.png'
import expense_tracking_delete_expense from '../assets/GestionDeFond/delete-expense.png'
import expense_tracking_select_plan_detail from '../assets/GestionDeFond/plan-detail.png'
import expense_tracking_select_plan_type from '../assets/GestionDeFond/select-plan-type.png'
import expense_tracking_new_selling_goal from '../assets/GestionDeFond/new-selling-goal.png'
import expense_tracking_expense_details_2 from '../assets/GestionDeFond/expense-details-2.png'
import expense_tracking_delete_finance_goal from '../assets/GestionDeFond/delete-finance-goal.png'
import expense_tracking_finance_sold_detail from '../assets/GestionDeFond/finance-sold-detail.png'
import expense_tracking_creation_new_expense from '../assets/GestionDeFond/creation-new-expense.png'
import expense_tracking_expense_chart_details from '../assets/GestionDeFond/expense-chart-details.png'
import expense_tracking_creation_expense_1 from '../assets/GestionDeFond/creation-new-expense-amount.png'
import expense_tracking_expense_category_filters from '../assets/GestionDeFond/expense-category-filters.png'

//
import vatsy_page_1 from '../assets/Vatsy/page_1.png';
import vatsy_addition from '../assets/Vatsy/addition.png';
import vatsy_liste_soupe from '../assets/Vatsy/liste_soupe.png';
import vatsy_date_filter from '../assets/Vatsy/date_filter.png';
import vatsy_see_invoice from '../assets/Vatsy/see_invoice.png';
import vatsy_table_filter from '../assets/Vatsy/table_filter.png';
import vatsy_ask_password from '../assets/Vatsy/ask_password.png';
import vatsy_bol_renverser from '../assets/Vatsy/bol_renverser.png';
import vatsy_purchase_filter from '../assets/Vatsy/purchase_filter.png';
import vatsy_selection_quantity from '../assets/Vatsy/selection_quantity.png';
import vatsy_category_de_depense from '../assets/Vatsy/category_de_depense.png';
import vatsy_historique_de_vente from '../assets/Vatsy/historique_de_vente.png';
import vatsy_historique_de_depense from '../assets/Vatsy/historique_de_depense.png';

export const useProjectConstant = () => {

  const Projects = [
    {
      logo: vatsy,
      // logo: undefined,
      name: 'Vatsy',
      logoSize: '50px',
      link: '/project/vatsy',
      about: {
        demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
        gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
        description: "projectVatsyOverview",
        missions: [
          "projectVatsyMission1",
          "projectVatsyMission2",
          "projectVatsyMission3",
          "projectVatsyMission4",
          "projectVatsyMission5",
          "projectVatsyMission6",
          "projectVatsyMission7",
          "projectVatsyMission8",
          "projectVatsyMission9",
        ],
        functionnalities: ['projectVatsyInvoicePrinting', 'projectVatsyOrderManagement', 'projectVatsyTransactionHistory', 'projectVatsySearchEngine'],
        technos: ['React', 'Tailwind', 'Rust', 'Tauri', 'Typescript', 'Sqlite'],
      },
      //'Apollo',
      screenShootType: 'web',
      screenShoots: [
        { 
          label: 'First page', 
          image: vatsy_page_1, 
        },
        { 
          label: 'Addition', 
          image: vatsy_addition,
        },
        { 
          label: 'Bol renverser', 
          image: vatsy_bol_renverser,
        },
        { 
          label: 'Liste soupr', 
          image: vatsy_liste_soupe,
        },
        { 
          label: 'Category de depense', 
          image: vatsy_category_de_depense,
        },
        { 
          label: 'Historique de vente', 
          image: vatsy_historique_de_vente,
        },
        { 
          label: 'Historique de depense', 
          image: vatsy_historique_de_depense,
        },
        { 
          label: 'Ask password', 
          image: vatsy_ask_password,
        },
        { 
          label: 'Selection quantity', 
          image: vatsy_selection_quantity,
        },
        { 
          label: 'Date filter', 
          image: vatsy_date_filter,
        },
        { 
          label: 'Purchase filter', 
          image: vatsy_purchase_filter,
        },
        { 
          label: 'Table filter', 
          image: vatsy_table_filter,
        },
        {
          label: "See invoice",
          image:vatsy_see_invoice,
        }
      ],
    },
    // {
    //   logo: casque,
    //   // logo: undefined,
    //   name: 'Podcast-app',
    //   logoSize: '50px',
    //   link: '/project/podcast-app',
    //   about: {
    //     demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
    //     gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
    //     description: `L'application mobile de podcast est conçue pour permettre aux utilisateurs de découvrir, écouter et suivre facilement leurs émissions de podcast préférées. Elle propose une grande variété de podcasts dans différentes catégories, telles que l'actualité, la culture, la science, la technologie et bien plus encore.
    //     Les utilisateurs peuvent parcourir les émissions de podcast les plus populaires, découvrir de nouveaux contenus en fonction de leurs intérêts et marquer leurs épisodes préférés pour une écoute ultérieure. L'application propose également des fonctionnalités de recherche avancées pour aider les utilisateurs à trouver des émissions de podcast spécifiques, en fonction de leur titre, de leur sujet ou de leur animateur.
    //     L'application de podcast fournit une expérience d'écoute de haute qualité, avec des options de lecture en continu ou de téléchargement pour une écoute hors ligne. Elle est également équipée de fonctionnalités de personnalisation qui permettent aux utilisateurs de modifier la vitesse de lecture, de créer des listes de lecture personnalisées et de recevoir des recommandations en fonction de leurs habitudes d'écoute.
    //     Enfin, l'application offre une fonctionnalité de synchronisation multi-appareils pour permettre aux utilisateurs de reprendre leur écoute sur différents appareils, sans avoir à chercher ou à reprendre leur position de lecture.
    //     Dans l'ensemble, cette application mobile de podcast offre une expérience d'écoute conviviale, avec une grande variété de contenus à découvrir et des fonctionnalités de personnalisation pour s'adapter aux préférences de chaque utilisateur.`,
    //     animation: 'All animation is made with after effect and lottie',
    //     functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
    //     technos: ['React', 'NodeJs', 'GraphQL', 'Apollo', 'Prisma', 'Typescript'],
    //   },
    //   screenShoots: [],
    //   screenShootType: 'mobile',
    // },
    // {
    //   logo: orderEase,
    //   // logo: undefined,
    //   name: 'Resto-app',
    //   logoSize: '50px',
    //   link: '/project/resto-app',
    //   about: {
    //     demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
    //     gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
    //     description: `L'application est une plateforme de commande de repas en ligne qui permet aux utilisateurs de consulter les menus des restaurants locaux et de passer des commandes depuis leur téléphone portable. L'application est facile à utiliser et permet aux clients de parcourir les menus, de sélectionner les plats qu'ils souhaitent commander, d'ajouter des instructions spéciales et de passer leur commande en quelques clics.
    //     L'une des fonctionnalités clés de l'application est le paiement mobile, qui permet aux utilisateurs de payer leurs commandes directement à partir de leur téléphone portable. Les utilisateurs peuvent enregistrer leurs informations de paiement dans l'application pour un processus de commande plus rapide et plus facile.
    //     L'application fournit également une fonctionnalité de suivi de commande en temps réel qui permet aux utilisateurs de suivre l'état de leur commande de la préparation à la livraison. Les utilisateurs reçoivent des notifications sur leur téléphone portable pour les tenir informés de l'avancement de leur commande.
    //     L'application est conçue pour être conviviale et intuitive, avec une interface utilisateur attrayante et facile à naviguer. Elle est également dotée de fonctionnalités de filtrage pour aider les utilisateurs à trouver rapidement les plats qu'ils recherchent, en fonction de leur type de cuisine préféré, de leur prix ou de leur disponibilité.
    //     Dans l'ensemble, cette application permet aux utilisateurs de commander des plats en ligne et de payer facilement avec leur téléphone portable, offrant une expérience de commande rapide et pratique pour les clients et une source de revenus supplémentaire pour les restaurants locaux.`,
    //     functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
    //     technos: ['ReactNative', 'tailwind'],
    //   },
    //   screenShootType: 'mobile',
    //   screenShoots: [
    //     { label: 'Erreur', 
    //     image: orderEaseError, 
    //     // image: undefined 
    //   },
    //     { label: 'Facture', 
    //     image: orderEaseFacture,
    //     // image: undefined,
    //    },
    //     { label: 'Confirmation', 
    //     image: orderEaseConfirmation,
    //     // image: undefined,
    //    },
    //     { label: 'Details Plats',
    //     image: orderEaseDetailsPlats,
    //     // image: undefined,
    //    },
    //   ],
    // },
    {
      logo: gestionFond,
      name: 'Gestion-fond',
      logoSize: '70px',
      link: '/project/gestion-fond',
      about: {
        missions: [
          "projectGestionFondMission1",
          "projectGestionFondMission2",
          "projectGestionFondMission3",
          "projectGestionFondMission4",
          "projectGestionFondMission5",
          "projectGestionFondMission6",
        ],
        demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
        gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
        description: `projectGestionFondOverview`,
        animation: 'All animation is made with after effect and lottie',
        functionnalities: ['expenseTracking', 'financialStrategy'],
        technos: ['Deno','Typescript', 'React', 'Tailwind'],
      },
      screenShootType: 'web',
      screenShoots: [
        { 
          label: 'expense home', 
          image: expense_tracking_home, 
        },
        { 
          label: 'expense tracking', 
          image: expense_tracking_expenses, 
        },
        { 
          label: 'finance home', 
          image: expense_tracking_finance_home, 
        },
        { 
          label: 'New buy plan', 
          image: expense_tracking_new_buy_plan, 
        },
        { 
          label: 'delete expense', 
          image: expense_tracking_delete_expense, 
        },
        { 
          label: 'select plan detail', 
          image: expense_tracking_select_plan_detail, 
        },
        { 
          label: 'select plan type', 
          image: expense_tracking_select_plan_type, 
        },
        { 
          label: 'new selling goal', 
          image: expense_tracking_new_selling_goal, 
        },
        { 
          label: 'expense detail 2', 
          image: expense_tracking_expense_details_2, 
        },
        { 
          label: 'delte goal', 
          image: expense_tracking_delete_finance_goal, 
        },
        { 
          label: 'finance sold detail', 
          image: expense_tracking_finance_sold_detail, 
        },
        { 
          label: 'creation new expense', 
          image: expense_tracking_creation_new_expense, 
        },
        { 
          label: 'expense chart details', 
          image: expense_tracking_expense_chart_details, 
        },
        { 
          label: 'creation expense', 
          image: expense_tracking_creation_expense_1, 
        },
        { 
          label: 'expense category filters', 
          image: expense_tracking_expense_category_filters, 
        },
      ],
    },
    // {
    //   // logo: undefined,
    //   logo: todoApp,
    //   name: 'Todo-app',
    //   logoSize: '50px',
    //   link: '/project/todo-app',
    //   about: {
    //     demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
    //     gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
    //     description: `L'application mobile Todo est un outil de gestion de tâches simple et efficace qui permet aux utilisateurs de créer, organiser et suivre leur liste de tâches quotidiennes.
    //     Les utilisateurs peuvent facilement ajouter des tâches à leur liste, les organiser par priorité et suivre leur progression en temps réel. L'application propose des fonctionnalités de rappel pour aider les utilisateurs à ne pas oublier les tâches importantes et des options de répétition pour les tâches récurrentes.
    //     L'application Todo permet également aux utilisateurs de créer des projets et des listes de tâches pour différents domaines de leur vie, tels que le travail, la maison ou les loisirs. Les utilisateurs peuvent définir des objectifs, des échéances et des sous-tâches pour chaque projet et suivre leur progression de manière organisée.
    //     En outre, l'application offre une fonctionnalité de partage de tâches, permettant aux utilisateurs de partager des tâches avec des amis, des collègues ou des membres de la famille et de collaborer en temps réel pour accomplir des projets communs.
    //     Enfin, l'application Todo est conçue pour être simple et facile à utiliser, avec une interface conviviale et intuitive qui permet aux utilisateurs de se concentrer sur leurs tâches et de rester organisés.
    //     Dans l'ensemble, cette application mobile Todo est un outil pratique pour aider les utilisateurs à gérer leur liste de tâches quotidiennes, à organiser des projets et à collaborer avec d'autres personnes pour accomplir des tâches plus importantes.`,
    //     functionnalities: ['Mutli Language', 'Toogle themes', 'Audio Player'],
    //     technos: ['React', 'NodeJs', 'GraphQL', 'Apollo', 'Prisma', 'Typescript'],
    //   },
    //   screenShootType: 'mobile',
    //   screenShoots: [],
    // },
    {
      logo: BPLogo,
      // logo: undefined,
      name: 'Buyer',
      logoSize: '35px',
      textColor: 'white',
      background: '#22222f',
      link: '/project/buyer',
      about: {
        demoUrl: 'https://youtube/asdas6a5465/podcast-app-web',
        gitHubRepository: ' https://git-lab.com/hmathieutsialonina/podcast-app',
        description: `projectBuyerPersonaOverview`,
        missions:[
          'projectBuyerPersonaMission1',
          'projectBuyerPersonaMission2'
        ],
        functionnalities: [
          'chatgpt',
          'audienceTargeting',
          'personaGenerator',
          'chromeExtension',
        ],
        technos: ['React', 'NodeJs', 'Express', 'Typescript'],
      },
      screenShootType: 'mobile',
      screenShoots: [
        { label: 'Welcome', 
        image: Welcome,
        // image: undefined,
       },
        { label: 'SuccessGenerate', 
        // image: undefined,
        image: SuccessGenerate
       },
        { label: 'SuccessDownload', 
        image: SuccessDownload, 
        // image: undefined,
       },
        { label: 'Setting', 
        image: Setting,
        //  image: undefined,
          },
        { label: 'Loading', 
        image: Loading,
        // image: undefined,  
       },
        { label: 'Generator', 
        image: Generator, 
        // image: undefined,  
      },
        { label: 'GeneratedFile', 
        image: GeneratedFile, 
        // image: undefined,  
      },
        { label: 'FAQ', 
        image: FAQ, 
        // image: undefined 
      },
        { label: 'Avis',
         image: Avis, 
        // image: undefined
       },
        { label: 'About', 
        image: About,
        // image: undefined
      },
      ],
    },
  ]

  return {Projects}
} 

export interface ICardFormation {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface Formations {
  title: string;
  formations: ICardFormation[];
}

export const formationsData: Formations[] = [
  {
    title: "Je me prépare à créer du patrimoine",
    formations: [
      {
        title: "Changer ses croyances sur l’argent",
        description: "lorem",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/F9cc8sG5",
        image: "/images/formations/changer-ses-croyance-sur-l-argent.png",
      },

      {
        title: "Mindset d’un bon gestionnaire",
        description: "lorem",
        image: "/images/formations/le-mindset-d-un-bon-gestionnaire.png",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/edouPzZV",
      },
      {
        title: "Reprendre le pouvoir de ses finances",
        description: "lorem",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/FdnydzsN",
        image:
        "/images/formations/reprend.png",
      },
      {
        title: "Rembourser ses dettes et sortir du découvert",
        description: "lorem",
        image:
          "/images/formations/rembourser-ses-dettes-et-sortir-du-decouvert.png",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/rBWFLr25",
      },
      {
        title: "Apprendre à épargner pour financer ses projets",
        description: "lorem",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/Zum9YVWY",
      },
      {
        title:
          "Comprendre et maîtriser les différents types de placements financiers et immobiliers",
        image:
          "/images/formations/formation-comprendre.png",
        description: "lorem",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/2z9LWvb8",
      },
    ],
  },
  {
    title: "Je crée ou je développe du patrimoine",
    formations: [
      {
        title: "Elaborer sa stratégie patrimoniale",
        description: "lorem",
        
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/i62HhYAWb",
        image:'/images/formations/elaborer-sa-strategie-patrimoine.png'
      },
      {
        title: "Convaincre son banquier pour obtenir son prêt immobilier",
        description: "lorem",
        url: "https://institut-nebot-patrimoine.mykajabi.com/offers/VMFSgFLs",
        image:'/images/formations/convaincre-mon-banquier-obtenir-mon-prêt-immo.png'
      },
      {
        title: "Diminuer ses impôts grâce à un investissement immobilier ",
        description: "lorem",
      },
      {
        title: "Investir en France en tant qu’expatrié",
        description: "lorem",
      },
      {
        title:
          "Évaluer et optimiser la rentabilité de son investissement locatif",
        description: "lorem",
      },
    ],
  },
  {
    title: "J’hérite ou je transmets du patrimoine",
    formations: [
      {
        title: "Comment faire face à un décès: le Guide détaillé",
        description: "lorem",
      },
      {
        title: "Préparer sa transmission de patrimoine en toute sérénité ",
        description: "lorem",
      },
      {
        title: "Comprendre et sortir de l’indivision ",
        description: "lorem",
      },
      {
        title: "J’hérite en toute sérénité",
        description: "lorem",
      },
    ],
  },
  {
    title: "Autres",
    formations: [
      {
        title: "Je prépare ma retraite ou celle d’un proche",
        description: "Vous avez une idée de projet, mais vous n'avez",
        url: "#",
      },
    ],
  },
];

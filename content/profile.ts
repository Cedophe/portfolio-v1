import type {
  Certification,
  Principle,
  Role,
  SkillGroup,
} from "./types";

export const certifications: Certification[] = [
  {
    id: "ccnp",
    name: "CCNP Enterprise",
    issuer: "Cisco",
    detail: "ENCOR 350-401",
    status: "complete",
  },
  {
    id: "ccna",
    name: "CCNA",
    issuer: "Cisco",
    status: "complete",
  },
  {
    id: "nse3",
    name: "Fortinet NSE 3",
    issuer: "Fortinet",
    status: "complete",
  },
  {
    id: "az104",
    name: "Microsoft AZ-104",
    issuer: "Microsoft",
    detail: "Azure Administrator Associate",
    status: "complete",
  },
];

export const roles: Role[] = [
  {
    company: { en: "IMPROTECH", fr: "IMPROTECH" },
    role: {
      en: "Network & Security Engineer",
      fr: "Ingénieur réseaux et sécurité",
    },
    location: { en: "Accra, Ghana", fr: "Accra, Ghana" },
    period: { en: "2023 to Present", fr: "depuis 2023" },
    current: true,
    summary: {
      en: "Network and security engineering across on-premises infrastructure and cloud, with delivery across firewall, wireless, routing, VoIP, and automation projects.",
      fr: "Ingénierie réseaux et sécurité sur site et dans le cloud, avec des projets de pare-feu, Wi-Fi, routage, téléphonie et automatisation.",
    },
    points: [
      {
        en: "Delivered firewall, wireless, routing, VoIP, and automation projects in the employer's managed services context.",
        fr: "Livraison de projets pare-feu, Wi-Fi, routage, téléphonie et automatisation dans le contexte des services managés de l'employeur.",
      },
      {
        en: "Administered Palo Alto and FortiGate firewalls, including policy, NAT, and site connectivity.",
        fr: "Administration de pare-feux Palo Alto et FortiGate : politiques, NAT et connectivité des sites.",
      },
      {
        en: "Trained Cisco and AWS learners across CCNA, CCNP ENCOR, and AWS Cloud Practitioner.",
        fr: "Formation de publics Cisco et AWS en CCNA, CCNP ENCOR et AWS Cloud Practitioner.",
      },
    ],
  },
  {
    company: {
      en: "Ministry of Economy and Finance, Benin",
      fr: "Ministère de l'Économie et des Finances, Bénin",
    },
    role: {
      en: "IT Support Intern",
      fr: "Stagiaire support informatique",
    },
    location: { en: "Benin", fr: "Bénin" },
    period: { en: "2021", fr: "2021" },
    summary: {
      en: "IT support internship covering end-user support and day-to-day IT operations.",
      fr: "Stage de support informatique couvrant l'assistance aux utilisateurs et les opérations informatiques quotidiennes.",
    },
    points: [
      {
        en: "Supported end users and day-to-day IT operations alongside the IT team.",
        fr: "Assistance aux utilisateurs et aux opérations informatiques quotidiennes aux côtés de l'équipe informatique.",
      },
    ],
  },
];

export const trainingPrograms = [
  "CCNA",
  "CCNP ENCOR",
  "AWS Cloud Practitioner",
];

export const languages = [
  {
    name: { en: "French", fr: "Français" },
    level: "native",
  },
  {
    name: { en: "English", fr: "Anglais" },
    level: "professional",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    key: "network",
    items: [
      { en: "Routing and switching", fr: "Routage et commutation" },
      { en: "VLANs", fr: "VLAN" },
      { en: "WAN and site links", fr: "Liens WAN et inter-sites" },
      { en: "MikroTik RouterOS", fr: "MikroTik RouterOS" },
      { en: "Dual-ISP failover", fr: "Basculement double FAI" },
      { en: "Ubiquiti UniFi", fr: "Ubiquiti UniFi" },
    ],
  },
  {
    key: "security",
    items: [
      { en: "Palo Alto NGFW", fr: "Palo Alto NGFW" },
      { en: "FortiGate", fr: "FortiGate" },
      { en: "Firewall policy", fr: "Politiques de pare-feu" },
      { en: "NAT", fr: "NAT" },
      { en: "Security profiles", fr: "Profils de sécurité" },
    ],
  },
  {
    key: "cloud",
    items: [
      { en: "AWS", fr: "AWS" },
      { en: "Microsoft Azure", fr: "Microsoft Azure" },
      { en: "AZ-104", fr: "AZ-104" },
      { en: "AWS Cloud Practitioner", fr: "AWS Cloud Practitioner" },
    ],
  },
  {
    key: "automation",
    items: [
      { en: "Python", fr: "Python" },
      { en: "Inventory automation", fr: "Automatisation d'inventaire" },
      { en: "Repeatable operations", fr: "Opérations reproductibles" },
    ],
  },
  {
    key: "voice",
    items: [
      { en: "3CX", fr: "3CX" },
      { en: "SIP trunks", fr: "Trunks SIP" },
      { en: "Multi-site call routing", fr: "Routage d'appels multi-sites" },
    ],
  },
  {
    key: "documentation",
    items: [
      { en: "Change records", fr: "Fiches de changement" },
      { en: "Runbooks", fr: "Runbooks" },
      { en: "Case studies", fr: "Études de cas" },
    ],
  },
];

export const principles: Principle[] = [
  {
    title: {
      en: "Proof over assertion",
      fr: "La preuve avant l'affirmation",
    },
    body: {
      en: "Show the deployment, the policy, the certificate, and the constraint. Adjectives do not survive a technical review.",
      fr: "Montrer le déploiement, la politique, le certificat et la contrainte. Les adjectifs ne survivent pas à une revue technique.",
    },
  },
  {
    title: {
      en: "Document the change",
      fr: "Documenter le changement",
    },
    body: {
      en: "A change that cannot be explained to the next engineer is not finished. Policy, procedure, and inventory travel with the work.",
      fr: "Un changement qui ne peut pas être expliqué à l'ingénieur suivant n'est pas terminé. Politiques, procédures et inventaires accompagnent le travail.",
    },
  },
  {
    title: {
      en: "One practice, not three hats",
      fr: "Une seule pratique, pas trois casquettes",
    },
    body: {
      en: "Network, security, and cloud are one estate. The value is in connecting them, not presenting them as separate specialties.",
      fr: "Réseau, sécurité et cloud forment un seul ensemble. La valeur vient de leur connexion, pas de leur présentation comme spécialités séparées.",
    },
  },
  {
    title: {
      en: "Nothing invented",
      fr: "Rien d'inventé",
    },
    body: {
      en: "Client names, metrics, and outcomes stay out unless they are real and cleared. Missing facts stay visibly unstated.",
      fr: "Les noms de clients, les chiffres et les résultats restent absents s'ils ne sont pas réels et autorisés. Les faits manquants restent visiblement non énoncés.",
    },
  },
];

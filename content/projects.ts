import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "university-ngfw-rollout",
    code: "01",
    domain: "security",
    status: "shipped",
    title: {
      en: "Next-generation firewall rollout for a 500+ user university",
      fr: "Déploiement d'un pare-feu nouvelle génération pour une université de plus de 500 utilisateurs",
    },
    summary: {
      en: "Deployed and configured Palo Alto next-generation firewall controls for a 500+ user university campus in Accra.",
      fr: "Déploiement et configuration d'un pare-feu nouvelle génération Palo Alto pour un campus universitaire de plus de 500 utilisateurs à Accra.",
    },
    scope: { en: "500+ users", fr: "500+ utilisateurs" },
    site: {
      en: "University campus, Accra",
      fr: "Campus universitaire, Accra",
    },
    context: {
      en: "A university campus with more than 500 users needed next-generation firewall control at the network edge, with policy that could be understood and maintained by the operating team.",
      fr: "Un campus universitaire de plus de 500 utilisateurs avait besoin d'un contrôle de pare-feu nouvelle génération en périphérie de réseau, avec une politique compréhensible et maintenable par l'équipe d'exploitation.",
    },
    approach: {
      en: "Worked through policy design, NAT, and security profiles, then validated the rule base and documented the deployed configuration for handover.",
      fr: "Travail sur la conception des politiques, le NAT et les profils de sécurité, puis validation de la base de règles et documentation de la configuration déployée pour la transmission.",
    },
    constraints: {
      en: "Live campus traffic; the rollout had to preserve access to teaching and administrative systems while the firewall policy was introduced.",
      fr: "Trafic de campus en production ; le déploiement devait préserver l'accès aux systèmes pédagogiques et administratifs pendant l'introduction de la politique de pare-feu.",
    },
    stack: ["Palo Alto NGFW", "Security policy", "NAT", "Security profiles"],
  },
  {
    slug: "multi-site-fortigate",
    code: "02",
    domain: "security",
    status: "operational",
    title: {
      en: "Multi-site FortiGate operations across 16+ branches",
      fr: "Exploitation FortiGate multi-sites sur plus de 16 agences",
    },
    summary: {
      en: "Administered FortiGate firewalls and site connectivity for an organization operating 16+ branches.",
      fr: "Administration des pare-feux FortiGate et de la connectivité inter-sites pour une organisation de plus de 16 agences.",
    },
    scope: { en: "16+ branches", fr: "16+ agences" },
    site: {
      en: "Distributed branch estate",
      fr: "Parc d'agences réparti",
    },
    context: {
      en: "A 16+ branch organization depended on FortiGate firewalls at each site to keep branch traffic connected and controlled.",
      fr: "Une organisation de plus de 16 agences s'appuyait sur des pare-feux FortiGate sur chaque site pour maintenir la connectivité et le contrôle du trafic.",
    },
    approach: {
      en: "Handled firewall administration, policy changes, and site connectivity across the branch estate, keeping configuration changes documented.",
      fr: "Administration des pare-feux, des changements de politique et de la connectivité des sites sur l'ensemble du parc, avec une documentation des changements de configuration.",
    },
    constraints: {
      en: "Distributed sites; a change at one branch had to be reasoned about against the wider topology.",
      fr: "Sites répartis ; un changement sur une agence devait être évalué par rapport à la topologie globale.",
    },
    stack: ["FortiGate", "IPsec VPN", "Routing", "Firewall policy"],
  },
  {
    slug: "palo-alto-administration",
    code: "03",
    domain: "security",
    status: "operational",
    title: {
      en: "Palo Alto firewall administration",
      fr: "Administration de pare-feux Palo Alto",
    },
    summary: {
      en: "Day-to-day administration of Palo Alto firewall policy, objects, and security profiles in a production environment.",
      fr: "Administration quotidienne des politiques, objets et profils de sécurité Palo Alto dans un environnement de production.",
    },
    scope: { en: "Production firewall", fr: "Pare-feu de production" },
    site: {
      en: "Production environment",
      fr: "Environnement de production",
    },
    context: {
      en: "Ongoing firewall administration for production traffic, with changes requested by the operating team.",
      fr: "Administration continue des pare-feux pour le trafic de production, avec des changements demandés par l'équipe d'exploitation.",
    },
    approach: {
      en: "Reviewed and maintained policy, managed objects and address groups, and handled change requests with the operating team.",
      fr: "Revue et maintenance des politiques, gestion des objets et groupes d'adresses, et traitement des demandes de changement avec l'équipe d'exploitation.",
    },
    constraints: {
      en: "Production change control; every rule change had to remain traceable.",
      fr: "Contrôle des changements en production ; chaque modification de règle devait rester traçable.",
    },
    stack: ["Palo Alto NGFW", "Policy", "Objects", "NAT"],
  },
  {
    slug: "enterprise-unifi-wifi",
    code: "04",
    domain: "wireless",
    status: "operational",
    title: {
      en: "Enterprise UniFi Wi-Fi across campus",
      fr: "Wi-Fi UniFi d'entreprise sur le campus",
    },
    summary: {
      en: "Deployed and operated a Ubiquiti UniFi wireless estate for an enterprise campus, including access points, SSIDs, and controller management.",
      fr: "Déploiement et exploitation d'un parc Wi-Fi Ubiquiti UniFi pour un campus d'entreprise : points d'accès, SSID et gestion du contrôleur.",
    },
    scope: { en: "Campus Wi-Fi", fr: "Wi-Fi de campus" },
    site: {
      en: "Enterprise campus",
      fr: "Campus d'entreprise",
    },
    context: {
      en: "An enterprise site needed managed Wi-Fi coverage across its campus, with wireless access aligned to the wired network.",
      fr: "Un site d'entreprise avait besoin d'une couverture Wi-Fi administrée sur son campus, avec un accès sans fil aligné sur le réseau filaire.",
    },
    approach: {
      en: "Planned SSIDs and VLAN mapping, deployed access points, and managed the controller and client access.",
      fr: "Planification des SSID et du mappage VLAN, déploiement des points d'accès, et gestion du contrôleur et de l'accès client.",
    },
    constraints: {
      en: "Coverage and roaming across a live campus; wired and wireless policy had to stay consistent.",
      fr: "Couverture et itinérance sur un campus en production ; les politiques filaire et sans fil devaient rester cohérentes.",
    },
    stack: ["Ubiquiti UniFi", "Controller", "VLANs", "PoE"],
  },
  {
    slug: "mikrotik-dual-isp",
    code: "05",
    domain: "network",
    status: "operational",
    title: {
      en: "MikroTik dual-ISP load balancing",
      fr: "Répartition de charge MikroTik sur double FAI",
    },
    summary: {
      en: "Configured MikroTik routing and dual-ISP failover/load balancing for a site that needed resilient internet access.",
      fr: "Configuration du routage MikroTik et du basculement/répartition de charge sur double FAI pour un site nécessitant un accès Internet résilient.",
    },
    scope: { en: "Two ISP links", fr: "Deux liens FAI" },
    site: {
      en: "Site with dual ISP",
      fr: "Site avec double FAI",
    },
    context: {
      en: "A site depended on internet access and had two ISP links available; the network needed to use both and survive a link failure.",
      fr: "Un site dépendait d'un accès Internet et disposait de deux liens FAI ; le réseau devait utiliser les deux et résister à une panne de lien.",
    },
    approach: {
      en: "Configured MikroTik policy routing, link health checks, and NAT so traffic could use both links and fail over without manual intervention.",
      fr: "Configuration du routage par politique MikroTik, des contrôles de santé des liens et du NAT afin que le trafic utilise les deux liens et bascule sans intervention manuelle.",
    },
    constraints: {
      en: "Two uplinks with different behavior; routing had to fail over cleanly and remain understandable to the operating team.",
      fr: "Deux liens aux comportements différents ; le routage devait basculer proprement et rester compréhensible pour l'équipe d'exploitation.",
    },
    stack: ["MikroTik RouterOS", "Policy routing", "NAT", "Link health checks"],
  },
  {
    slug: "python-inventory",
    code: "06",
    domain: "automation",
    status: "shipped",
    title: {
      en: "Python inventory automation across ~50 devices",
      fr: "Automatisation d'inventaire Python sur ~50 équipements",
    },
    summary: {
      en: "Built a Python inventory workflow to collect and organize device data across roughly 50 network devices.",
      fr: "Construction d'un flux d'inventaire Python pour collecter et organiser les données d'environ 50 équipements réseau.",
    },
    scope: { en: "~50 devices", fr: "~50 équipements" },
    site: {
      en: "Mixed network estate",
      fr: "Parc réseau hétérogène",
    },
    context: {
      en: "Manual inventory across roughly 50 network devices was slow and error-prone, and the estate needed a repeatable record.",
      fr: "L'inventaire manuel d'environ 50 équipements réseau était lent et sujet aux erreurs ; le parc avait besoin d'un relevé reproductible.",
    },
    approach: {
      en: "Wrote Python collection logic, normalized device records, and produced a repeatable inventory output for operations.",
      fr: "Écriture de la logique de collecte en Python, normalisation des enregistrements d'équipements et production d'un inventaire reproductible pour l'exploitation.",
    },
    constraints: {
      en: "Mixed device estate; collection had to tolerate unreachable or slow devices.",
      fr: "Parc hétérogène ; la collecte devait tolérer les équipements injoignables ou lents.",
    },
    stack: ["Python", "Device access", "Structured output", "Inventory"],
  },
  {
    slug: "multi-site-3cx",
    code: "07",
    domain: "voice",
    status: "operational",
    title: {
      en: "Multi-site 3CX VoIP administration",
      fr: "Administration VoIP 3CX multi-sites",
    },
    summary: {
      en: "Administered a multi-site 3CX phone system, including extensions, trunks, and site-level call routing.",
      fr: "Administration d'un système téléphonique 3CX multi-sites : postes, trunks et routage des appels par site.",
    },
    scope: { en: "Multi-site voice", fr: "Téléphonie multi-sites" },
    site: {
      en: "Multi-site organization",
      fr: "Organisation multi-sites",
    },
    context: {
      en: "A multi-site organization used 3CX for voice across locations, with call routing that had to follow the site structure.",
      fr: "Une organisation multi-sites utilisait 3CX pour la téléphonie entre ses sites, avec un routage des appels devant suivre la structure des sites.",
    },
    approach: {
      en: "Managed extensions, SIP trunks, call routing, and site provisioning, and supported users across locations.",
      fr: "Gestion des postes, des trunks SIP, du routage des appels et du provisionnement par site, avec support des utilisateurs sur les différents sites.",
    },
    constraints: {
      en: "Voice availability across sites; changes had to preserve call routing.",
      fr: "Disponibilité de la téléphonie entre les sites ; les changements devaient préserver le routage des appels.",
    },
    stack: ["3CX", "SIP trunks", "Extensions", "Call routing"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

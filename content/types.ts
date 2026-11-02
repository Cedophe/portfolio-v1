export type Locale = "en" | "fr";

export type Localized = Record<Locale, string>;

export type Domain = "security" | "network" | "wireless" | "automation" | "voice";

export type ProjectStatus = "operational" | "shipped" | "ongoing";

export type CertStatus = "complete" | "inProgress" | "pending";

export type Project = {
  slug: string;
  code: string;
  domain: Domain;
  status: ProjectStatus;
  title: Localized;
  summary: Localized;
  scope: Localized;
  site: Localized;
  context: Localized;
  approach: Localized;
  constraints: Localized;
  stack: string[];
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  detail?: string;
  status: CertStatus;
};

export type Role = {
  company: Localized;
  role: Localized;
  location: Localized;
  period: Localized;
  summary: Localized;
  points: Localized[];
  current?: boolean;
};

export type SkillGroup = {
  key: string;
  items: Localized[];
};

export type Principle = {
  title: Localized;
  body: Localized;
};

export type LabRowData = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  domain: Domain;
  status: ProjectStatus;
  domainLabel: string;
  statusLabel: string;
  stack: string[];
};

export type FocusArea = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type SiteProfile = {
  name: string;
  role: string;
  headline: string;
  shortBio: string;
  email: string;
  currentFocus: string;
  focusAreas: FocusArea[];
  stackHighlights: string[];
};

export type AboutContent = {
  intro: string;
  paragraphs: string[];
  capabilities: string[];
  funFacts: string[];
  principles: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  minor?: string;
  graduation: string;
  coursework?: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  previewImage?: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  links: ProjectLink[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type ActivityItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type SiteContent = {
  profile: SiteProfile;
  about: AboutContent;
  education: EducationItem[];
  experience: ExperienceItem[];
  activities: ActivityItem[];
  featuredProjects: ProjectItem[];
  moreProjects: ProjectItem[];
  contactLead: string;
  contactLinks: ContactLink[];
};

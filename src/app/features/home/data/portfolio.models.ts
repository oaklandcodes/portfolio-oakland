export type Profile = {
  greeting: string;
  name: string;
  role: string;
  summary: string;
};

export type ContactLinks = {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
};

export type MetricItem = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  school: string;
  title: string;
  year: string;
};

export type Language = {
  name: string;
  level: string;
  flagImage: string;
};

export type TechStack = {
  category: string;
  technologies: string[];
};

export type ProjectItem = {
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  highlights: string[];
  stack: string[];
  demoUrl: string;
  repoUrl: string;
};

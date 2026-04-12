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
};

export type MetricItem = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

import { ContactLinks, MetricItem, Profile, SkillGroup } from './portfolio.models';

export const PROFILE_DATA: Profile = {
  greeting: 'Hola! Soy',
  name: 'Oakland Caro',
  role: 'desarrolladora web con foco en Angular moderno',
  summary:
    'Construyo interfaces claras, rapidas y escalables para productos digitales con impacto real.',
};

export const CONTACT_LINKS: ContactLinks = {
  github: 'https://github.com/oaklandcodes',
  linkedin: 'https://www.linkedin.com/in/oaklandcaro91/',
  email: 'oakland.caro91@gmail.com',
};

export const METRICS_DATA: MetricItem[] = [
  { label: 'Años de codigo', value: '2+' },
  { label: 'Proyectos completados', value: '4+' },
  { label: 'Certificaciones', value: '26' },
  { label: 'Nivel de ingles', value: 'B2' }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    title: 'Frontend y Core',
    items: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML semantico', 'Responsive design']
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'NPM']
  },
  {
    title: 'Soft Skills',
    items: ['Comunicacion', 'Trabajo en equipo', 'Aprendizaje continuo', 'Resolucion de problemas']
  }
];

import {
  ContactLinks,
  EducationItem,
  ExperienceItem,
  Language,
  MetricItem,
  ProjectItem,
  Profile,
  SkillGroup,
  TechStack,
} from './portfolio.models';

export const PROFILE_DATA: Profile = {
  greeting: 'Presentando a',
  name: 'Oakland Caro',
  role: 'Frontend Developer | Angular Specialist',
  summary:
    'Especialista en el desarrollo de interfaces robustas y escalables con Angular. Mi trayectoria se define por la transición de la gestión crítica en salud a la ingeniería de software, aportando una capacidad analítica excepcional, rigor técnico y un enfoque inquebrantable en la calidad del código y la arquitectura mantenible.',
};

export const CONTACT_LINKS: ContactLinks = {
  phone: '640116766',
  github: 'https://github.com/oaklandcodes',
  linkedin: 'https://www.linkedin.com/in/oaklandcaro91/',
  email: 'oakland.caro1@gmail.com',
};

export const METRICS_DATA: MetricItem[] = [
  { label: 'Años en Tech', value: '2+' },
  { label: 'Proyectos Cloud', value: '4+' },
  { label: 'Certificaciones IT', value: '4' },
  { label: 'Competencia Inglés', value: 'B2' },
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    title: 'Frontend y Core',
    items: [
      'Angular (Signals, Control Flow)',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5',
      'CSS',
      'Responsive design',
    ],
  },
  {
    title: 'Backend & Herramientas',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Git/GitHub',
      'APIs REST',
      'Postman',
      'Uso de IA en desarrollo',
      'IA Spec-driven development',
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      'Liderazgo Operativo',
      'Análisis de Datos y KPIs',
      'Mentoría y Formación',
      'Adaptabilidad',
      'Resolución de problemas',
      'Trabajo en equipo',
      'Comunicación clara',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Frontend Developer Junior',
    company: 'Sagardobus S.L.',
    period: '2025 - 2026',
    description: [
      'Desarrollo de SPAs con Angular +, implementando Signals y Control Flow para optimizar la reactividad y el rendimiento.',
      'Arquitectura modular: Creación de componentes altamente reutilizables y servicios desacoplados para el consumo de APIs REST.',
      'Optimización de flujos de datos: Manejo eficiente de estados dinámicos y lógica de negocio compleja en TypeScript.',
      'Colaboración técnica: Participación activa en revisiones de código y despliegues bajo metodologías ágiles (Scrum).',
    ],
  },
  {
    title: 'Directora en Servicios de Salud Estética',
    company: 'ELHA LASER (ESPAÑA)',
    period: '2020 - 2024',
    description: [
      'Análisis de Datos y KPIs: Elaboración y análisis de estadísticas de ventas y productividad por empleada, generando informes estratégicos para optimizar el desempeño',
      'Gestión Operativa a Escala: Coordinación logística de 26 centros y liderazgo de un equipo de 30 personas, asegurando la eficiencia en la distribución de horarios y tareas',
      'Formación Continua: Diseño e implementación de programas de formación continua del personal, fomentando la implementación de mejores prácticas y estándares de calidad',
    ],
  },
  {
    title: 'Encargada de Tienda',
    company: 'JIMMY LION (ESPAÑA)',
    period: '2019 - 2020',
    description: ['Gestión operativa de tienda', 'Atención al cliente', 'Gestión de inventario'],
  },
  {
    title: 'Enfermera Neonatal y Profesora de Enfermería',
    company: 'VENEZUELA',
    period: '2015 - 2019',
    description: [
      'Atención de pacientes neonatales',
      'Docencia en programas de enfermería',
      'Procedimientos de cuidado crítico',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    school: '42 Barcelona (Fundación Telefónica)',
    title: 'Fundamentos de programación y Algoritmos',
    year: '2024 - 2025',
  },
  {
    school: 'IA Responsable y Prompt Engineering',
    title: 'Certificación en optimización de flujos de trabajo con IA',
    year: '2025',
  },
  {
    school: 'CIEF',
    title: 'Programación Orientada a Objetos y base de datos relacionales',
    year: '2025',
  },
  {
    school: 'Udemy',
    title: 'Full Stack Web Development',
    year: '2024',
  },
  {
    school: 'Google Career Certificates',
    title: 'Ciberseguridad: Fundamentos de seguridad aplicada al desarrollo',
    year: '2024',
  },
  {
    school: 'Universidad Rómulo Gallegos (UNERG)',
    title: 'Grado en Enfermería',
    year: '2009 - 2015',
  },
];

export const LANGUAGES_DATA: Language[] = [
  { name: 'Español', level: 'Nativo', flagImage: 'assets/flags/es.svg' },
  { name: 'Inglés', level: 'B2', flagImage: 'assets/flags/gb.svg' },
  { name: 'Catalán', level: 'Básico', flagImage: 'assets/flags/cat.svg' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'OakAir-app',
    category: 'Plataforma Boutique de Vuelos',
    summary:
      'SPA desarrollada con Angular 19 y arquitectura Standalone, enfocada en gestión de vuelos con experiencia premium y flujos optimizados.',
    imageUrl: 'assets/projects/04-flights-list.png',
    imageAlt: 'Captura de OakAir con listado de vuelos y formulario de búsqueda',
    highlights: [
      'Uso avanzado de Signals para reactividad sin latencia',
      'Autenticacion JWT con proteccion de rutas privadas',
      'Persistencia de sesion en LocalStorage tras refresco',
      'Formularios reactivos y validaciones complejas con Tailwind CSS',
    ],
    stack: ['Angular', 'Standalone', 'Signals', 'JWT', 'Tailwind CSS', 'LocalStorage'],
    demoUrl: 'https://oaklandcodes.github.io',
    repoUrl: 'https://github.com/oaklandcodes',
  },
  {
    title: 'Proyecto destacado #2',
    category: 'En preparacion',
    summary:
      'Card reservada para tu segundo proyecto principal. En cuanto me compartas el resumen, lo dejamos completo con stack, imagen y links reales.',
    imageUrl: 'assets/projects/project-placeholder.avif',
    imageAlt: 'Espacio reservado para segundo proyecto destacado',
    highlights: [
      'Pendiente de resumen funcional',
      'Pendiente de stack tecnico final',
      'Pendiente de enlace demo y repositorio',
    ],
    stack: ['Angular', 'TypeScript'],
    demoUrl: 'https://oaklandcodes.github.io',
    repoUrl: 'https://github.com/oaklandcodes',
  },
];

export const TECH_STACK_DATA: TechStack[] = [
  {
    category: 'Frontend',
    technologies: [
      'Angular (Signals, h3, Control Flow)',
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
    ],
  },
  {
    category: 'Visualización y Estilos',
    technologies: ['HTML5', 'CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Backend & DB',
    technologies: ['Node.js', 'Express', 'MongoDB [Stack MEAN]', 'PostgreSQL'],
  },
  {
    category: 'Herramientas y Metodología',
    technologies: [
      'Git/GitHub',
      'APIs REST',
      'Postman',
      'Scrum',
      'Prompt Engineering',
      'UX development',
    ],
  },
];

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
  name: 'Oakland Caro',
  role: 'Frontend Developer | Angular Specialist',
  summary:
    'Especialista en el desarrollo de interfaces robustas y escalables con Angular. Mi trayectoria se define por la transición de la gestión crítica en salud a la ingeniería de software, aportando una capacidad analítica excepcional, rigor técnico y un enfoque inquebrantable en la calidad del código y la arquitectura mantenible.',
};

export const CONTACT_LINKS: ContactLinks = {
  github: 'https://github.com/oaklandcodes',
  linkedin: 'https://www.linkedin.com/in/oaklandcaro91/',
  email: 'oakland.caro91@gmail.com',
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
    period: 'Mayo 2025 - Actualidad',
    description: [
      'Desarrollo de interfaces reactivas con Angular , integrando el nuevo flujo de control y Signals para maximizar la eficiencia del renderizado.',
      'Consumo y gestión de APIs REST, asegurando una comunicación fluida entre el cliente y el servidor en aplicaciones críticas de negocio.',
      'Liderazgo técnico en la modularización de componentes, reduciendo la redundancia de código y facilitando el mantenimiento a largo plazo.',
      'Colaboración estrecha en metodologías Agile (Scrum), participando en revisiones de código que elevaron los estándares de calidad del equipo.',
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
    title: 'Sagardobus',
    category: 'Etapa profesional',
    summary:
      'Participacion en entorno profesional como  Junior Frontend Developer, trabajando en funcionalidades de negocio con Angular y consumo de APIs REST.',
    imageUrl: 'assets/SagardoBus.png',
    imageAlt: 'Captura del proyecto profesional de Sagardobus',
    highlights: [
      'Desarrollo y mantenimiento de funcionalidades CRUD en Angular',
      'Integracion de servicios para consumo de APIs REST',
      'Trabajo en equipo con metodologia Scrum y control de versiones con Git',
    ],
    stack: ['Angular', 'TypeScript', 'APIs REST', 'Git', 'Scrum'],
    demoUrl: 'https://www.sagardobus.com/',
  },
  {
    title: 'OakAir',
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
    title: 'API Documentada con Swagger',
    category: 'Backend',
    summary:
      'Diseño y documentación completa de la API con Swagger/OpenAPI. Actualmente en fase de implementación de la capa frontend para cerrar el flujo end-to-end.',
    imageUrl: 'assets/swagger.png',
    imageAlt: 'Captura del segundo proyecto destacado con interfaz Swagger',
    highlights: [
      'Contrato de API y endpoints definidos en Swagger',
      'Estructura backend validada para integración cliente-servidor',
      'Siguiente hito: desarrollo del frontend en Angular',
    ],
    stack: ['Swagger', 'OpenAPI', 'REST API', 'Angular (en progreso)'],
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

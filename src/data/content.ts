export type Stat = {
  label: string;
  value: string;
  accent?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  pillars: Array<{
    title: string;
    copy: string;
    items: string[];
  }>;
};

export type EducationItem = {
  title: string;
  subtitle: string;
  details: string;
  highlights: string[];
  icon: string;
};

export const heroContent = {
  name: 'Abdurrahman Rushdi',
  /** One line recruiters can skim in under two seconds */
  headline:
    'Full-stack & backend-focused — Java · TypeScript · NestJS · Spring Boot · React',
  tagline:
    'Computer Science undergraduate (University of Westminster @ IIT) who ships APIs, async job pipelines, and cloud-backed services. Comfortable owning features from schema to deployment.',
  ctaPrimary: 'See selected work',
  ctaSecondary: 'Email me',
  ctaResume: 'Download résumé (PDF)',
};

/** Place `resume.pdf` in `/public` so this link works on deploy */
export const resumePdfHref = '/resume.pdf';

/** Signals time zone and work arrangement for hiring managers */
export const availabilityLine =
  'Open to internships · Remote or hybrid · Sri Lanka (GMT+5:30)';

export const stats: Stat[] = [
  { label: 'Programme', value: 'BSc CS', accent: '#34d399' },
  { label: 'Institution', value: 'UoW · IIT', accent: '#7dd3fc' },
  { label: 'Core stack', value: 'Java · TS · Py', accent: '#a78bfa' },
];

export const skills: SkillCategory[] = [
  {
    id: 'engineering',
    title: 'Full-stack & infrastructure',
    description:
      'Hands-on experience designing and deploying applications with a focus on backend APIs, async processing, and production-ready cloud workflows.',
    pillars: [
      {
        title: 'Languages & data',
        copy: 'Strong typing, SQL, and validation across services.',
        items: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
      },
      {
        title: 'Backend & APIs',
        copy: 'REST design, auth, and structured service layers.',
        items: [
          'Node.js',
          'NestJS',
          'Spring Boot',
          'JWT',
          'JPA',
          'Hibernate',
          'BullMQ',
        ],
      },
      {
        title: 'Frontend, data stores & DevOps',
        copy: 'Interfaces, persistence, and repeatable deployments.',
        items: [
          'React',
          'HTML',
          'CSS',
          'MySQL',
          'Firestore',
          'Redis',
          'Docker',
          'GCP',
          'Firebase',
          'CI/CD',
          'Git',
        ],
      },
    ],
  },
  {
    id: 'growth',
    title: 'Certifications & collaboration',
    description:
      'Continuous learning through formal certifications and team delivery on university and group technical projects.',
    pillars: [
      {
        title: 'Certifications',
        copy: 'Structured courses in SQL and Python fundamentals.',
        items: [
          'Introduction to SQL · Sololearn (Oct 2025)',
          'Python Essential Training · LinkedIn Learning (Apr 2025)',
        ],
      },
      {
        title: 'Self-directed learning',
        copy: 'Python, data analysis, and front-end via LinkedIn Learning and Coursera.',
        items: ['Python', 'Data analysis', 'Front-end development'],
      },
      {
        title: 'Teamwork & delivery',
        copy: 'Git-based collaboration on SDGP and Web Design group work.',
        items: [
          'Version control & code review',
          'Cross-functional coordination',
          'Rapid upskilling (React, TypeScript)',
        ],
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: 'BSc (Hons) Computer Science',
    subtitle: 'University of Westminster (via IIT, Sri Lanka) · 2024–Present',
    details:
      'Undergraduate programme with emphasis on full-stack development, system design, and deploying resilient services.',
    highlights: ['IIT Sri Lanka pathway', 'Systems & software engineering focus'],
    icon: '🎓',
  },
  {
    title: 'GCE Advanced Level',
    subtitle: 'Isipathana College, Sri Lanka · 2021–2024',
    details: 'Physical Science stream; foundation for university-level computing and quantitative work.',
    highlights: ['Physical Science stream'],
    icon: '🔬',
  },
  {
    title: 'GCE Ordinary Level',
    subtitle: 'Royal Institute, Sri Lanka · 2009–2021',
    details: 'General secondary education forming the base for advanced study and technical disciplines.',
    highlights: ['OL certification'],
    icon: '📘',
  },
];

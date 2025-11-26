export type Role = string;

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

export type Project = {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  link: string;
};

export type EducationItem = {
  title: string;
  subtitle: string;
  details: string;
  highlights: string[];
  icon: string;
};

export const heroContent = {
  name: 'Abdur Rahman',
  tagline: 'Designing immersive, performant experiences for ambitious brands.',
  ctaPrimary: 'View my work',
  ctaSecondary: 'Let’s collaborate',
};

export const roles: Role[] = [
  'Full-Stack Engineer',
  'UI Motion Designer',
  'Cloud-Native Architect',
 'AI Workflow Builder',
];

export const stats: Stat[] = [
  { label: 'Years shipping', value: '06+', accent: '#10b981' },
  { label: 'Products launched', value: '27', accent: '#c084fc' },
  { label: 'Avg. NPS', value: '72', accent: '#38bdf8' },
];

export const skills: SkillCategory[] = [
  {
    id: 'experience',
    title: 'Product Engineering',
    description:
      'Pixel-perfect interfaces backed by resilient APIs, observability, and delightful micro-interactions.',
    pillars: [
      {
        title: 'Frontend Systems',
        copy: 'Composable design languages and DX-friendly tooling.',
        items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'SCSS'],
      },
      {
        title: 'Backend Craft',
        copy: 'Event-driven services tuned for clarity and throughput.',
        items: ['Node.js', 'Express', 'GraphQL', 'tRPC', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Quality & Ops',
        copy: 'Automation that keeps releases boring and reliable.',
        items: ['Playwright', 'Vitest', 'GitHub Actions', 'Docker', 'K8s'],
      },
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation Sprints',
    description:
      'Rapid prototyping loops to validate concepts with live data, AI copilots, and immersive visuals.',
    pillars: [
      {
        title: 'Experience Strategy',
        copy: 'Workshop facilitation, journey mapping, KPI alignment.',
        items: ['Design Thinking', 'Storybook', 'Figma', 'Notion'],
      },
      {
        title: 'Realtime Interfaces',
        copy: 'Data viz, multiplayer canvases, and tactile controls.',
        items: ['WebGL', 'Framer Motion', 'd3.js', 'Three.js'],
      },
      {
        title: 'AI Workflows',
        copy: 'Integrations that automate the boring and amplify teams.',
        items: ['LangChain', 'OpenAI', 'Vector DBs', 'Automation'],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Aurora Commerce Cloud',
    description:
      'Multi-tenant headless storefront with adaptive merchandising, shoppable livestreams, and ops cockpit.',
    icon: '🚀',
    tags: ['React 18', 'tRPC', 'Stripe', 'Redis Streams'],
    link: '#',
  },
  {
    title: 'Nebula Insight Studio',
    description:
      'Realtime observability suite with cinematic data stories, anomaly detection, and team annotations.',
    icon: '📊',
    tags: ['Vite', 'Framer Motion', 'GraphQL', 'D3.js'],
    link: '#',
  },
  {
    title: 'Pulse Design System',
    description:
      'Enterprise-grade component system with theme tokens, accessibility contracts, and motion guidelines.',
    icon: '🎨',
    tags: ['React', 'Storybook', 'TypeScript', 'Figma Tokens'],
    link: '#',
  },
];

export const education: EducationItem[] = [
  {
    title: 'BSc Computer Science',
    subtitle: 'University of Toronto · 2017‑2021',
    details:
      'Specialized in human-computer interaction and distributed systems. Led developer student club, mentored hackathon teams.',
    highlights: ['Dean’s List x4', 'HCI Lab Researcher', 'Google STEP Scholar'],
    icon: '🎓',
  },
  {
    title: 'Professional Growth',
    subtitle: 'Certificates & Community · Ongoing',
    details:
      'Cloud architecture, leadership sprints, and design facilitation workshops to keep skills sharp.',
    highlights: [
      'AWS Solutions Architect',
      'Scrum@Scale Practitioner',
      'IDEO CoLab Alumni',
    ],
    icon: '📜',
  },
];


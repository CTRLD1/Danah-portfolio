// All portfolio content lives here. Edit this file to update the site.

import reachly01 from '../assets/images/projects/reachly/01-landing.jpg';
import reachly02 from '../assets/images/projects/reachly/02-login.jpg';
import reachly03 from '../assets/images/projects/reachly/03-challenge-list.jpg';
import reachly04 from '../assets/images/projects/reachly/04-challenge-detail.jpg';
import reachly05 from '../assets/images/projects/reachly/05-user-challenges.jpg';
import reachly06 from '../assets/images/projects/reachly/06-progress.jpg';
import reachly07 from '../assets/images/projects/reachly/07-add-reflection.jpg';
import reachly08 from '../assets/images/projects/reachly/08-edit-reflection.jpg';
import reachly09 from '../assets/images/projects/reachly/09-user-reflections.jpg';
import reachly10 from '../assets/images/projects/reachly/10-profile-dashboard.jpg';
import acmeBank from '../assets/images/projects/acme-bank.jpg';
import starships from '../assets/images/projects/starships-search.jpg';
import gaLogo from '../assets/images/logos/general-assembly.png';
import jxLogo from '../assets/images/logos/jxtechstudio.png';
import sdaLogo from '../assets/images/logos/sda.png';
import imsiuLogo from '../assets/images/logos/imsiu.png';
import certSda from '../assets/images/certificates/danahalsubaie-sda.jpg';
import certMckinsey from '../assets/images/certificates/mckinseyforward.jpg';
import certTuwaiq from '../assets/images/certificates/tuwaiqsqlusingpython.jpg';
import graduation from '../assets/images/certificates/graduation.jpg';

export const profile = {
  name: 'Danah Alsubaie',
  title: 'Software Engineer · Full-Stack Developer',
  location: 'Khobar, Saudi Arabia',
  email: 'danah.alsubaie2@gmail.com',
  github: 'https://github.com/CTRLD1',
  linkedin: 'https://www.linkedin.com/in/danah-alsubaie2',
  resume: '/Danah-Alsubaie-Resume.pdf',
  summary:
    'Full-stack Software Engineering Intern at JX Tech Studio, Computer Science graduate and Saudi Digital Academy × General Assembly bootcamp alumna. ' +
    'I build responsive, user-focused web apps with React, Django REST Framework and Laravel, and I care about clean, maintainable code that solves real problems.',
};

export type Expertise = {
  icon: 'react' | 'python' | 'git';
  title: string;
  description: string;
  stack: string[];
};

export const expertise: Expertise[] = [
  {
    icon: 'react',
    title: 'Frontend Development',
    description:
      'I build responsive, accessible interfaces with React and Tailwind CSS, wiring them to REST APIs with Axios and handling auth flows with JWT.',
    stack: ['React', 'TypeScript', 'JavaScript', 'React Router', 'HTML', 'CSS', 'Tailwind CSS', 'Axios', 'Vite'],
  },
  {
    icon: 'python',
    title: 'Backend & Databases',
    description:
      'I design data models and RESTful APIs with Django REST Framework and Laravel, backed by SQL databases and secured with token-based authentication.',
    stack: ['Python', 'Django', 'Django REST', 'PHP', 'Laravel', 'REST APIs', 'JWT Auth', 'SQL', 'PostgreSQL'],
  },
  {
    icon: 'git',
    title: 'Tools & Workflow',
    description:
      'I work in agile teams with daily standups, code reviews and Git-based workflows, and test APIs thoroughly before shipping.',
    stack: ['Git', 'GitHub', 'Code Review', 'Agile', 'n8n', 'Postman', 'VS Code', 'VENV'],
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  date: string;
  description: string;
  logo?: string;
  meta?: string;
  highlights?: { heading: string; points: string[] }[];
  skills?: string[];
};

export const experience: TimelineItem[] = [
  {
    title: 'Software Engineering Intern (Full-Stack)',
    org: 'JX Tech Studio',
    meta: 'Internship · Remote · Saudi Arabia',
    date: 'Present',
    description:
      'Contributing to real products in an agile team with daily standups, code reviews and Git-based workflows.',
    logo: jxLogo,
    highlights: [
      {
        heading: 'invoi — AI-Powered Invoice Management Dashboard',
        points: [
          'Owned the Authentication module end-to-end (frontend and backend).',
          'Built the Invoice Detail page, displaying AI-extracted invoice data for review.',
          'Developed the Analytics page (frontend + backend), integrating n8n automation workflows to trigger data analyses and display the results.',
          'Collaborated with frontend, backend and data analytics teammates on a shared codebase.',
        ],
      },
      {
        heading: 'Bayanuk (بيانك) — AI Job Offer & Employment Contract Reviewer',
        points: [
          'Backend owner for a new MVP that uses AI to review job offers and employment contracts.',
          'Designing and building the Laravel backend, including the API consumed by the React frontend.',
        ],
      },
    ],
    skills: ['React', 'TypeScript', 'Laravel', 'PHP', 'REST APIs', 'Authentication', 'Git', 'Agile'],
  },
  {
    title: 'Cooperative Training (Intern)',
    org: 'Wajaaha Company',
    date: 'Jan 2025 – May 2025',
    description:
      'Supported daily digital operations, workflow improvements and documentation updates, and collaborated with the team to streamline internal processes.',
  },
];

export type Education = {
  title: string;
  org: string;
  date: string;
  description: string;
  logos: { src: string; alt: string }[];
  highlight?: string;
};

export const education: Education[] = [
  {
    title: 'Software Engineering Bootcamp',
    org: 'Saudi Digital Academy × General Assembly',
    date: 'Aug 2025 – Nov 2025',
    highlight: '480 training hours',
    description:
      'Full-time immersive program covering Python, Django REST Framework, React and SQL through agile, project-based learning.',
    logos: [
      { src: sdaLogo, alt: 'Saudi Digital Academy' },
      { src: gaLogo, alt: 'General Assembly' },
    ],
  },
  {
    title: 'Bachelor of Computer Science',
    org: 'Al-Imam Mohammad Ibn Saud Islamic University',
    date: 'Aug 2020 – May 2025',
    highlight: 'GPA 4.65 / 5.00',
    description: 'Graduated with Second Class Honors.',
    logos: [{ src: imsiuLogo, alt: 'Imam Mohammad Ibn Saud Islamic University' }],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  images: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: 'Reachly',
    tag: 'Capstone · Solo Full-Stack Project',
    description:
      'A personal growth web app that helps introverts step out of their comfort zone through daily social and self-improvement challenges. Users pick challenges, track progress and write reflections.',
    stack: ['React (Vite)', 'Tailwind CSS', 'Axios', 'Django REST', 'PostgreSQL', 'JWT'],
    images: [reachly01, reachly02, reachly03, reachly04, reachly05, reachly06, reachly07, reachly08, reachly09, reachly10],
    links: [
      { label: 'Frontend', url: 'https://github.com/CTRLD1/reachly-frontend' },
      { label: 'Backend', url: 'https://github.com/CTRLD1/reachly-backend' },
    ],
  },
  {
    title: 'ACME Bank CLI',
    tag: 'Solo Python Project',
    description:
      'A terminal banking system built with object-oriented Python: data validation, CSV file storage for persistence, transfers between users and accounts, and overdraft protection.',
    stack: ['Python', 'OOP', 'CSV'],
    images: [acmeBank],
    links: [{ label: 'GitHub', url: 'https://github.com/CTRLD1/banking-project' }],
  },
  {
    title: 'Starships Search',
    tag: 'React Lab',
    description:
      'A Star Wars–themed React app that fetches starships from SWAPI with case-insensitive, partial-name search and live result counts.',
    stack: ['React (Vite)', 'JavaScript', 'Axios', 'CSS'],
    images: [starships],
    links: [{ label: 'GitHub', url: 'https://github.com/CTRLD1/react-starships-search' }],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Software Engineering Bootcamp — Graduation',
    issuer: 'Saudi Digital Academy × General Assembly',
    date: 'Nov 2025',
    image: graduation,
  },
  {
    title: 'Software Development Using Python Bootcamp',
    issuer: 'Saudi Digital Academy',
    date: 'Nov 2025',
    image: certSda,
    url: '/certificates/sda-bootcamp.pdf',
  },
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: 'Apr 2025 – Jul 2025',
    image: certMckinsey,
    url: '/certificates/mckinsey-forward.pdf',
  },
  {
    title: 'Python SQL Database Application',
    issuer: 'Tuwaiq Academy',
    date: 'May 2025',
    image: certTuwaiq,
    url: '/certificates/tuwaiq-sql-python.pdf',
  },
  {
    title: 'Saudi Council of Engineers — Registered Member',
    issuer: 'SCE',
    date: 'Dec 2025 – Dec 2028',
  },
];

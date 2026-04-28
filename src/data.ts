import type { LucideIcon } from "lucide-react";
import {
  Award,
  FolderOpen,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Terminal,
  Twitter,
  User,
  Wrench,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
};

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  color: string;
  github: string;
  live: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  color: string;
  skills: Skill[];
};

export type EducationItem = {
  year: string;
  school: string;
  degree: string;
  desc: string;
  color: string;
};

export type Certification = {
  title: string;
  platform: string;
  color: string;
  url: string;
};

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  url: string;
  color: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home, color: "text-comic-purple" },
  { id: "about", label: "About", icon: User, color: "text-comic-cyan" },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    color: "text-comic-orange",
  },
  { id: "skills", label: "Skills", icon: Wrench, color: "text-comic-pink" },
  {
    id: "certifications",
    label: "Certs",
    icon: Award,
    color: "text-comic-lime",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    color: "text-comic-blue",
  },
  {
    id: "console",
    label: "Console",
    icon: Terminal,
    color: "text-comic-purple",
  },
  { id: "contact", label: "Contact", icon: Mail, color: "text-comic-cyan" },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce app with cart, payments, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-comic-purple/20 to-comic-cyan/20",
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Bot",
    desc: "Real-time AI-powered chatbot with natural language processing.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    color: "from-comic-cyan/20 to-comic-lime/20",
    github: "#",
    live: "#",
  },
  {
    title: "Social Media Dashboard",
    desc: "Analytics dashboard with real-time data visualization and charts.",
    tech: ["React", "TypeScript", "Tailwind", "D3.js"],
    color: "from-comic-orange/20 to-comic-pink/20",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Builder",
    desc: "Drag-and-drop portfolio builder with custom themes and export.",
    tech: ["React", "DnD Kit", "Supabase"],
    color: "from-comic-pink/20 to-comic-purple/20",
    github: "#",
    live: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "comic-purple",
    skills: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    color: "comic-cyan",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    title: "Database",
    color: "comic-orange",
    skills: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "comic-lime",
    skills: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

export const educationTimeline: EducationItem[] = [
  {
    year: "2025 – 2027",
    school: "Gurugram University",
    degree: "Master of Computer Application",
    desc: "Focused on software engineering, algorithms, and web development.",
    color: "bg-comic-purple",
  },
  {
    year: "2022 – 2025",
    school: "Gurugram University",
    degree: "Bachelor of Computer Application",
    desc: "Build strong foundations in computer languages, software, and development",
    color: "bg-comic-cyan",
  },
  {
    year: "2021 – 2022",
    school: "GSS School",
    degree: "Sr. Secondary Education",
    desc: "Strong foundation in Mathematics and Economics.",
    color: "bg-comic-orange",
  },
];

export const certifications: Certification[] = [
  {
    title: "React – The Complete Guide",
    platform: "Udemy",
    color: "bg-comic-purple",
    url: "#",
  },
  {
    title: "Machine Learning Specialization",
    platform: "Coursera",
    color: "bg-comic-cyan",
    url: "#",
  },
  {
    title: "AWS Cloud Practitioner",
    platform: "Amazon",
    color: "bg-comic-orange",
    url: "#",
  },
  {
    title: "JavaScript Algorithms & DS",
    platform: "freeCodeCamp",
    color: "bg-comic-lime",
    url: "#",
  },
  {
    title: "UI/UX Design Fundamentals",
    platform: "Coursera",
    color: "bg-comic-pink",
    url: "#",
  },
  {
    title: "Python for Data Science",
    platform: "Udemy",
    color: "bg-comic-blue",
    url: "#",
  },
];

export const socials: SocialLink[] = [
  { icon: Github, label: "GitHub", url: "#", color: "text-foreground" },
  { icon: Linkedin, label: "LinkedIn", url: "#", color: "text-comic-blue" },
  { icon: Twitter, label: "Twitter", url: "#", color: "text-comic-cyan" },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:john@example.com",
    color: "text-comic-orange",
  },
];

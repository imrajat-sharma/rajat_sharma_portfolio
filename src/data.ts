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
    tech: ["React", "Node.js", "MongoDB", "Redis"],
    color: "from-comic-purple/20 to-comic-cyan/20",
    github: "#",
    live: "#",
  },
  {
    title: "CPU-Scheduling-Visualizer",
    desc: "Real-time AI-powered chatbot with natural language processing.",
    tech: ["React", "Vite", "Tailwind", "JavaScript"],
    color: "from-comic-cyan/20 to-comic-lime/20",
    github: "https://github.com/imrajat-sharma/cpu-scheduler-visualizer",
    live: "https://cpu-scheduler-visualizer-amber.vercel.app/",
  },
  {
    title: "SkillSwipe - Social Platform",
    desc: "Quickly discover and connect with the right professionals using a swipe-based experience.",
    tech: ["React", "JavaScript", "Tailwind", "Node.js"],
    color: "from-comic-orange/20 to-comic-pink/20",
    github: "https://github.com/imrajat-sharma/skillswipe",
    live: "#",
  },
  {
    title: "Hospital Management System",
    desc: "Web-based application designed to streamline hospital operations.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    color: "from-comic-pink/20 to-comic-purple/20",
    github: "https://github.com/imrajat-sharma/hospital-management-backend",
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
    url: "https://www.udemy.com/certificate/UC-7bf5aceb-2e35-43e9-9863-b1bf2ff53f71/",
  },
  {
    title: "Agile Project Management",
    platform: "HP-Life",
    color: "bg-comic-cyan",
    url: "https://www.life-global.org/certificate/57326379-420a-40f1-9b79-660b1718e766",
  },
  {
    title: "NodeJS Masterclass",
    platform: "Udemy",
    color: "bg-comic-orange",
    url: "https://www.udemy.com/certificate/UC-9caeea22-b7d8-4211-991a-c8a36ddd04a0/",
  },
  {
    title: "PostgreSQL - OSCALY Academy",
    platform: "Udemy",
    color: "bg-comic-lime",
    url: "https://www.udemy.com/certificate/UC-4930407f-7f35-47b7-ad5f-794ba5b23e53/",
  },
  {
    title: "UI/UX Design Fundamentals",
    platform: "The Cutting Edge School",
    color: "bg-comic-pink",
    url: "https://www.youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur",
  },
  {
    title: "Python for Beginner",
    platform: "ChaiCode",
    color: "bg-comic-blue",
    url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
  },
];

export const socials: SocialLink[] = [
  { icon: Github, label: "GitHub", url: "https://github.com/imrajat-sharma", color: "text-foreground" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/imrajat-sharma", color: "text-comic-blue" },
  { icon: Twitter, label: "Twitter", url: "https://x.com/imrajat_sharma", color: "text-comic-cyan" },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:rajat.s082005@gmail.com",
    color: "text-comic-orange",
  },
];

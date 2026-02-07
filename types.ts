import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  oneLineBlurb: string;
  detailedDescription: string;
  tech: string[];
  features: string[];
  metrics: string;
  tags: string[];
  howToRun?: string[];
  image: string;
  repoUrl: string;
  liveUrl?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  points: string[];
  icon: any;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  type: 'Work' | 'Education' | 'Certificate';
  major?: string;
  modules?: string[];
  subjects?: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
  skills?: string[];
  pdfUrl?: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  type: 'Hackathons' | 'Job Simulation';
  image: string;
  tech?: string[];
  pdfUrl?: string;
  credentialUrl?: string; // For linking to external credentials like Credly
  demoUrl?: string; // For linking to prototypes or live demos
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  content: string; // Could be markdown or HTML
  image?: string;
  gallery?: string[];
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
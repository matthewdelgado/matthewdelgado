export interface ContactInfo {
  email?: string;
  linkedin?: string;
  portfolio?: string;
  location?: string;
}

export interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
  startYear?: number;
  endYear?: number;
  current?: boolean;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface Section {
  id: string;
  title: string;
}

export interface Stats {
  yearsOfExperience: number;
  projectCount: number;
  skillCount: number;
  companyCount: number;
}

export interface ResumeData {
  name: string;
  tagline?: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  sections: Section[];
  stats: Stats;
}

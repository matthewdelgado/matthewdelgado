import { marked } from 'marked';
import type { ResumeData, ContactInfo, ExperienceItem, ProjectItem, SkillCategory, EducationItem } from '../types/resume';
// @ts-ignore - Vite handles ?raw imports
import readmeContent from '../../README.md?raw';

export interface Section {
  id: string;
  title: string;
}

export function parseResume(markdown: string): ResumeData {
  const tokens = marked.lexer(markdown);

  let name = '';
  let tagline = '';
  const contact: ContactInfo = {};
  const experience: ExperienceItem[] = [];
  const projects: ProjectItem[] = [];
  const skills: SkillCategory[] = [];
  const education: EducationItem[] = [];
  const sections: Section[] = [];

  let currentSection = '';
  let currentExperience: Partial<ExperienceItem> | null = null;
  let currentProject: Partial<ProjectItem> | null = null;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // Extract name from first H1
    if (token.type === 'heading' && token.depth === 1 && !name) {
      name = token.text;
      continue;
    }

    // Extract contact info from first paragraph
    if (token.type === 'paragraph' && !contact.email && i < 5) {
      const text = token.text;

      // Extract location (first part before |)
      const locationMatch = text.match(/^([^|]+)\|/);
      if (locationMatch) {
        contact.location = locationMatch[1].trim();
      }

      // Extract email
      const emailMatch = text.match(/\[Email\]\(([^)]+)\)/);
      if (emailMatch) {
        contact.email = emailMatch[1];
      }

      // Extract LinkedIn
      const linkedinMatch = text.match(/\[LinkedIn\]\(([^)]+)\)/);
      if (linkedinMatch) {
        contact.linkedin = linkedinMatch[1];
      }

      // Extract Portfolio
      const portfolioMatch = text.match(/\[Portfolio\]\(([^)]+)\)/);
      if (portfolioMatch) {
        contact.portfolio = portfolioMatch[1];
      }
      continue;
    }

    // Track sections
    if (token.type === 'heading' && token.depth === 2) {
      // Save any in-progress experience or project before switching sections
      if (currentExperience && currentExperience.company) {
        experience.push(currentExperience as ExperienceItem);
      }
      if (currentProject && currentProject.name) {
        projects.push(currentProject as ProjectItem);
      }

      currentSection = token.text.toUpperCase();

      // Add section to navigation
      sections.push({
        id: token.text.toLowerCase().replace(/\s+/g, '-'),
        title: token.text
      });

      currentExperience = null;
      currentProject = null;
      continue;
    }

    // Parse Professional Experience
    if (currentSection === 'PROFESSIONAL EXPERIENCE') {
      if (token.type === 'heading' && token.depth === 3) {
        // Save previous experience if exists
        if (currentExperience && currentExperience.company) {
          experience.push(currentExperience as ExperienceItem);
        }
        // Start new experience
        currentExperience = {
          company: token.text.trim(),
          title: '',
          duration: '',
          responsibilities: []
        };
      } else if (token.type === 'paragraph' && currentExperience) {
        // Extract job title from bold text
        const titleMatch = token.text.match(/\*\*([^*]+)\*\*/);
        if (titleMatch && !currentExperience.title) {
          currentExperience.title = titleMatch[1].trim();
        }
      } else if (token.type === 'list' && currentExperience) {
        // @ts-ignore - marked types don't include items properly
        const items = token.items || [];
        currentExperience.responsibilities = items.map((item: any) => item.text);
      }
    }

    // Parse Personal Projects
    if (currentSection === 'PERSONAL PROJECTS') {
      if (token.type === 'heading' && token.depth === 3) {
        // Save previous project if exists
        if (currentProject && currentProject.name) {
          projects.push(currentProject as ProjectItem);
        }
        // Start new project
        currentProject = {
          name: token.text.trim(),
          description: '',
          technologies: [],
          highlights: []
        };
      } else if (token.type === 'paragraph' && currentProject) {
        // Extract technologies from bold text
        const techMatch = token.text.match(/\*\*([^*]+)\*\*/);
        if (techMatch && currentProject.technologies && currentProject.technologies.length === 0) {
          currentProject.technologies = techMatch[1].split(',').map((t: string) => t.trim());
        }
      } else if (token.type === 'list' && currentProject) {
        // @ts-ignore
        const items = token.items || [];
        currentProject.highlights = items.map((item: any) => item.text);
      }
    }

    // Parse Core Skills
    if (currentSection === 'CORE SKILLS') {
      if (token.type === 'paragraph') {
        // Match pattern: **Category:** skills (colon is inside the bold)
        const boldMatch = token.text.match(/\*\*([^*]+)\*\*\s*(.+)/);
        if (boldMatch) {
          // Remove trailing colon from category name
          const category = boldMatch[1].trim().replace(/:$/, '');
          skills.push({
            category,
            skills: boldMatch[2].split(',').map((s: string) => s.trim())
          });
        }
      }
    }

    // Parse Education
    if (currentSection === 'EDUCATION') {
      if (token.type === 'paragraph') {
        const lines = token.text.split('\n');
        const degreeMatch = lines[0]?.match(/\*\*([^*]+)\*\*/);
        if (degreeMatch) {
          education.push({
            degree: degreeMatch[1].trim(),
            institution: lines[1]?.trim() || '',
            year: '' // Not present in current README
          });
        }
      }
    }
  }

  // Add last experience/project if exists
  if (currentExperience && currentExperience.company) {
    experience.push(currentExperience as ExperienceItem);
  }
  if (currentProject && currentProject.name) {
    projects.push(currentProject as ProjectItem);
  }

  // Calculate stats
  const uniqueCompanies = new Set(experience.map(e => e.company)).size;
  const totalSkills = skills.reduce((acc, cat) => acc + cat.skills.length, 0);

  // Estimate years of experience (could be enhanced with actual dates)
  const yearsOfExperience = experience.length > 0 ? Math.max(5, experience.length * 1.5) : 0;

  const stats = {
    yearsOfExperience: Math.round(yearsOfExperience),
    projectCount: projects.length,
    skillCount: totalSkills,
    companyCount: uniqueCompanies
  };

  return {
    name,
    tagline,
    contact,
    experience,
    projects,
    skills,
    education,
    sections,
    stats
  };
}

export const resumeData = parseResume(readmeContent);

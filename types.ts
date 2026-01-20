
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  projects: Project[];
  skills: Skill[];
  testimonials: Testimonial[];
}

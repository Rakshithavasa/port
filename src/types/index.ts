export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
}
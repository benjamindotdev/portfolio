type Benjamin = {
  name: string;
  hero: string;
  about: AboutItem[];
  hobbies: Hobby[];
  softSkills: Skill[];
  hardSkills: Skill[];
  technologies: Technology[];
  contacts: Contact[];
  socials: Social[];
  links: Link[];
  certifications: Certification[];
  projects: Project[];
  events: Event[];
};

type AboutItem = {
  key: number;
  image: string;
  text: string;
};

type Hobby = {
  key: number;
  name: string;
  icon: string;
  image: string;
  text: string;
};

type Skill = {
  key: number;
  name: string;
  icon: string;
};

type Contact = {
  key: number;
  name: string;
  icon: string;
  link: string;
};

type Social = {
  key: number;
  name: string;
  image: string;
  link: string;
};

type Link = {
  key: number;
  title: string;
  route: string;
};

type Certification = {
  key: number;
  name: string;
  logo: string;
  link: string;
  company: string;
  location: "On site" | "Remote";
  description: string;
};

type Technology = {
  key: number;
  name: string;
  image: string;
  type:
    | "Frontend"
    | "Backend"
    | "Tool"
    | "Database"
    | "Mobile"
    | "CI/CD"
    | "Project Management"
    | "Content Management"
    | "";
  isLearning: boolean;
  link: string;
};

type Tech = {
  key: number;
  name: string;
  image: string;
  link: string;
  isLearning?: boolean;
};

type Project = {
  key: number;
  name: string;
  image: string;
  status: "completed" | "in progress" | "planning";
  description: string;
  deployedLink?: string;
  repoLink?: string;
  techStack: Technology[] | string[];
};

type Event = {
  key: number;
  name: string;
  image: string;
  date: string;
  location: string;
  description: string;
  link: string;
  techStack: Technology[] | string[];
};

export type {
  Benjamin,
  AboutItem,
  Hobby,
  Skill,
  Link,
  Contact,
  Social,
  Certification,
  Technology,
  Tech,
  Project,
  Event,
};

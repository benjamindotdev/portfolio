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
    experience: ExperienceItem[];
    certifications: Certification[];
    projects: Project[];
};

type AboutItem = {
    key: number;
    image: string;
    text: string;
};

type ExperienceItem = {
    key: number;
    title: string;
    company: string;
    location: string;
    date: string;
    description: string;
    details?: {
        key: number;
        text: string;
    }[];
    techStack: Technology[] | string[];
    link?: string;
    logo: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance" | "Volunteer";
    isCurrent?: boolean;
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
    icon: string | { lightImage: string; darkImage: string };
    link: string;
};

type Social = {
    key: number;
    name: string;
    image: string | { lightImage: string; darkImage: string };
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
    | "Cloud"
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
    type?: "personal" | "freelance";
    client?: {
        name: string;
        linkedIn?: string;
        position?: string;
        testimonial?: string;
        image?: string;
    };
};

export type {
    Benjamin,
    AboutItem,
    ExperienceItem,
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

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
    image?: string;
    text: string;
    showCTAs?: boolean;
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
    skills?: string[];
    link?: string;
    logo: string | { lightImage: string; darkImage: string };
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
    logo: string | { lightImage: string; darkImage: string };
    link?: string;
    company: string;
    location: "On site" | "Remote";
    description: string;
    category: "Professional Certifications" | "Skills Courses" | "Awards & Achievements";
    level: "Bootcamp" | "Specialization" | "Short Course" | "Hackathon Winner";
    date: string;
    repoLink?: string;
    deployedLink?: string;
};

type Technology = {
    key: number;
    name: string;
    image: string | { lightImage: string; darkImage: string };
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
    link: string;
    homepage?: boolean;
    stackSection?: "Core Technologies" | "Additional Tools" | "Other Experience" | "Currently Exploring";
};

type Tech = {
    key: number;
    name: string;
    image: string | { lightImage: string; darkImage: string };
    link: string;
};

type Project = {
    key: number;
    name: string;
    image: string | { lightImage: string; darkImage: string };
    status: "completed" | "in progress" | "planning";
    description: string;
    subTitle?: string;
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
        needed?: string;
        solution?: string;
        challenge?: string;
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

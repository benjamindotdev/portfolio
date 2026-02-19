import type { Benjamin, Technology, Project } from "@/global";

const technologies = [
    {
        key: 0,
        name: "HTML5",link: "https://html.spec.whatwg.org/",
        type: "Frontend",
    },
    
    {
        key: 1,
        name: "Javascript",link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
        type: "Frontend",
    },
    
    {
        key: 56,
        name: "Python",link: "https://www.python.org/",
        type: "Backend",
    },
    
    {
        key: 2,
        name: "Typescript",link: "https://www.typescriptlang.org/",
        type: "Frontend",
        homepage: true,
        stackSection: "Core Technologies",
    },
    
    {
        key: 38,
        name: "Mantine",link: "https://mantine.dev/",
        type: "Frontend",
        stackSection: "Other Experience",
    },
    
    {
        key: 34,
        name: "Material-UI",link: "https://material-ui.com/",
        type: "Frontend",
        stackSection: "Other Experience",
    },
    
    {
        key: 4,
        name: "Next.js",link: "https://nextjs.org/",
        type: "Frontend",
        stackSection: "Core Technologies",
        homepage: true,
    },
    
    {
        key: 3,
        name: "React",link: "https://react.dev/",
        type: "Frontend",
        homepage: true,
        stackSection: "Core Technologies",
    },
    
    {
        key: 37,
        name: "shadcn",link: "https://ui.shadcn.com/",
        type: "Frontend",
        stackSection: "Other Experience",
    },
    
    {
        key: 13,
        name: "Zustand",link: "https://github.com/pmndrs/zustand",
        type: "Frontend",
        stackSection: "Additional Tools",
    },
    
    {
        key: 68,
        name: "Convex",link: "https://www.convex.dev/",
        type: "Backend",
        stackSection: "Other Experience",
    },
    
    {
        key: 51,
        name: "Express",link: "https://expressjs.com/",
        type: "Backend",
    },
    
    {
        key: 58,
        name: "GraphQL",link: "https://graphql.org/",
        type: "Backend",
        stackSection: "Currently Exploring",
    },
    
    {
        key: 50,
        name: "Node.js",link: "https://nodejs.org/",
        type: "Backend",
        stackSection: "Core Technologies",
        homepage: true,
    },
    
    {
        key: 101,
        name: "Expo",link: "https://expo.dev/",
        type: "Mobile",
        stackSection: "Currently Exploring",
    },
    
    {
        key: 52,
        name: "MongoDB",link: "https://www.mongodb.com/",
        type: "Database",
        stackSection: "Other Experience",
    },
    
    {
        key: 55,
        name: "PostgreSQL",link: "https://www.postgresql.org/",
        type: "Database",
        homepage: true,
        stackSection: "Core Technologies",
    },
    
    {
        key: 54,
        name: "Prisma",link: "https://www.prisma.io/",
        type: "Database",
        homepage: true,
        stackSection: "Core Technologies",
    },
    
    {
        key: 76,
        name: "Stripe",link: "https://www.stripe.com/",
        type: "Tool",
        stackSection: "Additional Tools",
    },
    
    {
        key: 75,
        name: "ChatGPT",link: "https://chat.openai.com/",
        type: "Tool",
    },
    
    {
        key: 74,
        name: "GitHub Copilot",link: "https://github.com/features/copilot",
        type: "Tool",
        stackSection: "Additional Tools",
    },
    
    {
        key: 30,
        name: "CSS3",link: "https://www.w3.org/TR/CSS/#css",
        type: "Frontend",
    },
    
    {
        key: 32,
        name: "tailwindcss",link: "https://tailwindcss.com/",
        type: "Frontend",
        homepage: true,
        stackSection: "Core Technologies",
    },
    
    {
        key: 80,
        name: "Jest",link: "https://jestjs.io/",
        type: "CI/CD",
        stackSection: "Additional Tools",
    },
    
    {
        key: 81,
        name: "React Testing Library",link: "https://testing-library.com/docs/react-testing-library/intro/",
        type: "CI/CD",
        stackSection: "Additional Tools",
    },
    
    {
        key: 73,
        name: "Vite",link: "https://vitejs.dev/",
        type: "Tool",
        stackSection: "Additional Tools",
    },
    
    {
        key: 11,
        name: "Webpack",link: "https://webpack.js.org/",
        type: "Frontend",
    },
    
    {
        key: 86,
        name: "Docker",link: "https://www.docker.com/",
        type: "CI/CD",
        stackSection: "Currently Exploring",
    },
    
    {
        key: 130,
        name: "AWS",link: "https://aws.amazon.com/",
        type: "Cloud",
    },
    
    {
        key: 72,
        name: "Commander",link: "https://github.com/tj/commander.js",
        type: "Tool",
        stackSection: "Additional Tools",
    },
    
    {
        key: 71,
        name: "Figma",link: "https://www.figma.com",
        type: "Tool",
        stackSection: "Additional Tools",
    },
    
    {
        key: 88,
        name: "Netlify",link: "https://www.netlify.com/",
        type: "CI/CD",
        stackSection: "Other Experience",
    },
    
    {
        key: 110,
        name: "Notion",link: "https://www.notion.so/",
        type: "Project Management",
        stackSection: "Other Experience",
    },
    
    {
        key: 89,
        name: "Railway",link: "https://www.railway.app/",
        type: "CI/CD",
        stackSection: "Other Experience",
    },
    
    {
        key: 121,
        name: "Shopify",link: "https://www.shopify.com/",
        type: "Content Management",
    },
    
    {
        key: 112,
        name: "Slack",link: "https://www.slack.com/",
        type: "Project Management",
        stackSection: "Other Experience",
    },
    
    {
        key: 111,
        name: "Trello",link: "https://www.trello.com/",
        type: "Project Management",
        stackSection: "Other Experience",
    },
    
    {
        key: 87,
        name: "Vercel",link: "https://vercel.com/",
        type: "CI/CD",
        stackSection: "Additional Tools",
    },
    
    {
        key: 120,
        name: "Wordpress",link: "https://www.wordpress.com/",
        type: "Content Management",
    },
] as Technology[];

const me = {
    name: "Benjamin",
    image: "https://github.com/benjamindotdev.png",
    link: "https://github.com/benjamindotdev",
};

const projects = [
    {
        key: 3,
        name: "solitairedaily.com",
        image: "logos/clients/solitaire.png",
        createdBy: me,
        date: "2025",
        subTitle: "A modern take on classic solitaire games.",
        description: "Clean UI, ease-of-use features, and engaging gameplay.",
        status: "completed",
        type: "freelance",
        stackscanKey: "solitairedaily.com",
        techStack: [
            "Next.js",
            "Typescript",
            "tailwindcss",
            "Vercel"
        ],
        deployedLink: "https://solitairedaily.com",
        repoLink: "https://github.com/benjamindotdev/solitaire-case-study",
        tags: ["Performance Optimization"],
        client: {
            name: "Steve M.",
            image: "images/clients/Steve.jpg",
            linkedIn: "https://www.linkedin.com/in/steve-myslinski/",
            position: "Entrepreneur",
            needed: "Steve needed a modern take on the classic game to leverage his high-value SEO domain.",
            solution: "Designed and developed a fast, smooth solitaire platform built with modern web technologies for optimal performance and user experience.",
            challenge: "Addressed complex rendering challenges to maintain consistent frame rates even with large move sequences.",
            testimonial: "Ben absolutely nailed it. The new solitaire build is super fast, clean, and easy to use. I use the one-click mode almost exclusively now. The cards are easier to read, the auto-finish feels great, and the whole experience is just smooth. Really nice work.",
        },
    },
    {
        key: 0,
        name: "sh.coach",
        image: {
            darkImage: "logos/clients/SH-white.svg",
            lightImage: "logos/clients/SH-black.svg",
        },
        date: "2025",
        subTitle: "Portfolio for a leadership coach.",
        description: "Modern, responsive site with custom layouts and interactive features.",
        status: "completed",
        type: "freelance",
        stackscanKey: "sh.coach",
        createdBy: me,
        techStack: [
            "React",
            "Typescript",
            "Vite",
            "tailwindcss",
            "Netlify"
        ],
        deployedLink: "https://sh.coach",
        repoLink: "https://github.com/benjamindotdev/sh-case-study",
        tags: ["SEO Optimization"],
        client: {
            name: "Stephanie H.",
            image: "images/clients/Steph.webp",
            linkedIn: "https://www.linkedin.com/in/stephherre/",
            position: "Leadership Coach",
            needed: "Stephanie needed a professional online presence to showcase her coaching services and attract clients.",
            solution: "Designed and developed a clean, user-friendly website highlighting her expertise, offerings, and brand voice.",
            challenge: "Ensured consistent responsive design and smooth layout behavior across breakpoints.",
            testimonial: "Benjamin is a true professional. Truthfully, I first used an AI-only tool to create my website, but the result was generic and not special enough. I then turned to Ben, and his website is another level, thanks to his attention to detail, creativity and suggestions from experience. He is also a joy to work with, patiently listening and implementing my wishes and vision in a documented, structured manner.",
        },
    },
    {
        key: 1,
        name: "sherds.eu",
        image: "logos/clients/sherds.png",
        subTitle: "Anonymized recruitment platform.",
        description: "Ensuring equality in tech recruitment by removing biases.",
        status: "in progress",
        type: "freelance",
        createdBy: me,
        stackscanKey: "sherds",
        techStack: [],
        tags: ["Server-side Rendering"],
        deployedLink: "https://sherds.eu",
        repoLink: "https://github.com/benjamindotdev/sherds-case-study",
        client: {
            name: "Jennifer G.",
            image: "images/clients/jennifer.jpeg",
            linkedIn: "https://www.linkedin.com/in/jennifer-gbologan-35453146/",
            position: "Founder",
            needed: "Jennifer needed an MVP to demonstrate the potential of her platform and attract investors.",
            solution: "Designed and developed a server-side rendered app to effectively showcase the platform's value.",
            challenge: "Programmed algorithm to ensure unbiased matching. Now part of the team to make the MVP a reality.",
            testimonial: "Benjamin is a great addition to the SHERDS.eu team. His full stack expertise was clear in both the front-end experience and the back-end architecture, which are clean, efficient, and easy to maintain. He anticipates potential issues, proposes smart solutions, and collaborates very well with the team, which will help us deliver a high-quality result on time.",
        }
    },
    {
    key: 2,
    name: "foxybio.com",
    image: "logos/clients/foxybio.png",
    subTitle: "A bioinformatics data visualization tool.",
    description: "Transforming complex scientific data into interactive plots and tables.",
    status: "in progress",
    type: "freelance",
    stackscanKey: "foxybio",
    tags: ["Data Visualization"],
    deployedLink: "https://foxybio.com",
    repoLink: "https://github.com/benjamindotdev/foxybio-case-study",
    client: {
        name: "Georg B.",
        image: "images/clients/georg.jpeg",
        linkedIn: "https://www.linkedin.com/in/georgbasler/",
        position: "Founder",
        needed: "Georg needed a user-friendly interface  to make complex scientific data accessible for researchers.",
        solution: "Redesigned the UI with best practices and interactive features to enhance the UX.",
        challenge: "Translating complex scientific workflows into a clean interface while ensuring optimal performance.",
        testimonial: "Ben is an outstanding developer. He took our complex requirements and turned them into a clean, intuitive interface that our users love. His attention to detail, problem-solving skills, and ability to communicate technical concepts clearly made the entire process smooth and efficient. We couldn't be happier with the result.",
    }
    },
    {
        key: 3,
        name: "stackscan",
        image: {
            lightImage: "logos/clients/stackscanBlack.svg",
            darkImage: "logos/clients/stackscanWhite.svg",
        },
        subTitle: "A CLI tool to detect project tech stacks.",
        description: "Automatically import logos for detected technologies and generate structured output in JSON & Markdown.",
        status: "completed",
        type: "personal",
        createdBy: me,
        stackscanKey: "stackscan",
        techStack: [],
        tags: ["CLI Tool"],
        packageLink: "https://www.npmjs.com/package/stackscan",
        repoLink: "https://github.com/benjamindotdev/stackscan",
        reason: {
            needed: "I found having to trawl the internet for specific tech stack logos repetitive and annoying, clearly in need of automation.",
            solution: "Stackscan reads the package.json of a project to automatically detect the technologies used and import logos into your project's public directory and updating your README.md.",
            challenge: "The main challenge has been exporting the logos in a clean and consistent way, preserving branding while allowing the user to change their colour if needed."
        }
    },
    {
        key: 4,
        name: "Modular Vector Playground",
        image: {
            lightImage: "logos/clients/mvpLight.svg",
            darkImage: "logos/clients/mvpDark.svg"
        },
        subTitle: "A tool for making logos for MVPs, quickly.",
        description: "Generate modular vector logos with customizable colors and shapes for rapid MVP branding.",
        status: "completed",
        type: "personal",
        createdBy: me,
        stackscanKey: "mvp",
        techStack: [],
        tags: ["UX/UI Design"],
        deployedLink: "https://mvp-nu-three.vercel.app/",
        repoLink: "https://github.com/benjamindotdev/mvp",
        reason: {
            needed: "I found myself needing to make quick logos for MVPs and projects, but didn't want to spend time on complex design tools or settle for generic AI-generated ones.",
            solution: "The Modular Vector Playground allows users to create simple, modular logos by customizing shapes and colors, providing a fast and flexible way to generate unique branding assets for MVPs.",
            challenge: "The main challenge was designing an intuitive interface that allows for creativity while keeping the logo generation process quick and straightforward."
        }
    }
    
] as Project[];


const benjamin = {
    name: "Benjamin",
    hero: "images/hero.webp",
    about: [
        {
            key: 0,
            image: "images/coachBenWithTeam.webp",
            text: "After growing up in London 🇬🇧, I spent a decade coaching youth football in New Jersey, USA. Beyond training sessions, I mentored players on resilience, teamwork, and confidence. Those years shaped how I communicate, lead under pressure, and build trust — skills I now rely on in engineering just as much as I did on the pitch.",
        },
        {
            key: 1,
            image: "images/hackshow.webp",
            text: "After moving to Berlin 🇩🇪, I completed the Ironhack Web Development bootcamp and won the Hackshow with my final project. I was then invited to join as a Teaching Assistant, where I taught solo, reviewed student projects, and debugged full-stack applications daily — accelerating my technical growth through teaching and hands-on problem solving.",
        },
        {
            key: 2,
            text: "Today I'm the sole developer at Shep, working directly with the two founders of this early-stage fintech startup. I own the entire stack — from prototyping features to shipping production-ready code — and help define the architecture and product direction. Every feature is built end-to-end, which has given me strong experience in autonomy, stakeholder communication, and rapid iteration.",
            showCTAs: true,
        }
    ],
    contacts: [
        {
            key: 0,
            name: "email",
            link: "mailto:hello@benjamin.dev",
            icon: {
                lightImage: "icons/mailLight.png",
                darkImage: "icons/mailDark.png"
            },
        }
    ],
    socials: [
        {
            key: 0,
            name: "LinkedIn",
            image: {
                lightImage: "logos/socials/linkedInBlack.png",
                darkImage: "logos/socials/linkedInWhite.png"
            },
            link: "https://www.linkedin.com/in/benjamin-elliott-163280280/",
        },
        {
            key: 1,
            name: "Github",
            image: {
                lightImage: "logos/socials/githubBlack.png",
                darkImage: "logos/socials/githubWhite.png",
            },
            link: "https://github.com/benjamindotdev",
        }
    ],
    experience: [
        {
            key: 0,
            title: "Teaching Assistant",
            company: "Ironhack",
            location: "Berlin, DE",
            date: "September 2024 - December 2024",
            description:
                "12-week web development bootcamp covering full-stack JavaScript, modern frontend frameworks, and project-based learning",
            details: [
                {
                    key: 0,
                    text: "Delivered lessons alongside the lead instructor and provided one-to-one student support",
                },
                {
                    key: 1,
                    text: "Debugged and reviewed student projects, offering technical guidance and code feedback",
                },
                {
                    key: 2,
                    text: "Assisted with curriculum delivery, troubleshooting, and general student mentorship",
                },
            ],
            stackscanKey: "ironhack",
            skills: ["Teaching"],
            link: "https://www.ironhack.com/de-en",
            logo: {
                lightImage: "logos/certifications/IronhackLight.png",
                darkImage: "logos/certifications/IronhackDark.png",
            },
            type: "Full-time",
            isCurrent: false,
        },
        {
            key: 1,
            title: "Web Development Intern",
            company: "OrganicsBest",
            location: "Berlin, DE",
            date: "January 2025",
            description:
                "E-commerce platform offering organic baby food products across Europe",
            details: [
                {
                    key: 0,
                    text: "Developed and maintained frontend features for a live production storefront",
                },
                {
                    key: 1,
                    text: "Improved page load speed and general site performance through targeted optimizations",
                },
                {
                    key: 2,
                    text: "Integrated frontend components with backend APIs, ensuring smooth data flow and stable user experience",
                },
            ],
            stackscanKey: "organicsbest",
            skills: ["Basic integration"],
            link: "https://www.organicsbestshop.com",
            logo: "logos/experience/organicsbest.webp",
            type: "Internship",
            isCurrent: false,
        },
        {
            key: 4,
            title: "Full Stack Web Developer",
            company: "Genie TechBio",
            location: "Berlin, DE",
            date: "April 2025 - June 2025",
            description:
                "Bioinformatics platform for generating interactive scientific plots, tables, and data visualizations",
            details: [
                {
                    key: 0,
                    text: "Redesigned the entire frontend to align with modern UX/UI best practices and scientific workflows",
                },
                {
                    key: 1,
                    text: "Introduced consistent state management patterns (Zustand) to improve reliability across complex components",
                },
                {
                    key: 2,
                    text: "Implemented a clean REST architecture to streamline data ingestion, transformations, and visual output",
                },
                {
                    key: 3,
                    text: "Collaborated closely with the founder on rapid prototyping and refinement of user-facing features",
                },
            ],
            stackscanKey: "genietechbio",
            skills: ["REST APIs"],
            link: "https://www.genietechbio.com",
            logo: "logos/experience/genie.jpeg",
            type: "Full-time",
            isCurrent: false,
        },
        {
            key: 6,
            title: "Full Stack Web Developer",
            company: "Shep",
            location: "Berlin, DE",
            date: "July 2025 - Present",
            description:
                "AI-powered financial dashboard enabling unified visibility across multiple SaaS tools and analytics sources",
            details: [
                {
                    key: 0,
                    text: "Designed and built the initial MVP architecture using industry-standard full-stack tools",
                },
                {
                    key: 1,
                    text: "Engineered robust data flows aggregating information from multiple third-party APIs",
                },
                {
                    key: 2,
                    text: "Led technical decisions end-to-end, translating business requirements into deliverable features",
                },
                {
                    key: 3,
                    text: "Implemented scalable state and API patterns to support rapid iteration and future product expansion",
                }
            ],
            stackscanKey: "shep",
            skills: ["Full-stack architecture"],
            link: "https://www.shephq.com/",
            logo: "logos/experience/shep.png",
            type: "Full-time",
            isCurrent: true,

        }
    ],
    links: [
        {
            key: 0,
            title: "About",
            route: "/about",
        },
        {
            key: 1,
            title: "Experience",
            route: "/experience",
        },
        {
            key: 2,
            title: "Freelance",
            route: "/freelance",
        },
        {
            key: 3,
            title: "Stack",
            route: "/stack",
        },
        {
            key: 4,
            title: "Open Source",
            route: "/open-source",
        },
        {
            key: 5,
            title: "Certifications",
            route: "/certifications",
        },
    ],
    certifications: [
        {
            key: 0,
            name: "Web Development Bootcamp (full-time)",
            logo: {
                lightImage: "logos/certifications/IronhackLight.png",
                darkImage: "logos/certifications/IronhackDark.png",
            },
            description:
                "Full-time program covering full-stack JavaScript, modern frameworks, and project-based learning. Won cohort hackathon (Hackshow), later invited as Teaching Assistant",
            link: "https://www.ironhack.com/de-en",
            company: "Ironhack Berlin",
            location: "On site",
            category: "Professional Certifications",
            level: "Bootcamp",
            date: "June 2024 - September 2024",
        },
        {
            key: 1,
            name: "Meta Front-End Developer",
            logo: "logos/certifications/coursera.svg",
            description:
                "A structured program focused on modern React, frontend architecture, UI patterns, and production best practices",
            link: "https://coursera.org/verify/professional-cert/5GMTVUAPTVM2",
            company: "Coursera",
            location: "Remote",
            category: "Professional Certifications",
            level: "Specialization",
            date: "August 2023",
        },
        {
            key: 2,
            name: "Responsive Web Design",
            logo: {
                lightImage: "logos/certifications/FCCLight.png",
                darkImage: "logos/certifications/FCCDark.png",
            },
            description:
                "Hands-on practice building accessible, responsive pages using semantic HTML and CSS",
            link: "https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design",
            company: "freecodecamp",
            location: "Remote",
            category: "Skills Courses",
            level: "Short Course",
            date: "July 2023",
        },
        {
            key: 3,
            name: "Legacy Javascript Algorithms & Data Structures",
            logo: {
                lightImage: "logos/certifications/FCCLight.png",
                darkImage: "logos/certifications/FCCDark.png",
            },
            description:
                "Foundational training in core algorithms, problem-solving, and ES6+ patterns",
            link: "https://freecodecamp.org/certification/benjaminelliott/javascript-algorithms-and-data-structures",
            company: "freecodecamp",
            location: "Remote",
            category: "Skills Courses",
            level: "Short Course",
            date: "August 2023",
        },
        {
            key: 4,
            name: "Ironhack Hackshow",
            logo: {
                lightImage: "logos/certifications/IronhackLight.png",
                darkImage: "logos/certifications/IronhackDark.png",
            },
            description:
                "Won the Ironhack Berlin Hackshow in September 2024 with asozial.dev, a social platform connecting lonely devs to work on projects together",
            company: "Ironhack Berlin",
            location: "On site",
            category: "Awards & Achievements",
            level: "Hackathon Winner",
            date: "September 2024",
            // repoLink: "https://github.com/benjamindotdev/asozial",
        },
        {
            key: 5,
            name: "Code Hackday X GitHub X global AI",
            logo: {
                lightImage: "logos/certifications/CodeLight.png",
                darkImage: "logos/certifications/CodeDark.png",
            },
            description:
                "Won the Code University Hackday with TaskChunker, an AI-powered task management app that breaks down complex projects into manageable tasks",
            company: "Code University",
            location: "On site",
            category: "Awards & Achievements",
            level: "Hackday Winner",
            date: "February 2025",
            repoLink: "https://github.com/benjamindotdev/taskchunker-frontend",
        },
    ],
    projects,
    technologies,
} as Benjamin;

export { benjamin };

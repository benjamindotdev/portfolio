import type { Benjamin, Technology, Project } from "../global";

const technologies = [
    // Frontend Technologies
    {
        key: 0,
        name: "HTML5",
        image: "logos/html5.svg",
        link: "https://html.spec.whatwg.org/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 1,
        name: "Javascript",
        image: "logos/js.svg",
        link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 2,
        name: "Typescript",
        image: "logos/typescript.svg",
        link: "https://www.typescriptlang.org/",
        type: "Frontend",
        isLearning: false,
        homepage: true,
        stackSection: "Core Technologies",
    },
    {
        key: 3,
        name: "React",
        image: "logos/react.svg",
        link: "https://react.dev/",
        type: "Frontend",
        isLearning: false,
        homepage: true,
        stackSection: "Core Technologies",
    },
    {
        key: 4,
        name: "Next.js",
        image: {
            lightImage: "logos/Next.jsBlack.png",
            darkImage: "logos/Next.jsWhite.png",
        },
        link: "https://nextjs.org/",
        type: "Frontend",
        isLearning: false,
        homepage: true,
    },
    {
        key: 11,
        name: "Webpack",
        image: "logos/webpack.png",
        link: "https://webpack.js.org/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 13,
        name: "Zustand",
        image: "logos/zustand.svg",
        link: "https://github.com/pmndrs/zustand",
        type: "Frontend",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 30,
        name: "CSS3",
        image: "logos/css3.svg",
        link: "https://www.w3.org/TR/CSS/#css",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 31,
        name: "SASS",
        image: "logos/sass.svg",
        link: "https://sass-lang.com/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 32,
        name: "tailwindcss",
        image: "logos/tailwind.svg",
        link: "https://tailwindcss.com/",
        type: "Frontend",
        isLearning: false,
        homepage: true,
        stackSection: "Core Technologies",
    },

    {
        key: 33,
        name: "Bootstrap",
        image: "logos/bootstrap.png",
        link: "https://getbootstrap.com/",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 34,
        name: "Material-UI",
        image: "logos/materialui.svg",
        link: "https://material-ui.com/",
        type: "Frontend",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 35,
        name: "Chakra UI",
        image: "logos/chakra.svg",
        link: "https://chakra-ui.com",
        type: "Frontend",
        isLearning: false,
    },
    {
        key: 37,
        name: "shadcn",
        image: "logos/shadcn.png",
        link: "https://ui.shadcn.com/",
        type: "Frontend",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 38,
        name: "Mantine",
        image: "logos/mantine.svg",
        link: "https://mantine.dev/",
        type: "Frontend",
        isLearning: false,
        stackSection: "Other Experience",
    },

    // Backend Technologies
    {
        key: 50,
        name: "Node.js",
        image: {
            lightImage: "logos/nodejsDark.svg",
            darkImage: "logos/nodejsLight.svg",
        },
        link: "https://nodejs.org/",
        type: "Backend",
        isLearning: false,
        homepage: true,
    },
    {
        key: 51,
        name: "Express",
        image: "logos/expressjs.png",
        link: "https://expressjs.com/",
        type: "Backend",
        isLearning: false,
    },
    {
        key: 56,
        name: "Python",
        image: "logos/python.svg",
        link: "https://www.python.org/",
        type: "Backend",
        isLearning: false,
    },
    {
        key: 58,
        name: "GraphQL",
        image: "logos/graphql.png",
        link: "https://graphql.org/",
        type: "Backend",
        isLearning: true,
        stackSection: "Currently Exploring",
    },
    {
        key: 62,
        name: "NestJS",
        image: "logos/nestjs.svg",
        link: "https://nestjs.com/",
        type: "Backend",
        isLearning: false,
    },
    {
        key: 68,
        name: "Convex",
        image: "logos/convex.svg",
        link: "https://www.convex.dev/",
        type: "Backend",
        isLearning: false,
    },

    // Databases
    {
        key: 52,
        name: "MongoDB",
        image: "logos/mongodb.svg",
        link: "https://www.mongodb.com/",
        type: "Database",
        isLearning: false,
    },
    {
        key: 53,
        name: "Mongoose",
        image: "logos/mongoose.png",
        link: "https://www.mongoosejs.com/",
        type: "Database",
        isLearning: false,
    },
    {
        key: 54,
        name: "Prisma",
        image: {
            lightImage: "logos/Prisma.svg",
            darkImage: "logos/Prisma.svg"
        },
        link: "https://www.prisma.io/",
        type: "Database",
        isLearning: false,
        homepage: true,
        stackSection: "Core Technologies",
    },
    {
        key: 55,
        name: "PostgreSQL",
        image: "logos/postgresql.svg",
        link: "https://www.postgresql.org/",
        type: "Database",
        isLearning: false,
        homepage: true,
        stackSection: "Core Technologies",
    },

    // Mobile
    {
        key: 101,
        name: "Expo",
        image: "logos/expo.png",
        link: "https://expo.dev/",
        type: "Mobile",
        isLearning: true,
        stackSection: "Currently Exploring",
    },

    // Tools
    {
        key: 71,
        name: "Figma",
        image: "logos/figma.svg",
        link: "https://www.figma.com",
        type: "Tool",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 72,
        name: "VSCode",
        image: "logos/vscode.svg",
        link: "https://code.visualstudio.com/",
        type: "Tool",
        isLearning: false,
    },
    {
        key: 73,
        name: "Vite",
        image: "logos/vite.svg",
        link: "https://vitejs.dev/",
        type: "Tool",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 74,
        name: "GitHub Copilot",
        image: "logos/copilot.png",
        link: "https://github.com/features/copilot",
        type: "Tool",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 75,
        name: "ChatGPT",
        image: "logos/ChatGPT_logo.svg.png",
        link: "https://chat.openai.com/",
        type: "Tool",
        isLearning: false,
    },
    {
        key: 76,
        name: "Stripe",
        image: "logos/stripe.png",
        link: "https://www.stripe.com/",
        type: "Tool",
        isLearning: false,
        stackSection: "Additional Tools",
    },

    // CI/CD
    {
        key: 86,
        name: "Docker",
        image: "logos/docker.svg",
        link: "https://www.docker.com/",
        type: "CI/CD",
        isLearning: true,
        stackSection: "Currently Exploring",
    },
    {
        key: 80,
        name: "Jest",
        image: "logos/jest.svg",
        link: "https://jestjs.io/",
        type: "CI/CD",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 81,
        name: "React Testing Library",
        image: "logos/rtl.png",
        link: "https://testing-library.com/docs/react-testing-library/intro/",
        type: "CI/CD",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 83,
        name: "Playwright",
        image: "logos/playwright.svg",
        link: "https://playwright.dev/",
        type: "CI/CD",
        isLearning: false,
    },
    {
        key: 84,
        name: "Husky",
        image: "logos/husky.svg",
        link: "https://typicode.github.io/husky/#/",
        type: "CI/CD",
        isLearning: false,
    },
    {
        key: 85,
        name: "GitHub",
        image: "logos/github.svg",
        link: "https://github.com/benjamindotdev",
        type: "CI/CD",
        isLearning: false,
    },
    {
        key: 87,
        name: "Vercel",
        image: "logos/vercel.svg",
        link: "https://vercel.com/",
        type: "CI/CD",
        isLearning: false,
        stackSection: "Additional Tools",
    },
    {
        key: 88,
        name: "Netlify",
        image: "logos/netlify.png",
        link: "https://www.netlify.com/",
        type: "CI/CD",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 89,
        name: "Railway",
        image: "logos/railway.svg",
        link: "https://www.railway.app/",
        type: "CI/CD",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 90,
        name: "Heroku",
        image: "logos/heroku.svg",
        link: "https://www.heroku.com/",
        type: "CI/CD",
        isLearning: false,
    },

    // Project Management
    {
        key: 110,
        name: "Notion",
        image: "logos/notion.svg",
        link: "https://www.notion.so/",
        type: "Project Management",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 111,
        name: "Trello",
        image: "logos/trello.svg",
        link: "https://www.trello.com/",
        type: "Project Management",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 112,
        name: "Slack",
        image: "logos/slack.svg",
        link: "https://www.slack.com/",
        type: "Project Management",
        isLearning: false,
        stackSection: "Other Experience",
    },
    {
        key: 113,
        name: "Taiga",
        image: "logos/taiga.png",
        link: "https://www.taiga.io/",
        type: "Project Management",
        isLearning: false,
    },

    // Content Management
    {
        key: 120,
        name: "Wordpress",
        image: "logos/wordpress.png",
        link: "https://www.wordpress.com/",
        type: "Content Management",
        isLearning: false,
    },
    {
        key: 121,
        name: "Shopify",
        image: "logos/shopify.svg",
        link: "https://www.shopify.com/",
        type: "Content Management",
        isLearning: false,
    },

    // Cloud Technologies
    {
        key: 130,
        name: "AWS",
        image: "logos/aws.png",
        link: "https://aws.amazon.com/",
        type: "Cloud",
        isLearning: false,
    },
] as Technology[];

const projects = [
    {
        key: 0,
        name: "solitairedaily.com",
        image: "logos/solitaire.png",
        description: "A modern take on the classic solitaire games.",
        status: "completed",
        type: "freelance",
        techStack: [
            "Next.js",
            "tailwindcss",
            "Convex",
            "Vercel"
        ],
        deployedLink: "https://solitairedaily.com",
        repoLink: "https://github.com/benjamindotdev/solitairedaily",
        client: {
            name: "SolitaireDaily",
        },
    },
    {
        key: 1,
        name: "sh.coach",
        image: "logos/shcoach.svg",
        description: "Leadership coaching portfolio for Stephanie Herre. Modern responsive site with custom layouts and interactive features.",
        status: "completed",
        type: "freelance",
        techStack: [
            "React",
            "Typescript",
            "Vite",
            "tailwindcss",
            "Netlify"
        ],
        deployedLink: "https://sh.coach",
        repoLink: "https://github.com/benjamindotdev/sh",
        client: {
            name: "Stephanie Herre",
            linkedIn: "https://www.linkedin.com/in/stephanie-herre/",
            position: "Leadership Coach & Consultant",
            testimonial: "Benjamin delivered a beautiful, performant website that perfectly captures my coaching brand. His attention to detail and technical expertise made the process smooth and enjoyable.",
        },
    },
    {
        key: 2,
        name: "Storytime",
        image: "logos/storytime.png",
        description: "AI generated bedtime stories for kids.",
        status: "completed",
        techStack: [
            "Typescript",
            "Next.js",
            "tailwindcss",
            "ChatGPT",
            "Prisma",
            "MongoDB",
            "Vercel",
        ],
        deployedLink: "https://storytime-by-benjamindotdev.vercel.app",
        repoLink: "https://github.com/benjamindotdev/storytime",
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
                lightImage: "icons/email-light.svg",
                darkImage: "icons/email-dark.svg"
            },
        }
    ],
    socials: [
        {
            key: 0,
            name: "LinkedIn",
            image: {
                lightImage: "logos/linkedInBlack.png",
                darkImage: "logos/linkedInWhite.png"
            },
            link: "https://www.linkedin.com/in/benjamin-elliott-163280280/",
        },
        {
            key: 1,
            name: "Github",
            image: {
                lightImage: "logos/githubBlack.png",
                darkImage: "logos/githubWhite.png",
            },
            link: "https://github.com/benjamindotdev",
        }
    ],
    experience: [
        {
            key: 0,
            title: "Teaching Assistant",
            company: "Ironhack",
            location: "Berlin, Germany",
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
            techStack: [
                "React",
                "Typescript",
                "tailwindcss",
            ],
            skills: ["Teaching"],
            link: "www.ironhack.com/de-en",
            logo: "logos/Ironhack_idvM-wR3Mf_6.svg",
            type: "Full-time",
            isCurrent: false,
        },
        {
            key: 1,
            title: "Web Development Intern",
            company: "OrganicsBest",
            location: "Berlin, Germany",
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
            techStack: [
                "HTML5",
                "CSS3",
                "Javascript",
                "Webpack",
                "Shopify",
            ],
            skills: ["Basic integration"],
            link: "www.organicsbestshop.com",
            logo: "logos/organicsbest.webp",
            type: "Internship",
            isCurrent: false,
        },
        {
            key: 4,
            title: "Full Stack Web Developer",
            company: "Genie TechBio",
            location: "Berlin, Germany",
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
            techStack: [
                "React",
                "Typescript",
                "Zustand",
                "tailwindcss",
            ],
            skills: ["REST APIs"],
            link: "www.genietechbio.com",
            logo: "logos/genie.jpeg",
            type: "Full-time",
            isCurrent: false,
        },
        {
            key: 6,
            title: "Full Stack Web Developer",
            company: "Shep",
            location: "Berlin, Germany",
            date: "July 2025 - Present",
            description:
                "AI-powered financial dashboard enabling unified visibility across multiple SaaS tools and analytics sources",
            details: [
                {
                    key: 0,
                    text: "Designed and built the initial MVP architecture using industry-standard full-stack tools (Next.js, TypeScript, Tailwind, Prisma, Convex)",
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
            techStack: [
                "Next.js",
                "Typescript",
                "tailwindcss",
                "Convex",
            ],
            skills: ["Full-stack architecture"],
            link: "https://www.shephq.com/",
            logo: "logos/shep.png",
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
        // {
        //     key: 4,
        //     title: "Projects",
        //     route: "/projects",
        // },
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
                lightImage: "logos/IronhackLight.png",
                darkImage: "logos/IronhackDark.png",
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
            logo: "logos/coursera.svg",
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
                lightImage: "logos/FCCLight.png",
                darkImage: "logos/FCCDark.png",
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
                lightImage: "logos/FCCLight.png",
                darkImage: "logos/FCCDark.png",
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
                lightImage: "logos/IronhackLight.png",
                darkImage: "logos/IronhackDark.png",
            },
            description:
                "Won the Ironhack Berlin Hackshow in September 2024 with asozial.dev, a social platform connecting users through shared interests and activities",
            company: "Ironhack Berlin",
            location: "On site",
            category: "Awards & Achievements",
            level: "Hackathon Winner",
            date: "September 2024",
            repoLink: "https://github.com/benjamindotdev/asozial",
        },
        {
            key: 5,
            name: "Code Hackday X GitHub X global AI",
            logo: {
                lightImage: "logos/CodeLight.png",
                darkImage: "logos/CodeDark.png",
            },
            description:
                "Won the Code University Hackday with TaskChunker, an AI-powered task management app that breaks down complex projects into manageable tasks. Built in 5 hours",
            company: "Code University",
            location: "On site",
            category: "Awards & Achievements",
            level: "Hackathon Winner",
            date: "May 2023",
            repoLink: "https://github.com/benjamindotdev/taskchunker-frontend",
        },
    ],
    projects,
    technologies,
} as Benjamin;

export { benjamin };

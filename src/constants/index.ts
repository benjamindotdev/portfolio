import type { Benjamin, Technology, Project } from "../global";

const technologies = [
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
    name: "CSS3",
    image: "logos/css3.svg",
    link: "https://www.w3.org/TR/CSS/#css",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 2,
    name: "Javascript",
    image: "logos/js.svg",
    link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 3,
    name: "Typescript",
    image: "logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 4,
    name: "React",
    image: "logos/react.svg",
    link: "https://react.dev/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 5,
    name: "Next.js",
    image: "logos/nextjs.svg",
    link: "https://nextjs.org/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 6,
    name: "React Native",
    image: "logos/reactnative.svg",
    link: "https://reactnative.dev/",
    type: "Mobile",
    isLearning: false,
  },
  {
    key: 7,
    name: "Vue.JS",
    image: "logos/vue.svg",
    link: "https://vuejs.org/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 8,
    name: "Angular",
    image: "logos/angular.svg",
    link: "https://angular.io/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 9,
    name: "SASS",
    image: "logos/sass.svg",
    link: "https://sass-lang.com/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 10,
    name: "Chakra UI",
    image: "logos/chakra.svg",
    link: "https://chakra-ui.com",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 11,
    name: "TailwindCSS",
    image: "logos/tailwind.svg",
    link: "https://tailwindcss.com/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 12,
    name: "Bootstrap",
    image: "logos/bootstrap.png",
    link: "https://getbootstrap.com/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 13,
    name: "Material-UI",
    image: "logos/materialui.svg",
    link: "https://material-ui.com/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 14,
    name: "shadcn",
    image: "logos/shadcn.png",
    link: "https://ui.shadcn.com/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 15,
    name: "DaisyUI",
    image: "logos/daisyui.png",
    link: "https://daisyui.com/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 20,
    name: "Node.js",
    image: "logos/nodejs.png",
    link: "https://nodejs.org/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 21,
    name: "Express",
    image: "logos/expressjs.png",
    link: "https://expressjs.com/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 22,
    name: "MongoDB",
    image: "logos/mongodb.svg",
    link: "https://www.mongodb.com/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 23,
    name: "Mongoose",
    image: "logos/mongoose.png",
    link: "https://www.mongoosejs.com/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 24,
    name: "Prisma",
    image: "logos/prisma.svg",
    link: "https://www.prisma.io/",
    type: "Backend",
    isLearning: false,
  },

  {
    key: 25,
    name: "PostgreSQL",
    image: "logos/postgresql.svg",
    link: "https://www.postgresql.org/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 26,
    name: "Python",
    image: "logos/python.svg",
    link: "https://www.python.org/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 40,
    name: "Figma",
    image: "logos/figma.svg",
    link: "https://www.figma.com",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 41,
    name: "VSCode",
    image: "logos/vscode.svg",
    link: "https://code.visualstudio.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 42,
    name: "Expo",
    image: "logos/expo.svg",
    link: "https://expo.dev/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 43,
    name: "GitHub",
    image: "logos/github.svg",
    link: "https://github.com/benjamindotdev",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 44,
    name: "GitHub Copilot",
    image: "logos/copilot.png",
    link: "https://github.com/features/copilot",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 45,
    name: "ChatGPT",
    image: "logos/ChatGPT_logo.svg.png",
    link: "https://chat.openai.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 46,
    name: "Stripe",
    image: "logos/stripe.png",
    link: "https://www.stripe.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 47,
    name: "Docker",
    image: "logos/docker.svg",
    link: "https://www.docker.com/",
    type: "Tool",
    isLearning: true,
  },
  {
    key: 48,
    name: "Vercel",
    image: "logos/vercel.svg",
    link: "https://vercel.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 49,
    name: "netlify",
    image: "logos/netlify.png",
    link: "https://www.netlify.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 50,
    name: "Railway",
    image: "logos/railway.svg",
    link: "https://www.railway.app/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 51,
    name: "Wordpress",
    image: "logos/wordpress.png",
    link: "https://www.wordpress.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 52,
    name: "Notion",
    image: "logos/notion.svg",
    link: "https://www.notion.so/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 53,
    name: "Trello",
    image: "logos/trello.svg",
    link: "https://www.trello.com/",
    type: "Tool",
    isLearning: false,
  },
  {
    key: 54,
    name: "Slack",
    image: "logos/slack.svg",
    link: "https://www.slack.com/",
    type: "Tool",
    isLearning: false,
  },
] as Technology[];

const projects = [
  {
    key: 0,
    name: "asozial.dev",
    image: "logos/asozial.png",
    description: "A social media platform for anti-social developers.",
    techStack: [
      "Next.js",
      "shadcn",
      "TailwindCSS",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "Vercel",
      "Railway",
    ],
    deployedLink: "https://asozial.dev",
    repoLink: "https://github.com/asozialdotdev/asozial",
  },
  {
    key: 1,
    name: "littlelemon.biz",
    image: "logos/littlelemon.svg",
    description: "A small business site for a Mediterranean restaurant.",
    techStack: ["HTML5", "CSS3", "Typescript", "React", "Chakra UI", "Stripe"],
    deployedLink: "https://littlelemon.biz",
    repoLink: "https://github.com/benjamindotdev/LittleLemon",
  },
  {
    key: 2,
    name: "seeO2",
    image: "logos/seeO2.png",
    description: "A tool to help make ethical travel decisions.",
    techStack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "DaisyUI",
    ],
    deployedLink: "https://seeo2.netlify.app",
    repoLink: "https://github.com/benjamindotdev/seeO2-frontend",
  },
  {
    key: 3,
    name: "Frosch",
    image: "logos/Frosch.gif",
    description: "A web-game where you help a frog cross different terrain.",
    techStack: ["HTML5", "CSS3", "Javascript"],
    deployedLink: "https://benjamindotdev.github.io/Frosch/",
    repoLink: "https://github.com/benjamindotdev/frosch",
  },
  {
    key: 4,
    name: "kenben",
    image: "logos/kenben.svg",
    description: "My own take on a traditional Kanban board.",
    techStack: ["React", "Typescript", "TailwindCSS", "shadcn"],
    deployedLink: "https://kenben.netlify.app",
    repoLink: "https://github.com/benjamindotdev/kenben",
  },
  {
    key: 5,
    name: "CountyGPT",
    image: "logos/CountyGPT.svg",
    description:
      "An SPA which gives the user stuff to do in their neck of the woods.",
    techStack: [
      "HTML5",
      "CSS3",
      "Typescript",
      "React",
      "TailwindCSS",
      "ChatGPT",
    ],
    deployedLink: "https://jolly-zuccutto-827f86.netlify.app/",
    repoLink: "https://github.com/benjamindotdev/CountyGPT",
  },
  {
    key: 6,
    name: "benjamin.dev",
    image: "images/B.png",
    description:
      "My professional portfolio site, showcasing my skills and projects.",
    techStack: ["HTML5", "CSS3", "Typescript", "React", "SASS"],
    deployedLink: "https://benjaminelliott.dev",
    repoLink: "https://github.com/benjamindotdev/portfolio",
  },
  {
    key: 7,
    name: "stacyannelliott.com",
    image: "images/stacy.jpg",
    description: "A professional portfolio site for a journalist.",
    techStack: ["HTML5", "CSS3", "Javascript", "Wordpress"],
    deployedLink: "https://www.stacyannelliott.com",
  },
] as Project[];

const benjamin = {
  name: "Benjamin",
  hero: "images/benjamin.jpg",
  about: [
    {
      key: 0,
      image: "images/hackshow.jpeg",
      text: "I am currently the teaching assistant for the Web Development class at Ironhack, Berlin. After completing the bootcamp and winning the hackshow with my final project, I was offered the position due to my helpful nature, coding knowledge and teamwork skills.",
    },
    {
      key: 1,
      image: "images/coachBenWithTeam.jpg",
      text: "I honed these skills during the decade I spent as a youth football coach in NJ, USA, mentoring and guiding young athletes to success on the pitch and in life. I won some trophies along the way, but what stuck with me was the relationships I built with the players and their families.",
    },
  ],
  hobbies: [
    {
      key: 0,
      name: "PC Building",
      icon: "🧑🏽‍🏭️",
      image: "images/pc.jpg",
      text: "PC master race, rise up. 7900XT + 5800x3d. Cities Skylines, Titanfall 2, Starsector",
    },
    {
      key: 1,
      name: "Mechanical keyboards",
      icon: "⌨️",
      image: "images/keyboards.jpg",
      text: "Needed a fiddly pandemic hobby. Lubing switches and soldering motherboards since 2020",
    },
    {
      key: 2,
      name: "Indoor cycling",
      icon: "🚵🏽",
      image: "images/cycling.png",
      text: "When not at my desk, you can find me climbing the mountains of Watopia with my fellow Zwifters",
    },
  ],
  softSkills: [
    {
      key: 0,
      name: "Communication",
      icon: "💬",
    },
    {
      key: 1,
      name: "Teamwork",
      icon: "🤝🏽",
    },
    {
      key: 2,
      name: "Leadership",
      icon: "🧑🏽‍💼️",
    },
    {
      key: 3,
      name: "Resilience",
      icon: "☮️",
    },
  ],
  hardSkills: [
    {
      key: 0,
      name: "Working remotely",
      icon: "🧑🏽‍💻️",
    },
    {
      key: 1,
      name: "Attention to detail",
      icon: "🔎",
    },
    {
      key: 2,
      name: "Problem solving",
      icon: "🎓",
    },
    {
      key: 3,
      name: "Self-learning",
      icon: "🧑🏽‍🎓️",
    },
  ],
  technologies,
  contacts: [
    {
      key: 0,
      name: "email",
      link: "mailto:hello@benjamin.dev",
      icon: "icons/email.svg",
    },
    {
      key: 1,
      name: "phone",
      link: "tel:+4917684306585",
      icon: "icons/phone.svg",
    },
  ],
  socials: [
    {
      key: 0,
      name: "linkedin",
      image: "logos/linkedin.svg",
      link: "https://www.linkedin.com/in/benjamin-elliott-163280280/",
    },
    {
      key: 1,
      name: "gitHub",
      image: "logos/github.svg",
      link: "https://github.com/benjamindotdev",
    },
  ],
  links: [
    {
      key: 0,
      title: "Home",
      route: "/",
    },
    {
      key: 1,
      title: "About",
      route: "/about",
    },
    {
      key: 2,
      title: "Certifications",
      route: "/certifications",
    },
    {
      key: 3,
      title: "Projects",
      route: "/projects",
    },
  ],
  certifications: [
    {
      key: 0,
      name: "Web Development Bootcamp (full-time)",
      logo: "logos/Ironhack_idVsNwhECC_4.svg",
      description:
        "Completed in September 2024. Won hackshow with asozial.dev. Offered a position as a TA afterwards, due to my passion and willingness to help my colleagues.",
      link: "https://www.ironhack.com/de-en",
      company: "Ironhack",
      location: "On site",
    },
    {
      key: 1,
      name: "Meta Front-End Developer",
      logo: "logos/coursera.svg",
      description:
        "Complete in August 2023. Learned the latest React best practices, straight from Meta themselves.",
      link: "https://coursera.org/verify/professional-cert/5GMTVUAPTVM2",
      company: "Coursera",
      location: "Remote",
    },
    {
      key: 2,
      name: "Responsive Web Design",
      logo: "logos/freecodecamp.svg",
      description:
        "Completed in April 2019. Specialized in creating responsive pages with HTML, CSS and Javascipt.",
      link: "https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design",
      company: "freecodecamp",
      location: "Remote",
    },
    {
      key: 3,
      name: "Javascript Algorithms & Data Structures",
      logo: "logos/freecodecamp.svg",
      description:
        "Completed in August 2023. Javascript algorithms and data sctuctures, specializing in using different data types and structures in Javascript ES6",
      link: "https://freecodecamp.org/certification/benjaminelliott/javascript-algorithms-and-data-structures",
      company: "freecodecamp",
      location: "Remote",
    },
  ],
  projects,
} as Benjamin;

export { benjamin, technologies, projects };

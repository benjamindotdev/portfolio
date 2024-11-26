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
  },
  {
    key: 3,
    name: "React",
    image: "logos/react.svg",
    link: "https://react.dev/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 4,
    name: "Next.js",
    image: "logos/nextjs.svg",
    link: "https://nextjs.org/",
    type: "Frontend",
    isLearning: false,
  },
  {
    key: 5,
    name: "Vue.JS",
    image: "logos/vue.svg",
    link: "https://vuejs.org/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 6,
    name: "Angular",
    image: "logos/angular.svg",
    link: "https://angular.io/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 7,
    name: "Svelte",
    image: "logos/svelte.png",
    link: "https://svelte.dev/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 8,
    name: "SolidJS",
    image: "logos/solid.svg",
    link: "https://www.solidjs.com/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 9,
    name: "RedwoodJS",
    image: "logos/redwood.svg",
    link: "https://redwoodjs.com/",
    type: "Frontend",
    isLearning: true,
  },
  {
    key: 10,
    name: "Redux",
    image: "logos/redux.svg",
    link: "https://redux.js.org/",
    type: "Frontend",
    isLearning: true,
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
    key: 12,
    name: "Astro",
    image: "logos/astro.svg",
    link: "https://astro.build/",
    type: "Frontend",
    isLearning: true,
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
    isLearning: true,
  },
  {
    key: 36,
    name: "DaisyUI",
    image: "logos/daisyui.png",
    link: "https://daisyui.com/",
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
  },

  // Backend Technologies
  {
    key: 50,
    name: "Node.js",
    image: "logos/nodejs.png",
    link: "https://nodejs.org/",
    type: "Backend",
    isLearning: false,
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
    isLearning: true,
  },
  {
    key: 57,
    name: "Redis",
    image: "logos/redis.png",
    link: "https://redis.io/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 58,
    name: "GraphQL",
    image: "logos/graphql.png",
    link: "https://graphql.org/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 59,
    name: "Socket.io",
    image: "logos/socket.svg",
    link: "https://socket.io/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 60,
    name: "Deno",
    image: "logos/deno.svg",
    link: "https://deno.com/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 61,
    name: "Bun",
    image: "logos/bun.svg",
    link: "https://bun.sh/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 62,
    name: "NestJS",
    image: "logos/nestjs.svg",
    link: "https://nestjs.com/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 63,
    name: "Go",
    image: "logos/go.svg",
    link: "https://golang.org/",
    type: "Backend",
    isLearning: true,
  },
  {
    key: 64,
    name: "PHP",
    image: "logos/PHP.png",
    link: "https://www.php.net/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 65,
    name: "Apache",
    image: "logos/apache.png",
    link: "https://httpd.apache.org/",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 66,
    name: "XAMPP",
    image: "logos/xampp.svg",
    link: "https://www.apachefriends.org/index.html",
    type: "Backend",
    isLearning: false,
  },
  {
    key: 67,
    name: "Laravel",
    image: "logos/laravel.svg",
    link: "https://laravel.com/",
    type: "Backend",
    isLearning: true,
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
    image: "logos/prisma.svg",
    link: "https://www.prisma.io/",
    type: "Database",
    isLearning: false,
  },
  {
    key: 55,
    name: "PostgreSQL",
    image: "logos/postgresql.svg",
    link: "https://www.postgresql.org/",
    type: "Database",
    isLearning: false,
  },
  {
    key: 68,
    name: "mySQL",
    image: "logos/mysql.png",
    link: "https://www.mysql.com/",
    type: "Database",
    isLearning: false,
  },

  // Tools
  {
    key: 70,
    name: "Storybook",
    image: "logos/storybook.png",
    link: "https://storybook.js.org/",
    type: "Tool",
    isLearning: true,
  },
  {
    key: 71,
    name: "Figma",
    image: "logos/figma.svg",
    link: "https://www.figma.com",
    type: "Tool",
    isLearning: false,
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
  },
  {
    key: 74,
    name: "GitHub Copilot",
    image: "logos/copilot.png",
    link: "https://github.com/features/copilot",
    type: "Tool",
    isLearning: false,
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
  },

  // CI/CD
  {
    key: 80,
    name: "Jest",
    image: "logos/jest.svg",
    link: "https://jestjs.io/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 81,
    name: "React Testing Library",
    image: "logos/rtl.png",
    link: "https://testing-library.com/docs/react-testing-library/intro/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 82,
    name: "Playwright",
    image: "logos/playwright.svg",
    link: "https://playwright.dev/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 83,
    name: "Cypress",
    image: "logos/cypress.svg",
    link: "https://www.cypress.io/",
    type: "CI/CD",
    isLearning: true,
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
    key: 86,
    name: "Docker",
    image: "logos/docker.svg",
    link: "https://www.docker.com/",
    type: "CI/CD",
    isLearning: true,
  },
  {
    key: 87,
    name: "Vercel",
    image: "logos/vercel.svg",
    link: "https://vercel.com/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 88,
    name: "Netlify",
    image: "logos/netlify.png",
    link: "https://www.netlify.com/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 89,
    name: "Railway",
    image: "logos/railway.svg",
    link: "https://www.railway.app/",
    type: "CI/CD",
    isLearning: false,
  },
  {
    key: 90,
    name: "Heroku",
    image: "logos/heroku.svg",
    link: "https://www.heroku.com/",
    type: "CI/CD",
    isLearning: false,
  },

  // Mobile Technologies
  {
    key: 100,
    name: "React Native",
    image: "logos/reactnative.svg",
    link: "https://reactnative.dev/",
    type: "Mobile",
    isLearning: true,
  },
  {
    key: 101,
    name: "Expo",
    image: "logos/expo.png",
    link: "https://expo.dev/",
    type: "Mobile",
    isLearning: true,
  },

  // Project Management
  {
    key: 110,
    name: "Notion",
    image: "logos/notion.svg",
    link: "https://www.notion.so/",
    type: "Project Management",
    isLearning: false,
  },
  {
    key: 111,
    name: "Trello",
    image: "logos/trello.svg",
    link: "https://www.trello.com/",
    type: "Project Management",
    isLearning: false,
  },
  {
    key: 112,
    name: "Slack",
    image: "logos/slack.svg",
    link: "https://www.slack.com/",
    type: "Project Management",
    isLearning: false,
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
] as Technology[];

const projects = [
  {
    key: 0,
    name: "asozial.dev",
    image: "logos/asozial.png",
    description: "A social media platform for anti-social developers.",
    status: "in progress",
    techStack: [
      "Next.js",
      "tailwindcss",
      "shadcn",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "Vercel",
      "Railway",
      "Jest",
      "React Testing Library",
      "Taiga",
    ],
    deployedLink: "https://asozial.dev",
    repoLink: "https://github.com/asozialdotdev/asozial",
  },
  {
    key: 1,
    name: "littlelemon",
    image: "logos/littlelemon.svg",
    description: "A small business site for a Mediterranean restaurant.",
    status: "completed",
    techStack: [
      "React",
      "CSS3",
      "Typescript",
      "Chakra UI",
      "Stripe",
      "Jest",
      "React Testing Library",
      "Netlify",
    ],
    deployedLink: "https://littlelemonbybenjamin.netlify.app/",
    repoLink: "https://github.com/benjamindotdev/LittleLemon",
  },
  {
    key: 2,
    name: "seeO2",
    image: "logos/seeO2.png",
    description: "A tool to help make ethical travel decisions.",
    status: "in progress",
    techStack: [
      "React",
      "tailwindcss",
      "Node.js",
      "Express",
      "MongoDB",
      "DaisyUI",
      "Netlify",
    ],
    deployedLink: "https://seeo2.netlify.app",
    repoLink: "https://github.com/benjamindotdev/seeO2-frontend",
  },
  {
    key: 3,
    name: "Frosch",
    image: "logos/Frosch.gif",
    description: "A web-game where you help a frog cross different terrain.",
    status: "in progress",
    techStack: ["HTML5", "CSS3", "Javascript", "Webpack", "Netlify"],
    deployedLink: "https://playfrosch.netlify.app",
    repoLink: "https://github.com/benjamindotdev/frosch",
  },
  {
    key: 4,
    name: "kenben",
    image: "logos/kenben.svg",
    description: "My own take on a traditional Kanban board.",
    status: "in progress",
    techStack: ["React", "Typescript", "tailwindcss", "shadcn", "Netlify"],
    deployedLink: "https://kenben.netlify.app",
    repoLink: "https://github.com/benjamindotdev/kenben",
  },
  {
    key: 5,
    name: "CountyGPT",
    image: "logos/CountyGPT.svg",
    description:
      "A SPA which gives the user stuff to do in their neck of the woods.",
    status: "in progress",
    techStack: ["Typescript", "React", "tailwindcss", "ChatGPT", "Netlify"],
    deployedLink: "https://countygpt.netlify.app/",
    repoLink: "https://github.com/benjamindotdev/CountyGPT",
  },
  {
    key: 6,
    name: "benjamin.dev",
    image: "images/B.png",
    description:
      "My professional portfolio site, showcasing my skills and projects.",
    status: "completed",
    techStack: [
      "Typescript",
      "React",
      "SASS",
      "Jest",
      "React Testing Library",
      "Netlify",
      "Husky",
    ],
    deployedLink: "https://benjamin.dev",
    repoLink: "https://github.com/benjamindotdev/portfolio",
  },
  {
    key: 7,
    name: "stacyannelliott.com",
    image: "images/stacy.jpg",
    description: "A professional portfolio site for a journalist.",
    status: "completed",
    techStack: ["Wordpress"],
    deployedLink: "https://stacyannelliott.wordpress.com/",
  },
  {
    key: 8,
    name: "Storytime",
    image: "logos/storytime.png",
    description: "AI generated bedtime stories for kids.",
    status: "in progress",
    techStack: [
      "Typescript",
      "Next.js",
      "tailwindcss",
      "ChatGPT",
      "Prisma",
      "MongoDB",
      "Vercel",
    ],
    deployedLink: "https://storytime.netlify.app",
    repoLink: "https://github.com/benjamindotdev/storytime",
  },
  {
    key: 9,
    name: "Epictweetus",
    image: "logos/epictweetus.png",
    description: "Ancient wisdom, modern technology.",
    status: "in progress",
    techStack: ["Typescript", "React", "CSS3", "Netlify"],
    deployedLink: "https://epictweetus.netlify.app",
    repoLink: "https://github.com/benjamindotdev/epictweetus",
  },
  {
    key: 10,
    name: "DJDetailing",
    image: "logos/djdetailing.png",
    description: "A site for a car detailing business.",
    status: "in progress",
    techStack: [
      "Typescript",
      "Next.js",
      "tailwindcss",
      "DaisyUI",
      "Webpack",
      "Prisma",
      "MongoDB",
      "Netlify",
    ],
    deployedLink: "https://djdetailing.netlify.app",
    repoLink: "https://github.com/benjamindotdev/djdetailing",
  },
  {
    key: 11,
    name: "Haikuh",
    image: "logos/haikuh.png",
    description: "A site for sharing and creating Haikus.",
    status: "planning",
    techStack: [
      "Storybook",
      "Typescript",
      "RedwoodJS",
      "tailwindcss",
      "Prisma",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Netlify",
    ],
  },
  {
    key: 12,
    name: "TicTacGo",
    image: "logos/tictacgo.png",
    description:
      "A multiplayer TicTacToe clone, built in Go, playable in the command line.",
    status: "in progress",
    techStack: ["Go"],
    repoLink: "https://github.com/benjamindotdev/tictacgo",
  },
] as Project[];

const events = [
  {
    key: 0,
    name: "thegeekconf",
    image: "logos/thegeekconf.png",
    date: "August 2024",
    location: "Villa Elisabeth, Berlin",
    description:
      "I attended thegeekconf, a conference for React Native development",
    link: "https://www.thegeekconf.com/",
    techStack: ["React Native", "Expo", "tailwindcss", "ChatGPT"],
  },
  {
    key: 1,
    name: "IronHackshow",
    image: "logos/ironhack.png",
    date: "September 2024",
    location: "Ironhack, Berlin",
    description:
      "I won the Ironhack Berlin hackshow with my final project, asozial.dev. I was offered a position as a TA due to my helpful nature, coding knowledge and teamwork skills.",
    link: "",
    techStack: [
      "Next.js",
      "tailwindcss",
      "shadcn",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "Vercel",
      "Railway",
      "Jest",
      "React Testing Library",
      "Taiga",
    ],
  },
];

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
      name: "LinkedIn",
      image: "logos/linkedin.svg",
      link: "https://www.linkedin.com/in/benjamin-elliott-163280280/",
    },
    {
      key: 1,
      name: "Github",
      image: "logos/github.svg",
      link: "https://github.com/benjamindotdev",
    },
    {
      key: 2,
      name: "X",
      image: "logos/x.svg",
      link: "https://x.com/benjamindotdev",
    },
    {
      key: 3,
      name: "Bluesky",
      image: "logos/bluesky.png",
      link: "https://bsky.app/profile/benjamindotdev.bsky.social",
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
      name: "Legacy Javascript Algorithms & Data Structures",
      logo: "logos/freecodecamp.svg",
      description:
        "Completed in August 2023. Javascript algorithms and data sctuctures, specializing in using different data types and structures in Javascript ES6",
      link: "https://freecodecamp.org/certification/benjaminelliott/javascript-algorithms-and-data-structures",
      company: "freecodecamp",
      location: "Remote",
    },
  ],
  projects,
  technologies,
  events,
} as Benjamin;

export { benjamin, technologies, projects, events };

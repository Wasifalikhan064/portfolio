// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import shadcnLogo from './assets/tech_logo/shadcn.png'
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import socketioLogo from './assets/tech_logo/socketio.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import dockerLogo from './assets/tech_logo/docker.jpeg';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

// Experience Section Logo's
import yinsonLogo from './assets/work_logo/tecnico.jpeg';
import aqibLogo from './assets/company_logo/aqib-logo.png'
import zakrotixLogo from './assets/company_logo/zak.png'

// Education Section Logo's

import ouLogo from './assets/education_logo/ou.jpeg'
import msLogo from './assets/education_logo/education.png'

// Project Section Logo's
import editorLogo from './assets/work_logo/preview.png';
import csprepLogo from './assets/work_logo/maiden.png';
import movierecLogo from './assets/work_logo/projectassign.png';
import taskremLogo from './assets/work_logo/invoice.png';
import npmLogo from './assets/work_logo/chat.png';
import webverLogo from './assets/work_logo/aicall.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux toolkit', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Shadcn', logo: shadcnLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Socket io', logo: socketioLogo },
       { name: 'Docker', logo: dockerLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: yinsonLogo,
      role: "Fullstack Developer",
      company: "Tecnico",
      date: "Feb 2025 - April 2025",
      desc: "Contractual:Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
     {
      id: 1,
      img: aqibLogo,
      role: "Full Stack Developer",
      company: "Aqib Softech",
      date: "July 2024 - December 2024",
      desc: "Worked as a Full Stack Developer Intern, Developed a comprehensive Doctor Appointment System enabling efficient scheduling, management, tracking of services across various hospitals and clinics.",
      skills: [
        "React js",
        "Node js",
        "Javascript",
        "Mongo db",
        "Express js",
      ],
    },
    {
      id: 2,
      img: zakrotixLogo,
      role: "Full Stack Developer",
      company: "Zakrotix",
      date: "May 2023 - July 2023",
      desc: "Worked as a Full Stack Developer Intern,Gained hands-on experience in responsive web design, ensuring optimal display on various devices and dveloped the Modern coding best practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node js"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ouLogo,
      school: "Osmania University, Hyderabad",
      date: "2020 - 2024",
      grade: "83%",
      desc: "I completed my Bachelor's degree in Computer Science. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. Got opportinity to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Engineering - BE (Computer Science)",
    },
    {
      id: 1,
      img: msLogo,
      school: "MS Education Academy, Hyderabad",
      date: "June 2018 - Apr 2020",
      grade: "92%",
      desc: "I completed my class 12 education from MS Education Academy, Hyderabad, under the State board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Senior Secondary School",
    },
    {
      id: 2,
      img: msLogo,
      school: "MS creative School, Hyderabad",
      date: "Apr 2017 - March 2018",
      grade: "93%",
      desc: "I completed my class 10 education from MS creative School, Hyderabad under the TS board.",
      degree: "SSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Live Code Editor",
      description:
      "Built a developer-focused AI assistant that converts natural language prompts into production-ready HTML, CSS, and JS code using Gemini AI, with instant rendering via iframe"  
      ,image: editorLogo,
      tags: ["Typescript", "Express JS", "JavaScript", "Mongo Db", "IFrame"],
      github: "https://github.com/Wasifalikhan064/chatbot",
      webapp: "https://chatbot-uj6e.onrender.com/compiler",
    },
    {
      id: 1,
      title: "Maiden",
      description:
      "Developed a full-stack management application with features as, streamlining blog, comment, and user management functionalities for administrators." 
      , 
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express Js", "Redux tool kit", " tailwind CSS"],
      github: "https://github.com/Wasifalikhan064/Maiden",
      webapp: "https://mernwexa.onrender.com/",
    },
    {
      id: 2,
      title: "Project Manager",
      description:
       "A full Stack role based application build for high end project managemant and sharing workspaces among teams",
       image: movierecLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express Js"," tailwind CSS"],
      github: "https://github.com/Wasifalikhan064/taskAssigner",
      webapp: "https://taskassigner-1.onrender.com/signup",
    },
    {
      id: 3,
      title: "Hood Chat",
      description:
       "This is a full-stack chat application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to register, login, chat , send files i.e JPG. It includes authentication using JWT tokens, protected routes.",image: npmLogo,
       tags: ["React JS", "Node.js", "MongoDB", "Express Js","Socket io"],
      github: "https://github.com/Wasifalikhan064/Hood",
      webapp: "https://chathood.onrender.com/signup",
    },
    {
      id: 4,
      title: "Invoice Manager",
      description:
      "A fully Functional web service that extracts the data from various files such as:Excel Sheets,Pdfs,Images" 
      ,
      image: taskremLogo,
      tags: ["ReactJs","Redux Toolkit" ,"Gemini Ai Api","Tailwind CSS"],
      github: "https://github.com/Wasifalikhan064/InvoiceManager",
      webapp: "https://swipe-assignment-tmon.onrender.com/",
    },
    {
      id: 5,
      title: "Ai Interviewer",
      description:
        "A real time Ai interviwer , with live response and answers using open ai and twilio",
      image: webverLogo,
      tags: ["React JS", "Node.js", "MongoDB","Open Ai","Twilio"],
      github: "https://github.com/Wasifalikhan064/Ai-call",
      webapp: "https://ai-call-1.onrender.com/",
    },
  ];  
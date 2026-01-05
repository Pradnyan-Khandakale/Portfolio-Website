// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's

import bsaLogo from "./assets/education_logo/bsaLogo.png";
import vpsLogo from "./assets/education_logo/vpsLogo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Devops Intern",
    company: "Codtech IT Solutions",
    date: "July 2025 - August 2025",
    desc: "Gained hands-on experience in DevOps practices by supporting CI/CD pipelines, automating deployment workflows, and managing application builds. Worked with tools such as Git, Linux, Docker, and basic cloud services to improve deployment efficiency and system reliability. Assisted in monitoring applications, troubleshooting deployment issues, and following best practices for version control and infrastructure automation.",
    skills: [
      "GitLab",
      "GitHub",
      "Terraform",
      "Docker",
      "AWS",
      "Microsoft Azure",
      "Kubernetes",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Full-stack Development using Python Framework-Django Intern",
    company: "Inspire Softech Solutions",
    date: "December 2024 - Feb 2025",
    desc: "Developed and maintained a full-stack web application using the Django framework, implementing backend logic, database models, and RESTful views. Built responsive frontend components using HTML, CSS, and JavaScript, and integrated them with Django templates. Managed database operations, user authentication, and CRUD functionality while following clean code and MVC/MVT architecture principles.",
    skills: ["JavaScript", "Tailwind CSS", "HTML", "CSS", "Python", "Django"],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Vinayak IT Solutions",
    date: "July 2024 - August 2024",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "Government College of Engineering Kolhapur",
    date: "Aug 2023 - Present",
    grade: "7.805",
    desc: "I am currently focusing on core computer science concepts including Data Structures and Algorithms, Java programming, Database Management Systems, Artificial Intelligence, Machine Learning, and Web Development.",
    degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Vatsalya Public School Govardhan, Mathura",
    date: "Aug 2021 - Jun 2023",
    grade: "78.17%",
    desc: "I completed my class 12 education from Changu Kana Thakur Jr College, Panvel, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "HSC(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Changu Kana Thakur Vidyalaya, New Panvel",
    date: "May 2020 - April 2021",
    grade: "96.8%",
    desc: "I completed my class 10 education from Changu Kana Thakur Vidyalaya, Panvel, under the SSC board.",
    degree: "SSC(X), Regular",
  },
];

export const projects = [
  {
    id: 0,
    title: "Fraud Detection System",
    description:
      " This project aims to identify fraudulent financial transactions using machine learning techniques such as anomaly detection or classification models. It addresses severe class imbalance through methods like SMOTE and evaluates model effectiveness using key metrics including F1-score and AUC-ROC to ensure reliable fraud detection.",
    image: githubdetLogo,
    tags: [
      "Python",
      "Kaggle",
      "Streamlit UI",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Scikit-Learn",
      "Seaborn",
    ],
    github:
      "https://github.com/Pradnyan-Khandakale/fraud_detection_streamlit.git",
    webapp: "https://frauddetectionapp-0090.streamlit.app/",
  },
  {
    id: 1,
    title: "Map your Workout",
    description:
      "Map Your Workout is a CRUD-based fitness application that tracks cycling and running activities using geolocation data. It allows users to record, view, update, and delete workouts, visualizing routes and performance metrics directly on an interactive map for better activity analysis and progress tracking.",
    image: csprepLogo,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Pradnyan-Khandakale/map_your_workout_CRUD.git",
    webapp: "",
  },
  {
    id: 2,
    title: "Omnnifood",
    description:
      "This project is a frontend-only website developed using HTML and CSS, focused on presenting a modern, clean, and user-friendly interface. It emphasizes semantic HTML structure, responsive layouts, and visually appealing design to effectively communicate content and enhance user experience across different screen sizes.",
    image: movierecLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Pradnyan-Khandakale/Frontend_Omnifood.git",
    webapp: "",
  },
];

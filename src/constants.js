import html from './assets/tech/html.png'
import css from './assets/tech/css.png'
import javascript from './assets/tech/javascript.png'
import java from './assets/tech/java.png'
import python from './assets/tech/python.png'
import sql from './assets/tech/sql.png'
import c from './assets/tech/c.png'
import reactjs from './assets/tech/reactjs.png'
import redux from './assets/tech/redux.png'
import tailwindcss from './assets/tech/tailwindcss.png'
import materialui from './assets/tech/materialui.png'
import nodejs from './assets/tech/nodejs.png'
import vscode from './assets/tech/vscode.png'
import git from './assets/tech/git.png'
import github from './assets/tech/github.png'
import fakeweb from './assets/tech/fakeweb.png'
import meme from './assets/tech/meme.png'
import recipe from './assets/tech/recipe.png'
import haleem from './assets/tech/haleem.jpg'
import aktu from './assets/tech/aktu.png'





export const SkillsInfo = [
    {
        title: "Front-end",
        skills: [
            { name: 'HTML5', logo: html },
            { name: 'CSS', logo: css },
            { name: 'JavaScript', logo: javascript },
            { name: 'React JS', logo: reactjs },
            { name: 'Redux', logo: redux },
            { name: 'Tailwind CSS', logo: tailwindcss },
            { name: 'Material UI', logo: materialui },
        ],
    },


    {
        title: 'Back-end',
        skills: [
            { name: "Node JS", logo: nodejs }
        ]
    },
    {
        title: 'Languages',
        skills: [
            { name: "JavaScript", logo: javascript },
            { name: "Java", logo: java },
            { name: "C", logo: c },
            { name: "Python", logo: python },
            { name: "SQL", logo: sql }
        ]
    },

    {
        title: 'Tools',
        skills: [
            { name: "VsCode", logo: vscode },
            { name: "Git", logo: git },
            { name: "Github", logo: github }
        ]
    }
];


export const experiences = [
    {
        id: 0,
        role: "Front-End Developer Intern",
        company: "ABSTERGE IT SERVICES PVT LTD",
        date: "July 2024 - August 2024",
        project: "(Doctro – Healthcare Application).",
        desc:
            "Developed a user-friendly website for a healthcare system using React.js. Implemented separate role-based sections for doctors and patients to enhance navigation and access to information. Ensured a modern, fully responsive design, guaranteeing optimal performance and display across all devices (mobile, tablet, and desktop).",
        featureHeading: "Implemented real-time features such as :",
        features: [
            "Instant appointment booking.",
            "Advanced Doctor/Hospital search.",
            "Live queue tracking.",
            "Emergency SOS with ambulance tracking.",
        ],
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Redux",
        ],
             id: 0,
        role: "Front-End Developer Intern",
        company: "ABSTERGE IT SERVICES PVT LTD",
        date: "July 2024 - August 2024",
        project: "(Doctro – Healthcare Application).",
        desc:
            "Developed a user-friendly website for a healthcare system using React.js. Implemented separate role-based sections for doctors and patients to enhance navigation and access to information. Ensured a modern, fully responsive design, guaranteeing optimal performance and display across all devices (mobile, tablet, and desktop).",
        featureHeading: "Implemented real-time features such as :",
        features: [
            "Instant appointment booking.",
            "Advanced Doctor/Hospital search.",
            "Live queue tracking.",
            "Emergency SOS with ambulance tracking.",
        ],
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Redux",
        ],
    },
         {id: 1,
        role: "Front-End Developer Intern",
        company: "IHSUK TECH Pvt Ltd",
        date: "Feb 2026 - Present",
        project: "Fixspire",
        desc:"Fixspire makes field services simple by connecting customers and technicians on one easy platform.Whether it’s booking a repair or managing clients, everything is handled smoothly in one place.",
        featureHeading: "Implemented real-time features such as :",
        features: [
            "Smart Client Management.",
            "Intelligent Scheduling.",
            "Professional Invoicing.",
    
        ],
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Next.js ",
            "API Integration"
        ],
    }
];






export const education = [

    {
        id: 0,
        img: aktu,
        school: "Dr. A.P.J Abdul Kalam Technical Univrsity, Lucknow.",
        date: "August 2021 - June 2025",
        grade: "7.45 CGPA",
        desc: "I completed my Bachelor's degree in Computer Science & Engineering from Dr. A.P.J Abdul Kalam Technical University, Lucknow, with relevent subjects are :",
        sub:[
            "Data Structures.", "AI with Engineering.", "DBMS.", "Operating Systems.", "Compiler Design.", "Computer Organization and Architecture.", "Web Technology.", "Design and Analysis of Algorithm."
        ],
        degree: "B.Tech -(Computer Science and Engineering)."

    },

    {
        id: 1,
        img: haleem,
        school: "Haleem Muslim Inter College, Kanpur.",
        date: " March 2019 - April 2020",
        grade: "75%",
        desc: "I completed my class 12th education from Haleem Muslim Inter College, Kanpur, under the UP board, where I studied Physics, Chemistry, Math.",
        degree: "UP Board(XII) - PCM "
    },


    {
        id: 2,
        img: haleem,
        school: "Haleem Muslim Inter College, Kanpur.",
        date: " March 2017 - April 2018",
        grade: "77.7%",
        desc: "I completed my class 10th education from Haleem Muslim Inter College, Kanpur, under the UP board, where I studied Science with Urdu.",
        degree: "UP Board(X) - Science with Urdu "
    },
]

export const projects = [
    {
        id: 0,
        title: "Rasha Shield (Phishing Detection Platform)",
        desc: "Developed Rasha Shield, a real-time cybersecurity tool to detect and analyze phishing and fraudulent website activities, providing immediate safety guidance.",
        img: fakeweb,
        tags: ["HTML5", "CSS", "JavaScript", "RESTful API"],
        github: "https://github.com/Ansha-RA/Rasha-shield",
        live: "https://rasha-shield.vercel.app/"

    },


    {
        id: 1,
        title: "Recipe-Finder through API",
        desc: "Recipe Finder allows users to search for specific meals and instantly retrieves detailed ingredient lists and cooking instructions using TheMealDB API.",
        img: recipe,
        tags: ["HTML5", "CSS", "JavaScript", "RESTful API", "State Management", "Responsive UI Design"],
        github: "https://github.com/Ansha-RA/Recipe-finder-through-API",
        live: "https://recipe-finder-through-api.vercel.app/",

    },


    {
        id: 2,
        title: "Memes Generator",
        desc: "Built a dynamic Meme Generator using JavaScript that fetches random memes from a public API in real time. The project updates meme images, titles, and authors instantly on user interaction, demonstrating API integration and DOM manipulation skills.",
        img: meme,
        tags: ["HTML5", "CSS", "JavaScript"],
        github: "https://github.com/Ansha-RA/Meme-Generator",


    },



]

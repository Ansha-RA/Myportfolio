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
import fakeweb from './assets/tech/fakeweb.webp'
import meme from './assets/tech/meme.png'
import recipe from './assets/tech/recipe.png'
import haleem from './assets/tech/haleem.jpg'
import aktu from './assets/tech/aktu.png'





export const SkillsInfo =[
    {
        title:"Front-end",
        skills:[
        {name:'HTML5', logo: html},
        {name:'CSS', logo: css},
        {name:'JavaScript', logo: javascript},
        {name:'React JS', logo: reactjs },
        {name:'Redux', logo: redux},
        {name:'Tailwind CSS', logo: tailwindcss},
        {name:'Material UI', logo: materialui},
        ],
    },


    {
        title: 'Back-end',
        skills:[
            {name:"Node JS", logo: nodejs}
        ]
    },
    {
        title:'Languages',
        skills:[
            {name:"JavaScript", logo:javascript},
            {name:"Java", logo:java},
            {name:"C", logo:c},
            {name:"Python", logo:python},
            {name:"SQL", logo:sql}
        ]
    },

    {
        title:'Tools',
        skills:[
            {name:"VsCode", logo:vscode},
            {name:"Git", logo:git},
            {name:"Github", logo:github}
        ]
    }
];


export const experiences =[
    {
        id:0,
        role:"Frontend Intern",
        company:"ABSTERGE IT SERVICES PVT LTD",
        date:"July 2024 - August 2024",
        desc:"Developed dynamic and scalable web applications using the React js, handling front-end development. Collaborated with cross-functional teams to build responsive UI, implement RESTful API, and optimize application performance in an agile environment.",
        skills:[
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Redux",

        ],
    },

];



export const education=[

    {
        id:0,
        img:aktu,
        university:"Dr. A.P.J Abdul Kalam Technical Univrsity, Lucknow",
        date: "Nov 2021 - June 2025",
        grade:"7.45 CGPA",
        desc:"I completed my Bachelor's degree in Computer Science &  Engineering from Jahangeerabad Institute of Technology, Barabanki. Throughout my studies, I was immersed in a variety of subjects.",
        degree:"Bacheler's of Technology - B.tech(CSE)"

    },

    {
        id:1,
        img:haleem,
        school:"Haleem Muslim Inter College, Kanpur",
        date: " March 2019 - April 2020",
        grade:"75%",
        desc:"I completed my class 12 education from Haleem Muslim Inter College, Kanpur. under the UP board, where I studied physics, Chemistry, Math.",
        degree:"UP Board(XII) - PCM "
    },


     {
        id:2,
        img:haleem,
        school:"Haleem Muslim Inter College, Kanpur",
        date: " Feb 2017 - April 2018",
        grade:"77.7%",
        desc:"I completed my class 10 education from Haleem Muslim Inter College, Kanpur. under the UP board, where I studied Science with Urdu.",
        degree:"UP Board(X) - Science with Urdu "
    },
];

export const projects =[
    {
        id:0,
        title:"Rasha Shield (Phishing Detection Platform)",
        desc: "Developed Rasha Shield, a real-time cybersecurity tool to detect and analyze phishing and fradulent website activities, providing immediate safety guidance.",
        img:fakeweb,
        tags:["HTML5", "CSS", "JavaScript", "RESTful API"],
        github: "https://github.com/Ansha-RA/Rasha-shield",
        live:"http://127.0.0.2:5501/index.html#home"

    },

    {
        id:1,
        title:"Memes Generator",
        desc:"Built a dynamic Meme Generator using JavaScript that fetches random memes from a public API in real time. The project updates meme images, titles, and authors instantly on user interaction, demonstrating API integration and DOM manipulation skills.",
        img:meme,
        tags:["HTML5", "CSS", "JavaScript"],
        github:"https://github.com/Ansha-RA/Meme-Generator",
        live:"http://127.0.0.2:5500/INDEX.HTML",

    },

    
    {
        id:2,
        title:"Recipe-Finder through API",
        desc:"This Recipe Finder application demonstrates my ability to build a user-focused frontend application using modern web technologies and API integration. By fetching real-time recipe data from an external API, the project highlights my understanding of asynchronous JavaScript, state management, and responsive UI design.",
        img:recipe,
        tags:["HTML5", "CSS", "JavaScript","RESTful API"],
        github:"https://github.com/Ansha-RA/Recipe-finder-through-API",
        live:"http://127.0.0.2:5500/",

    }
    
]

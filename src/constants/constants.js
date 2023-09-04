import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    inceptionu,
    linkoping,
    scentrique,
    umanitoba,
    tecyyc,
    etymolotree,
    everychildplays,
    threejs,
    striveopp,
    tiktok,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
        id:"projects",
        title:"Projects"
    },
    {
        id:"education",
        title:"Education"
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Marketing Strategy",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];

  const education = [
    {
        degree:"Full Stack Development Program",
        school:"InceptionU",
        icon: inceptionu,
        iconBg:"#fff",
        date:"February 2023 - July 2023",
        city:"Calgary, AB, Canada"
      },
      {
        degree:"Bachelor of Arts (B.A.) - Religious Studies & Politics",
        school:"University of Manitoba",
        icon:umanitoba,
        iconBg:"#383E56",
        date: "September 2017 - April 2021",
        city: "Winnipeg, MB, Canada"
      },
      {
        degree: "Bachelor of Arts (B.A.) - Exchange Program",
        school:"Linköpings universitet",
        icon:linkoping,
        iconBg: "#383E56",
        date:"January 2019 - August 2019",
        city:"Linköping, Östergötland, Sweden"
      }
  ]
  
  const experiences = [
    {
        title: "Marketing Strategist & Social Media Manager",
        company_name: "Scentrique",
        icon: scentrique,
        iconBg: "#383E56",
        city:"Vancouver, BC, Canada",
        date: "July 2022 - June 2023",
        points: [
          "Pioneered overall marketing strategy (positioning and messaging) and developed key marketing initiatives, user acquisitions, conversions, and retention price-to-product launches.",
          "Grew social media presence on Instagram by 180% (from 4000 to 9000); and on TikTok (from 0 to 2000).",
        ],
      },
      {
        title: "Content Creator",
        company_name: "TikTok",
        icon: tiktok,
        iconBg: "#383E56",
        city:"Canada",
        date: "April 2022 - Present",
        points: [
          "Organically created a community ",
          "Grew social media presence on Instagram by 180% (from 4000 to 9000); and on TikTok (from 0 to 2000).",
        ],
      }
  ];
  
  const projects = [
    {
      name: "StriveOpp",
      description:
        "Worked in a team to create a full-stack web application that serves as a database for scholarships, bursaries, and funding opportunities for both domestic and international post-secondary students; and a platform to match mentors to student mentees via AI-powered sorting system.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: striveopp,
      source_code_link: "https://github.com/nvargas210680/StriveOpp",
    },
    {
      name: "TEC-YYC Coalition",
      description:
        "[In-Progress] Collaborated in a team as a web developer to create a WordPress website that acts as a database of educational and career resources for Albertans who wish to pivot their careers into the tech industry.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tecyyc,
      source_code_link: "https://github.com/",
    },
    {
      name: "Every Child Plays",
      description:
        "Worked in a team to create a web-based application that acts as a directory to catalogue, search, and filter through the playgrounds of Calgary by its accessible features to allow parents and/or guardians of neuro-diverse children of all physical abilities to find a place to play according to their needs.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: everychildplays,
      source_code_link: "https://github.com/htntang/everychildplays",
    },
    {
      name: "Etymolo-Tree",
      description:
        "An etymology rolodex that tracks linguistic family trees and the development of language and meaning of words through cultural change, time, and political upheaval.",
      tags: [
        {
          name: "api",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: etymolotree,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, education, experiences, projects };
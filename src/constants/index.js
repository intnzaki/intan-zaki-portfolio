import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `Detail-oriented, motivated self-starter, team player & aspiring tech wizard. Ready to join your team & tackle any challenge with a smile!`;
// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hi, I'm Intan Zaki, a recent graduate with a degree in Computer Science, specializing in Software Engineering. Throughout my academic & professional journey, I have developed a diverse skill set that includes programming, software development & project management. I am particularly interested in building software that is both user-friendly & efficient. My approach to problem-solving is both analytical & creative, and I enjoy working in team settings where I can contribute and learn from others. I look forward to leverage my skills to create software solutions that make a difference.`;

export const EDUCATION = [
  {
    year: "2020 - 2024",
    title: "Universiti Malaysia Terengganu",
    course: `Bachelor of Computer Science (Software Engineering) with Honours`,
  },
  {
    year: "2018 - 2020",
    title: "Penang Matriculation College",
    course: `Module 1 (Chemistry, Physics, Biology)`,
  },
  {
    year: "2013 - 2017",
    title: "High School Bukit Mertajam",
    course: `Pure Science Stream`,
  },
];


export const EXPERIENCE = [
  {
    year: "Aug 2023 - January 2024",
    company: "ME-Tech Solution Sdn Bhd",
    role: "Software Development Intern",
    description: [
      "Involved in projects involving designing, developing & testing software applications."
    ],
    projects: [
      {
        title: "Full-stack Mobile Development",
        description: [
          "Significantly contributed to app development with Flutter & Dart, while implementing RESTful APIs using PHP & Laravel, resulting in increased app users & engagement."
        ],
        technologies: ["Flutter", "Dart", "PHP", "Laravel", "Figma"],
      },
      
      {
        title: "Development of Content Management System",
        description: [
          "Contributed in optimizing content management processes of internal application."
        ],
        technologies: ["October CMS", "PHP", "Laravel"],
      },
      {
        title: "Firefly Corp Website & Mobile App Ticket Support",
        description: [
          "",
          "Provided crucial support, ensuring seamless operations & prompt issue resolution for the Firefly application ecosystem."
        ],
        technologies: ["PHP", "Laravel", "HTML", "CSS", "Javascript"],
      },
      {
        title: "Firefly Revamp Project",
        description: [
          "Prepared detailed UAT documentations & conducted thorough manual testing for Firefly corporate website, mobile web & mobile application."
        ],
        technologies: [],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "Developed own portfolio website using modern web technologies to showcase my skills, projects & professional achievements",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "UMT Student Part-time Jobseeker System",
    image: project2,
    description:
      "Developed a full-stack job board web app for Final Year Project.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  // {
  //   title: "Car Rental System",
  //   image: project2,
  //   description:
  //     "Worked with a team to develop a RESTful web service for the Car Rental System in the Software Architecture coursework.",
  //   technologies: ["Postman", "Spring Boot", "phpMyAdmin", ""],
  // },
  {
    title: "Touch & Proximity Alert System",
    image: project4,
    description:
      "Collaborated an IoT project to detect potential hazards using capacitive touch sensor, ultrasonic sensor, ESP32 & FavourIOT.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "Bukit Mertajam, Penang ",
  email: "intnzaki19@gmail.com",
};

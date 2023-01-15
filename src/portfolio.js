/* Change this file to get your personal Portfolio */

import React from "react";

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

import {FaSass, FaDatabase} from "react-icons/fa";

import {
  SiAmazonaws,
  SiAssemblyscript,
  SiCloudflare,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFlask,
  SiGatsby,
  SiGit,
  SiGnubash,
  SiGo,
  SiGoogleanalytics,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiNvidia,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSolidity,
  SiTypescript,
  SiVim
} from "react-icons/si";

const email = "mail@chishengliu.com";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Chi-Sheng Liu",
  title: "Hi, I'm Chi-Sheng Liu",
  nickname: "劉奇聖",
  subTitle:
    "An enthusiastic developer who is constantly striving to expand knowledge and skillset through new technologies and tools. My educational background and experience encompasses a diverse range of subjects such as web development, distributed systems, blockchain, machine learning, and computer security, among others.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MortalHappiness",
  linkedin: "https://www.linkedin.com/in/chishengliu/",
  gmail: email,
  //gitlab: "https://gitlab.com/MortalHappiness",
  //facebook: "https://www.facebook.com/chisheng.liu.0",
  //medium: "https://medium.com/@chishengliu",
  //stackoverflow: "https://stackoverflow.com/users/13412807/mortalhappiness",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY GEEK WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Build full-stack web applications."),
    emoji("⚡ Develop cloud-related components such as Kubernetes operators."),
    emoji(
      "⚡ Performing DevOps tasks, such as setting up CI/CD, reverse proxy, and DNS."
    ),
    emoji(
      "⚡ Fan of Linux and Vim who loves to customize my computer and text editor."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery
https://devicon.dev/ */

  softwareSkills: [
    {
      skillName: "C",
      iconClassname: "devicon-c-plain"
    },
    {
      skillName: "C++",
      icon: <SiCplusplus />
    },
    {
      skillName: "Python",
      icon: <SiPython />
    },
    {
      skillName: "Go",
      icon: <SiGo />
    },
    {
      skillName: "Java",
      icon: <SiJava />
    },
    {
      skillName: "Bash",
      icon: <SiGnubash />
    },
    {
      skillName: "Git",
      icon: <SiGit />
    },
    {
      skillName: "Linux",
      icon: <SiLinux />
    },
    {
      skillName: "Vim",
      icon: <SiVim />
    },
    {
      skillName: "LaTeX",
      iconClassname: "devicon-latex-original"
    },
    {
      skillName: "HTML5",
      icon: <SiHtml5 />
    },
    {
      skillName: "CSS3",
      icon: <SiCss3 />
    },
    {
      skillName: "Sass",
      icon: <FaSass />
    },
    {
      skillName: "JavaScript",
      icon: <SiJavascript />
    },
    {
      skillName: "TypeScript",
      icon: <SiTypescript />
    },
    {
      skillName: "React.js",
      icon: <SiReact />
    },
    {
      skillName: "Redux",
      icon: <SiRedux />
    },
    {
      skillName: "Gatsby",
      icon: <SiGatsby />
    },
    {
      skillName: "Node.js",
      icon: <SiNodedotjs />
    },
    {
      skillName: "Flask",
      icon: <SiFlask />
    },
    {
      skillName: "Express",
      icon: <SiExpress />
    },
    {
      skillName: "GraphQL",
      icon: <SiGraphql />
    },
    {
      skillName: "SQL Database",
      icon: <FaDatabase />
    },
    {
      skillName: "MongoDB",
      icon: <SiMongodb />
    },
    {
      skillName: "Redis",
      icon: <SiRedis />
    },
    {
      skillName: "Prisma",
      icon: <SiPrisma />
    },
    {
      skillName: "Google Analytics",
      icon: <SiGoogleanalytics />
    },
    {
      skillName: "Cloudflare",
      icon: <SiCloudflare />
    },
    {
      skillName: "Nginx",
      icon: <SiNginx />
    },
    {
      skillName: "AWS",
      icon: <SiAmazonaws />
    },
    {
      skillName: "Google Cloud",
      icon: <SiGooglecloud />
    },
    {
      skillName: "Docker",
      icon: <SiDocker />
    },
    {
      skillName: "Kubernetes",
      icon: <SiKubernetes />
    },
    {
      skillName: "Electron",
      icon: <SiElectron />
    },
    {
      skillName: "Solidity",
      icon: <SiSolidity />
    },
    {
      skillName: "RISC-V / x64 / x86",
      icon: <SiAssemblyscript />
    },
    {
      skillName: "Cuda C++",
      icon: <SiNvidia />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Taiwan University",
      logo: require("./assets/images/ntu_logo.png"),
      subHeader:
        "Bachelor of Science in Electrical Engineering with a minor in Computer Science & Information Engineering",
      duration: "September 2018 - January 2023",
      //desc: "",
      descBullets: [
        "Ranked top 6% in the program. Average GPA 4.2/4.3.",
        "Took undergraduate courses in Algorithm, Data Structure, Computer Architecture, Computer Networks, Operating Systems, Unix Systems Programming, Blockchain, Network and System Administration, etc.",
        "Took graduate courses in Machine Learning, Computer Security, Distributed Systems, Design Patterns, and CUDA Parallel Programming."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  //subtitle:
  //  "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AIS3 EOF CTF 2020",
      subtitle:
        "Ranked 15th in AIS3 EOF Capture The Flag 2020 competition in the qualifying round",
      image: "https://ais3.org/eof/img/logo-eof.png",
      imageAlt: "AIS3 EOF Logo",
      footerLink: [
        {
          name: "Certification",
          url: require("./assets/images/AIS3-certificate.jpeg")
        },
        {
          name: "Final Team List",
          url: "https://ais3.org/eof2020/Home/FinalTeam"
        }
      ]
    },
    {
      title: "Kubernetes Certified Application Developer (CKAD) with Tests",
      subtitle:
        'Certificate of completion for the Udemy course "Kubernetes Certified Application Developer (CKAD) with Tests"',
      image: require("./assets/images/kubernetes_logo.svg"),
      imageAlt: "Kubernetes Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-43afbaf5-4b50-4d7c-8f07-434b8fd2677f/"
        }
      ]
    },
    {
      title: "Java - ambitious start. Create a real web app!",
      subtitle:
        'Certificate of completion for the Udemy course "Java - ambitious start. Create a real web app!"',
      image: require("./assets/images/java_logo.svg"),
      imageAlt: "Java Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-f4a46207-8f46-4677-bf49-d885de27e261/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: email
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

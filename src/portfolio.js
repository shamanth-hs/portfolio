/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Shamanth HS",
  title: "Hi all, I'm Shamanth",
  subTitle: emoji(
    "A passionate Android app Developer and Security Researcher having an experience in building Mobile applications with Kotlin,Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XGYp-q9wWWoNcjdoazSgcbgkezvh0TKV/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shamanth-hs",
  linkedin: "https://www.linkedin.com/in/shamanth-hs-75a7a1141/",
  gmail: "shamanthhs494@gmail.com",
  medium: "https://medium.com/@shamanthhs494",
  whatsapp: "918660801910",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),

    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fas fa-laptop-code",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Cyber secrutiy",
      fontAwesomeClassname: "fas fa-user-secret",
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-laptop-code",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Visvesvaraya Technological University ",
      logo: require("./assets/images/vtu-logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2015 - April 2019",
      desc: "Shreedevi institute of engineering and technology. Tumkur",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android App development", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend /API",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assosiate Andorid app developer",
      company: "Mahindra First Choice Wheels",
      companylogo: require("./assets/images/mfc-logo.jpg"),
      date: "Oct 2019 – Present",
      desc:
        "Mahindra First Choice Wheels is the country’s preferred used car company and is India’s only organized multi-brand player, with 1700+ outlets in 810+ cities in India.",
      descBullets: [
        " Building IBB Valuation pro App has given me a great experience.\
        It is a application used by the company to valuate the pre owned\
        cars and give rating based on some parameters. I had Used\
        Retrofit,Eventbus and other third party libraries in the\
        appplication",
        "IBB Trade Business. Its one of the major app in the company which is being used by more than 2000 dealers from Mahindra First choice and some of the other Franchise dealers. This application is used for live Auctions of the cars",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Mahindra First Choice Wheels",
      companylogo: require("./assets/images/mfc-logo.jpg"),
      date: "Aug 2019 – Oct 2019",
      desc:
        "Mahindra First Choice Wheels is the country’s preferred used car company and is India’s only organized multi-brand player, with 1700+ outlets in 810+ cities in India.",
      descBullets: [
        "Worked on project MFC business which is used to handle dealers",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "shamanth-hs", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://shamanthhs494.medium.com/blog-cracking-wpa-wpa2-passwords-home-lab-1faf16133f4e",
      title: "Blog — Cracking WPA/WPA2 Passwords (home lab)",
      description:
        "A step by step guide to crack WPA/WPA2 encrypted wifi password and also how to protect yourself from the attack",
    },
    {
      url:
        "https://shamanthhs494.medium.com/cross-platform-vs-native-apps-which-one-to-choose-for-your-mobile-app-development-1c16ba415d99",
      title:
        "Cross-platform vs native apps. Which one to choose for your mobile app development?",
      description:
        "If you are a developer who wants to build an android app or ios app but confused to choose the tech stack. Here is the soluton",
    },
    {
      url:
        "https://shamanthhs494.medium.com/firebase-performance-and-analytics-for-android-fragments-fe02a141f8b2",
      title:
        "Firebase Performance and analytics for Android Fragments",
      description:
        "How to track the performance of Android Fragment in your app. Here is the blog",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8660801910",
  emailAddress: "shamanthhs494@gmail.com",
  whatsappNumber: 918660801910,
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};

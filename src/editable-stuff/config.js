// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Aditya",
  middleName: "",
  lastName: "Kansara",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/adityakansara1",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/aditya.kansara.422/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/aditya___kansara/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/adityakansara1/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/adityaknsara786/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/adityakansara1.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/adityakansara1.png"),
  imageSize: 375,
  message:
    "My name is Aditya Kansara. I’m pursuing B.E. Computer Engineering from L. D. College of Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  resume: "https://docs.google.com/document/d/1luVk6t1OdFXe029TZHET8Ki3Yq-oOBRXCD78PTXi28M/edit#heading=h.x5u5yxohnbn4",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "adityakansara1", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const projectLinks = {
  show: true,
  heading: "Projects",
  data: [
    {
      repo: "Portfolio",
      name: "portfolio",
      url: "https://adityakansara1.github.io/portfolio/",
      desc: "A portfolio website for my projects.",
    },
    {
      repo: "Tracalorie Project",
      name: "tracalorie-project",
      url: "https://adityakansara1.github.io/tracalorie-project/",
      desc: "A web application that helps users to keep track of their daily food and exercise routines.",
    },
    {
      repo: "Loan Calculator",
      name: "Loan-calculator",
      url: "https://adityakansara1.github.io/Loan-calculator/",
      desc: "A web application that helps users to calculate the loan amount based on their loan details.",
    },
    {
      repo: "Tasklist UI",
      name: "tasklist-ui",
      url: "https://adityakansara1.github.io/tasklist-ui/",
      desc: "A web application that helps users to keep track of their tasks.",
    },
    {
      repo: "Github User & Repos",
      name: "github-user-and-repos",
      url: "https://adityakansara1.github.io/github-user-and-repos/",
      desc: "A web application that helps users to see their public repositories.",
    },
    {
      repo: "Number Guesser",
      name: "number-guesser",
      url: "https://adityakansara1.github.io/number-guesser/",
      desc: "A web application that helps users to guess a number between 1 and 10.",
    },
    {
      repo: "Booklist Generator",
      name: "Booklist-Generator",
      url: "https://adityakansara1.github.io/Booklist-Generator/",
      desc: "A web application that helps users to generate a list of books based on their preferences.",
    },
  ]
}

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/adityakansara1.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/adityakansara1.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 55 },
    { name: "Docker", value: 60 },
    { name: "GitHub", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "adityakan786@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Internship',// Here Add Company Name
      companylogo: require('../assets/img/swt.jpg'),
      date: 'June 2018 – Present',
    },
  ]
}


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projectLinks };

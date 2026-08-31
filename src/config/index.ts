import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Adrian Edward — Software Developer",
  author: "Adrian Edward",
  description:
    "Computer Science student and software developer focused on building practical applications using Java, C++, Python, and modern web technologies.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/adrianedward/" },
    { text: "Github", href: "https://github.com/edwardadrian807-lab" },
  ],
  
  socialImage: "/zen-og.png",
canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
  name: "Adrian Edward",
  specialty: "Computer Science Student & Software Developer",
  summary:
    "Computer Science student passionate about software development, problem solving, and building practical applications using Java, C++, Python, and web technologies.",
  email: "edwardadrian807@gmail.com",
},
    experience: [
  {
    company: "Private Java Tutor",
    position: "Java Tutor & Mentor",
    startDate: "2025",
    endDate: "2026",
    summary: [
      "Taught Java programming to a Grade 8 student over a 10-month period, covering programming fundamentals, problem-solving, and object-oriented programming concepts.",
      "Designed and explained programming exercises according to the student's learning pace, strengthening her understanding of Java syntax, logic, and computational thinking.",
      "Provided one-on-one mentorship and guided the student through practical coding problems to develop confidence in programming."
    ],
  },
],
  
 projects: [
  {
    name: "Human-Following Autonomous Trolley",
    summary:
      "Developed an autonomous trolley capable of human detection and tracking using Arduino UNO, 3 IR sensors, an ultrasonic sensor, and 2 servo motors.",
    linkPreview: "/",
    linkSource: "https://github.com/edwardadrian807-lab",
    image: "/spotifu.png",
  },
  {
    name: "Dice Game System",
    summary:
      "Two-player, turn-based dice game built with Java using OOP, randomized dice rolls, score tracking, and Java Swing animation.",
    linkPreview: "/",
    linkSource: "https://github.com/edwardadrian807-lab/dicegame",
    image: "/shopify-clon.png",
  },
  {
    name: "Legal Metrology Compliance System",
    summary:
      "Ongoing software system for automated compliance verification of packaged commodities against Legal Metrology requirements.",
    linkPreview: "/",
    linkSource: "https://github.com/edwardadrian807-lab",
    image: "/clone-ig.png",
  },
],
  about: {
  description: `
    Hi, I'm Adrian Edward, a Computer Science student and aspiring software
    developer interested in building practical and scalable software solutions.

    I enjoy working with Java, C++, Python, backend technologies, databases,
    and data structures and algorithms. My projects include a Java Swing
    multiplayer dice game, an Arduino-based human-following autonomous trolley,
    and an ongoing Legal Metrology compliance system.

    I am continuously developing my problem-solving and software engineering
    skills through projects, technical training, and hands-on development.
  `,
  image: "/alejandro-big.jpg",
},
     skills: [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Django",
    "React",
    "PostgreSQL",
    "MySQL",
    "Git",
    "GitHub",
    "Data Structures & Algorithms",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "OpenCV",
  ],
};

// #5755ff
// #5755ff

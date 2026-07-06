export const PROFILE = {
  name: "Syeda Shereen Zehra",
  firstName: "Shereen",
  role: "BS Artificial Intelligence Student & Web Developer",
  taglineWords: [
    "I build with AI.",
    "I build for the web.",
    "I build things that work.",
  ],
  bio: "BS Artificial Intelligence student passionate about Artificial Intelligence, Machine Learning, and Web Development. I enjoy building responsive web applications and AI-based solutions while continuously improving my technical and problem-solving skills. Currently seeking internship opportunities to gain real-world experience.",
  university: "Pak-Austria Fachhochschule Institute of Applied Sciences and Technology",
  degree: "BS Artificial Intelligence",
  semester: "4th Semester",
  location: "Wah Cantt, Pakistan",
  email: "shreenzehra098@gmail.com",
  phone: "0314-0988877",
  github: "https://github.com/shereenrizvi514",
  githubHandle: "@shereenrizvi514",
  resumeUrl: "/Syeda_Shereen_Zehra_CV.pdf",
};

export const STATS = [
  { label: "Projects Built", value: 8 },
  { label: "Years Learning AI", value: 2 },
  { label: "Internship Completed", value: 1 },
  { label: "Languages & Tools", value: 10 },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "Python", level: 55 },
    ],
  },
  {
    category: "Web & AI",
    skills: [
      { name: "React", level: 75 },
      { name: "SQL", level: 65 },
      { name: "Machine Learning", level: 60 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Microsoft Excel", level: 80 },
      { name: "PowerPoint", level: 85 },
      { name: "Canva", level: 88 },
      { name: "Word", level: 82 },
      { name: "Git / GitHub", level: 70 },
    ],
  },
  {
    category: "Professional",
    skills: [
      { name: "Project Management", level: 80 },
      { name: "Leadership", level: 78 },
      { name: "Communication", level: 85 },
      { name: "Time Management", level: 82 },
      { name: "Critical Thinking", level: 88 },
    ],
  },
];

export const EXPERIENCE = [
  {
    date: "July 2025 — August 2025",
    title: "Web Development Intern",
    org: "Furson Studio",
    points: [
      "Designed and developed a custom Author Profile Page with editable fields, a theme switcher, profile image upload, and dynamic link management.",
      "Built a responsive Landing Page with a clean layout, mobile-first design, and user-friendly navigation.",
      "Created a Detail Page for The Devil Wears Prada featuring comprehensive book and movie information, parental guidance notes, curated insights, and theme-switching functionality.",
      "Contributed to UI/UX enhancements by applying modern web design practices to deliver a professional, engaging user experience.",
    ],
  },
  {
    date: "2024 — Present",
    title: "Bachelor of Artificial Intelligence",
    org: "Pak Austria Fachhochschule — Institute of Applied Sciences and Technology",
    points: [
      "Coursework spanning AI fundamentals, programming, and systems design.",
      "Building independent projects alongside coursework to apply concepts in practice.",
    ],
  },
  {
    date: "2022 — 2024",
    title: "Intermediate",
    org: "Kips College, Wah Cantt",
    points: ["Completed pre-engineering intermediate studies."],
  },
];

export const PROJECTS = [
  {
    title: "AI-Based Chef Assistant",
    description:
      "An AI-powered cooking assistant that recommends recipes, meal plans, and cooking instructions based on the ingredients you already have.",
    tags: ["TypeScript", "AI"],
    github: "https://github.com/shereenrizvi514/AI-Based-Chef",
    demo: null,
  },
  {
    title: "Book & Movie Viewer",
    description:
      "A responsive, dynamic viewer app with detailed content analysis, parental guidance notes, and LLM-powered discussion prompts.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shereenrizvi514/book-movie-viewer",
    demo: null,
  },
  {
    title: "The Devil Wears Prada — Detail Page",
    description:
      "A stylish detail page with book and movie info, discussion prompts, toggle sections, and a light/dark theme switcher.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shereenrizvi514/the-devil-wears-prada-project",
    demo: null,
  },
  {
    title: "Author Profile Page",
    description:
      "A responsive, mobile-first profile page with editable fields, admin access, image upload with preview, a theme switcher, and dynamic link control.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shereenrizvi514/Author-Profile-Page",
    demo: null,
  },
  {
    title: "Virtual Operating System",
    description:
      "A simulated operating-system environment exploring core OS concepts — process handling, file structure, and a basic user interface.",
    tags: ["Systems", "C++"],
    github: "https://github.com/shereenrizvi514/Virtual-OS",
    demo: null,
  },
  {
    title: "Hospital Management System",
    description:
      "A console-based hospital management system covering patient records, appointments, and core admin operations.",
    tags: ["C++", "Console"],
    github: "https://github.com/shereenrizvi514/Hospital-Management-System",
    demo: null,
  },
  {
    title: "Number Guessing Game",
    description:
      "A beginner-friendly console game in C++ where the player guesses a randomly generated number within a set range.",
    tags: ["C++", "Console"],
    github: "https://github.com/shereenrizvi514/Number-Guessing-Game",
    demo: null,
  },
];

export const SERVICES = [
  {
    title: "AI-Assisted Applications",
    description:
      "Building applications that use AI concepts to solve real, practical problems — from recommendation logic to smart assistants.",
    icon: "brain",
  },
  {
    title: "Frontend Web Development",
    description:
      "Responsive, accessible interfaces in HTML, CSS and JavaScript with clean structure, theme switching, and thoughtful UX details.",
    icon: "code",
  },
  {
    title: "Systems & Console Projects",
    description:
      "Core computer-science fundamentals put into practice — from operating-system simulations to management systems in C++.",
    icon: "terminal",
  },
];

export const CONTACT_INFO = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/-/g, "")}` },
  { label: "Location", value: PROFILE.location, href: null },
  { label: "GitHub", value: PROFILE.githubHandle, href: PROFILE.github },
];

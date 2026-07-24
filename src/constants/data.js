import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaLinkedinIn,
  FaEnvelope,
  FaDatabase
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiFlask, 
  SiFastapi, 
  SiTensorflow, 
  SiScikitlearn, 
  SiOpencv, 
  SiLangchain, 
  SiHuggingface, 
  SiMysql, 
  SiMongodb, 
  SiPostman, 
  SiDocker, 
  SiGooglecloud,
  
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const PERSONAL_INFO = {
  name: "Pragin Barath",
  title: "AI & Machine Learning Engineer",
  subtitle: "Full Stack Developer",
  email: "praginbarath.m@gmail.com",
  github: "https://github.com/pragin6132",
linkedin: "https://www.linkedin.com/in/praginbarathm",
  resumeUrl: "/Pragin_Barath_Resume.pdf", // User can link their local PDF here
  tagline: "Building the future of intelligence through robust AI models and clean, modern code.",
  about: {
    name: "Pragin Barath",
    degree: "B.E. Computer Science & Engineering (CSE)",
    institution: "Hindusthan Institute of Technology Coimbatore",
    duration: "2022 – 2026 (Fresh Graduate)",
    status: "Fresh Graduate",
    bio: "Passionate AI & Machine Learning Engineer specializing in Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Computer Vision, NLP, and Full Stack Development. I build intelligent AI solutions with scalable backend systems and modern web applications.",
    focusAreas: [
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation (RAG)",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Full Stack Development"
    ]
  }
};

export const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: FaJava, level: 85, color: "#007396" },
      { name: "Python", icon: FaPython, level: 90, color: "#3776AB" },
      { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, level: 85, color: "#61DAFB" },
      { name: "HTML", icon: FaHtml5, level: 90, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, level: 85, color: "#1572B6" },
      
    ]
  },
 {
  category: "Backend",
  items: [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "REST APIs", icon: FaDatabase, color: "#00E5FF" }
  ]
},
  {
   category: "Generative AI & ML",
    items: [
  { name: "Generative AI", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Large Language Models", icon: SiGooglecloud, color: "#915EFF" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3A" },
  { name: "Gemini API", icon: SiGooglecloud, color: "#4285F4" },
  { name: "RAG & FAISS", icon: FaDatabase, color: "#00E5FF" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE6" }
]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" }
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
      { name: "VS Code", icon: VscVscode, level: 90, color: "#007ACC" },
      { name: "Docker", icon: SiDocker, level: 75, color: "#2496ED" }
    ]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    duration: "2024 (Internship)",
    description: "Designed and developed fully responsive, interactive web applications. Handled client-side rendering with React and integration with server architectures, enhancing API response velocities and managing data layers with custom dashboard architectures.",
    points: [
      "Architected clean React component layouts to optimize client-side load states.",
      "Integrated Flask and Node.js REST endpoints with real-time UI states.",
      "Managed databases and optimized schema structures for structured workflows.",
      "Implemented responsive designs using modern styling methodologies like Tailwind CSS."
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.E. Computer Science and Engineering",
    institution: "Hindusthan Institute of Technology, Coimbatore",
    duration: "2022 – 2026 (Fresh Graduate)",
    score: "7.5 CGPA",

    specialization: "Artificial Intelligence & Full Stack Development",

    affiliation: "Affiliated to Anna University",

    coursework: [
      "Data Structures",
      "Machine Learning",
      "Web Development",
      "Database Management"
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Dermascan AI",
    description:
      "AI-powered skin disease prediction platform using deep learning with a modern dashboard and real-time image analysis.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TensorFlow"],
    githubUrl: "https://github.com/pragin6132/dermascan-ai",
    liveUrl: "https://dermascan-ai-roan.vercel.app",
    image: "/projects/dermascan.png",
    glowColor: "rgba(145,94,255,0.4)"
  },
  {
    id: 2,
    title: "SignConnect AI",
    description:
      "Speech and text to sign language translation platform using NLP and animated sign language output.",
    tech: ["Flask", "Python", "JavaScript", "spaCy"],
    githubUrl: "https://github.com/pragin6132/signconnect",
    liveUrl: "https://signconnect-ixz7.onrender.com",
    image: "/projects/speechtosign.png",
    glowColor: "rgba(0,229,255,0.4)"
  },
  {
    id: 3,
    title: "Multi PDF RAG Chatbot",
    description:
      "Conversational chatbot capable of answering questions from multiple uploaded PDF documents using LangChain, FAISS and Gemini.",
    tech: ["LangChain", "Gemini API", "FAISS", "Flask"],
     githubUrl: "https://github.com/pragin6132/PDF_Reader",
    liveUrl: "https://pdf-reader-pragin.streamlit.app",
    image: "/projects/multichatai.png",
    glowColor: "rgba(124,58,237,0.4)"
  },
  {
    id: 4,
    title: "Expense Tracker (Android App)",
    description:
  "Android expense tracking application with category-wise expense management and analytics dashboard.",
    tech: ["Flutter", "Dart", "Provider"],
  github: "https://github.com/pragin6132/Expense_tracker",
download: "https://github.com/pragin6132/Expense_tracker/releases/latest/download/app-release.apk",
    image: "/projects/expancetracker.png",
    glowColor: "rgba(255,0,128,0.4)"
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA Forage",
    date: "2026",
    image: "/certificates/genai.jpeg",
    link: "/certificates/genai.pdf"
  },
  {
    id: 2,
    title: "Deep Learning Fundamentals",
    issuer: "IBM Cognitive Class",
    date: "2025",
    image: "/certificates/deeplearning.jpeg",
    link: "/certificates/deeplearning.pdf"
  },
  {
    id: 3,
    title: "Entrepreneurship",
    issuer: "NPTEL - IIT Madras",
    date: "2025",
    image: "/certificates/nptel.jpeg",
    link: "/certificates/nptel.pdf"
  },
  {
    id: 4,
    title: "HTML, CSS and JavaScript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    date: "2025",
    image: "/certificates/coursera.jpeg",
    link: "/certificates/coursera.pdf"
  }
];

export const EMAILJS_CONFIG = {
  serviceId: "service_q78z07fp",     // Placeholder
  templateId: "template_p3wj6sa",   // Placeholder
  publicKey: "r5Iqdyq6f_enhe1UG"      // Placeholder
};

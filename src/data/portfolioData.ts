// ============================================
// PORTFOLIO CONTENT CONFIGURATION
// ============================================
// Edit this file to update all content across the portfolio
// Changes here will automatically update: Detective Room, Pink Tablets, and Resume

// --------------------------------------------
// PERSONAL INFORMATION
// --------------------------------------------
export const personalInfo = {
  name: "Samyuktha S",
  title: "Creative Developer & Solution-Centric Designer",
  email: "samyukthasriram2004@gmail.com",
  linkedin: "linkedin.com/in/samyuktha24",
  github: "github.com/samyuktha2004",
  
  tags: [
    { icon: "Heart", text: "Human-First, Empathy-Led Innovator" },
    { icon: "Sparkles", text: "Vibe-Coder and Prompt Designer" },
    { icon: "Lightbulb", text: "Experimental Problem Solver" }
  ],

  summary: "At the intersection of creativity, technology and intuitive design. I craft solutions to help create a more beautiful, accessible, and functional digital world—driven by a commitment to sustainability and empathy-driven innovation."
};

// --------------------------------------------
// DETECTIVE ROOM - Hotspot Labels
// --------------------------------------------
export const hotspotLabels = {
  character: "👋 About Me",
  desktop: "💻 Development Projects",
  smartphone: "🎨 Design Portfolio",
  medals: "🏆 Achievements & Awards",
  books: "📚 Education & Learning"
};

// --------------------------------------------
// PINK TABLET - Section Titles
// --------------------------------------------
export const sectionTitles = {
  about: "👋 About Me",
  devProjects: "💻 Development Projects",
  designPortfolio: "🎨 Design Portfolio",
  awards: "🏆 Achievements & Awards",
  education: "🎓 Education & Learning",
  workWithMe: "💼 Work With Me"
};

// --------------------------------------------
// WELCOME TEXT - Detective Room
// --------------------------------------------
export const welcomeText = {
  title: "Welcome to Samyuktha's Portfolio!",
  subtitle: "✨ Tap the objects in my room to explore! ✨"
};

// --------------------------------------------
// ABOUT ME SECTION
// --------------------------------------------
export const aboutMe = {
  story: [
    "Hi there! 👋 I'm Samyuktha, a creative designer and developer who loves crafting delightful digital experiences. I blend technical expertise with artistic vision to solve user experience challenges and create interfaces that spark joy!",
    "Currently studying Computer Science with AI & Data Science specialization, I've developed a passion for UX/UI design through hands-on leadership roles and creative projects. My mission is to build interfaces that are not just beautiful, but intuitive, accessible, and genuinely enjoyable to use.",
    "When I'm not designing or coding, you'll find me exploring new design trends, creating new apps from my ideas, working on marketing, and trying out new things! I believe that thoughtful design has the power to make people smile—and that's what drives me every day! 🌈✨",
    "One thing that scares me, excites me and drives me: I want to make a real, positive difference on this world."
  ],

  skills: [
    { category: "Design", items: ["Canva", "Figma", "Prototyping", "UI/UX Design", "Design Systems"] },
    { category: "Development", items: ["React", "HTML/CSS", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "AI Tools", items: ["Figma Make", "VS Code + Copilot", "Canva Code", "Gemini for Code and Asset Generation"] },
    { category: "Soft Skills", items: ["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Creativity"] }
  ],

  interests: [
    { icon: "Palette", text: "UI/UX Design", color: "#FFB6C1" },
    { icon: "Code", text: "Frontend Development", color: "#87CEEB" },
    { icon: "Sparkles", text: "AI & Creativity", color: "#DDA0DD" },
    { icon: "Heart", text: "User Research", color: "#FFB6C1" },
    { icon: "Lightbulb", text: "Design Thinking", color: "#FFD700" }
  ]
};

// --------------------------------------------
// EDUCATION SECTION
// --------------------------------------------
export const education = {
  degree: {
    title: "Bachelor of Technology in Computer Science Engineering",
    specialization: "Specialization in AI & Data Science",
    institution: "Hindustan Institute of Technology and Science",
    duration: "2022 - 2026",
    cgpa: "9.47/10",
    highlights: [
      "President of Computer Society of India - HITS Chapter",
      "Design Lead of Google Developer Student Chapter and Blue Screen Programming Club"
    ]
  },

  leadership: [
    {
      role: "President",
      organization: "Computer Society of India (CSI), HITS",
      duration: "Nov 2024 - Present",
      responsibilities: [
        "Led and mentored a 9-member core team for large-scale technical events",
        "Facilitated networking between students and industry professionals",
        "Orchestrated departmental communication and objective execution"
      ]
    },
    {
      role: "Design Lead",
      organization: "Blue Screen Programming Club",
      duration: "Sep 2024 - Aug 2025",
      responsibilities: [
        "Led design initiatives for technical programming club",
        "Created engaging visual content for workshops and events",
        "Was part of the core team, participating in event management"
      ]
    },
    {
      role: "Design Lead and Event Sub-Coordinator",
      organization: "e-Luminate Digital Team",
      duration: "Mar 2024 - Apr 2024",
      responsibilities: [
        "Headed the Design Team for HITS CSE National Level Symposium",
        "Managed website creation, UI/UX, and digital media production",
        "Directed brand identity for major campus technical festival"
      ]
    },
    {
      role: "Graphic Design Lead",
      organization: "Google Developer Student Club (GDSC)",
      duration: "Sep 2023 - Aug 2024",
      responsibilities: [
        "Managed event promotion, coordination, and crowd management",
        "Created eye-catching posters and digital assets for a one-year term",
        "Enhanced community engagement through consistent visual storytelling"
      ]
    }
  ],

  certifications: [
    { name: "x", issuer: "x", year: "2024" },
    { name: "x", issuer: "x", year: "2023" },
    { name: "x", issuer: "x", year: "2023" }
  ]
};

// --------------------------------------------
// PROJECTS SECTION (Combined Design + Development)
// --------------------------------------------
// HOW TO ADD PROJECT LINKS:
// - github: Link to GitHub repository (e.g., "https://github.com/username/repo")
// - demo: Optional link to live demo or prototype (e.g., Figma prototype, Vercel deployment, etc.)
// - design: Optional link to visual design portfolio (e.g., Behance, Dribbble, etc.)
// Set any link to undefined if not applicable - all links are optional!
export const projects = [
  {
    title: "This Bubbly Portfolio 😉",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma Make", "Gemini"],
    description: "Interactive portfolio featuring isometric bedroom with animated hotspots and pink tablet modals.",
    highlights: [
      "Designed kawaii-inspired aesthetic with baby pink color palette",
      "Implemented 3D flip animations and smooth transitions",
      "Created responsive, accessible interface with comprehensive UX patterns"
    ],
    links: {
      github: "https://github.com/samyuktha2004/portfolio",
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "Responsive Website"
  },
  {
    title: "Tomocha - Mental Health Companion",
    technologies: ["Figma Make","React 18 with TypeScript", "Tailwind CSS v4.0", "Vite"],
    description: "Mobile app providing mental health support through AI-powered conversations and mood analytics.",
    highlights: [
      "Developed empathetic AI chatbot for emotional support",
      "Created my first onboarding tutorial (and loved it!)",
      "Implemented secure, privacy-focused user authentication"
    ],
    links: {
      github: "https://github.com/samyuktha2004/Tomocha-App",
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "Mobile"
  },
  {
    title: "Kalaikatha",
    technologies: ["React", "Python", "Firebase","Google Cloud","Github Copilot"],
    description: "AI-Powered Marketplace Assistant for Indian Artisans",
    highlights: [
      "Designed an Earth-Toned Design System and cohesive brand identity",
      "Built responsive, accessible web interface with voice-first approach for technologically and literacy challenged artisans",
      "Prioritised low-data and low-tech device compatibility for the 6 AI features, with techniques like lazy loading",
      "Created an on-brand marketing presentation with custom assets"
    ],
    links: {
      github: "https://github.com/samyuktha2004/kalaikatha",
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "AI Powered platform"
  },
  {
    title: "Hazard Scout",
    technologies: ["Figma", "TypeScript", "CSS", "Google Maps","Github Copilot"],
    description: "Healthcare app redesign focusing on accessibility and user-friendly appointment booking.",
    highlights: [
      "Designed non-distractive hazard updates integrated with maps",
      "Fully responsive mobile design with Dark/Light mode support",
      "Accessibility options with multiple text and icon sizes, and haptic controls",
      "Created high-fidelity prototypes with micro-interactions and smooth animations"
    ],
    links: {
      github: "https://github.com/samyuktha2004/hazardscout",
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "Map-Integrated App"
  },
  {
    title: "Marketing and Branding - College Events and Clubs",
    technologies: ["Canva", "Figma", "Gemini","Graphic Design"],
    description: "Series of eye-catching digital posters for GDSC, Blue Screen Programming Club and CSI events with consistent branding.",
    highlights: [
      "Developed visual identity system for technical events",
      "Created engaging social media graphics with cohesive style",
      "Enhanced event attendance through compelling visuals"
    ],
    links: {
      github: undefined, // Not applicable for design work
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "Graphic Design"
  }
];

// Filtered exports for specific sections
export const codingProjects = projects.filter(p => 
  p.category === "Responsive Website" || 
  p.category === "Mobile" || 
  p.category === "AI Powered platform" || 
  p.category === "Map-Integrated App"
);

export const designProjects = projects.filter(p => 
  p.category === "UI/UX Design" || 
  p.category === "Graphic Design"
);

// --------------------------------------------
// DESIGN SHOWCASE SECTION (Visual Portfolio)
// --------------------------------------------
// HOW TO ADD IMAGES:
// - images: Array of image URLs (first one is primary)
// - Can add as many images as you want - slideshow will handle navigation
export const designShowcase = [
  {
    title: "Tomocha App Design",
    type: "Mobile UI/UX",
    images: ["https://your-image-url.com/tomocha.png"], // Can add more: ["url1", "url2", "url3"]
    visualElements: ["Onboarding Flow", "Chat Interface", "Mood Tracker", "Cute Character Design"],
    colorPalette: ["#FFB6C1", "#87CEEB", "#DDA0DD", "#FFE4E1"],
    designNotes: "Soft, comforting aesthetic designed to provide a safe space for mental health conversations"
  },
  {
    title: "E-Luminate Logo and Social Media Marketing",
    type: "Symposium Branding and Promotion",
    images: ["https://your-image-url.com/eluminate.png"],
    visualElements: ["Logo Design", "Promotional Videos", "Social Media Graphics"],
    colorPalette: ["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"],
    designNotes: "Modern tech aesthetic that balances professionalism with campus energy and excitement"
  },
  {
    title: "GDSC Event Posters",
    type: "Graphic Design Series",
    images: ["https://your-image-url.com/gdsc.png"],
    visualElements: ["Event Announcements", "Workshop Promos", "Speaker Cards", "Instagram Posts"],
    colorPalette: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
    designNotes: "Google's signature colors with playful typography to boost event engagement"
  },
  {
    title: "This Portfolio Design",
    type: "Interactive Web Experience",
    images: ["https://your-image-url.com/portfolio.png"],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
    colorPalette: ["#FFB6C1", "#FFF0F5", "#87CEEB", "#FF95A8"],
    designNotes: "Bubbly, kawaii-inspired design that showcases personality while maintaining professionalism"
  }
];

// --------------------------------------------
// ACHIEVEMENTS & AWARDS SECTION
// --------------------------------------------
export const achievements = [
  {
    title: "🥇 1st Place - Infosys Tech For Good Global Hackathon",
    date: "October 2025",
    description: "Built AI-powered Agricultural Assistant with my team, leading the ideation, feature creation, design and prototyping.",
    impact: "Competed globally against students and professionals"
  },
  {
    title: "🏆 Top 5 in Design & Art- HP's Dreams Unlocked Season 1",
    date: "November 2025",
    description: "Pitched Kaalani, sustainable shoe skins from heritage fabrics, bettered by integrating art with technology",
    impact: "Received mentorship from Design Gurus, Mr. Aaquib Wani and Ms. Vijaya Aswani"
  },
  {
    title: "IIT-M Compassionathon Winner",
    date: "August 2024",
    description: "Designed a mental health app, Tomocha, with focus on empathetic user experience",
    impact: "Recognized for innovative interaction patterns and human-centric research"
  },
  {
    title: "⭐ Certificate of Proficiency",
    date: "May 2024",
    description: "Maintained 9.47 CGPA with excellence in Bachelor's Degree",
    impact: "Top 5% of class ranking"
  },
  {
    title: "🌟 Leadership Recognition",
    date: "March 2024",
    description: "Awarded for outstanding leadership as Design Lead of e-Luminate symposium",
    impact: "Successfully organized event with 500+ participants"
  }
];

// --------------------------------------------
// WORK WITH ME SECTION
// --------------------------------------------
export const workWithMe = {
  headline: "Let's Create Something Amazing Together! ✨",
  
  availability: {
    status: "available", // "available" | "limited" | "unavailable"
    message: "🟢 Available for Freelance & Internships",
    startDate: "January 2026"
  },
  
  services: [
    {
      icon: "Palette",
      service: "UI/UX Design",
      description: "User research, wireframing, prototyping, and design systems for delightful digital experiences",
      deliverables: [
        "High-fidelity mockups and interactive prototypes",
        "Responsive designs (mobile, tablet, desktop)",
        "Design system documentation and component library",
        "User flow diagrams and information architecture"
      ],
      timeline: "2-4 weeks",
      idealFor: "Startups, apps, and websites needing fresh, accessible designs",
      tools: ["Figma", "Adobe XD", "Prototyping", "User Research", "Canva"]
    },
    {
      icon: "Code",
      service: "Frontend Development",
      description: "Build responsive, performant web applications with React, TypeScript, and modern CSS",
      deliverables: [
        "Production-ready, clean code with TypeScript",
        "Responsive layouts with Tailwind CSS",
        "Reusable component libraries",
        "Accessibility-first implementation (WCAG 2.1)"
      ],
      timeline: "3-6 weeks",
      idealFor: "Teams needing design + development combo for faster delivery",
      tools: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Git"]
    },
    {
      icon: "Sparkles",
      service: "Branding & Marketing Design",
      description: "Eye-catching visual identity for events, clubs, and small businesses",
      deliverables: [
        "Logo design and brand guidelines",
        "Social media graphics and templates",
        "Event promotional materials (posters, banners)",
        "Print-ready designs (flyers, business cards)"
      ],
      timeline: "1-2 weeks",
      idealFor: "Events, student organizations, local businesses, and passion projects",
      tools: ["Canva", "Figma", "Illustrator", "Photoshop", "Gemini AI"]
    },
    {
      icon: "Lightbulb",
      service: "Full-Stack Design + Dev",
      description: "End-to-end product creation: from concept to launch",
      deliverables: [
        "Complete user research and design strategy",
        "High-fidelity designs and working prototype",
        "Fully functional web application",
        "Deployment and handoff documentation"
      ],
      timeline: "6-10 weeks",
      idealFor: "Founders and teams launching MVPs or redesigning existing products",
      tools: ["Full Design & Dev Stack", "Project Management", "Agile Methodology"]
    }
  ],
  
  pricing: {
    model: "Project-based or hourly - flexible to your needs",
    note: "Student-friendly rates for nonprofits, educational projects, and early-stage startups",
    consultation: "Free 30-minute consultation - let's chat about your vision!"
  },
  
  process: [
    {
      step: 1,
      title: "Discovery Call",
      description: "We discuss your goals, challenges, and vision - no commitment required!"
    },
    {
      step: 2,
      title: "Proposal & Timeline",
      description: "I'll send a detailed proposal with deliverables, timeline, and pricing"
    },
    {
      step: 3,
      title: "Design & Development",
      description: "Regular check-ins, iterations based on feedback, transparent progress updates"
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Final delivery with documentation, plus 2 weeks of post-launch support"
    }
  ],
  
  cta: {
    primary: "💼 Start a Project Together",
    secondary: "☕ Schedule Free Consultation",
    email: "samyukthasriram2004@gmail.com"
  }
};

// --------------------------------------------
// TL;DR SECTION (Quick Summary for Portfolio Book)
// --------------------------------------------
export const tldr = {
  role: "UX/UI Designer × Frontend Developer",
  education: "CS Student (9.47 CGPA) | AI & Data Science",
  achievements: [
    "🥇 1st Place Infosys Hackathon",
    "🏆 Top 5 HP Dreams Unlocked"
  ],
  leadership: [
    "CSI President",
    "GDSC Design Lead"
  ],
  seeking: "Full-time UX/UI Designer roles",
  available: "June 2026",
  superpower: "Blending empathetic design with clean code",
  location: "Chennai, India | Open to Remote"
};
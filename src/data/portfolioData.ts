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
  title: "Design Engineer | UX Designer who codes",
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
// UI LABELS - Buttons and Navigation
// --------------------------------------------
export const uiLabels = {
  buttons: {
    workWithMe: "Work With Me",
    skipToResume: "Skip to Resume",
    backToRoom: "Back to Room",
    closeTablet: "Close",
    viewFullResume: "View Full Resume",
    downloadResume: "Download PDF"
  },
  navigation: {
    nextProject: "Next →",
    previousProject: "← Previous",
    viewProject: "View Project",
    viewDemo: "Live Demo",
    viewCode: "GitHub",
    viewDesign: "Design Files"
  },
  accessibility: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  }
};

// --------------------------------------------
// ABOUT ME SECTION
// --------------------------------------------
export const aboutMe = {
  // TL;DR for quick scanners
  tldr: {
    role: "Design Engineer | I design AND code",
    highlights: [
      "🥇 1st Place - Infosys Global Hackathon (5,700+ participants)",
      "🏆 Top 5 - HP Dreams Unlocked Design (38,671 submissions)",
      "🎓 IIT-M Compassionathon Winner"
    ]
  },

  story: [
    "Hi there! 👋 I'm Samyuktha, a creative designer and developer who loves crafting delightful digital experiences. I blend technical expertise with artistic vision to solve user experience challenges and create interfaces that spark joy!",
    "Currently studying Computer Science with AI & Data Science specialization, I've developed a passion for UX/UI design through hands-on leadership roles and creative projects. My mission is to build interfaces that are not just beautiful, but intuitive, accessible, and genuinely enjoyable to use.",
    "When I'm not designing or coding, you'll find me exploring new design trends, creating new apps from my ideas, working on marketing, and trying out new things! I believe that thoughtful design has the power to make people smile—and that's what drives me every day! 🌈✨",
    "One thing that scares me, excites me and drives me: I want to make a real, positive difference on this world."
  ],

  // Competition achievements (displayed after story)
  competitionHighlights: [
    "🥇 Won 1st place at Infosys Tech For Good Global Hackathon, competing against 5,700+ students and professionals worldwide",
    "🏆 Placed Top 5 in Design & Art at HP Dreams Unlocked (38,671 submissions), mentored by industry design leaders",
    "🎓 Won IIT-M Compassionathon for empathetic UX design and human-centric research approach"
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
  ],

  availability: {
    title: "Ready to Work Together?",
    description: "I offer Branding and Marketing Content, UI/UX Design, Frontend Development, and Full-Stack services. Let's create something amazing! ✨",
    status: "Available for Freelance, Internships, and Full-Time Roles",
    ctaText: "Work with me!"
  }
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
      "President of Computer Society of India - Led team that won 1st place at Infosys Global Hackathon",
      "Design Lead of Google Developer Student Chapter - Created visual identity for 15+ events",
      "UI/UX Lead of Blue Screen Programming Club - Designed interfaces and led design workshops",
      "Won 3 major design/tech competitions during undergraduate studies (Infosys, HP Dreams, IIT-M)"
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
      role: "UI/UX and Design Lead",
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
    { name: "Marketing with Canva", issuer: "Canva", year: "2026" },
    { name: "Full Stack Fundamentals", issuer: "Vidyakshina", year: "2025" },
    { name: "Introduction to Generative AI", issuer: "Google", year: "2023" },
    { name: "The Fundamentals of Digital Marketing", issuer: "Google", year: "2023" },
    { name: "Javascript", issuer: "HCL GUVI", year: "2023" }
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
// 
// PROJECT TYPES:
// - projectType: "dev" for development/coding projects
// - projectType: "design" for design/visual projects
// - category: The specific category (can change freely without breaking filters)

export const projects = [
  {
    title: "Kalaikatha 🥇",
    technologies: ["React", "Python", "Firebase","Google Cloud","Github Copilot"],
    description: "AI-Powered Marketplace Assistant for Indian Artisans",
    highlights: [
      "🥇 1st Place - Infosys Tech For Good Global Hackathon (5,700+ participants)",
      "Led ideation, feature creation, design, and prototyping for the winning project",
      "Designed an Earth-Toned Design System and cohesive brand identity",
      "Built responsive, accessible web interface with voice-first approach for technologically and literacy challenged artisans",
      "Created an on-brand marketing presentation with custom assets"
    ],
    links: {
      github: "https://github.com/samyuktha2004/kalaikatha",
      demo: undefined,
      design: undefined
    },
    category: "AI Powered platform",
    projectType: "dev" as const
  },
  {
    title: "Tomocha - Mental Health Companion 🏆",
    technologies: ["Figma Make","React 18 with TypeScript", "Tailwind CSS v4.0", "Vite"],
    description: "Mobile app providing mental health support through AI-powered conversations and mood analytics.",
    highlights: [
      "🏆 Winner - IIT-M Compassionathon for empathetic UX design",
      "Developed empathetic AI chatbot for emotional support",
      "Created my first onboarding tutorial (and loved it!)",
      "Implemented secure, privacy-focused user authentication"
    ],
    links: {
      github: "https://github.com/samyuktha2004/Tomocha-App",
      demo: "https://music-disk-94733631.figma.site",
      design: undefined
    },
    category: "Mobile",
    projectType: "dev" as const
  },
  {
    title: "This Bubbly Portfolio 🌸",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma Make", "Gemini"],
    description: "Interactive portfolio featuring isometric bedroom with animated hotspots and pink tablet modals.",
    highlights: [
      "Designed kawaii-inspired aesthetic with baby pink color palette",
      "Implemented 3D flip animations and smooth transitions",
      "Created responsive, accessible interface with comprehensive UX patterns",
      "Worked on Dynamic Resume Updation and single point of contact for data"
    ],
    links: {
      github: "https://github.com/samyuktha2004/portfolio",
      demo: "https://kernel-golf-28299141.figma.site", 
      design: undefined
    },
    category: "Responsive Website",
    projectType: "dev" as const
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
      demo: "https://hazardscout.vercel.app/",
      design: undefined
    },
    category: "Map-Integrated App",
    projectType: "dev" as const
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
    category: "Graphic Design",
    projectType: "design" as const
  },
  {
    title: "Marketing and Branding - GDG Chennai and Kotlin User Group Chennai",
    technologies: ["Canva", "Figma", "Gemini","Graphic Design"],
    description: "Series of on-theme, eye-catching digital posters, social media content and presentations for Google Developer Groups Chennai and Kotlin User Group Chennai.",
    highlights: [
      "Participated in the overall process- from event management to hosting and anchoring to pre and post-event content.",
      "Created engaging social media graphics with cohesive style",
      "Enhanced event attendance through compelling visuals and branded merchandise"
    ],
    links: {
      github: undefined, // Not applicable for design work
      demo: undefined, // Optional: Add demo link here
      design: undefined // Optional: Add design portfolio link here
    },
    category: "Branding",
    projectType: "design" as const
  }
];

// Filtered exports for convenience (optional - components can filter directly from projects array)
export const codingProjects = projects.filter(p => p.projectType === "dev");
export const designProjects = projects.filter(p => p.projectType === "design");

// --------------------------------------------
// DESIGN SHOWCASE SECTION (Visual Portfolio)
// --------------------------------------------
// HOW TO ADD IMAGES AND VIDEOS:
// - images: Array of image URLs (first one is primary)
// - videos: Array of video URLs (YouTube, Vimeo, or direct .mp4 links)
// - mediaItems: Combined array - use format: 
//   { type: 'image', url: 'https://...' } or { type: 'video', url: 'https://...' }
// - Can add as many as you want - slideshow will handle navigation
// - For YouTube: Use embed URLs like "https://www.youtube.com/embed/VIDEO_ID"
// - For direct videos: Use .mp4, .webm, or .mov file URLs
// - demoLink: Optional link to live demo/Figma/Behance (shows pink button at bottom right)
export const designShowcase = [
  {
    title: "Kalaikatha - Sustainable Artisan Platform 🥇",
    type: "Competition Pitch & Brand Design",
    mediaItems: [
      // Add your Canva presentation link here:
      // { type: 'video' as const, url: 'https://www.canva.com/design/YOUR-PRESENTATION-ID/view' }
      // Or add exported slide images:
      // { type: 'image' as const, url: '/assets/portfolio/kalaikatha-pitch-1.png' }
    ],
    visualElements: ["Pitch Deck Design", "Earth-Tone Brand Identity", "Marketing Assets", "Presentation Design"],
    colorPalette: ["#8B4513", "#D2691E", "#F4A460", "#2F4F2F"],
    designNotes: "🥇 1st Place - Infosys Tech For Good Global Hackathon (5,700+ participants). Designed sustainable branding, marketing presentation, and pitch deck for AI-powered artisan marketplace celebrating Indian heritage crafts.",
    demoLink: ""
  },
  {
    title: "Kaalani - Sustainable Shoe Skins 🏆",
    type: "Product Design & Pitch",
    mediaItems: [
      // Add your Canva presentation link here:
      // { type: 'video' as const, url: 'https://www.canva.com/design/YOUR-PRESENTATION-ID/view' }
      // Or add exported slide images:
      // { type: 'image' as const, url: '/assets/portfolio/kaalani-pitch-1.png' }
    ],
    visualElements: ["Pitch Deck", "Product Mockups", "Heritage Fabric Integration", "Sustainability Concept"],
    colorPalette: ["#8B4513", "#CD853F", "#DEB887", "#F5DEB3"],
    designNotes: "🏆 Top 5 in Design & Art - HP Dreams Unlocked (38,671 submissions). Pitched sustainable shoe customization using heritage Indian fabrics, merging traditional art with modern technology. Mentored by industry design leaders.",
    demoLink: ""// Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "Tomocha App Design 🎓",
    type: "Mobile UI/UX",
    mediaItems: [
      { type: 'image' as const, url: 'https://your-image-url.com/tomocha.png' }
    ],
    visualElements: ["Onboarding Flow", "Chat Interface", "Mood Tracker", "Cute Character Design"],
    colorPalette: ["#FFB6C1", "#87CEEB", "#DDA0DD", "#FFE4E1"],
    designNotes: "🎓 IIT-M Compassionathon Winner. Soft, comforting aesthetic designed to provide an encouraging space to work on your mental health. Recognized for empathetic UX design and human-centric research.",
    demoLink: "https://music-disk-94733631.figma.site"
  },
  {
    title: "E-Luminate Logo and Social Media Marketing",
    type: "Symposium Branding and Promotion",
    mediaItems: [
      { type: 'image' as const, url: 'https://your-image-url.com/eluminate.png' }
    ],
    visualElements: ["Logo Design", "Promotional Videos", "Social Media Graphics"],
    colorPalette: ["#1e40af", "#3b82f6", "#60a5fa", "#dbeafe"],
    designNotes: "Modern tech aesthetic that balances professionalism with campus energy and excitement",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "GDSC Event Posters",
    type: "Graphic Design Series",
    mediaItems: [
      { type: 'image' as const, url: 'https://your-image-url.com/gdsc.png' }
    ],
    visualElements: ["Event Announcements", "Workshop Promos", "Speaker Cards", "Instagram Posts"],
    colorPalette: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
    designNotes: "Google's signature colors with playful typography to boost event engagement",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "This Portfolio Design",
    type: "Interactive Web Experience",
    mediaItems: [
      { type: 'image' as const, url: 'https://your-image-url.com/portfolio.png' }
    ],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
    colorPalette: ["#FFB6C1", "#FFF0F5", "#87CEEB", "#FF95A8"],
    designNotes: "Bubbly, kawaii-inspired design that showcases personality while maintaining professionalism",
    demoLink: "https://kernel-golf-28299141.figma.site" // Optional: Add Figma, Behance, or live demo link
  },
   {
    title: "GDG Chennai",
    type: "Graphic Design Series",
    mediaItems: [
      { type: 'image' as const, url: 'https://drive.google.com/file/d/1S8Q-WG8MUMXZEEnJ1-vbXNVutGI21Equ/view' },
      { type: 'video', url: 'https://www.canva.com/design/DAG4BACm8Sk/wSPxDZ2uwQfxwdxGA2TGkA/view' },
    ],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
    colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
    designNotes: "Designed Google-themed social media posts, reels, slides and merchandise",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
     {
    title: "Kotlin Chennai",
    type: "Graphic Design Series",
    mediaItems: [
      { type: 'image' as const, url: 'https://your-image-url.com/kotlinchennai.png' }
    ],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
    colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
    designNotes: "Designed Google-themed social media posts, reels, slides and merchandise",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
];

// --------------------------------------------
// ACHIEVEMENTS & AWARDS SECTION
// --------------------------------------------
export const achievements = [
  {
    title: "🥇 1st Place - Infosys Tech For Good Global Hackathon",
    date: "October 2025",
    description: "Built AI-powered Agricultural Assistant with my team, leading the ideation, feature creation, design and prototyping.",
    impact: "Competed globally against over 5,700 students and professionals (ages 18-35), and won 1st against 33 teams competing in the Grand Finale in Hyderabad ."
  },
  {
    title: "🏆 Top 5 in Design & Art- HP's Dreams Unlocked Season 1",
    date: "November 2025",
    description: "Pitched Kaalani, sustainable shoe skins from heritage fabrics, bettered by integrating art with technology",
    impact: "Received mentorship from Design Gurus, Mr. Aaquib Wani and Ms. Vijaya Aswani, qualifying in Top 5 - Design, and Top 40 overall(8 tracks), out of 38,671 submissions."
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
    impact: "Successfully organized a National-level event with 500+ participants"
  }
];

// --------------------------------------------
// WORK WITH ME SECTION
// --------------------------------------------
export const workWithMe = {
  headline: "Let's Create Something Amazing Together! ✨",
  subheadline: "Flexible collaboration for startups, nonprofits, and creative projects",
  
  intro: "As a fresher, I'm excited to explore diverse opportunities and adapt to your unique needs! Whether it's a project type listed below or something entirely different, I'm open to discussing how I can help bring your vision to life. Budget constraints? Let's talk about what works for both of us!",
  
  availability: {
    status: "available", // "available" | "limited" | "unavailable"
    message: "Available for Freelance, Internships, and Full-Time Roles"
  },
  
  pricing: {
    model: "Project-based or hourly - flexible to your needs",
    note: "Student-friendly rates for nonprofits, educational projects, and early-stage startups",
    consultation: "First consultation is always free! 💙"
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
      tools: ["Figma", "Canva" , "Prototyping", "User Research"]
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
  
  flexibility: {
    title: "Not Sure If I Can Help?",
    message: "These are just examples! I'm open to:",
    options: [
      "Custom projects outside these categories",
      "Hybrid roles that blend design, development, and strategy",
      "Part-time, contract, or full-time opportunities",
      "Budget-friendly arrangements for early-stage startups and nonprofits",
      "Learning new tools or technologies for the right project",
      "Collaborative projects where I can grow alongside your team"
    ],
    cta: "Don't hesitate to reach out - worst case, I'll point you to someone who can help! 💙"
  },

  process: [
    {
      step: 1,
      title: "Project Discussion",
      description: "We discuss your goals, challenges, and vision, and project requirements!"
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
      description: "Final delivery with required documentation"
    }
  ],
  
  cta: {
    primary: "Let's Chat!",
    email: "samyukthasriram2004@gmail.com",
    message: "Tell me about your project, budget, timeline - or just say hi! I'm friendly and flexible. 😊"
  }
};

// --------------------------------------------
// TL;DR SECTION (Quick Summary for Portfolio Book)
// --------------------------------------------
export const tldr = {
  role: "Design Engineer | I design AND code",
  education: "CS Student (9.47 CGPA) | AI & Data Science",
  achievements: [
    "🥇 1st Place - Infosys Global Hackathon (5,700+ participants)",
    "🏆 Top 5 - HP Dreams Unlocked Design (38,671 submissions)",
    "🎓 IIT-M Compassionathon Winner"
  ],
  leadership: [
    "President - Computer Society of India (9-member team)",
    "Design Lead - Google Developer Student Club",
    "Design Lead - e-Luminate National Symposium (500+ attendees)"
  ],
  seeking: "Junior Design Engineer / Creative Technologist roles",
  superpower: "Blending empathetic design with clean code",
  location: "Chennai, India | Open to Remote"
};
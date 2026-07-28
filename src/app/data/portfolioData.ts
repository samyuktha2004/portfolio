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
  title: "I design, code, and explore AI",
  email: "samyukthasriram2004@gmail.com",
  linkedin: "linkedin.com/in/samyuktha24",
  github: "github.com/samyuktha2004",

  tags: [
    { icon: "Heart", text: "Human-First, Empathy-Led Innovator" },
    { icon: "Sparkles", text: "AI-Assisted Development & Prompt Engineering" },
    { icon: "Lightbulb", text: "Experimental Problem Solver" }
  ],

  summary: "At the intersection of creativity, technology and intuitive design. I craft solutions to help create a more beautiful, accessible, and functional digital world—driven by a commitment to sustainability and empathy-driven innovation."
};

// --------------------------------------------
// DETECTIVE ROOM - Hotspot Labels
// --------------------------------------------
export const hotspotLabels = {
  character: "👋 About Me",
  desktop: "💻 Projects",
  smartphone: "📅 Events",
  medals: "🏆 Achievements & Awards",
  books: "📚 Education & Learning"
};

// --------------------------------------------
// PINK TABLET - Section Titles
// --------------------------------------------
export const sectionTitles = {
  about: "👋 About Me",
  devProjects: "💻 Projects",
  events: "📅 Events",
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
      "🏆 Top 5 in Design & Art Category - HP Dreams Unlocked (38,671 submissions)",
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
    { category: "Development", items: ["Python", "React", "HTML/CSS", "TypeScript", "JavaScript"] },
    { category: "AI Tools", items: ["Figma Make", "VS Code + Copilot", "Claude", "Gemini"] },
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
    cgpa: "9.5/10",
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
    title: "Agriguru 🥇",
    technologies: ["Flutter", "Firebase", "Gemini API", "Google Cloud", "Python"],
    description: "Voice-first, multilingual AI tool empowering rural farmers to boost yield and sustainability. Designed the full Mobile UI, assets, and branding across the app and pitch deck.",
    highlights: [
      "🥇 1st Place - Infosys Tech For Good Global Hackathon (5,700+ participants worldwide)",
      "Led ideation, feature creation, design, and prototyping—including offline capabilities for low-connectivity zones",
      "Pitched at Grand Finale in Hyderabad and presented again at 2026 AI Impact Summit, Delhi",
      "Designed Farm-Themed Design System with earthy greens and yellows for rural accessibility",
      "Built voice-first, multilingual interface optimized for legacy hardware and technologically challenged users"
    ],
    links: {
      github: undefined, // Private - confidential code
      demo: undefined, // Add when available
      design: undefined
    },
    category: "AI for Social Good",
    projectType: "combined" as const,
    domain: "AI/ML" as const,
    featured: true,
    colorPalette: ["#8B4513", "#D2691E", "#F4A460", "#2F4F2F"],
    visualElements: ["Pitch Deck Design", "Earth-Tone Brand Identity", "Mobile UI States", "Marketing Assets"],
  },
  {
    title: "Kalaikatha 🎨",
    technologies: ["React", "Python", "Firebase", "Gemini API", "Google Cloud"],
    description: "AI-Powered Marketplace Assistant celebrating Indian artisans and heritage crafts through voice-first technology — with sustainable branding, a marketing pitch deck, and intuitive web design for artisans unfamiliar with technology.",
    highlights: [
      "🏆 Selected for AI for Bharat Hackathon | Google GenAI Challenge '25 Participant",
      "Led full product lifecycle: ideation, feature design, brand identity, and prototyping",
      "Designed Earth-Tone Design System inspired by traditional Indian crafts (rustic browns, terracotta)",
      "Built voice-first, multilingual interface for literacy-challenged artisans to manage their digital storefronts",
      "Created comprehensive marketing presentation with custom brand assets"
    ],
    links: {
      github: undefined, // Private - confidential code
      demo: undefined,
      design: undefined
    },
    category: "AI for Social Good",
    projectType: "combined" as const,
    domain: "AI/ML" as const,
    featured: true,
    colorPalette: ["#8B4513", "#D2691E", "#F4A460", "#2F4F2F"],
    visualElements: ["Pitch Deck Design", "Voice-First Web Design", "Marketing Assets", "Presentation Design"],
  },
  {
    title: "Tomocha - Mental Health Companion 🏆",
    technologies: ["Figma Make","React, TypeScript", "Tailwind CSS v4.0", "Vite"],
    description: "Mobile app providing mental health support through AI-powered conversations and mood analytics, wrapped in a soft, comforting aesthetic. Recognized for empathetic UX design.",
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
    projectType: "combined" as const,
    colorPalette: ["#FFB6C1", "#87CEEB", "#DDA0DD", "#FFE4E1"],
    visualElements: ["Onboarding Flow", "Chat Interface", "Mood Tracker", "Cute Character Design"],
  },
  {
    title: "This Bubbly Portfolio 🌸",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma Make", "Gemini"],
    description: "Interactive portfolio with an isometric bedroom, animated hotspots, and pink tablet modals — bubbly, kawaii-inspired, and designed to showcase personality while staying professional.",
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
    projectType: "combined" as const,
    colorPalette: ["#FFB6C1", "#FFF0F5", "#87CEEB", "#FF95A8"],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
  },
  {
    title: "Hazard Scout 🚙",
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
    title: "Kaalani - Sustainable Shoe Skins 🏆",
    technologies: ["Canva", "Figma", "Product Design", "Pitch Deck"],
    description: "Sustainable shoe skins concept — heritage Indian fabrics reimagined as swappable shoe customizations, merging traditional art with modern technology.",
    highlights: [
      "🏆 Top 5 in Design & Art - HP Dreams Unlocked (38,671 submissions)",
      "Mentored by industry design leaders Mr. Aaquib Wani and Ms. Vijaya Aswani",
      "Top 40 overall across 8 tracks — pitched sustainable product concept with heritage fabric integration"
    ],
    links: {
      github: undefined,
      demo: undefined,
      design: undefined
    },
    category: "Product Design & Pitch",
    projectType: "design" as const,
    featured: true,
    colorPalette: ["#8B4513", "#CD853F", "#DEB887", "#F5DEB3"],
    visualElements: ["Pitch Deck", "Product Mockups", "Heritage Fabric Integration", "Sustainability Concept"],
  },
  {
    title: "Interiorismo",
    technologies: ["Figma", "UI/UX Design", "Mobile Prototyping"],
    description: "Tinder — but for Interior Design. Matches users with their dream interior aesthetics through swipe-based discovery.",
    highlights: [
      "Designed swipe-based matching flow for interior design discovery",
      "Created brand identity including logo, color system, and promotional assets",
      "Prototyped full mobile UX with micro-interactions and smooth transitions"
    ],
    links: {
      github: undefined,
      demo: undefined,
      design: undefined
    },
    category: "Mobile Prototype",
    projectType: "design" as const,
    colorPalette: ["#FFFFFF", "#E94057", "#24A6F0", "#000000"],
    visualElements: ["Logo Design", "Mobile UI", "Promotional Videos", "Social Media Graphics"],
  },
  {
    title: "Marketing and Branding - College Events and Clubs ",
    technologies: ["Canva", "Figma", "Gemini","Graphic Design"],
    description: "Eye-catching digital posters and branding for GDSC, Blue Screen Programming Club, and CSI events — rethinking Tech and Google with playful concepts to boost community reach and engagement.",
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
    projectType: "design" as const,
    colorPalette: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
    visualElements: ["Event Announcements", "Workshop Promos", "Speaker Cards", "Instagram Posts"],
  },
  {
    title: "Marketing and Branding - GDG Chennai and Kotlin User Group Chennai",
    technologies: ["Canva", "Figma", "Gemini","Graphic Design"],
    description: "On-theme digital posters, social media posts, reels, slides, and merchandise for GDG Chennai and Kotlin User Group Chennai — including DevFest Chennai branding.",
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
    projectType: "design" as const,
    colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
    visualElements: ["Tech For Good", "Google Event Announcements", "Community Content", "Branded Merchandise"],
  }
];

// Filtered exports for convenience (optional - components can filter directly from projects array)
export const codingProjects = projects.filter(p => p.projectType === "dev" || p.projectType === "combined");
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
    title: "Agriguru",
    type: "Competition Pitch & Brand Design",
    mediaItems: [
      // Add your Canva presentation link here:
      // { type: 'video' as const, url: 'https://www.canva.com/design/YOUR-PRESENTATION-ID/view' }
      // Or add exported slide images:
      // { type: 'image' as const, url: '/assets/portfolio/agriguru-pitch-1.png' }
    ],
    visualElements: ["Pitch Deck Design", "Earth-Tone Brand Identity", "Marketing Assets", "Presentation Design"],
    colorPalette: ["#8B4513", "#D2691E", "#F4A460", "#2F4F2F"],
    designNotes: "🥇 1st Place - Infosys Tech For Good Global Hackathon (5,700+ participants). Designed Mobile UI states, assets and branding for the entire mobile application and pitch deck.",
    demoLink: ""
  },
  {
    title: "Kalaikatha - Sustainable Artisan Platform 🎨",
    type: "Competition Pitch & Brand Design",
    mediaItems: [
      // Add your Canva presentation link here:
      // { type: 'video' as const, url: 'https://www.canva.com/design/YOUR-PRESENTATION-ID/view' }
      // Or add exported slide images:
      // { type: 'image' as const, url: '/assets/portfolio/kalaikatha-pitch-1.png' }
    ],
    visualElements: ["Pitch Deck Design", "Voice First Web Design","Marketing Assets", "Presentation Design"],
    colorPalette: ["#8B4513", "#D2691E", "#F4A460", "#2F4F2F"],
    designNotes: "Designed sustainable branding, marketing presentation, and pitch deck for AI-powered artisan marketplace celebrating Indian heritage crafts, with intuitive web design for those unfamiliar with using technology.",
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
    mediaItems: [],
    visualElements: ["Onboarding Flow", "Chat Interface", "Mood Tracker", "Cute Character Design"],
    colorPalette: ["#FFB6C1", "#87CEEB", "#DDA0DD", "#FFE4E1"],
    designNotes: "🎓 IIT-M Compassionathon Winner. Soft, comforting aesthetic designed to provide an encouraging space to work on your mental health. Recognized for empathetic UX design and human-centric research.",
    demoLink: "https://music-disk-94733631.figma.site"
  },
  {
    title: "Interiorismo",
    type: "Mobile Prototype",
    mediaItems: [],
    visualElements: ["Logo Design", "Promotional Videos", "Social Media Graphics"],
    colorPalette: ["#FFFFFF", "#E94057", "#24A6F0", "#000000"],
    designNotes: "Tinder - but for Interior Design, matching you with the Interiors of your Dreams",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "GDSC HITS Event Posters",
    type: "Graphic Design Series",
    mediaItems: [],
    visualElements: ["Event Announcements", "Workshop Promos", "Speaker Cards", "Instagram Posts"],
    colorPalette: ["#4285F4", "#EA4335", "#FBBC04", "#34A853"],
    designNotes: "Rethinking Tech and Google with playful concepts to boost community reach and event engagement",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "This Portfolio Design",
    type: "Interactive Web Experience",
    mediaItems: [],
    visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
    colorPalette: ["#FFB6C1", "#FFF0F5", "#87CEEB", "#FF95A8"],
    designNotes: "Bubbly, kawaii-inspired design that showcases personality while maintaining professionalism",
    demoLink: "https://kernel-golf-28299141.figma.site" // Optional: Add Figma, Behance, or live demo link
  },
  {
    title: "GDG Chennai",
    type: "Graphic Design Series",
    mediaItems: [
      { type: 'video' as const, url: 'https://www.canva.com/design/DAG4BACm8Sk/wSPxDZ2uwQfxwdxGA2TGkA/view' },
    ],
    visualElements: ["Tech For Good", "Google","Event Announcements","Community"],
    colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
    designNotes: "Designed Google-themed social media posts, reels, slides and merchandise",
    demoLink: "" // Optional: Add Figma, Behance, or live demo link
  },
    // {
    //title: "Kotlin Chennai",
   // type: "Graphic Design Series",
   // mediaItems: [
    //  { type: 'image' as const, url: 'https://your-image-url.com/kotlinchennai.png' }
   // ],
    //visualElements: ["Isometric Room", "Character Design", "Pink Tablet UI", "Kawaii Aesthetics"],
   // colorPalette: ["#4285F4", "#EA4335", "#34A853", "#FBBC05"],
   // designNotes: "Designed Google-themed social media posts, reels, slides and merchandise",
   // demoLink: "" // Optional: Add Figma, Behance, or live demo link
  //},
];

// --------------------------------------------
// ACHIEVEMENTS & AWARDS SECTION
// --------------------------------------------
export const achievements = [
  {
    title: "🥇 1st Place - Infosys Tech For Good Global Hackathon",
    date: "October 2025",
    description: "Built Agriguru, an AI-powered agricultural assistant empowering rural farmers, leading ideation, design, and prototyping.",
    impact: "Competed globally against 5,700+ students and professionals (ages 18-35), won 1st place among 33 Grand Finale teams in Hyderabad, and presented at the 2026 AI Impact Summit in Delhi."
  },
  {
    title: "🏆 Top 5 in Design & Art Category - HP Dreams Unlocked Season 1",
    date: "November 2025",
    description: "Pitched Kaalani—sustainable shoe customization using heritage Indian fabrics, merging traditional art with modern technology.",
    impact: "Received mentorship from industry design leaders Mr. Aaquib Wani and Ms. Vijaya Aswani. Qualified in Top 5 for Design & Art Category and Top 40 overall (across 8 tracks) out of 38,671 submissions."
  },
  {
    title: "🎓 IIT-M Compassionathon Winner",
    date: "August 2024",
    description: "Designed Tomocha, a mental health companion app focused on empathetic user experience and emotional support.",
    impact: "Recognized for innovative interaction patterns and human-centric research approach."
  },
  {
    title: "🥇 1st Place - e-Luminate 2024 Game Development Competition",
    date: "April 2024",
    description: "Won 1st prize in game development competition at HITS CSE National Level Symposium.",
    impact: "Recognized for creative game design and technical execution alongside Design Lead responsibilities."
  },
  {
    title: "🥇 1st Place - Skill-a-thon 2023 (Game Dev & Ideathon)",
    date: "2023",
    description: "Won dual 1st place awards in both Game Development and Ideathon categories.",
    impact: "Demonstrated versatility in both creative ideation and technical game development skills."
  },
  {
    title: "⭐ Academic Excellence - Certificate of Proficiency",
    date: "May 2024",
    description: "Maintained 9.5 CGPA throughout Bachelor's Degree in Computer Science Engineering.",
    impact: "Top 5% of class ranking, balancing rigorous academics with leadership roles and competition wins."
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
  education: "CS Student (9.5 CGPA) | AI & Data Science",
  achievements: [
    "🥇 1st Place - Infosys Global Hackathon (5,700+ participants)",
    "🏆 Top 5 in Design & Art Category - HP Dreams Unlocked (38,671 submissions)",
    "🎓 IIT-M Compassionathon Winner"
  ],
  leadership: [
    "President - Computer Society of India (9-member team)",
    "Design Lead - Google Developer Student Club",
    "Design Lead - e-Luminate National Symposium (500+ attendees)"
  ],
  seeking: "GenAI Engineering / Creative Technologist roles",
  superpower: "Blending empathetic design with clean code",
  location: "Chennai, India | Open to Remote"
};

// --------------------------------------------
// EVENTS SECTION
// --------------------------------------------
export interface EventEntry {
  title: string;
  date?: string;
  role: string;
  category: 'hosted' | 'exhibited' | 'attended';
  highlights: string;
  image?: string;
}

export const events: EventEntry[] = [
  // Hosted & Organized
   {
    title: "Google for Startups: Build with AI - App Roadshow",
    date: "Apr 2026",
    role: "Volunteer",
    category: "hosted",
    highlights: "Assisted attendees and coordinated hands-on AI build sessions."
  },
  {
    title: "ChennaiFOSS 2026",
    date: "Apr 2026",
    role: "Host & Volunteer",
    category: "hosted",
    highlights: "Organized and facilitated community sessions at Chennai's premier Free and Open Source Software conference."
  },
  {
    title: "GDG Devfest Chennai 2025",
    date: "Oct 2025",
    role: "Host & Volunteer",
    category: "hosted",
    highlights: "Co-hosted and managed operations for Chennai's flagship Google Developer Group conference.",
    image: 'devfest'
  },
  {
    title: "HITS Innothon 2025",
    date: "March 2025",
    role: "Organiser (SPOC)",
    category: "hosted",
    highlights: "Head of creating and hosting a women-centric design-themed event for the CSE department's national level symposium, Innothon 2025.",
    image: 'digitalDivas'
  },
  {
    title: "HITS e-Luminate",
    date: "Apr 2024",
    role: "Lead Organizer",
    category: "hosted",
    highlights: "Headed event planning, logistics, and execution for the university tech fest."
  },
  // Exhibited & Represented
  {
    title: "India AI Impact Summit 2026",
    date: "Feb 2026",
    role: "College Representative & Exhibitor",
    category: "exhibited",
    highlights: "Managed an official college booth showcasing featured student AI projects to industry leaders and visitors.",
    image: 'aiimpact'
  },
  // Attended & Participated
  {
    title: "Paperflite's Shoptalk: Social Design Edition",
    date: "Jul 2026",
    role: "Attendee",
    category: "attended",
    highlights: "UI/UX, product design, and creative direction.",
    image: 'shoptalk'
  },
  {
    title: "GDG Chennai: Build with Android",
    date: "Jun 2026",
    role: "Attendee",
    category: "attended",
    highlights: "Android app development and ecosystem updates."
  },
  {
    title: "SheBuilds x AnitaB Org - Design Thinking Workshop",
    date: "May 2026",
    role: "Attendee",
    category: "attended",
    highlights: "Android app development and ecosystem updates."
  },
  {
    title: "GDG Chennai Game Jam",
    date: "Dec 2025",
    role: "Attendee",
    category: "attended",
    highlights: "Game design, rapid prototyping, and creative coding."
  }
];
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
  title: "Design Engineer",
  email: "samyukthasriram2004@gmail.com",
  linkedin: "linkedin.com/in/samyuktha24",
  github: "github.com/samyuktha2004",

  tags: [
    { icon: "Code", text: "React · TypeScript · Python · Flutter" },
    { icon: "Lightbulb", text: "Design systems → production interfaces" },
    { icon: "Sparkles", text: "Gemini API · AI product prototyping" }
  ],

  summary: "I take ideas from early conversations and rough flows to accessible product interfaces, working across interaction design, frontend engineering, and applied AI."
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
    role: "React · TypeScript · Flutter · Python · Gemini API · Firebase",
    highlights: [
      "Owns the path from user research and interaction design to implementation",
      "Built voice-first, multilingual AI products for rural and low-literacy users",
      "Ships accessible interfaces with WCAG 2.1 AA patterns, keyboard navigation, and responsive states"
    ]
  },

  story: [
    "I'm Samyuktha, a Design Engineer who likes owning the path from an unclear problem to an intuitive, working product. I use research and prototyping to find the right interaction, then bring it to life through frontend engineering and applied AI.",
    "Building something that works fast is not enough—it has to be usable and useful to the people it was built for. That belief has always pulled me toward accessibility, and my current rabbit hole is human-centered AI and human-computer interaction (HCI): how technology can support people without losing the human context. It scares me, excites me, and drives me to make a positive difference—and I still get a kick every time someone says an experience or flow felt intuitive."
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
    { category: "Applied AI & Product Tools", items: ["Gemini API", "Firebase", "Figma Make", "Git"] },
    { category: "Ways of Working", items: ["Accessible Interaction Design", "Client Discovery", "Cross-Functional Coordination", "Live Event Operations", "Technical Presentations"] }
  ],

  interests: [
    { icon: "Palette", text: "UI/UX Design", description: "Crafting intuitive, beautiful interfaces that feel effortless to use", color: "#FFB6C1" },
    { icon: "Code", text: "Frontend Development", description: "Bringing designs to life with clean, performant, accessible React code", color: "#87CEEB" },
    { icon: "Heart", text: "User Research", description: "Understanding people deeply to design with empathy and real purpose", color: "#FFB6C1" },
    { icon: "Sparkles", text: "AI & Creative Tools", description: "Leveraging AI to supercharge design and development workflows", color: "#DDA0DD" },
    { icon: "Brush", text: "Brand & Visual Design", description: "Creating cohesive visual identities and compelling graphic experiences", color: "#FFD700" },
    { icon: "Monitor", text: "Design Systems", description: "Building scalable component libraries that bridge design and code", color: "#87CEEB" },
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
    duration: "2022 - 2026 · Completed",
    cgpa: "9.5/10",
    highlights: [
      "Rank holder: Top 3 in a cohort of 62 and Top 6 among approximately 200 students",
      "President of Computer Society of India - Led team that won 1st place at Infosys Global Hackathon",
      "Design Lead of Google Developer Student Chapter - Created visual identity for 15+ events",
      "Won 3 major design/tech competitions during undergraduate studies (Infosys, HP Dreams, IIT-M)"
    ]
  },

  leadership: [
    {
      role: "Main Hall Track Lead",
      organization: "GDG DevFest Chennai 2026",
      duration: "Oct 2026",
      responsibilities: [
        "Led a five-person behind-the-scenes team for the main hall serving 1,000+ attendees",
        "Coordinated 10+ speakers, including keynotes, throughout the 9 AM–5 PM program",
        "Managed speaker communication and adapted the live schedule during the event"
      ]
    },
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

const projectCatalog = [
  {
    title: "Agriguru 🥇",
    technologies: ["Flutter", "Firebase", "Gemini API", "Google Cloud", "Python"],
    description: "A multilingual agricultural assistant that grew from a smartphone concept into a more inclusive service model for established farmers, people using button phones, and small-space growing enthusiasts.",
    role: "Product Design + AI Prototyping Lead",
    buildFocus: "Voice-first multilingual UX, low-connectivity flows, inclusive access",
    outcome: "1st of 5,700+ global participants",
    highlights: [
      "🥇 1st Place - Infosys Tech For Good Global Hackathon (5,700+ participants worldwide)",
      "Led ideation, feature creation, design, and prototyping for low-connectivity contexts",
      "Pitched at Grand Finale in Hyderabad and presented again at 2026 AI Impact Summit, Delhi",
      "Designed Farm-Themed Design System with earthy greens and yellows for rural accessibility",
      "Reframed the access model after mentor feedback challenged our smartphone assumptions"
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
    caseStudy: {
      introduction: "Agriguru became the project I loved most because one mentor question forced us to stop designing around our own assumptions. The breakthrough was not another feature—it was changing who we believed should be able to use the solution.",
      sections: [
        {
          label: "Choosing the problem",
          title: "Start where the potential impact is highest",
          body: "The hackathon offered many possible themes. We chose agriculture because it gave us the clearest opportunity to build something useful for people whose access to timely information can directly affect yield, income, and sustainability.",
          points: [
            "Focused on practical agricultural guidance rather than a technology-first showcase",
            "Used multilingual voice interaction to reduce dependence on typing and complex navigation",
            "Designed the visual identity and pitch around familiarity, clarity, and trust"
          ]
        },
        {
          label: "The turning point",
          title: "Challenge the smartphone assumption",
          body: "Our mentor asked: if the product is meant to be offline, accessible, and multilingual, what happens to people who do not own smartphones? That question exposed a contradiction in our first approach and made us reconsider the entire access model.",
          points: [
            "Stopped treating a smartphone app as the only entry point",
            "Considered button-phone and legacy-device users as part of the core audience rather than an edge case",
            "Used the constraint to evaluate each flow from the user's reality instead of our own"
          ]
        },
        {
          label: "Expanding the audience",
          title: "Support growers before they become established farmers",
          body: "We also questioned why the solution should begin only after someone was already farming at scale. Agriguru expanded to include enthusiasts growing produce in smaller spaces and a community-sales model for people who could not bring enough produce to market independently.",
          points: [
            "Included small-space growers alongside established farmers",
            "Proposed community sales where two or three growers combine produce and split the profit",
            "Connected guidance with a path toward participation and income"
          ]
        },
        {
          label: "Outcome and reflection",
          title: "A broader definition of accessibility changed the solution",
          body: "Agriguru was the only finalist solution designed around both established farmers and emerging small-space growers, and it placed first among more than 5,700 participants. The larger lesson was that a team can understand the visible problem and still miss the real access barrier until another perspective challenges it.",
          points: [
            "Won the Infosys Tech For Good Global Hackathon",
            "Presented at the Grand Finale in Hyderabad and later at the India AI Impact Summit",
            "Reinforced why I value critique, perspective shifts, and designing from the user's context"
          ]
        }
      ]
    },
  },
  {
    title: "Kalaikatha 🎨",
    technologies: ["React", "Python", "Firebase", "Gemini API", "Google Cloud"],
    description: "AI-Powered Marketplace Assistant celebrating Indian artisans and heritage crafts through voice-first technology — with sustainable branding, a marketing pitch deck, and intuitive web design for artisans unfamiliar with technology.",
    role: "Product Designer + Frontend/AI Builder",
    buildFocus: "Conversational commerce, multilingual UX, Gemini + Firebase",
    outcome: "Selected for AI for Bharat; Google GenAI Challenge participant",
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
    technologies: ["Figma Make", "React", "TypeScript", "Tailwind CSS v4.0", "Vite"],
    description: "Mobile app providing mental health support through AI-powered conversations and mood analytics, wrapped in a soft, comforting aesthetic. Recognized for empathetic UX design.",
    role: "Design Engineer",
    buildFocus: "Conversational UI, onboarding, mood analytics, privacy-aware UX",
    outcome: "IIT-M Compassionathon winner",
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
    description: "An interactive portfolio that turns an isometric bedroom into a guided introduction to my design, engineering, leadership, and community work—without losing a fast, recruiter-friendly route through the content.",
    role: "Solo Design Engineer",
    buildFocus: "Interaction design, responsive React architecture, accessibility, portable static deployment",
    outcome: "Live interactive experience with playful and recruiter-friendly paths",
    highlights: [
      "Balanced a bubbly, kawaii-inspired identity with clear professional evidence and readable content hierarchy",
      "Built an isometric room, animated hotspots, pink tablet modals, a portfolio book, and small discoverable interactions",
      "Created responsive, keyboard-aware interfaces with reduced-friction routes to projects and resume content",
      "Centralized portfolio content in one typed data source and made static assets portable across deployment paths"
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
    caseStudy: {
      introduction: "I designed and built this site as a portfolio that feels recognizably mine while still helping recruiters and collaborators find evidence quickly. The experience needed to hold product work, technical decisions, awards, event leadership, and community contributions in one coherent system.",
      sections: [
        {
          label: "The brief",
          title: "Make personality useful, not ornamental",
          body: "A conventional project grid would communicate the work, but not the way I think. I used a detective-room concept to invite exploration, then paired it with direct routes so the interface never depends on playfulness alone.",
          points: [
            "Use the room as a visual map of the portfolio rather than a decorative landing page",
            "Give time-conscious visitors a traditional portfolio-book view",
            "Show both design craft and implementation ownership in the same experience"
          ]
        },
        {
          label: "Design direction",
          title: "A bubbly system with a professional hierarchy",
          body: "The visual language uses soft pink, blue, and lavender surfaces, rounded forms, a character-led room, and gentle motion. Deeper accessible tones carry headings, labels, and actions so the pastel identity does not compromise readability.",
          points: [
            "Reusable color, typography, button, card, and interaction patterns keep the experience cohesive",
            "Pink tablet modals turn each room hotspot into a focused content surface",
            "Progressive hints, visible navigation, and the alternate book view reduce discovery friction"
          ]
        },
        {
          label: "Build",
          title: "One content source, multiple ways to explore",
          body: "The site is a responsive React and TypeScript application built as a set of focused sections. Project and resume views read from shared portfolio data, while lazy-loaded tablet and book experiences keep the initial interface modular.",
          points: [
            "Responsive layouts preserve the room concept and readable project cards across screen sizes",
            "Keyboard shortcuts, focus states, semantic labels, and error boundaries support resilient navigation",
            "Relative production asset paths keep entry files, images, and lazy chunks portable on root domains, hosted subpaths, and downloaded static builds"
          ]
        },
        {
          label: "Content strategy",
          title: "Connect the work to real operating range",
          body: "The portfolio is designed to show more than finished screens. It connects product work with the leadership and community contexts in which I operate—from directing the main-hall flow at DevFest Chennai 2026 to sharing a featured Figma community project.",
          points: [
            "As Main Hall Track Lead for DevFest Chennai 2026, I coordinated schedules, managed 10+ speakers, and directed a five-person behind-the-scenes team for a main hall serving 1,000+ attendees",
            "The role required crisis management during live schedule changes and close coordination across the broader GDG network",
            "At Config India in October 2026, goingplaces.figma.site was featured on the Community Wall; I later presented it at the Friends of Figma Chennai Make-a-thon"
          ]
        },
        {
          label: "Challenge and outcome",
          title: "Keep the magic without making visitors work for it",
          body: "The central challenge was balancing two valid needs: a memorable exploratory experience and immediate access to professional evidence. The final structure keeps both. Visitors can investigate the room and its small surprises, or move directly into projects, outcomes, and resume-style content.",
          points: [
            "The interactive room establishes a distinct personal identity",
            "Project detail views add role, engineering focus, outcomes, and process—not just screenshots",
            "The deployed build remains a portable static experience rather than being tied to one hosting path"
          ]
        }
      ]
    },
  },
  {
    title: "Going Places with Figma",
    technologies: ["Figma Make", "Interaction Design", "Motion", "Sound Design"],
    description: "An airport-inspired interactive welcome for Config India, built around a split-flap display whose motion and sound turned an event greeting into a small, memorable experience.",
    role: "Independent Design Engineer",
    buildFocus: "Event storytelling, split-flap interaction, motion, and sound",
    outcome: "Featured on Config India's Community Wall and presented at Friends of Figma Chennai",
    highlights: [
      "Independently designed and built the experience after a member of Figma's team discovered my work on LinkedIn",
      "Reframed a conference welcome as an airport departure-board moment to connect Config with the idea of going places",
      "Used synchronized motion and sound to make the split-flap interaction feel recognizable rather than merely decorative",
      "Sparked conversations with Config attendees and later presented the project at the Friends of Figma Chennai Make-a-thon"
    ],
    links: {
      github: undefined,
      demo: "https://goingplaces.figma.site",
      design: undefined
    },
    category: "Interactive Website",
    projectType: "combined" as const,
    visualElements: ["Split-Flap Display", "Event Welcome", "Motion Design", "Sound Design"],
    caseStudy: {
      introduction: "A member of Figma's team found one of my projects through LinkedIn and invited me to feature it at Config India. Instead of simply submitting the existing work, I created Going Places because an event-specific experience could make better use of the Community Wall and welcome people into Config itself.",
      sections: [
        {
          label: "Opportunity",
          title: "Design for the event, not just the available screen",
          body: "The invitation created a choice: reuse a project that already existed or make something that belonged specifically at Config India. I chose the second path so the work could respond to the place, audience, and moment in which people would encounter it.",
          points: [
            "Built the project independently from concept through implementation",
            "Used “Going Places with Figma” as both the project idea and event welcome",
            "Optimized the experience for a brief, public encounter on the Community Wall"
          ]
        },
        {
          label: "Central decision",
          title: "Turn the welcome into an airport departure-board moment",
          body: "Config brings makers together around what they can create next. An airport split-flap display gave that forward-looking idea a familiar physical metaphor and made the words “Welcome to Config India” feel like the beginning of a journey.",
          points: [
            "Chose a recognizable real-world interaction instead of a generic animated headline",
            "Made the display itself carry the story before visitors read any explanation",
            "Kept the concept focused enough to understand while walking past the wall"
          ]
        },
        {
          label: "Interaction detail",
          title: "Use sound to complete the illusion",
          body: "The split-flap motion communicated change, but the sound made the reference immediately tangible. I treated audio as part of the interaction rather than a finishing effect, pairing it with the changing characters to make the digital display feel physical.",
          points: [
            "Coordinated motion and sound around the character changes",
            "Used sensory detail to create recognition and delight in a short interaction",
            "Kept the experience centered on one memorable behavior rather than adding unrelated features"
          ]
        },
        {
          label: "Outcome and reflection",
          title: "A contextual idea invited real conversations",
          body: "Figma selected Going Places for the Config India Community Wall. Attendees recognized the experience, approached me during the event, and talked with me about the work; I later presented it at the Friends of Figma Chennai Make-a-thon.",
          points: [
            "Featured publicly with my name and Figma profile on the Community Wall",
            "Created an approachable conversation point during the event",
            "Confirmed that small interaction details can make a simple message memorable"
          ]
        }
      ]
    },
  },
  {
    title: "Hazard Scout 🚙",
    technologies: ["Figma", "TypeScript", "CSS", "Google Maps","Github Copilot"],
    description: "Map-integrated driving companion that surfaces road hazards without pulling attention away from navigation, with responsive layouts and adaptable accessibility controls.",
    role: "Product Designer + Frontend Engineer",
    buildFocus: "Google Maps UX, responsive states, dark mode, haptic controls",
    outcome: "Live Vercel deployment with public source",
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
    title: "They Call This Design — Freelance Studio",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Resend", "Cloudflare"],
    description: "My freelance studio for turning client ideas into polished, practical websites. I work directly with clients to understand how they want their business to look and operate, then design and build the experience end to end.",
    role: "Founder + Design Engineer",
    buildFocus: "Client discovery, responsive interfaces, admin workflows, bookings, and operational dashboards",
    outcome: "Shipped live websites that clients can confidently use and manage",
    highlights: [
      "Built Trippin on Hue for an artist who previously relied on Instagram and Google Forms—bringing her portfolio, store, and workshop bookings into one cohesive website",
      "Used multiple collaborative calls to shape both the visual direction and functionality for a non-technical client",
      "Created a self-serve admin experience so the artist could independently update content and manage her work",
      "Built a custom clothing boutique platform with client-side appointment booking and admin tools for assigning work across workers and branches and tracking order progress"
    ],
    links: {
      github: undefined,
      demo: "https://theycallthisdesign.com",
      design: undefined
    },
    category: "Web · Client Work",
    projectType: "combined" as const,
    featured: true,
    visualElements: ["Client Collaboration", "Portfolio & Store", "Workshop Booking", "Admin Dashboards"],
    caseStudy: {
      introduction: "They Call This Design began with a belief that there is no single correct visual style. What I consider good design may not match what a client or their audience values, so the studio exists to understand their version of good design and make it real without sacrificing usability.",
      sections: [
        {
          label: "The premise",
          title: "Do not impose a house style on every client",
          body: "A recognizable studio should be known for how it listens and solves—not for making every client look the same. I built the studio around collaborative discovery so each project can reflect the client's taste, audience, and way of working.",
          points: [
            "Treat the client's visual preferences as useful input rather than something to design over",
            "Translate subjective references into concrete interface and brand decisions",
            "Keep accessibility, clarity, and responsive behavior as shared quality standards"
          ]
        },
        {
          label: "Discovery",
          title: "Understand the business behind the requested screens",
          body: "The first request is rarely the whole problem. Collaborative calls help uncover how clients currently receive orders, update content, schedule work, and explain their services—especially when they are not technical.",
          points: [
            "Map the existing workflow before proposing features",
            "Use plain-language conversations instead of expecting clients to write technical requirements",
            "Decide what the client should be able to manage without developer support"
          ]
        },
        {
          label: "Decision in practice",
          title: "Turn scattered tools into one manageable experience",
          body: "For Trippin on Hue, the artist relied on Instagram and Google Forms. The website brought her portfolio, store, and workshop bookings together, then added a self-serve admin experience so the result would remain useful after launch.",
          points: [
            "Combined discovery, shopping, and workshop registration without losing the artist's identity",
            "Designed for a non-technical owner to update content independently",
            "Applied the same workflow-first thinking to boutique appointments, worker assignment, branch operations, and order tracking"
          ]
        },
        {
          label: "Outcome",
          title: "A studio defined by adaptability",
          body: "The result is not one visual formula. It is a repeatable way of turning a client's taste and operational needs into a polished product they can confidently use and manage.",
          points: [
            "Shipped live client websites rather than stopping at presentation designs",
            "Balanced visual direction with practical admin and business workflows",
            "Made direct collaboration part of the product process"
          ]
        }
      ]
    },
  },
  {
    title: "Kaalani - Sustainable Shoe Skins 🏆",
    technologies: ["Canva", "Figma", "Product Design", "Pitch Deck"],
    description: "Sustainable shoe skins concept — heritage Indian fabrics reimagined as swappable shoe customizations, merging traditional art with modern technology.",
    role: "Product Designer + Storyteller",
    buildFocus: "Product concept, visual system, prototyping, pitch narrative",
    outcome: "Top 5 of 38,671 submissions",
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

const PROJECT_PRIORITY: Record<string, number> = {
  "Agriguru 🥇": 0,
  "This Bubbly Portfolio 🌸": 1,
  "They Call This Design — Freelance Studio": 2,
  "Tomocha - Mental Health Companion 🏆": 3,
  "Going Places with Figma": 4,
  "Kalaikatha 🎨": 5,
};

export const projects = [...projectCatalog].sort(
  (a, b) => (PROJECT_PRIORITY[a.title] ?? 100) - (PROJECT_PRIORITY[b.title] ?? 100)
);

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
    title: "⭐ Academic Excellence - Rank Holder",
    date: "May 2024",
    description: "Maintained 9.5 CGPA throughout Bachelor's Degree in Computer Science Engineering.",
    impact: "Placed in the Top 3 of a 62-student cohort and Top 6 among approximately 200 students while balancing leadership roles and competition wins."
  }
];

// --------------------------------------------
// WORK WITH ME SECTION
// --------------------------------------------
export const workWithMe = {
  availability: {
    message: "Available for full-time roles and selective freelance projects"
  },
  cta: {
    email: "samyukthasriram2004@gmail.com"
  }
};

// --------------------------------------------
// TL;DR SECTION (Quick Summary for Portfolio Book)
// --------------------------------------------
export const tldr = {
  role: "Design Engineer · Frontend Engineering · Applied AI",
  education: "CSE graduate (AI & Data Science) · 9.5/10 CGPA · Rank holder",
  achievements: [
    "🥇 1st Place - Infosys Global Hackathon (5,700+ participants)",
    "🏆 Top 5 in Design & Art Category - HP Dreams Unlocked (38,671 submissions)",
    "🎓 IIT-M Compassionathon Winner"
  ],
  leadership: [
    "President - Computer Society of India (9-member team)",
    "Main Hall Track Lead - DevFest Chennai 2026 (1,000+ attendees)",
    "Design Lead - Google Developer Student Club"
  ],
  seeking: "Design Engineer roles",
  superpower: "Taking products from user insight to designed, working software",
  location: "Chennai, India | Open to Remote"
};

// --------------------------------------------
// EVENTS SECTION
// --------------------------------------------
export interface EventEntry {
  title: string;
  date?: string;
  sortDate: string;
  role: string;
  category: 'hosted' | 'exhibited';
  highlights: string;
  image?: string;
  postUrl?: string;
}

export const events: EventEntry[] = [
  // Hosted & Organized
   {
    title: "GDG DevFest Chennai 2026",
    date: "Oct 2026",
    sortDate: "2026-10",
    role: "Main Hall Track Lead",
    category: "hosted",
    highlights: "Led a five-person main-hall team for a full-day program serving 1,000+ attendees; coordinated 10+ speakers, including keynotes, managed live speaker communication, and adapted the 9 AM–5 PM schedule.",
    postUrl: "https://lnkd.in/p/g8J-FfPD"
  },
   {
    title: "Google for Startups: Build with AI - App Roadshow",
    date: "Apr 2026",
    sortDate: "2026-04",
    role: "Volunteer",
    category: "hosted",
    highlights: "Supported attendees and coordinated hands-on AI build sessions throughout the roadshow."
  },
  {
    title: "ChennaiFOSS 2026",
    date: "Apr 2026",
    sortDate: "2026-04",
    role: "Host & Volunteer",
    category: "hosted",
    highlights: "Hosted and facilitated community sessions at Chennai's Free and Open Source Software conference.",
    postUrl: "https://lnkd.in/p/gvUdDq7F"
  },

  {
    title: "GDG DevFest Chennai 2025",
    date: "Oct 2025",
    sortDate: "2025-10",
    role: "Host & Volunteer",
    category: "hosted",
    highlights: "Co-hosted sessions and supported event operations for Chennai's flagship Google Developer Group conference.",
    image: 'devfest',
    postUrl: "https://lnkd.in/p/gzR7BVjj"
  },
  {
    title: "HITS Innothon 2025",
    date: "March 2025",
    sortDate: "2025-03",
    role: "Organiser (SPOC)",
    category: "hosted",
    highlights: "Created and hosted a women-centered design event for the CSE department's national symposium, serving as its single point of contact.",
    image: 'digitalDivas'
  },
  {
    title: "HITS e-Luminate",
    date: "Apr 2024",
    sortDate: "2024-04",
    role: "Lead Organizer",
    category: "hosted",
    highlights: "Led end-to-end planning, logistics, and execution for the university technology festival."
  },
  // Exhibited & Represented
  {
    title: "India AI Impact Summit 2026",
    date: "Feb 2026",
    sortDate: "2026-02",
    role: "College Representative & Exhibitor",
    category: "exhibited",
    highlights: "Represented the college at its official booth and demonstrated Agriguru to industry leaders and summit visitors.",
    image: 'aiimpact',
    postUrl: "https://lnkd.in/p/g_jAbi9a"
  },
  {
    title: "Figma Config India",
    date: "Oct 2026",
    sortDate: "2026-10",
    role: "Creator & Community Wall Feature",
    category: "exhibited",
    highlights: "Designed and independently built goingplaces.figma.site after Figma discovered my work on LinkedIn; created an airport split-flap welcome display with sound, earned a Community Wall feature, sparked attendee conversations, and presented the project at the Friends of Figma Chennai Make-a-thon.",
    image: 'configIndia',
    postUrl: "https://lnkd.in/p/gFH3zWaX"
  }
];

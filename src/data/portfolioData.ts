// ═══════════════════════════════════════════════
// Centralized Portfolio Data
// All personal data, experience, skills, projects
// Synchronized with Prince Kumar Sahni's Resume
// ═══════════════════════════════════════════════

export const personalInfo = {
  name: "Prince Kumar Sahni",
  title: "Software Engineer",
  focus: "AI + Python Development",
  headline: "Software Engineer — Focus on AI + Python Development",
  taglines: [
    "Software Engineer",
    "AI + Python Development",
    "AI Agents & RAG Architecture",
    "Distributed Systems & Backend",
    "FastAPI & Cloud Engineering",
  ],
  email: "princekrdss2018@gmail.com",
  phone: "+91 7369900185",
  location: "New Delhi, India",
  website: "https://princesahni.com",
  linkedin: "https://www.linkedin.com/in/mrprince123/",
  github: "https://github.com/mrprince123",
  instagram: "https://www.instagram.com/_mrprince123_/",
  medium: "https://medium.com/@mrprince123",
  twitter: "https://twitter.com/MrPrince185",
  resumeUrl: "https://drive.google.com/file/d/1xPTwQhu9h7sm-PzW5-FlzrL2Jm1UkRrO/view?usp=sharing",
  resumePreviewUrl: "https://drive.google.com/file/d/1xPTwQhu9h7sm-PzW5-FlzrL2Jm1UkRrO/preview",
  bio: `Software Engineer focused on AI + Python development, building production-ready AI agents, retrieval-augmented generation (RAG) architectures, and high-performance backend systems. Experienced with Python, FastAPI, Django, PostgreSQL, Redis, Docker, and AWS.`,
  bioExtended: `Experienced in architecting autonomous agent pipelines, vector search integrations, multi-threaded task queues, and resilient RESTful APIs. Passionate about shipping robust software that bridges cutting-edge AI capabilities with scalable systems engineering.`,
  bioCreative: `Beyond backend engineering, I create open-source developer tools, write technical insights on Medium, and explore visual media as a passionate photographer and Google Maps Local Guide with over 600K+ photo views.`,
};

export const stats = [
  { number: "2+", label: "Years Experience", description: "Building modern backend & full-stack systems" },
  { number: "15+", label: "Client Modules", description: "Delivered for global enterprise clients" },
  { number: "25+", label: "Core Technologies", description: "Python, FastAPI, Django, React, AWS, Docker" },
  { number: "15+", label: "Articles Written", description: "Technical articles on modern software architecture" },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Webkul Software Pvt. Ltd.",
    location: "Noida, UP, India",
    period: "April 2025 - Present",
    description: "Building Python-based backend systems, enterprise e-commerce solutions, UnoPIM extensions, and AI-driven enrichment pipelines for international enterprise clients.",
    achievements: [
      "Ecommerce System: Integrated payment gateways (Paystack, PayUMoney, Stripe) into client's Bagisto e-commerce platform; engineered custom Belgium-specific shipping method.",
      "Extension & Plugin: Developed custom UnoPIM connectors and extensions (Magento 2 & Shopify connector updates, WooCommerce module update, AI-powered feed search, Auto SKU Generator).",
      "Supplier Data Portal: Built a supplier-facing portal for bulk product data import and management, catalog synchronization, RBAC, and multi-step approval workflows.",
      "AI/ML Integration: Developed MagicAI enrichment module (automated background removal, Gemini API product creation from image metadata, automated descriptions/images, RAG-based chat with prompt engineering).",
      "Digital Asset Management Extension: Built S3 media storage with migration command, rate-limited AI auto-tagging background job, bulk tagging, RBAC, and CSV/XLSX import/export.",
      "Technical Delivery & Leadership: Owned end-to-end delivery for 15+ international clients, cross-team coordination (QA/DevOps), L2/L3 support, and mentored 3 junior developers.",
    ],
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "UnoPim",
      "Bagisto",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Celery",
      "AWS S3",
      "Docker",
      "Gemini API",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "Chetu India Pvt. Ltd.",
    location: "Noida, UP, India",
    period: "Jan 2024 - July 2024",
    description: "Engineered scalable multi-tenant architectures, interactive video conferencing systems, and payment infrastructure.",
    achievements: [
      "Multi-Tenant Web Application: Designed and deployed a multi-tenant web application with isolated tenant environments and custom configurations, Docker containerized on VPS.",
      "Video Conferencing & Subscriptions: Integrated Whereby video conferencing into React frontend and Stripe subscriptions; implemented time-limited invitation system with usage limits.",
      "API & Database Optimization: Built resilient RESTful services with automated testing, input validation, and PostgreSQL connection pooling.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "Stripe",
      "Whereby API",
      "Linux",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science (B.Tech CSE)",
    institution: "Gandhi Engineering College, Bhubaneswar, Odisha",
    location: "Bhubaneswar, Odisha",
    period: "2020 - 2024",
    gpa: "8.34 CGPA",
    honors: "First Class with Distinction",
    relevant: [
      "Data Structures & Algorithms",
      "Object Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Linux",
      "Computer Networks",
      "Distributed Systems",
    ],
  },
  {
    degree: "Senior Secondary (Class XII, Science Stream)",
    institution: "St. Xavier's Public School",
    location: "Dalsingsarai, Bihar",
    period: "2018 - 2020",
    gpa: "9.0 / 10",
    honors: "Graduated with Science Stream",
    relevant: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
];

import skillsJson from "./skills.json";

export { skillsJson };

export const skillCategories = skillsJson.map((cat) => ({
  name: cat.name,
  description: cat.description,
  skills: (cat.skills || cat.skillsList || []).map((s: any) => ({
    name: s.name,
    icon: s.icon,
    color: s.color || "#6366f1",
  })),
}));

export const learningTech = [
  "Agentic AI", "Vector Search", "RAG Pipelines", "FastAPI", "UnoPIM", "Bagisto", "Celery", "Kafka",
];

export const devQuotes = [
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it's bad.",
  "It's not a bug — it's an undocumented feature.",
];

export const codeSnippets = [
  `const deploy = async () => {\n  await build();\n  await test();\n  return "🚀 Live!";\n};`,
  `interface Developer {\n  name: "Prince";\n  passion: "∞";\n  coffee: number;\n}`,
  `app.listen(3000, () => {\n  console.log("Server ready");\n});`,
];

export const interests = [
  "Distributed Systems & Python",
  "Agentic AI & LLM Tooling",
  "Product Information Management (PIM)",
  "Technical Writing on Medium",
  "Open Source Developer Tools",
  "Visual Cinematography & Photography",
  "Google Maps Local Guide (600K+ views)",
];

export const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: "princekrdss2018@gmail.com",
    href: "mailto:princekrdss2018@gmail.com",
  },
  {
    icon: "Phone",
    label: "Phone",
    value: "+91 7369900185",
    href: "tel:+917369900185",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "New Delhi, India",
    href: "#",
  },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mrprince123/", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/mrprince123", icon: "Github" },
  { name: "Medium", href: "https://medium.com/@mrprince123", icon: "MessageCircle" },
  { name: "Twitter", href: "https://twitter.com/MrPrince185", icon: "Twitter" },
  { name: "Instagram", href: "https://www.instagram.com/_mrprince123_/", icon: "Instagram" },
];

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Apps", href: "/apps" },
  { name: "Articles", href: "/articles" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contacts", href: "/contact" },
];

// Fallback & Showcase Projects
export const mockProjects = [
  {
    id: 1,
    title: "Thor AI",
    description:
      "A full-stack chat application with Retrieval-Augmented Generation (RAG) capabilities, built with FastAPI (Python backend) and Next.js (TypeScript frontend). Enables users to upload documents, engage in intelligent conversations, and retrieve knowledge with sub-second vector search.",
    coverImage: "",
    category: "ai",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "RAG", "Vector DB", "LangChain"],
    liveUrl: "https://github.com/mrprince123/thor-ai",
    githubUrl: "https://github.com/mrprince123/thor-ai",
    featured: true,
  },
  {
    id: 2,
    title: "MagicAI Enrichment & DAM Module",
    description:
      "Enterprise extension for UnoPIM and Bagisto ecommerce. Automates background removal, extracts product metadata via Gemini API, performs rate-limited AI auto-tagging with Celery & Redis, and manages high-throughput S3 asset storage.",
    coverImage: "",
    category: "ai",
    technologies: ["Python", "UnoPim", "Bagisto", "Gemini API", "Celery", "Redis", "AWS S3"],
    liveUrl: "https://github.com/mrprince123",
    githubUrl: "https://github.com/mrprince123",
    featured: true,
  },
  {
    id: 3,
    title: "Claude CLI UI",
    description:
      "A clean, claude.ai-style browser interface for your local Claude Code agent — chat, live file diffs, shell execution, and tool calls without terminal constraints. Powered by bidirectional WebSockets.",
    coverImage: "",
    category: "web",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Claude Code", "Tailwind CSS"],
    liveUrl: "https://github.com/mrprince123/claude_cli_ui",
    githubUrl: "https://github.com/mrprince123/claude_cli_ui",
    featured: true,
  },
  {
    id: 4,
    title: "Multi-Tenant Enterprise Video Portal",
    description:
      "Multi-tenant web portal providing isolated tenant workspaces, custom tenant branding, Whereby video conferencing rooms, and automated Stripe subscription billing.",
    coverImage: "",
    category: "fullstack",
    technologies: ["React", "Node.js", "Whereby API", "Stripe", "Docker", "PostgreSQL"],
    liveUrl: "https://github.com/mrprince123",
    githubUrl: "https://github.com/mrprince123",
    featured: false,
  },
  {
    id: 5,
    title: "Code Rev – AI Code Review Platform",
    description:
      "Automated code review and refactoring platform. Analyzes pull requests, flags anti-patterns, evaluates security bugs, and suggests optimized idiomatic code fixes using LLMs.",
    coverImage: "",
    category: "ai",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Docker"],
    liveUrl: "https://github.com/mrprince123/Code-Rev-Front",
    githubUrl: "https://github.com/mrprince123/Code-Rev-Front",
    featured: true,
  },
  {
    id: 6,
    title: "DevLink – Developer Directory",
    description:
      "Global networking platform connecting developers worldwide. Features rich developer profile cards, project showcase galleries, and skill-based matching filters.",
    coverImage: "",
    category: "web",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://github.com/mrprince123",
    githubUrl: "https://github.com/mrprince123",
    featured: false,
  },
];

// Resume Projects
export const resumeProjects = [
  {
    name: "Thor AI",
    description:
      "Full-stack chat application with Retrieval-Augmented Generation (RAG) capabilities, built with FastAPI (Python) and Next.js (TypeScript). Sub-second document vector search and prompt orchestration.",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "RAG", "Vector DB"],
    impact: "Sub-second semantic search over custom enterprise documents",
  },
  {
    name: "MagicAI Enrichment & DAM Module",
    description:
      "Automated AI image background removal, Gemini API product metadata generation, Celery/Redis background processing, and AWS S3 Digital Asset Management for UnoPIM & Bagisto.",
    technologies: ["Python", "UnoPim", "Bagisto", "Gemini API", "Celery", "Redis", "AWS S3"],
    impact: "Eliminated 80% manual data entry for catalog product creation",
  },
  {
    name: "Claude CLI UI",
    description:
      "Browser UI for local Claude Code agent workflows, streaming terminal output, file changes, and agent conversations via WebSocket.",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Claude Code"],
    impact: "Streamlined agentic development without command-line bottlenecks",
  },
  {
    name: "Multi-Tenant Video & Billing System",
    description:
      "Designed and deployed multi-tenant web application with isolated environments, Whereby video conferencing, and Stripe subscriptions containerized on VPS.",
    technologies: ["React", "Node.js", "Docker", "Stripe", "Whereby API", "PostgreSQL"],
    impact: "Zero cross-tenant data leakage with automated metered billing",
  },
];

// Mock articles (used as fallback when API is unavailable)
export const mockArticles = [
  {
    id: "med-1",
    title: "How to Work With AI as a Programmer: 8 Lessons From Building Real Software",
    description: "When ChatGPT first became popular, many developers had the same reaction: 'This changes everything.' Suddenly, tasks that once required hours of searching documentation could be completed in minutes.",
    coverImage: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*6iVfPwjzREeBrAsGg5FVQQ.png",
    publishedAt: "2026-09-29",
    articleLink: "https://medium.com/@mrprince123/how-to-work-with-ai-as-a-programmer-8-lessons-from-building-real-software-29066721bcba",
    tags: ["AI", "programmer", "AI Agent"],
    featured: true,
    readTime: "8 min read",
  },
  {
    id: "med-2",
    title: "Vibe Coding and the Types of Developers After AI",
    description: "Software development has quietly entered a new phase. For years, coding was mostly about mastering syntax, frameworks, debugging, and writing every line by hand.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*x0gjvIAvayuObqwBe1xl7Q.png",
    publishedAt: "2026-05-24",
    articleLink: "https://medium.com/@mrprince123/vibe-coding-and-the-types-of-developers-after-ai-8daff30cacaa",
    tags: ["AI", "Vibe Coding", "Coder"],
    featured: true,
    readTime: "7 min read",
  },
  {
    id: "med-3",
    title: "How RFID is Transforming Retail Checkouts: A Deep Dive into Decathlon and Modern Retail Innovation",
    description: "In today's fast-paced retail environment, speed, accuracy, and customer experience have become the defining factors of success. This is where RFID steps in as a game-changing technology.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y-RAZfPNnxNTN_WqHSgK7A.png",
    publishedAt: "2026-03-29",
    articleLink: "https://medium.com/@mrprince123/how-rfid-is-transforming-retail-checkouts-a-deep-dive-into-decathlon-and-modern-retail-innovation-df7e7202ed3c",
    tags: ["Rfid", "Rfid Technology", "Checkout"],
    featured: true,
    readTime: "4 min read",
  },
  {
    id: "med-4",
    title: "Docker Made Simple: The Only Guide Developers Need",
    description: "A complete, beginner-friendly walkthrough of Docker — from 'What even is this?' to running production-ready containers with confidence.",
    coverImage: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*gvSYAYUxZMIiN1QJfDIwrw.png",
    publishedAt: "2026-03-10",
    articleLink: "https://medium.com/@mrprince123/docker-made-simple-the-only-guide-developers-need-3427b6cabbd1",
    tags: ["Docker", "Docker Compose", "Github"],
    featured: true,
    readTime: "15 min read",
  },
  {
    id: "med-5",
    title: "CLI vs GUI — The Interface War That Shapes How We Use Computers",
    description: "The decades-old battle of CLI vs GUI — a battle that has shaped how beginners learn computers, how developers work, and how system administrators deploy servers.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*z6P_j2KUPMb3aui_ie4pYg.png",
    publishedAt: "2025-11-22",
    articleLink: "https://medium.com/@mrprince123/cli-vs-gui-the-interface-war-that-shapes-how-we-use-computers-50fcc271f7a0",
    tags: ["System Design", "Computer Science", "CLI vs GUI"],
    featured: true,
    readTime: "6 min read",
  },
  {
    id: "med-6",
    title: "Monolith vs Microservices: Understanding the Architecture War That Shaped Modern Software",
    description: "Dive deep into the Monolith vs Microservices debate — understand how these architectures evolved, their strengths, weaknesses, and how to choose the right one for scalable systems.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*moLP6Im8xVV5KypwAMQi7g.png",
    publishedAt: "2025-10-10",
    articleLink: "https://medium.com/@mrprince123/monolith-vs-microservices-understanding-the-architecture-war-that-shaped-modern-software-a6c086bdb546",
    tags: ["Distributed System", "Microservices", "Architecture"],
    featured: true,
    readTime: "5 min read",
  },
  {
    id: "med-7",
    title: "Scaling Systems the Right Way: Understanding Vertical and Horizontal Scaling in Depth",
    description: "A detailed guide explaining Vertical and Horizontal Scaling — how they work, their differences, pros and cons, and when to use each for efficient system growth.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mH9gL0w0TKEc-dXohDsW1w.png",
    publishedAt: "2025-10-05",
    articleLink: "https://medium.com/@mrprince123/scaling-systems-the-right-way-understanding-vertical-and-horizontal-scaling-in-depth-40863534dec4",
    tags: ["Vertical Scaling", "Horizontal Scaling", "System Design"],
    featured: false,
    readTime: "7 min read",
  },
  {
    id: "med-8",
    title: "Understanding the Core of Computing: Terminal, Shell, Command Prompt, Command Line, Bash, and Zsh",
    description: "A clear explanation of the Terminal, Shell, Command Prompt, Command Line, Bash, and Zsh — what they are, how they differ, and how they work together.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6iQAiGcfDiGxk7glYJjFJQ.png",
    publishedAt: "2025-10-04",
    articleLink: "https://medium.com/@mrprince123/understanding-the-core-of-computing-terminal-shell-command-prompt-command-line-bash-and-zsh-9b5849ca06b1",
    tags: ["Bash", "Command Line", "Terminal", "Prompt"],
    featured: false,
    readTime: "5 min read",
  },
  {
    id: "med-9",
    title: "Jetpack Compose vs XML: The Future of Layouts in Android App Development",
    description: "Explore core differences, advantages, and trade-offs between Jetpack Compose and XML — and understand why Compose is the future of Android UI development.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mmCQClwnrSXbFhDhlxqDtw.png",
    publishedAt: "2025-10-02",
    articleLink: "https://medium.com/@mrprince123/jetpack-compose-vs-xml-the-future-of-layouts-in-android-app-development-40a49469aa30",
    tags: ["Android", "Android Development", "Jetpack Compose"],
    featured: true,
    readTime: "4 min read",
  },
  {
    id: "med-10",
    title: "System Design Basics: A Deep Dive for Aspiring Engineers",
    description: "A beginner-friendly guide covering key concepts like distributed systems, CAP theorem, and scalability to help you build a strong foundation in software architecture.",
    coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tBWXxMz0pxE_7q-b6tkk3w.png",
    publishedAt: "2025-10-01",
    articleLink: "https://medium.com/@mrprince123/system-design-basics-a-deep-dive-for-aspiring-engineers-68d46fc18732",
    tags: ["System Design", "Computer Science", "CAP Theorem"],
    featured: true,
    readTime: "5 min read",
  },
];

// Resume Certifications
export const resumeCertifications = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2024",
    credentialId: "Anthropic-Claude-Code",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    credentialId: "IBM-PY-DS-2023",
  },
  {
    name: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UDEMY-WD-2023",
  },
];

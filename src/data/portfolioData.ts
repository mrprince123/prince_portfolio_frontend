// ═══════════════════════════════════════════════
// Centralized Portfolio Data
// All personal data, experience, skills, projects
// Synchronized with Prince Kumar Sahni's Resume
// ═══════════════════════════════════════════════

export const personalInfo = {
  name: "Prince Kumar Sahni",
  title: "Software Engineer",
  taglines: [
    "Software Engineer",
    "Python & Backend Systems",
    "Full-Stack Developer",
    "PIM & E-Commerce Specialist",
    "Agentic AI & Automation",
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
  bio: `Software Engineer with 2+ years of experience building Python-based backend systems, enterprise e-commerce solutions, and Product Information Management (PIM) systems. Delivered 15+ custom modules for international clients, working on RESTful APIs, third-party integrations, background processing, and AI-driven features.`,
  bioExtended: `Experienced with Python, Django, FastAPI, PostgreSQL, MySQL, Redis, and AWS services, including S3. Skilled in debugging complex issues, performing root-cause analysis, and delivering reliable backend solutions.`,
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

export const skillCategories = [
  {
    name: "Programming Languages",
    description: "Core languages used for backend logic, scripting, and web systems",
    skills: [
      { name: "Python (OOP)", icon: "Code2", color: "#3776AB" },
      { name: "JavaScript", icon: "Code", color: "#F7DF1E" },
      { name: "TypeScript", icon: "FileCode", color: "#3178C6" },
      { name: "Java", icon: "Coffee", color: "#ED8B00" },
      { name: "SQL", icon: "Database", color: "#00758F" },
      { name: "HTML5 & CSS3", icon: "Layout", color: "#E34F26" },
    ],
  },
  {
    name: "Frameworks & Platforms",
    description: "Backend architectures, microservices, and modern frontend stacks",
    skills: [
      { name: "Django", icon: "Shield", color: "#092E20" },
      { name: "FastAPI", icon: "Zap", color: "#009688" },
      { name: "React.js", icon: "Atom", color: "#61DAFB" },
      { name: "Vue.js", icon: "Component", color: "#4FC08D" },
      { name: "Next.js", icon: "Zap", color: "#ffffff" },
      { name: "Node.js & Express", icon: "Server", color: "#339933" },
      { name: "MVC Architecture", icon: "Layers", color: "#8b5cf6" },
    ],
  },
  {
    name: "APIs & Integrations",
    description: "Enterprise communication protocols, real-time protocols, and third-party SDKs",
    skills: [
      { name: "REST APIs", icon: "Globe", color: "#00f0ff" },
      { name: "GraphQL", icon: "Network", color: "#E10098" },
      { name: "WebSockets", icon: "Radio", color: "#F05032" },
      { name: "Webhooks", icon: "Webhook", color: "#38bdf8" },
      { name: "Third-party APIs & SDKs", icon: "Puzzle", color: "#a855f7" },
    ],
  },
  {
    name: "Databases & In-Memory",
    description: "Relational, document, caching, and performance-tuned data layers",
    skills: [
      { name: "PostgreSQL", icon: "Database", color: "#4169E1" },
      { name: "MySQL", icon: "Cylinder", color: "#4479A1" },
      { name: "Redis (Caching)", icon: "Zap", color: "#DC382D" },
      { name: "MongoDB", icon: "Leaf", color: "#47A248" },
      { name: "Indexing & Sharding", icon: "HardDrive", color: "#10b981" },
      { name: "Stored Procedures & Views", icon: "Table", color: "#6366f1" },
    ],
  },
  {
    name: "Message Brokers & Queues",
    description: "Asynchronous task workers and distributed event messaging",
    skills: [
      { name: "Celery", icon: "Cpu", color: "#37814A" },
      { name: "RabbitMQ", icon: "Inbox", color: "#FF6600" },
      { name: "Apache Kafka", icon: "Activity", color: "#231F20" },
      { name: "Redis Queue", icon: "ListOrdered", color: "#DC382D" },
    ],
  },
  {
    name: "AI & Automation",
    description: "Agentic AI workflows, LLM orchestration, and RAG architectures",
    skills: [
      { name: "Agentic AI", icon: "Bot", color: "#10b981" },
      { name: "Gemini API", icon: "Sparkles", color: "#4285F4" },
      { name: "RAG (Retrieval-Augmented)", icon: "Search", color: "#ec4899" },
      { name: "Prompt Engineering", icon: "Terminal", color: "#8b5cf6" },
      { name: "Vector Search", icon: "Compass", color: "#06b6d4" },
    ],
  },
  {
    name: "PIM & E-Commerce Platforms",
    description: "Product Information Management systems and headless commerce",
    skills: [
      { name: "UnoPim", icon: "Box", color: "#2563eb" },
      { name: "Bagisto", icon: "ShoppingBag", color: "#059669" },
      { name: "Shopify Connector", icon: "ShoppingBag", color: "#95BF47" },
      { name: "WooCommerce", icon: "Store", color: "#96588A" },
      { name: "Magento 2", icon: "Boxes", color: "#EE672F" },
      { name: "BigCommerce", icon: "ShoppingCart", color: "#121118" },
    ],
  },
  {
    name: "Cloud, DevOps & Tools",
    description: "Containerization, cloud infrastructure, CI/CD, and developer tooling",
    skills: [
      { name: "AWS (EC2, S3)", icon: "Cloud", color: "#FF9900" },
      { name: "Docker", icon: "Container", color: "#2496ED" },
      { name: "Linux & Shell", icon: "Terminal", color: "#FCC624" },
      { name: "Nginx", icon: "Server", color: "#009639" },
      { name: "Git & GitHub", icon: "GitBranch", color: "#F05032" },
      { name: "Postman", icon: "Send", color: "#FF6C37" },
    ],
  },
  {
    name: "Payment Gateways",
    description: "Secure fintech integrations and subscription payment processing",
    skills: [
      { name: "Stripe", icon: "CreditCard", color: "#635BFF" },
      { name: "Paystack", icon: "DollarSign", color: "#00C3F7" },
      { name: "PayUMoney", icon: "Wallet", color: "#22C55E" },
      { name: "Razorpay", icon: "CheckCircle", color: "#0C2340" },
    ],
  },
];

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
    id: 1,
    title: "The Future of React: Server Components and Concurrent Features",
    description: "Exploring how React Server Components and Concurrent Features are reshaping the way we build modern web applications.",
    coverImage: "",
    publishedAt: "2024-02-20",
    articleLink: "https://medium.com/@mrprince123/react-server-components",
    tags: ["React", "JavaScript", "Frontend"],
    featured: true,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Python FastAPI: Building High-Performance APIs Quickly",
    description: "Learn how to leverage FastAPI to create fast, modern, and scalable web APIs in Python with automatic documentation and async support.",
    coverImage: "",
    publishedAt: "2024-01-15",
    articleLink: "https://medium.com/@mrprince123/python-fastapi-guide",
    tags: ["Python", "FastAPI", "Backend"],
    featured: true,
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Mastering TypeScript: Tips and Tricks for Scalable Applications",
    description: "A deep dive into TypeScript best practices, advanced types, and patterns for building maintainable and large-scale applications.",
    coverImage: "",
    publishedAt: "2023-11-28",
    articleLink: "https://medium.com/@mrprince123/typescript-tips",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    featured: false,
    readTime: "6 min read",
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

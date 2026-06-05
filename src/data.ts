export const profile = {
  name: 'Peeyush Mishra',
  title: 'AI/ML Engineer · IIIT Nagpur',
  tagline: 'Pre-final year B.Tech CSE (AI/ML) student building agentic AI, RAG systems, and practical products.',
  about:
    'I like working with AI/ML systems, enhancing model performance, and building multi-agent workflows that turn messy ideas into useful, polished products.',
  email: 'peeyush.lyf237@gmail.com',
  phone: '+91 9131248831',
  github: 'https://github.com/Peeyush237',
  linkedin: 'https://www.linkedin.com/in/peeyush-mishra-23187027b/',
  resume: '/Peeyush_CV15.pdf',
  location: 'Nagpur, India',
};

export const skills = {
  languages: ['C', 'C++', 'Python', 'JavaScript'],
  web: ['React', 'Next.js', 'FastAPI', 'Node', 'MCP'],
  databases: ['MySQL', 'PostgreSQL', 'Vector DBs'],
  ai: ['LangChain', 'LangGraph', 'APIs', 'PyTorch', 'RAG', 'Prompt Engineering', 'n8n'],
  tools: ['Docker', 'Weights & Biases', 'Git', 'GitHub', 'Power BI', 'Jupyter Notebook'],
  others: ['SQL Analytics', 'A/B Experimentation', 'OOP', 'DBMS', 'OS', 'CN'],
};

export const education = [
  {
    school: 'Indian Institute of Information Technology, Nagpur',
    degree: 'B.Tech, Computer Science and Engineering (AI/ML)',
    duration: 'Aug 2023 – July 2027',
    location: 'Nagpur, India',
  },
];

export const experience = [
  {
    role: 'AI Engineering Intern',
    org: 'Ekaant',
    duration: 'May 2026 – Present',
    link: 'https://www.linkedin.com/company/ekaant/posts/?feedView=all',
    bullets: [
      'Spearheaded 0-to-1 strategy and PRD for a multi-agent Therapist EHR SaaS, automating clinical workflows.',
      'Engineering a LangGraph orchestration layer integrating LLM APIs across 6 specialized agents to automate SOAP notes, insights, and risk monitoring.',
    ],
  },
];

export const responsibilities = [
  {
    role: 'Team Lead, Post-Production',
    org: 'Tantrafiesta ’25, IIIT Nagpur',
    duration: 'Sept 2025 – Oct 2025',
    bullets: [
      'Directed post-production for flagship event media using Premiere Pro and After Effects; delivered high-retention promo content.',
    ],
  },
  {
    role: 'Creative Intern',
    org: 'MU20 School of Opportunity',
    duration: 'Dec 2024 – March 2025',
    link: 'https://drive.google.com/file/d/1AszVUnEl-fNFAgbTTTH0bWgsfoYMr-IZ/view?usp=sharing',
    bullets: [
      'Co-directed on-field visual content with the DOP; produced viral content garnering 100K+ views within 72 hours of launch.',
    ],
  },
];

export const certifications = [
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    year: '2025',
    link: 'https://learn.nvidia.com/certificates?id=xhDd_tROR4S2pAve6JNVnA',
  },
  {
    title: 'Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp',
    issuer: 'Udemy',
    year: '2025',
    link: 'https://drive.google.com/file/d/1A5snRusBRix54pCyv5LD5CETID8GTCg-/view?usp=sharing',
  },
  {
    title: 'Blen360 Hackathon Finalist (Top 150 of ~2,000)',
    issuer: 'Blen360',
    year: '2026',
  },
];

export const heroProjects = [
  {
    title: 'Intelligent News Platform',
    label: 'React (Vite) · FastAPI · LangGraph · Groq · SSE',
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    title: 'MCP-Powered Agentic Healthcare Scheduler',
    label: 'React · FastAPI · MCP · PostgreSQL · Twilio',
    accent: 'from-fuchsia-400 to-rose-500',
  },
  {
    title: 'LinguaBridge (Cross-Lingual RAG)',
    label: 'Next.js · FastAPI · Llama-3 · FAISS · IndicTrans2',
    accent: 'from-emerald-400 to-teal-500',
  },
];

export const shippedThings = [
  {
    title: 'Intelligent News Platform',
    desc: 'Multilingual feed, 3-node agent pipeline, live SSE streaming, and deterministic fallbacks.',
    tech: 'FastAPI · LangGraph · Groq',
    href: 'https://et-genai-platform.vercel.app/',
    github: 'https://github.com/Peeyush237/Intelligent-Newsroom-webapp-GenAI',
  },
  {
    title: 'MCP-Powered Agentic Healthcare Scheduler',
    desc: 'Role-based booking assistant with tool calling, calendar sync, and secure messaging.',
    tech: 'MCP · PostgreSQL · Twilio',
    href: 'https://agentic-appointment-assistant-mcp.vercel.app/',
    github: 'https://github.com/Peeyush237/Agentic-Appointment-Assistant-MCP',
  },
  {
    title: 'LinguaBridge (Cross-Lingual RAG)',
    desc: 'Odia-to-English retrieval stack with hybrid RAG and translation-backed generation.',
    tech: 'Next.js · FAISS · IndicTrans2',
    href: 'https://rag-for-lrl-using-translation-model.vercel.app/',
    github: 'https://github.com/Peeyush237/RAG_for_LRL_UsingTranslationModel_HFSpaceInference',
  },
  {
    title: 'AI Engineering Intern @ Ekaant',
    desc: 'Built a LangGraph orchestration layer across six specialized agents for a therapist EHR SaaS.',
    tech: 'LangGraph · LLM APIs',
    href: 'https://www.linkedin.com/company/ekaant/posts/?feedView=all',
  },
];

export const contactButtons = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Resume', href: profile.resume },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export const jumpLinks = [
  { label: 'about me', target: 'hero' as const },
  { label: 'skills', target: 'skills' as const },
  { label: 'projects', target: 'projects' as const },
  { label: 'experience', target: 'experience' as const },
  { label: 'leadership', target: 'leadership' as const },
  { label: 'ask me', target: 'chat' as const },
  { label: 'contact', target: 'contact' as const },
] as const;

export const skillRows = [
  { label: 'LANGUAGES', value: skills.languages.join(' · ') },
  { label: 'WEB', value: skills.web.join(' · ') },
  { label: 'DATABASES', value: skills.databases.join(' · ') },
  { label: 'AI / ML', value: skills.ai.join(' · ') },
  { label: 'TOOLS', value: skills.tools.join(' · ') },
  { label: 'OTHERS', value: skills.others.join(' · ') },
];
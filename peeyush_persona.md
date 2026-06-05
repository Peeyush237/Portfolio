# Peeyush Mishra — Complete Persona Document
*For Portfolio Chat Interface · Last Updated: June 2026*

---

## 🧑 IDENTITY & BASICS

- **Full Name:** Peeyush Mishra
- **Location:** Nagpur, India (college) | Indore, Madhya Pradesh (hometown)
- **Email:** peeyush.lyf237@gmail.com
- **Phone:** +91 9131248831
- **GitHub:** https://github.com/Peeyush237
- **LinkedIn:** https://www.linkedin.com/in/peeyush-mishra-23187027b
- **Video Portfolio:** peeyushedits.my.canva.site
- **Vibe in one line:** Pre-final year CS student who turns messy workflows into oddly polished AI systems — and also edits videos that hit 100K+ views.

---

## 🎓 ACADEMICS

- **Institution:** Indian Institute of Information Technology (IIIT), Nagpur
- **Degree:** B.Tech, Computer Science and Engineering
- **Specialization:** Artificial Intelligence & Machine Learning
- **Batch:** August 2023 – July 2027 (Pre-final year as of 2026)
- **Campus:** Nagpur, India

**Academic Character:**
- Deeply research-oriented, especially in NLP and low-resource language processing
- Has independently pursued projects well beyond coursework scope — including LoRA fine-tuning, cross-lingual architectures, and multi-agent orchestration
- Strong systems thinking: approaches problems end-to-end, from architecture to deployment
- Interested in the intersection of AI product strategy and engineering

---

## 💼 PROFESSIONAL EXPERIENCE

### AI Engineering Intern | Ekaant (May 2026 – Present)
- Working on a **0-to-1 product**: a multi-agent Therapist EHR (Electronic Health Records) SaaS
- Wrote the full **PRD (Product Requirements Document)** and led product strategy from scratch
- Building a **LangGraph orchestration layer** with 6 specialized agents:
  - Supervisor Agent, Clinical Agent, Admin Agent, Safety Agent, and more
- Agents automate: SOAP note generation, patient insights extraction, risk monitoring
- This is a real production system — not a demo or toy project
- Demonstrates ability to work at the intersection of AI engineering + product thinking

**What this says about him:** He can own a product end-to-end. Not just "implement this feature" — he thinks about why it exists, what problem it solves, and then builds it.

---

## 🚀 PERSONAL PROJECTS

### 1. Intelligent News Platform
**Stack:** React (Vite), FastAPI, LangGraph, Groq (Llama-3.3-70B), SSE
- Multilingual news app with personalized feed
- 3-node multi-agent pipeline: Fetch → Filter → Format
- Grounded briefings + Q&A with culturally adapted translation in 3 languages
- SSE real-time streaming, relevance scoring across 50+ live headlines
- Robust caching + deterministic fallbacks
- Live demo available

**Highlight:** The deterministic fallback design and relevance scoring show data-first engineering thinking — not just "make it work" but "make it measurable."

---

### 2. MCP-Powered Agentic Healthcare Scheduler
**Stack:** React, FastAPI, MCP, PostgreSQL, Twilio
- Production-ready agentic appointment assistant
- Role-based chat for patients and doctors
- Automated booking, notifications, Google Calendar sync
- Uses MCP (Model Context Protocol) as the orchestration layer
- LLM executes backend tools via unified `/mcp` endpoint
- Real-time availability checks, booking, reporting, secure messaging
- Live demo available

**Highlight:** One of very few student projects using MCP as an orchestration layer — shows he tracks bleeding-edge tooling (MCP was only popularized in late 2024/early 2025).

---

### 3. LinguaBridge (Cross-Lingual RAG)
**Stack:** Next.js, FastAPI, Llama-3, FAISS, IndicTrans2, HuggingFace
- Cross-lingual architecture: Odia queries → English vector database → Odia response
- Two translation models (47 BLEU and 33 BLEU) for input/output translation
- 4-stage hybrid RAG pipeline: Dense → Sparse → Fusion → Reranking
- Retrieves top-k (1–7) chunks from thousands of documents
- Zero-shot inference with 70B LLM in under 5 seconds
- Live demo available

**Highlight:** This is genuinely research-grade work. Hybrid RAG with reranking + cross-lingual translation for a low-resource Indic language is not a weekend project.

---

### 4. MacroLens AI
**Stack:** LangGraph, Python, multi-agent supervisor architecture
- Multi-agent financial analysis system
- Three specialist agents: MacroScout (macro trends), ExposureMapper (exposure analysis), ImpactQuant (quantitative impact)
- Supervisor architecture coordinating specialist agents
- Built under time constraints as an assignment, later refined as portfolio project

---

### 5. ET GenAI Platform
**Stack:** React, FastAPI, LangGraph
- AI-powered financial news intelligence platform
- Submitted to the **Economic Times GenAI Hackathon**
- Live deployment achieved

---

### 6. Krishi Sakhi
- AI farming assistant for **Malayali farmers**
- Demonstrates his interest in building for underserved communities
- Low-resource language + agriculture domain intersection

---

### 7. Gondi Language Tokenizer
- Custom tokenizer for **Gondi**, a critically low-resource tribal language of central India
- Reflects his passion for linguistic equity in AI

---

### 8. Hindi ASR Fine-tuning (Whisper)
- Fine-tuned Whisper-small on Hindi audio data
- WER reduction: **83% → 46%** on Hindi FLEURS benchmark
- Built text normalization pipeline
- Hindi spelling error classification
- Lattice-based WER evaluation

---

### 9. Cross-Lingual RAG (Odia) — Research Mini-Project
- Custom SentencePiece BPE tokenizer trained on Odia corpus
- Asymmetric vocabulary expansion of IndicTrans2 (encoder frozen, decoder/LM head expanded)
- LoRA fine-tuning with specific cross-attention layer targeting
- Diagnosed two failure modes: insufficient token exposure + missing cross-attention layers in LoRA targets
- This is genuine ML research, not application development

---

### 10. TheoremExplain Pipeline
- Multi-agent system converting research PDFs into Manim educational videos
- Fully free-tier stack: Gemini, gTTS, ChromaDB, Docker
- Reflects interest in AI for education

---

### 11. Offline RL / DQN Projects
- GRU-based behavior cloning on D4RL `halfcheetah-medium-v2` dataset (partially observable states)
- DQN energy optimization using UCI Appliances Energy Dataset
- Shows depth in reinforcement learning beyond typical student scope

---

### 12. Sinhala Text Simplification
- NLP work on Sinhala, another low-resource language
- Pattern: he consistently picks underserved languages — Gondi, Odia, Sinhala, Hindi, Malayalam

---

## 🛠️ TECHNICAL SKILLS

### Programming Languages
- **Python** (primary — deeply proficient)
- C, C++
- JavaScript

### AI / ML Stack
- **LangChain, LangGraph** (expert-level — used across multiple production projects)
- **PyTorch** (deep learning, fine-tuning, LoRA)
- RAG systems (Dense, Sparse, Hybrid, Fusion, Reranking — all variants)
- Prompt Engineering
- Whisper (ASR fine-tuning)
- IndicTrans2 (translation models)
- FAISS, ChromaDB (vector databases)
- Weights & Biases (experiment tracking)
- n8n (workflow automation, familiar)
- HuggingFace ecosystem

### Web Technologies
- React, Next.js (frontend)
- FastAPI, Node.js (backend)
- MCP (Model Context Protocol)
- SSE (Server-Sent Events / real-time streaming)

### Databases
- MySQL, PostgreSQL
- Vector DBs (FAISS, ChromaDB)

### Tools & Platforms
- Docker
- Git, GitHub
- Power BI
- Jupyter Notebook
- Premiere Pro, After Effects (video production)

### Extra Skills
- SQL Analytics
- A/B Experimentation
- OOP, DBMS, OS, Computer Networks

---

## 🏆 ACHIEVEMENTS & CERTIFICATIONS

### Hackathons
- **Blen360 Hackathon Finalist (2026)** — Top 150 out of ~2,000 registrations. Advanced to final offline round.
- **Economic Times GenAI Hackathon** — Built and deployed ET GenAI Platform submission
- **Blood Donation AI Hackathon** — Built AAYU system (4-module: AAYU Core, SAHAYAK, BANDHAN, SMRITI) for Blood Warriors NGO's Thalassemia patient workflows

### Certifications
- **Fundamentals of Deep Learning** — NVIDIA, 2025
- **Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp** — Udemy, 2025

---

## 👔 POSITIONS OF RESPONSIBILITY

### Team Lead, Post-Production | Tantrafiesta '25, IIIT Nagpur
**Sept 2025 – Oct 2025**
- Led post-production for the flagship annual tech fest of IIIT Nagpur
- Used Premiere Pro and After Effects
- Delivered high-retention promotional content

### Creative Intern | MU20 School of Opportunity
**Dec 2024 – March 2025**
- Co-directed on-field visual content with the Director of Photography
- Produced viral content: **100K+ views within 72 hours of launch**
- Certificate earned

---

## 🎨 CREATIVE SIDE

Peeyush is not just an engineer — he has a genuine creative media background:
- Video editing portfolio: peeyushedits.my.canva.site
- Post-production experience with Premiere Pro and After Effects
- Has directed on-field shoots with a DOP (Director of Photography)
- Viral content creator (100K+ views)
- Strong aesthetic sensibility — reflected in how he designs his projects and portfolio

**This is rare:** Most AI engineers have zero creative/visual instinct. Peeyush bridges both worlds.

---

## 💡 INTERESTS & INTELLECTUAL PASSIONS

### Low-Resource Language AI
This is arguably his deepest intellectual passion. He has worked on:
- Gondi (tribal language, central India — critically endangered)
- Odia (Eastern India)
- Sinhala (Sri Lanka)
- Hindi (high-resource but technically challenging for ASR)
- Malayalam (via Krishi Sakhi)

**Why this matters to him:** He believes AI should work for everyone, including speakers of languages that Big Tech ignores. This is both a technical challenge and a values statement.

### Agentic AI & Multi-Agent Systems
He has built more multi-agent systems than most professional engineers:
- LangGraph orchestration (Ekaant, MacroLens, ET GenAI, News Platform)
- MCP-based orchestration (Healthcare Scheduler)
- Supervisor architectures, specialist agent design
- He thinks in terms of agent roles, tool calling, and orchestration flows — not just prompts

### RAG Systems
Hybrid RAG is a recurring specialty:
- Dense + Sparse + Fusion + Reranking pipelines
- Cross-lingual RAG (unique intersection of translation + retrieval)
- Evaluation frameworks (golden QA datasets, WER, BLEU)

### AI for Social Good
- Farmers (Krishi Sakhi)
- Thalassemia patients (Blood Warriors / AAYU)
- Underserved language speakers
- Mental health practitioners (Klarify interest)

### Math/CS Education
- TheoremExplain pipeline (research PDFs → Manim animations)
- Sustained interest in making complex concepts visually accessible

### Reinforcement Learning
- Offline RL, behavior cloning
- DQN for real-world optimization problems
- More theoretical depth than typical application-focused students

---

## 🧠 WHAT MAKES PEEYUSH DIFFERENT

1. **Research + Engineering + Product — all three.** Most people pick one. He wrote a PRD, then built the LangGraph backend, then shipped it. Few students can operate across that entire stack.

2. **Obsession with low-resource languages.** This is not a resume checkbox — it's a consistent pattern across 5+ projects over multiple years. He genuinely cares about linguistic equity in AI.

3. **Bleeds-edge tooling.** MCP in early 2025, LangGraph orchestration, IndicTrans2, hybrid RAG with reranking — he finds and uses things before they become mainstream.

4. **Creative + Technical duality.** 100K+ view video content + production-grade LangGraph systems. This combination is genuinely rare and makes him strong at AI product roles.

5. **Ships things.** Multiple live demos. ET GenAI Hackathon deployment. Ekaant internship. Not a "I built this locally once" person.

6. **Builds for the underserved.** Farmers, thalassemia patients, endangered language speakers. This reflects genuine values, not just portfolio diversity.

---

## 🎯 WHAT HE'S LOOKING FOR

- **Role:** Generative AI Engineer Intern
- **Focus areas:** Agentic workflows, RAG systems, multi-agent architecture, NLP, low-resource language modeling
- **Status:** Open to internships (as of 2026)
- **Batch:** Graduating July 2027

---

## 💬 PERSONALITY & VIBE

- Describes himself: *"Romanticizing student life (and building in public)"*
- Life goal: *"Ship something that matters"*
- Currently: Agentic AI + RAG
- Has a dry humor — portfolio tagline: *"I build agentic workflows faster than replying to texts :)"*
- Not a "hustle culture" person — more of a "build quietly, ship loudly" type
- Has strong opinions on workflow polish and system design
- Learns fast under pressure (built backend fundamentals — REST, Next.js, Prisma — in 2 days for an interview)
- Iterative worker — resumes, projects, and codebases get multiple refined passes

---

## 📍 QUICK FACTS FOR CHAT INTERFACE

| Field | Value |
|-------|-------|
| Name | Peeyush Mishra |
| College | IIIT Nagpur |
| Year | Pre-final (3rd year) |
| Graduation | July 2027 |
| Current Role | AI Engineering Intern @ Ekaant |
| Primary Language | Python |
| Primary Framework | LangGraph + LangChain |
| Specialty | Agentic AI, RAG, Low-resource NLP |
| Hometown | Indore, MP |
| Open to | Internships (GenAI / AI Engineering) |
| GitHub | github.com/Peeyush237 |
| LinkedIn | linkedin.com/in/peeyush-mishra-23187027b |
| Email | peeyush.lyf237@gmail.com |
| Hobbies | Video editing, building AI systems, low-resource NLP research |
| Fun fact | Made viral content with 100K+ views AND fine-tuned Whisper for Hindi ASR in the same year |

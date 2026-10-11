export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  category: 'Browser Extension' | 'AI / RAG' | 'Machine Learning' | 'Conversational AI' | 'Computer Vision';
  status: 'Public Repository' | 'Active Exploration' | 'Open Source';
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    tag: string;
  }[];
}

export interface LearningItem {
  id: string;
  title: string;
  area: string;
  description: string;
  status: 'Active Focus' | 'In Progress' | 'Continuous Preparation';
  tags: string[];
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  isFork?: boolean;
  badge?: string;
}

export const PORTFOLIO_CONFIG = {
  developer: {
    name: "Likitha",
    handle: "Likitha3126",
    githubUrl: "https://github.com/Likitha3126",
    roleEyebrow: "AI/ML · PYTHON · SOFTWARE DEVELOPMENT · OPEN SOURCE",
    headlineLine1: "Building intelligent systems.",
    headlineLine2: "Writing code that matters.",
    supportingText:
      "Exploring machine learning, building practical software, solving algorithmic problems, and contributing to open source.",
    aboutHeading: "A little about how I build.",
    aboutIntro:
      "I am a computer science student with a deep passion for Artificial Intelligence, Machine Learning, and Python systems. Rather than viewing code as static syntax, I approach development as an iterative craft—building practical software, understanding foundational data structures, and contributing in the open.",
    interests: ["AI/ML", "Python", "Algorithms", "Open Source"],
  },

  projects: [
    {
      id: "slopfilter",
      title: "SlopFilter",
      featured: true,
      category: "Browser Extension",
      status: "Public Repository",
      description:
        "A browser extension designed to identify and filter potentially AI-generated YouTube Shorts using explainable heuristic scoring and content metadata.",
      longDescription:
        "Engineered with Manifest V3 to detect low-effort AI repetitive patterns, synthetic voiceover cues, and metadata anomalies in short-form video feeds. Provides users fine-grained scoring thresholds and an explainable breakdown of why specific content was flagged.",
      technologies: ["JavaScript", "Browser Extensions", "Manifest V3", "Heuristic Scoring", "DOM MutationObserver"],
      githubUrl: "https://github.com/Likitha3126/SlopFilter",
      demoUrl: undefined, // marked undefined as per rule: only link when genuine live demo exists
      metrics: [
        { label: "Architecture", value: "Manifest V3" },
        { label: "Scoring Engine", value: "Heuristic" },
        { label: "Target Feed", value: "YouTube Shorts" }
      ]
    },
    {
      id: "document-qa-rag",
      title: "Document Q&A with RAG",
      featured: false,
      category: "AI / RAG",
      status: "Public Repository",
      description:
        "A document question-answering system that retrieves relevant passages from uploaded documents and uses a language model to generate context-aware responses.",
      longDescription:
        "Builds an end-to-end Retrieval-Augmented Generation pipeline using ChromaDB for persistent vector embeddings, Ollama for local LLM inference, and FastAPI for high-throughput streaming endpoints. Features chunking strategies and citation grounding.",
      technologies: ["Python", "FastAPI", "RAG", "ChromaDB", "Ollama", "Embeddings"],
      githubUrl: "https://github.com/Likitha3126/AI-Document-QA-RAG",
      demoUrl: undefined,
      metrics: [
        { label: "Vector DB", value: "ChromaDB" },
        { label: "LLM Backend", value: "Ollama Local" },
        { label: "API Framework", value: "FastAPI" }
      ]
    },
    {
      id: "navdr",
      title: "NavDR",
      featured: false,
      category: "Machine Learning",
      status: "Public Repository",
      description:
        "A navigation dead-reckoning project exploring machine-learning-based speed estimation and predictive model evaluation.",
      longDescription:
        "Investigates vehicle dead-reckoning and resilient positioning during GNSS outages using smartphone inertial measurement sensors (accelerometer & gyroscope). Uses Random Forest regressors and signal filtering to estimate speed and trajectory.",
      technologies: ["Python", "Machine Learning", "Random Forest", "Data Analysis", "Sensor Fusion"],
      githubUrl: "https://github.com/Likitha3126/NavDR",
      demoUrl: undefined,
      metrics: [
        { label: "Model Type", value: "Random Forest Regressor" },
        { label: "Input Modality", value: "IMU / Inertial Data" },
        { label: "Core Problem", value: "GNSS Outage Dead-Reckoning" }
      ]
    },
    {
      id: "krishicopilot",
      title: "KrishiCopilot",
      featured: false,
      category: "Conversational AI",
      status: "Public Repository",
      description:
        "An agriculture-focused chatbot concept designed to help users access farming-related information.",
      longDescription:
        "An AI-powered multilingual agricultural advisory concept that combines RAG, contextual farmer profiling, voice interaction cues, weather intelligence, and disease diagnosis guides into conversational advice for agricultural decisions.",
      technologies: ["Python", "AI", "Conversational Systems", "RAG", "FastAPI"],
      githubUrl: "https://github.com/Likitha3126/KrishiCopilot",
      demoUrl: undefined,
      metrics: [
        { label: "Domain", value: "AgriTech Advisory" },
        { label: "Modalities", value: "Text & Voice Cues" },
        { label: "Knowledge Source", value: "Domain RAG" }
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: "Programming",
      description: "Core languages used for problem solving, algorithmic challenges, and systems development.",
      skills: [
        { name: "Python", description: "Primary language for ML modeling, data pipelines, automation, and backend architectures", tag: "Primary" },
        { name: "JavaScript", description: "Modern ES6+ for browser extensions, frontends, and dynamic web interfaces", tag: "Frontend & Ext" },
        { name: "SQL", description: "Relational database querying, joins, indexing, and schema design", tag: "Data Queries" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Theoretical knowledge and practical implementation of learning pipelines and model evaluation.",
      skills: [
        { name: "Machine Learning", description: "Supervised and unsupervised learning, regression, classification, and ensemble techniques", tag: "Core ML" },
        { name: "NumPy", description: "High-performance array computation, vectorization, and matrix manipulation", tag: "Scientific Computing" },
        { name: "Data Preprocessing", description: "Feature engineering, scaling, missing-value imputation, and categorical encoding", tag: "Pipelines" },
        { name: "Model Evaluation", description: "Precision, recall, F1-score, ROC-AUC, confusion matrices, and cross-validation", tag: "Validation" }
      ]
    },
    {
      title: "Development",
      description: "Frameworks, protocols, and version control workflows for shipping robust applications.",
      skills: [
        { name: "React", description: "Component-driven user interfaces, state hooks, and reactive UI architecture", tag: "UI Framework" },
        { name: "FastAPI", description: "Asynchronous Python web framework for ML model serving and RESTful microservices", tag: "API Backend" },
        { name: "REST APIs", description: "Stateless architecture, HTTP lifecycle, JSON payload structures, and client integrations", tag: "Integration" },
        { name: "Git and GitHub", description: "Version control branching, PR workflows, code reviews, and open-source collaboration", tag: "VCS" }
      ]
    },
    {
      title: "Tools & Infrastructure",
      description: "Databases, vector stores, containerization, and local AI runtime tooling.",
      skills: [
        { name: "PostgreSQL", description: "Production relational data storage, transactions, and relational modeling", tag: "Relational DB" },
        { name: "ChromaDB", description: "Persistent vector database for embedding indexing and RAG nearest-neighbor queries", tag: "Vector DB" },
        { name: "Ollama", description: "Local execution and inference for open-weights LLMs in decoupled pipelines", tag: "Local AI" },
        { name: "Docker", description: "Containerizing services, environment isolation, and predictable builds", tag: "Containers" }
      ]
    }
  ] as SkillCategory[],

  openSource: {
    heading: "Learning in the open.",
    subtitle:
      "Public repositories, code exploration, and community collaboration. The best way to master software engineering is to write real code where others can review and test it.",
    githubProfileUrl: "https://github.com/Likitha3126",
    featuredRepos: [
      {
        name: "SlopFilter",
        description: "Browser extension using heuristic scoring to detect AI-generated short-form video content.",
        language: "JavaScript",
        url: "https://github.com/Likitha3126/SlopFilter",
        badge: "Featured Extension"
      },
      {
        name: "AI-Document-QA-RAG",
        description: "Document retrieval and context-augmented question answering using ChromaDB and local LLMs.",
        language: "Python",
        url: "https://github.com/Likitha3126/AI-Document-QA-RAG",
        badge: "RAG System"
      },
      {
        name: "NavDR",
        description: "Inertial sensor fusion and machine learning dead-reckoning speed estimator for resilient navigation.",
        language: "Python",
        url: "https://github.com/Likitha3126/NavDR",
        badge: "ML Research"
      },
      {
        name: "KrishiCopilot",
        description: "AI agricultural advisory assistant combining domain knowledge retrieval and farmer profiling.",
        language: "Python",
        url: "https://github.com/Likitha3126/KrishiCopilot",
        badge: "Conversational AI"
      },
      {
        name: "RagaAI-Catalyst",
        description: "Python SDK for Agent AI Observability, Multi-agent Tracing, and Evaluation Framework.",
        language: "Python",
        url: "https://github.com/Likitha3126/RagaAI-Catalyst",
        isFork: true,
        badge: "Open Source Fork"
      },
      {
        name: "Credit_Risk_Prediction",
        description: "Loan approval classification with comparative evaluation across precision, recall, and ensemble trees.",
        language: "Jupyter Notebook",
        url: "https://github.com/Likitha3126/Credit_Risk_Prediction",
        badge: "Data Science"
      }
    ] as OpenSourceRepo[]
  },

  learning: {
    heading: "What I'm exploring.",
    subtitle:
      "Learning is not a static state—it is an active pursuit. Here are the core areas I am currently immersing myself in, grounded in fundamentals and rigorous practice.",
    items: [
      {
        id: "ml-fundamentals",
        title: "Machine Learning Fundamentals",
        area: "AI & Statistical Foundations",
        description:
          "Deepening intuition in mathematical foundations (linear algebra, probability, calculus), loss functions, optimization algorithms, and gradient descent mechanics beyond black-box libraries.",
        status: "Active Focus",
        tags: ["Mathematics for ML", "Loss Surfaces", "Regularization", "Optimization"]
      },
      {
        id: "dsa-algorithms",
        title: "Data Structures & Algorithmic Problem-Solving",
        area: "Computer Science Core",
        description:
          "Rigorous daily problem solving covering graph traversals, dynamic programming, tree balancing, sliding window techniques, and asymptotic complexity trade-offs.",
        status: "Active Focus",
        tags: ["Dynamic Programming", "Graphs", "Trees", "Complexity Analysis"]
      },
      {
        id: "python-systems",
        title: "Advanced Python Development",
        area: "Software Engineering",
        description:
          "Exploring concurrency (asyncio, multiprocessing), type hint protocols, metaprogramming, profiling memory bottlenecks, and designing clean decoupled modular codebases.",
        status: "Active Focus",
        tags: ["asyncio", "Design Patterns", "Typing Protocols", "Profiling"]
      },
      {
        id: "gate-prep",
        title: "GATE Computer Science Preparation",
        area: "Academic & Core Theory",
        description:
          "Systematic study of Operating Systems, DBMS internal engines, Computer Networks, Theory of Computation, and Compiler Design to ground practical work in computer engineering fundamentals.",
        status: "Continuous Preparation",
        tags: ["Operating Systems", "DBMS Internals", "Computer Networks", "Theory of Computation"]
      },
      {
        id: "gsoc-open-source",
        title: "Open-Source Contributions & GSoC Preparation",
        area: "Community & Global Code",
        description:
          "Studying large open-source AI and developer tooling codebases, triaging issues, understanding RFCs, and preparing for prospective Google Summer of Code (GSoC) student contributions.",
        status: "In Progress",
        tags: ["Issue Triaging", "Open Source RFCs", "Code Review", "Tooling"]
      }
    ] as LearningItem[]
  },

  footer: {
    heading: "Curiosity drives the code.",
    supportingText: "Explore the projects, experiments, and ideas taking shape.",
    primaryCtaText: "Explore GitHub",
    closingLine: "Designed with curiosity. Built with code.",
  }
};

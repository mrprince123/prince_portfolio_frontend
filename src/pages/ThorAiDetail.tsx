import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/seo";
import {
  Bot,
  Github,
  ExternalLink,
  Copy,
  Check,
  ArrowLeft,
  Terminal,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Sparkles,
  GitFork,
  Star,
  FileText,
  Workflow,
  Code2,
  RefreshCw,
  Server,
  Zap,
} from "lucide-react";

// Built-in verified fallback README in case offline or GitHub rate limits
const FALLBACK_README = `# RAG Chat Application

A full-stack chat application with Retrieval-Augmented Generation (RAG) capabilities, built with **FastAPI** (Python backend) and **Next.js** (TypeScript frontend). This application enables users to upload documents, engage in intelligent conversations with AI, and retrieve information from their uploaded files using vector embeddings and semantic search.

## ✨ Features

### 🤖 AI Chat with RAG
- **Intelligent Conversations**: Chat with Claude, GPT-4, or other frontier LLM providers
- **Document-Aware Responses**: Retrieve and cite relevant information from uploaded documents
- **Vector Embeddings**: Semantic search using advanced embedding models
- **Multi-Provider Support**: Integrate with multiple LLM providers (extensible architecture)

### 📁 Document Management
- **File Upload**: Upload PDFs, documents, and markdown text files
- **Automatic Chunking**: Smart document chunking with configurable overlap for optimal retrieval
- **Vector Storage**: Persistent vector store for fast sub-millisecond semantic search
- **Citation Support**: Track and display exact page and paragraph sources for retrieved information

### 🔐 Authentication & Security
- **User Authentication**: JWT-based secure authentication with bcrypt password hashing
- **User Profiles**: Personal user settings, API keys, and model preferences
- **Secure File Storage**: Encrypted and isolated file management per tenant

### ⚙️ Customization
- **Theme Settings**: Seamless light/dark mode toggle
- **Provider Configuration**: Configure LLM providers, temperature, and top-p sampling
- **Chat History**: Persistent conversation management with session rollback
- **Multi-Session Support**: Manage concurrent isolated chat sessions

## 🏗️ Architecture

### Backend (FastAPI)
\`\`\`
backend/
├── app/
│   ├── api/              # API endpoints (/chat, /documents, /auth)
│   ├── auth/             # JWT Authentication & password hashing
│   ├── database/         # SQLAlchemy ORM, SQLite / PostgreSQL
│   ├── models/           # Pydantic schemas & DB models
│   ├── rag/              # RAG pipeline (chunking, embeddings, vector store)
│   └── services/         # Business logic & LLM provider adapters
└── tests/                # Pytest integration & unit test suite
\`\`\`

**Key Components:**
- **RAG Pipeline**: Document loading, smart chunking, embeddings generation, and similarity retrieval
- **LLM Integration**: Streaming client with fallback across model providers
- **Chat Service**: Conversation context builder with semantic memory injection
- **Document Service**: File validation, extraction, chunk indexing, and deletion
- **Settings Service**: User-specific configuration and telemetry tracking

### Frontend (Next.js)
\`\`\`
frontend/
├── app/                  # Next.js App Router (chat, dashboard, settings, auth)
├── components/          # Modular Tailwind + Radix UI components
├── lib/                 # API client, SSE streaming handlers, state stores
└── types/               # TypeScript interface contracts
\`\`\`

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+
- OpenAI or Anthropic API Key

### Backend Setup
\`\`\`bash
# 1. Clone repository
git clone https://github.com/mrprince123/thor-ai.git
cd thor-ai/backend

# 2. Virtual environment setup
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
cp .env.example .env
# Add OPENAI_API_KEY / ANTHROPIC_API_KEY and SECRET_KEY

# 5. Start development server
uvicorn app.main:app --reload --port 8000
\`\`\`

### Frontend Setup
\`\`\`bash
cd ../frontend

# 1. Install packages
npm install

# 2. Configure environment
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# 3. Start Next.js development server
npm run dev
\`\`\`

## 📡 Core API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| \`POST\` | \`/api/auth/register\` | Register new user account |
| \`POST\` | \`/api/auth/token\` | Login and obtain JWT access token |
| \`POST\` | \`/api/documents/upload\` | Upload PDF/text document and trigger chunking & embedding |
| \`GET\` | \`/api/documents\` | List all indexed documents for authenticated user |
| \`DELETE\` | \`/api/documents/{id}\` | Remove document and purge associated vectors |
| \`POST\` | \`/api/chat\` | Stream AI conversation with semantic RAG citations |
| \`GET\` | \`/api/chat/history\` | Retrieve paginated conversation history |

## 🛠️ Technology Stack

- **Backend**: FastAPI, Python 3.11, Pydantic v2, SQLAlchemy, Uvicorn
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Lucide Icons
- **RAG & Search**: LangChain / LlamaIndex primitives, ChromaDB / PGVector, Sentence Transformers
- **Auth & Security**: OAuth2 with Password Flow, JWT tokens, Passlib bcrypt
`;

export const ThorAiDetail = () => {
  const [readmeContent, setReadmeContent] = useState<string>(FALLBACK_README);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedClone, setCopiedClone] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"readme" | "architecture" | "api" | "quickstart">("readme");
  const [isLiveFetched, setIsLiveFetched] = useState<boolean>(false);

  // Fetch live README from GitHub
  useEffect(() => {
    let isMounted = true;
    const fetchReadme = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://raw.githubusercontent.com/mrprince123/thor-ai/main/README.md");
        if (res.ok) {
          const text = await res.sentText ? await res.text() : await res.text();
          if (isMounted && text && text.trim().length > 50) {
            setReadmeContent(text);
            setIsLiveFetched(true);
          }
        }
      } catch {
        // Fall back gracefully to pre-seeded complete README
        if (isMounted) setIsLiveFetched(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchReadme();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopyClone = () => {
    navigator.clipboard.writeText("git clone https://github.com/mrprince123/thor-ai.git");
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <>
      <Seo
        title="Thor AI – Full-Stack RAG System | Prince Kumar Sahni"
        description="Detailed technical breakdown and live GitHub README for Thor AI: A full-stack Retrieval-Augmented Generation assistant built by Prince Kumar Sahni using FastAPI, Next.js, and vector embeddings."
        url="https://princesahni.com/projects/thor-ai"
      />

      <div className="container mx-auto px-4 sm:px-6 py-10 max-w-7xl">
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-[#4361ee] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4361ee]/15 text-[#4895ef] border border-[#4361ee]/30 font-mono text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4895ef] animate-pulse" />
              {isLiveFetched ? "Synced from GitHub" : "Local Verified Cache"}
            </span>

            <a
              href="https://github.com/mrprince123/thor-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3.5 py-1.5 font-mono text-xs text-foreground hover:border-[#4361ee]/50 hover:bg-[#4361ee]/10 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Repo</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mt-8 rounded-3xl border border-[#4361ee]/30 bg-gradient-to-b from-card via-card to-[#4361ee]/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#4361ee]/20 blur-3xl"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4361ee] text-white font-mono text-xs font-bold shadow-md shadow-[#4361ee]/30">
                <Bot className="h-3.5 w-3.5" />
                <span>FLAGSHIP AI SYSTEM</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card/80 border border-border font-mono text-xs text-muted-foreground">
                <Cpu className="h-3 w-3 text-[#4895ef]" />
                FastAPI + Next.js
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card/80 border border-border font-mono text-xs text-muted-foreground">
                <Database className="h-3 w-3 text-[#4895ef]" />
                Vector Embeddings & Semantic Search
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              Thor <span className="text-theme-gradient">AI</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Full-Stack Retrieval-Augmented Generation (RAG) assistant designed for document ingestion,
              high-density semantic vector search, multi-provider LLM orchestration, and pinpoint source citations.
            </p>

            {/* Quick Actions & Clone Command */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/mrprince123/thor-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4361ee] px-5 py-2.5 font-bold text-white shadow-lg shadow-[#4361ee]/30 hover:bg-[#3a56d4] transition-all hover:scale-[1.02] text-xs font-mono"
              >
                <Github className="h-4 w-4" />
                <span>Star on GitHub</span>
              </a>

              <button
                onClick={handleCopyClone}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/90 px-4 py-2.5 font-mono text-xs text-foreground hover:border-[#4361ee]/50 transition-colors"
                title="Copy git clone command"
              >
                <Terminal className="h-3.5 w-3.5 text-[#4895ef]" />
                <span className="text-muted-foreground">git clone https://github.com/mrprince123/thor-ai.git</span>
                {copiedClone ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Technical Highlights Telemetry Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="font-mono text-[11px] uppercase tracking-wider">Backend Pipeline</span>
              <Server className="h-4 w-4 text-[#4895ef]" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">FastAPI</span>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">Async Python 3.11 + Pydantic v2</p>
          </div>

          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="font-mono text-[11px] uppercase tracking-wider">Interface Client</span>
              <Code2 className="h-4 w-4 text-[#4895ef]" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Next.js 14</span>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">App Router + Tailwind + SSE</p>
          </div>

          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="font-mono text-[11px] uppercase tracking-wider">Vector Store</span>
              <Database className="h-4 w-4 text-[#4895ef]" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Chroma / PGVector</span>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">Cosine similarity top-k search</p>
          </div>

          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-center justify-between text-muted-foreground mb-1">
              <span className="font-mono text-[11px] uppercase tracking-wider">LLM Orchestration</span>
              <Zap className="h-4 w-4 text-[#4895ef]" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">Multi-Provider</span>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">Claude 3.5, GPT-4o, Local Ollama</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border pb-3">
          <button
            onClick={() => setActiveTab("readme")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
              activeTab === "readme"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>GitHub README.md</span>
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
              activeTab === "architecture"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
            }`}
          >
            <Workflow className="h-3.5 w-3.5" />
            <span>System Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("api")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
              activeTab === "api"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
            }`}
          >
            <Server className="h-3.5 w-3.5" />
            <span>API Specification</span>
          </button>

          <button
            onClick={() => setActiveTab("quickstart")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-xs transition-all ${
              activeTab === "quickstart"
                ? "bg-[#4361ee] text-white font-bold shadow-md shadow-[#4361ee]/20"
                : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-[#4361ee]/30"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Local Deployment</span>
          </button>
        </div>

        {/* Tab 1: Live GitHub README View */}
        {activeTab === "readme" && (
          <div className="mt-8 rounded-2xl border border-border bg-card/70 p-6 sm:p-10 backdrop-blur-xl">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-3 font-mono text-xs text-muted-foreground">
                <RefreshCw className="h-6 w-6 text-[#4895ef] animate-spin" />
                <span>Fetching live README from GitHub (mrprince123/thor-ai)...</span>
              </div>
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                <div className="p-4 rounded-xl bg-muted/40 border border-border mb-6 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#4895ef]" />
                    <span>mrprince123/thor-ai/README.md</span>
                  </span>
                  <a
                    href="https://raw.githubusercontent.com/mrprince123/thor-ai/main/README.md"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4895ef] hover:underline"
                  >
                    Raw Source ↗
                  </a>
                </div>

                {/* Markdown text formatted into clean structured view */}
                <div className="space-y-6 font-sans">
                  {readmeContent.split("\n\n").map((block, idx) => {
                    const trimmed = block.trim();
                    if (trimmed.startsWith("# ")) {
                      return (
                        <h1 key={idx} className="font-display text-3xl sm:text-4xl font-extrabold text-foreground border-b border-border pb-3">
                          {trimmed.replace("# ", "")}
                        </h1>
                      );
                    }
                    if (trimmed.startsWith("## ")) {
                      return (
                        <h2 key={idx} className="font-display text-2xl font-bold text-foreground mt-8 border-b border-border/60 pb-2">
                          {trimmed.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h3 key={idx} className="font-display text-lg font-bold text-[#4895ef] mt-4">
                          {trimmed.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith("```")) {
                      const lines = trimmed.split("\n");
                      const code = lines.slice(1, -1).join("\n");
                      return (
                        <pre key={idx} className="rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-100 overflow-x-auto border border-slate-800">
                          <code>{code}</code>
                        </pre>
                      );
                    }
                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                      const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-1.5 text-sm text-foreground/90 leading-relaxed font-sans">
                          {items.map((it, i) => (
                            <li key={i} className="text-muted-foreground">
                              <span className="text-foreground">{it.replace(/^[-*]\s+/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="text-sm leading-relaxed text-foreground/90 font-sans">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Architecture Deep Dive */}
        {activeTab === "architecture" && (
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Full-Stack RAG Ingestion & Query Flow
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Thor AI separates offline ingestion from online low-latency inference using asynchronous chunking and vector indices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="rounded-xl border border-[#4361ee]/20 bg-[#4361ee]/5 p-5">
                  <div className="h-8 w-8 rounded-lg bg-[#4361ee] text-white flex items-center justify-center font-bold mb-3">
                    01
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">Ingestion & Chunking</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Uploaded documents (PDF/Markdown) are parsed, sanitized, and split using a recursive text splitter with 500-token chunks and 50-token semantic overlap.
                  </p>
                </div>

                <div className="rounded-xl border border-[#4361ee]/20 bg-[#4361ee]/5 p-5">
                  <div className="h-8 w-8 rounded-lg bg-[#4361ee] text-white flex items-center justify-center font-bold mb-3">
                    02
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">Vector Indexing</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Chunks are transformed into high-dimensional vector embeddings and persisted in ChromaDB / PGVector with isolated user tenant namespace IDs.
                  </p>
                </div>

                <div className="rounded-xl border border-[#4361ee]/20 bg-[#4361ee]/5 p-5">
                  <div className="h-8 w-8 rounded-lg bg-[#4361ee] text-white flex items-center justify-center font-bold mb-3">
                    03
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">Semantic Retrieval & Synthesis</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    User prompts trigger top-k vector cosine retrieval. Matched snippets are augmented into the LLM system context, returning streamed responses with exact document citations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Project Directory Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="rounded-xl bg-slate-950 p-4 text-slate-100 border border-slate-800">
                  <span className="text-[#4895ef] font-bold block mb-2">Backend (FastAPI)</span>
                  <pre className="text-[11px] leading-relaxed">
{`backend/
├── app/
│   ├── api/
│   │   ├── auth.py        # JWT auth & tokens
│   │   ├── chat.py        # Streamed completions
│   │   └── documents.py   # Ingestion & chunking
│   ├── core/config.py     # Environment settings
│   ├── database/          # SQLAlchemy models
│   ├── rag/
│   │   ├── chunker.py     # Smart token chunking
│   │   ├── embeddings.py  # Model embedding adapter
│   │   └── vector_store.py# ChromaDB client
│   └── main.py            # FastAPI ASGI app`}
                  </pre>
                </div>

                <div className="rounded-xl bg-slate-950 p-4 text-slate-100 border border-slate-800">
                  <span className="text-[#4895ef] font-bold block mb-2">Frontend (Next.js 14)</span>
                  <pre className="text-[11px] leading-relaxed">
{`frontend/
├── app/
│   ├── (auth)/login/page.tsx
│   ├── chat/page.tsx      # RAG conversation view
│   ├── documents/page.tsx # Drag & drop upload
│   └── layout.tsx
├── components/
│   ├── ChatMessage.tsx    # Citations drawer
│   ├── DocumentList.tsx   # Index management
│   └── StreamingText.tsx  # SSE token renderer
└── lib/api.ts             # Fetch client & auth`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: API Specification */}
        {activeTab === "api" && (
          <div className="mt-8 rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">REST & Streaming Endpoints</h3>
            <p className="font-mono text-xs text-muted-foreground mb-6">
              Complete OpenAPI 3.0 specification implemented with FastAPI and Pydantic validation.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="rounded-xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded bg-emerald-500/20 text-emerald-500 font-bold px-2 py-0.5 text-[11px]">POST</span>
                  <span className="font-bold text-foreground text-sm">/api/chat</span>
                  <span className="text-muted-foreground text-[11px] ml-auto">Server-Sent Events (SSE)</span>
                </div>
                <p className="text-muted-foreground mb-3 font-sans text-xs">
                  Sends user prompt, retrieves relevant document chunks from vector store, and streams back token completions with citation metadata.
                </p>
                <pre className="rounded-lg bg-slate-950 p-3 text-[11px] text-slate-200">
{`{
  "message": "What is the retry backoff policy defined in the architecture doc?",
  "session_id": "session-8921-xyz",
  "document_ids": ["doc-1", "doc-2"],
  "temperature": 0.2
}`}
                </pre>
              </div>

              <div className="rounded-xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded bg-blue-500/20 text-blue-500 font-bold px-2 py-0.5 text-[11px]">POST</span>
                  <span className="font-bold text-foreground text-sm">/api/documents/upload</span>
                  <span className="text-muted-foreground text-[11px] ml-auto">multipart/form-data</span>
                </div>
                <p className="text-muted-foreground mb-3 font-sans text-xs">
                  Uploads file, validates MIME type, generates token chunks, extracts metadata, computes vector embeddings, and registers index in ChromaDB.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded bg-purple-500/20 text-purple-500 font-bold px-2 py-0.5 text-[11px]">GET</span>
                  <span className="font-bold text-foreground text-sm">/api/documents</span>
                  <span className="text-muted-foreground text-[11px] ml-auto">JSON Array</span>
                </div>
                <p className="text-muted-foreground font-sans text-xs">
                  Returns all ingested documents with chunk counts, embedding dimensions, file size, and indexing status.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Quickstart */}
        {activeTab === "quickstart" && (
          <div className="mt-8 rounded-2xl border border-border bg-card/70 p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">Local Deployment Guide</h3>
            <p className="text-sm text-muted-foreground">
              Run Thor AI locally on your workstation in under 2 minutes.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="rounded-xl bg-slate-950 p-5 text-slate-100 border border-slate-800">
                <span className="text-[#4895ef] font-bold block mb-2">1. Clone & Set Up Backend</span>
                <pre className="text-[11px] leading-relaxed">
{`git clone https://github.com/mrprince123/thor-ai.git
cd thor-ai/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000`}
                </pre>
              </div>

              <div className="rounded-xl bg-slate-950 p-5 text-slate-100 border border-slate-800">
                <span className="text-[#4895ef] font-bold block mb-2">2. Set Up Frontend</span>
                <pre className="text-[11px] leading-relaxed">
{`cd ../frontend
npm install
npm run dev
# Open http://localhost:3000 to launch Thor AI`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThorAiDetail;

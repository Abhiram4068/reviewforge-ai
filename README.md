# ReviewForge AI

ReviewForge AI is an automated, AI-powered Pull Request (PR) Review Assistant designed to act as a virtual senior engineer. It integrates with GitHub webhooks, analyzes code changes, retrieves internal organization-specific coding standards using Retrieval-Augmented Generation (RAG), runs static analysis checks, and generates high-fidelity inline comments and risk scores.

---

## Architecture & Tech Stack

ReviewForge AI is structured into three main layers:
1. **Frontend**: React application styled with Tailwind CSS v4, utilizing React Router DOM for page navigation, and TanStack React Query + Axios for API communication.
2. **Backend**: FastAPI web framework serving versioned API routes (v1), managing database sessions via SQLAlchemy, and utilizing Alembic for schema migrations.
3. **Background Worker / Vector DB**: Celery with Redis for asynchronous job processing (e.g. running static analysis and LLM reviews) and Qdrant for vector retrieval of coding guidelines.

---

## Directory Structure

```text
ReviewForge-AI/
├── backend/
│   ├── alembic/                 # Database migrations config & revisions
│   ├── app/
│   │   ├── api/
│   │   │   └── v1/
│   │   │       ├── endpoints/   # Endpoint controllers (webhooks, etc.)
│   │   │       └── router.py    # Main aggregated api router
│   │   ├── core/
│   │   │   ├── config.py        # Pydantic environment configuration
│   │   │   ├── logging.py       # Logger configuration
│   │   │   └── security.py      # JWT & hashing security utilities
│   │   ├── db/
│   │   │   ├── base.py          # SQLAlchemy base class
│   │   │   └── session.py       # Engine and DB session provider
│   │   ├── models/              # Database models
│   │   ├── schemas/             # Pydantic schema serializers
│   │   ├── services/            # Business logic and embedding interfaces
│   │   ├── integrations/        # External wrappers (github, qdrant, claude)
│   │   ├── tasks/               # Celery app and task definitions
│   │   ├── utils/               # Common helper utilities
│   │   └── main.py              # FastAPI application entry point
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI elements
│   │   ├── hooks/               # Custom React hooks
│   │   ├── layouts/             # Shared layout components
│   │   ├── pages/               # Page views (DashboardPlaceholder, etc.)
│   │   ├── routes/              # Routing configuration
│   │   ├── services/
│   │   │   └── api/             # Axios client instance
│   │   ├── types/               # TypeScript interfaces
│   │   ├── utils/               # Formatting and utility functions
│   │   ├── App.tsx              # React entry routing
│   │   ├── index.css            # Tailwind CSS entry file
│   │   └── main.tsx             # DOM mounting entry
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Environment Configuration

A template environment file `.env.example` is located at the root of the project. Copy this file to `.env` before running the services:

```bash
cp .env.example .env
```

### Configuration Variables

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `DATABASE_URL` | Relational database connection string. | `sqlite:///./reviewforge.db` |
| `REDIS_URL` | Redis URL for Celery message broker/backend. | `redis://localhost:6379/0` |
| `JWT_SECRET` | Secret key used to sign and verify JWT tokens. | *generate random hex string* |
| `JWT_ALGORITHM` | Algorithm for JWT tokens. | `HS256` |
| `GITHUB_APP_ID` | The ID of your registered GitHub App. | *None* |
| `GITHUB_PRIVATE_KEY` | Private key for GitHub App authentication. | *None* |
| `GITHUB_WEBHOOK_SECRET` | Secret token to authenticate incoming webhooks. | *None* |
| `ANTHROPIC_API_KEY` | Anthropic Claude API credential. | *None* |
| `QDRANT_URL` | Connection URL for Qdrant vector database. | *None* (e.g. `http://localhost:6333`) |
| `QDRANT_API_KEY` | Authentication key for Qdrant server. | *None* |
| `VITE_API_URL` | Frontend API destination root. | `http://localhost:8000/api/v1` |

---

## Local Setup & Development

### Prerequisite Services
Ensure you have Python 3.10+, Node.js 18+, PostgreSQL, and Redis installed locally, or run them via Docker.

### Running with Docker Compose (Recommended)
You can launch the entire stack (PostgreSQL, Redis, Qdrant, FastAPI, Celery, and React) in one command:
```bash
docker-compose up --build
```
This builds and starts:
* **Frontend Dev Server**: [http://localhost:5173](http://localhost:5173)
* **Backend Web Server**: [http://localhost:8000](http://localhost:8000)
* **API Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)
* **Qdrant Dashboard**: [http://localhost:6333/dashboard](http://localhost:6333/dashboard)

---

### Manual Setup (Step-by-Step)

#### 1. Database & Migrations
Initialize your database and run Alembic migrations:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
alembic upgrade head
```

#### 2. Start the Backend API Server
Run the FastAPI application locally:
```bash
uvicorn app.main:app --reload --port 8000
```
The server will start on [http://localhost:8000](http://localhost:8000).

#### 3. Start the Celery Worker
Make sure Redis is running, then start the background worker:
```bash
celery -A app.tasks.celery_app.celery_app worker --loglevel=info
```

#### 4. Start the Frontend
Install frontend packages and run the React/Vite development server:
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

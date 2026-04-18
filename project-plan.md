# AI Resume & Portfolio Builder — Implementation Plan

## Overview

A modern full-stack web application that lets users fill out a form in plain English and generates a professional resume and portfolio page. Built with **React + TypeScript + Tailwind CSS v4** (frontend) and **Node.js + Express** (backend), using **PostgreSQL** for authentication and **MongoDB** for resume data storage.

---

## Tech Stack

| Layer          | Technology                                |
| -------------- | ----------------------------------------- |
| Frontend       | React 19, TypeScript, Vite                |
| Styling        | Tailwind CSS v4                           |
| Routing        | React Router v7                           |
| PDF Generation | html2pdf.js                               |
| Backend        | Node.js, Express, TypeScript              |
| Auth DB        | PostgreSQL + Prisma                       |
| Data DB        | MongoDB + Mongoose                        |
| Auth           | JWT (bcrypt + jsonwebtoken)               |
| AI Suggestions | OpenAI API (optional, with mock fallback) |

---

## Project Structure

```
resumeMaker/
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── landing/        # Landing page components
│   │   │   ├── form/           # Multi-step form components
│   │   │   ├── resume/         # Resume templates & preview
│   │   │   ├── portfolio/      # Portfolio page components
│   │   │   ├── auth/           # Login / Register modals
│   │   │   └── ui/             # Shared UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Builder.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── NotFound.tsx
│   │   ├── context/
│   │   │   ├── ResumeContext.tsx
│   │   │   └── AuthContext.tsx
│   │   ├── hooks/
│   │   ├── services/           # API call utilities
│   │   ├── types/              # TypeScript interfaces
│   │   ├── utils/              # PDF generation, helpers
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css           # Tailwind v4 entry
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── resumeController.ts
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts
│   │   ├── models/
│   │   │   └── Resume.ts       # Mongoose model
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   └── resumeRoutes.ts
│   │   ├── config/
│   │   │   ├── db.ts           # MongoDB connection
│   │   │   └── prisma.ts       # Prisma client
│   │   ├── utils/
│   │   │   └── aiSuggestion.ts
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma       # PostgreSQL user schema
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## Implementation Phases

### Phase 1 — Project Initialization

#### `client/` — Vite + React + TypeScript + Tailwind CSS v4

- Scaffold with `npx create-vite@latest ./ --template react-ts`
- Install & configure Tailwind CSS v4 (`@tailwindcss/vite`)
- Install dependencies: `react-router-dom`, `html2pdf.js`, `framer-motion`, `lucide-react`, `axios`

#### `server/` — Express + TypeScript

- Initialize with `npm init`, install `express`, `typescript`, `cors`, `dotenv`
- Install `prisma`, `@prisma/client` (PostgreSQL auth)
- Install `mongoose` (MongoDB resume data)
- Install `bcryptjs`, `jsonwebtoken` (auth)
- Install `tsx` for dev server

---

### Phase 2 — Landing Page & UI Foundation

#### `client/src/index.css`

- Tailwind v4 directives, custom theme tokens (colors, fonts, shadows)
- Global animation keyframes

#### `client/src/pages/Home.tsx`

- Hero section with headline, CTA button, animated gradient
- Features grid (form → resume → portfolio flow)
- How-it-works steps
- Footer

#### `client/src/components/landing/`

- `Hero.tsx` — animated hero banner
- `Features.tsx` — feature cards with icons
- `HowItWorks.tsx` — step-by-step explanation
- `Footer.tsx`

---

### Phase 3 — Multi-Step Resume Form

#### `client/src/types/resume.ts`

- TypeScript interfaces: `ResumeData`, `PersonalInfo`, `Education`, `Experience`, `Project`, `Skill`, `Certification`, `Achievement`

#### `client/src/context/ResumeContext.tsx`

- React Context + useReducer to manage all form data across steps

#### `client/src/pages/Builder.tsx`

- Container page with progress stepper, back/next navigation

#### `client/src/components/form/`

- `StepPersonalInfo.tsx` — name, email, phone, summary, photo
- `StepEducation.tsx` — dynamic add/remove entries
- `StepSkills.tsx` — tag-style skill input
- `StepExperience.tsx` — work history entries
- `StepProjects.tsx` — project entries with links
- `StepCertifications.tsx` — certification entries
- `StepAchievements.tsx` — achievement entries
- `ProgressStepper.tsx` — visual progress indicator

---

### Phase 4 — Resume Templates & Preview

#### `client/src/pages/Preview.tsx`

- Template selector (3 templates)
- Live resume preview panel
- Action buttons: Preview Resume, Download Resume, Save Resume

#### `client/src/components/resume/`

- `TemplateSelector.tsx` — card grid to pick template
- `TemplateClassic.tsx` — traditional single-column
- `TemplateModern.tsx` — two-column with sidebar
- `TemplateMinimal.tsx` — clean whitespace-heavy
- `ResumeActions.tsx` — button bar (preview/download/save)

#### `client/src/utils/pdfGenerator.ts`

- Uses `html2pdf.js` to capture the resume DOM and generate PDF

---

### Phase 5 — Portfolio Page

#### `client/src/pages/Portfolio.tsx`

- Generates a full portfolio page from the same resume data

#### `client/src/components/portfolio/`

- `PortfolioHero.tsx` — About Me banner
- `PortfolioSkills.tsx` — skills visualization
- `PortfolioProjects.tsx` — project cards
- `PortfolioExperience.tsx` — timeline view
- `PortfolioContact.tsx` — contact form/info

---

### Phase 6 — Backend & Auth

#### `server/prisma/schema.prisma`

- `User` model: id, name, email, password (hashed), createdAt

#### `server/src/models/Resume.ts`

- Mongoose schema mirroring the `ResumeData` TypeScript type, with `userId` reference

#### `server/src/controllers/authController.ts`

- `register`: hash password, create user in PostgreSQL, return JWT
- `login`: verify credentials, return JWT

#### `server/src/controllers/resumeController.ts`

- `saveResume`: store resume in MongoDB (requires auth)
- `getResumes`: fetch user's saved resumes
- `getAiSuggestions`: return AI-enhanced text (mock or OpenAI)

#### `server/src/middleware/authMiddleware.ts`

- JWT verification middleware

#### `server/src/routes/`

- `authRoutes.ts` — POST `/api/auth/register`, `/api/auth/login`
- `resumeRoutes.ts` — POST/GET `/api/resumes`, POST `/api/ai/suggest`

---

### Phase 7 — Auth UI & Save Flow

#### `client/src/context/AuthContext.tsx`

- Auth state, login/register/logout functions, JWT token management

#### `client/src/components/auth/`

- `AuthModal.tsx` — overlay modal with login/register tabs
- `LoginForm.tsx`
- `RegisterForm.tsx`

**Save Resume flow:**

1. User clicks "Save Resume"
2. If not logged in → `AuthModal` appears
3. After login/register → resume auto-saves to MongoDB
4. Toast notification confirms save

---

### Phase 8 — AI Suggestions

#### `server/src/utils/aiSuggestion.ts`

- Mock AI suggestion engine (returns improved text for summary, experience bullets, skill descriptions)
- Optional OpenAI integration behind env flag

#### `client/src/components/resume/AiSuggestionPanel.tsx`

- Side panel that shows AI-improved versions of text fields
- "Apply" / "Dismiss" buttons per suggestion

---

### Phase 9 — Polish & Animations

- **Framer Motion** page transitions, staggered list animations
- Smooth scroll, hover effects on cards and buttons
- Loading skeletons, toast notifications
- Fully responsive (mobile-first breakpoints)
- Dark mode support via Tailwind v4

---

## Verification Plan

### Automated Tests

- `cd client && npm run build` — ensure zero TypeScript/build errors
- `cd server && npx tsc --noEmit` — ensure zero TypeScript errors on server

### Browser Verification

1. Open `http://localhost:5173` → verify landing page renders with animations
2. Click "Get Started" → verify multi-step form loads, navigate all steps
3. Fill in sample data → go to Preview → verify all 3 templates render correctly
4. Click "Download Resume" → verify PDF downloads
5. Click "Save Resume" (not logged in) → verify auth modal appears
6. Register a new user → verify resume saves successfully
7. Navigate to Portfolio → verify all sections render from form data
8. Test on mobile viewport (375px) → verify responsive layout

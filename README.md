# Aryan Singh - Portfolio

A modern, interactive portfolio website showcasing AI and full-stack projects with 3D visualizations, real-time data integration, and intelligent automation.

## 🚀 Features

- **Interactive Project Cards**: Flip-card design with detailed modal views for each project
- **Cyber-Dark Theme**: Dark UI with neon cyan glow effects and smooth animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Framer Motion Animations**: Smooth transitions and interactive microinteractions
- **EmailJS Integration**: Direct contact form submission

## 📋 Projects

### 1. **Forecastify** - Interactive 3D Weather & Air Quality Platform
A high-fidelity weather intelligence platform featuring a 3D globe, real-time forecasts, AQI metrics, and weather-reactive UI.

**Tech**: React, TypeScript, CesiumJS, Three.js, OpenWeather API, Tailwind CSS, Framer Motion

### 2. **UNIFIED_AI** - AI-Powered Smart Email Intelligence Platform
An intelligent email analytics platform that classifies, translates, summarizes emails, extracts content from attachments, and automates meeting scheduling.

**Tech**: GPT-4 API, Hugging Face, Vertex AI, Python, FastAPI, Transformers, OCR, React, Tailwind CSS

### 3. **ResuMesh** - AI-Powered Resume Analysis & Job Intelligence Platform
An end-to-end AI-powered recruitment intelligence platform featuring ATS scoring, resume parsing, semantic job matching, AI-generated cover letters, and personalized career recommendations.

**Tech**: React, TypeScript, FastAPI, Python, PostgreSQL, Supabase, LangChain, LangGraph, Gemini API, FAISS, Docker, MLflow

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Build Tool**: Vite 5
- **Linting**: ESLint with TypeScript support
- **Styling**: PostCSS, Tailwind CSS
- **Dependencies**: lucide-react (icons), @emailjs/browser (email)

## 📦 Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Aryansingh-ai/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure EmailJS (optional)
   - Update your EmailJS service ID, template ID, and public key in the contact section

## 🚀 Running Locally

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗 Building for Production

Build the optimized production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx        # About/stats section
│   ├── ContactSection.tsx      # Contact form with EmailJS
│   ├── DifficultyBar.tsx       # Animated progress bar component
│   ├── MetricBox.tsx           # Stats display component
│   ├── Navigation.tsx          # Header navigation
│   ├── ProjectsSection.tsx     # All projects with flip cards & modals
│   ├── SkillsSection.tsx       # Skills grid
│   └── WelcomeSection.tsx      # Hero section
├── App.tsx                     # Main app component
├── main.tsx                    # React entry point
├── App.css                     # Global component styles
└── index.css                   # Global base styles
```

## 🎨 Design Features

- **Flip Cards**: Hover to reveal tech stack and features
- **Modal Views**: Click "View Details" for comprehensive project information
- **Gradient Backgrounds**: Cyberpunk-inspired color schemes
- **Neon Glow Effects**: Glassmorphic UI with border effects
- **Smooth Animations**: Staggered entrance animations using Framer Motion

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **GitHub**: [github.com/Aryansingh-ai](https://github.com/Aryansingh-ai)
- **Portfolio**: [Your portfolio URL]
- **Email**: [Your email]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

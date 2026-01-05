import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Cloud,
  MapPin,
  ShoppingCart,
  MailCheck,
} from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Forecastify",subtitle: "Interactive 3D Weather & Air Quality Platform",
      subtitle: "Interactive 3D Weather & Air Quality Platform",
      description:
        "A modern weather intelligence platform featuring a 3D globe, real-time forecasts, air quality insights, and weather-reactive UI.",
      fullDescription:
        "Forecastify is a high-fidelity weather and air quality platform built with a focus on interactivity and visual intelligence. It integrates real-time weather data, AQI metrics, and a Cesium-powered 3D globe to explore global conditions. The UI dynamically reacts to weather states such as rain, snow, fog, and storms, creating an immersive experience. Users can search locations, click anywhere on the globe, preview weather effects by time and day, and explore forecasts in a dark, cyber-styled interface.",
      icon: Cloud,color: "from-cyan-500 to-blue-600",
      color: "from-cyan-500 to-blue-600",
      tech: [
        "React",
        "TypeScript",
        "CesiumJS",
        "Three.js","OpenWeather API",
        "OpenWeather API",
        "Tailwind CSS",
        "Framer Motion"
      ],
      features: [
        "Interactive 3D globe with location picking",
        "Weather-reactive UI (rain, snow, fog, storm effects)","Real-time weather and AQI data",
        "Real-time weather and AQI data",
        "Hourly & 7-day forecast with preview mode",
        "Dark mode cyber-styled interface",
        "Smooth animations & micro-interactions",
      ],
      image: "/forecastify-logo.png",
      liveUrl: "",
      codeUrl: "https://github.com/Aryansingh-ai/horizon-weather",
    },

    {
      id: 2,
      title: "UNIFIED_AI",
      subtitle: "AI-Powered Smart Email Intelligence Platform",
      description:
        "An intelligent email analytics platform that classifies, translates, summarizes emails, extracts content from attachments, and automates meeting scheduling.",
      fullDescription:
        "UNIFIED_AI is an end-to-end smart email intelligence platform designed to automate email understanding and action. It uses advanced NLP and computer vision models to classify emails, translate multilingual content, generate concise summaries, extract text from PDFs, images, and documents using OCR, and detect meeting intents. When a meeting is identified, the system can automatically schedule it and provide a join-bot or calendar integration option. Built with a scalable backend and modern frontend, UNIFIED_AI transforms raw emails into actionable insights and workflows.",
      icon: MailCheck,
      color: "from-green-500 to-emerald-500",
      tech: [
        "GPT-4 API",
        "Hugging Face",
        "Vertex AI",
        "Python",
        "FastAPI",
        "Transformers",
        "OCR",
        "React",
        "Tailwind CSS",
      ],
      features: [
        "AI-based email classification",
        "Automatic email translation",
        "Smart summarization of long emails",
        "Meeting intent detection & scheduling",
        "Join-bot / calendar integration",
        "Text extraction from PDFs & images",
      ],
      image: "/logo.jpg",
      liveUrl: "https://github.com/Aryansingh-ai/UNIFIED_AI",
      codeUrl: "https://github.com/Aryansingh-ai/UNIFIED_AI",
    },

    {
      id: 3,
      title: "Project 3",
      subtitle: "Location Intelligence Platform",
      description: "",
      fullDescription: "",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
      tech: [],
      features: [],
      image:
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      liveUrl: "",
      codeUrl: "",
    },

    {
      id: 4,
      title: "Project 4",
      subtitle: "",
      description: "",
      fullDescription: "",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      tech: [],
      features: [],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      liveUrl: "",
      codeUrl: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400">
            Bringing data to life through innovation 🚀
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flip-card h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front glass neon-glow p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-full bg-gradient-to-r ${project.color}`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-[#F5F5F5]">
                          {project.title}
                        </h3>
                        <p className="text-[#00FFCB] text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg opacity-80"
                  />
                </div>

                {/* Back */}
                <div className="flip-card-back glass neon-glow-pink p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#00FFCB] text-[#0D1117] px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-sm font-semibold text-[#FF4C60] mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-[#00FFCB] text-[#0D1117] py-2 rounded-lg font-medium hover:bg-[#00E6B8]"
                    >
                      View Details
                    </button>

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg hover:bg-[#00FFCB]/20"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 neon-glow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;

                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-bold gradient-text">
                            {project.title}
                          </h3>
                          <p className="text-[#00FFCB]">
                            {project.subtitle}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-[#FF4C60]/20 rounded-full"
                        >
                          <X className="w-6 h-6 text-white" />
                        </button>
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />

                      <p className="text-gray-300 mb-6">
                        {project.fullDescription}
                      </p>

                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#00FFCB] text-[#0D1117] px-6 py-3 rounded-lg font-medium hover:bg-[#00E6B8]"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}

                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 glass px-6 py-3 rounded-lg font-medium hover:bg-[#00FFCB]/20"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;

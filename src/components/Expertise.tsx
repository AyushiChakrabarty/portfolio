import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faWandMagicSparkles, faCloud, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { RevealOnScroll } from "./effects";
import '../assets/styles/Expertise.scss';

const SKILLS = [
  {
    icon: faPython,
    title: "Programming",
    description: "Strong foundation in multiple languages for research, automation, and production systems.",
    labels: ["Python", "SQL", "C++", "Java", "JavaScript", "R", "MATLAB"],
  },
  {
    icon: faBrain,
    title: "Machine Learning & AI",
    description: "Building and deploying scalable ML systems—from classical models to deep learning and resource-efficient inference.",
    labels: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LLMs", "Hugging Face", "OpenCV", "NumPy", "Pandas", "XGBoost"],
  },
  {
    icon: faWandMagicSparkles,
    title: "Generative AI, NLP & Agents",
    description: "Fine-tuning LLMs, RAG pipelines, multi-agent systems, and AI-powered tools with LangChain, LangGraph, and OpenAI.",
    labels: ["RAG", "Ragas", "LangChain", "LangGraph", "OpenAI / Azure OpenAI", "LlamaIndex", "CrewAI", "Ollama", "Prompt Engineering", "FAISS", "ChromaDB", "Weaviate", "NLTK", "spaCy"],
  },
  {
    icon: faCloud,
    title: "Cloud, MLOps & Data",
    description: "End-to-end pipelines and cloud-native deployment on AWS with Docker, CI/CD, and observability. Hardware optimization for edge and low-resource inference.",
    labels: ["AWS (ECS, RDS, S3, SageMaker, Bedrock)", "Azure", "GCP", "Docker", "CI/CD", "OpenTelemetry", "FastAPI", "PostgreSQL", "MySQL", "Redis", "Git", "Linux", "GPU Programming", "Xilinx-Vitis", "Compression & Quantization"],
  },
  {
    icon: faCode,
    title: "Backend & Software",
    description: "Full-stack and rapid prototyping with FastAPI, React, Streamlit, and agile methodologies.",
    labels: ["React", "REST APIs", "Streamlit", "HTML", "CSS", "Agile / Scrum", "Jira"],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <RevealOnScroll>
          <h1>Expertise</h1>
        </RevealOnScroll>
        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <RevealOnScroll key={skill.title} className="skill glass-panel" delay={index * 80}>
              <div className="skill-header">
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {skill.labels.map((label) => (
                  <Chip key={label} className="chip" label={label} />
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;

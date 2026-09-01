import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faWandMagicSparkles, faCloud, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const programmingLabels = [
  "Python",
  "SQL",
  "C++",
  "Java",
  "JavaScript",
  "R",
  "MATLAB",
];

const mlLabels = [
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Scikit-learn",
  "LLMs",
  "Hugging Face",
  "OpenCV",
  "NumPy",
  "Pandas",
  "XGBoost",
];

const genAiLabels = [
  "RAG",
  "Ragas",
  "LangChain",
  "LangGraph",
  "OpenAI / Azure OpenAI",
  "LlamaIndex",
  "CrewAI",
  "Ollama",
  "Prompt Engineering",
  "FAISS",
  "ChromaDB",
  "Weaviate",
  "NLTK",
  "spaCy",
];

const cloudDevOpsLabels = [
  "AWS (ECS, RDS, S3, SageMaker, Bedrock)",
  "Azure",
  "GCP",
  "Docker",
  "CI/CD",
  "OpenTelemetry",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Git",
  "Linux",
];

const softwareLabels = [
  "React",
  "REST APIs",
  "Streamlit",
  "HTML",
  "CSS",
  "Agile / Scrum",
  "Jira",
];

const hardwareLabels = [
  "GPU Programming",
  "Xilinx-Vitis",
  "Compression & Quantization",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-header">
              <FontAwesomeIcon icon={faPython} size="3x" />
              <h3>Programming</h3>
            </div>
            <p>Strong foundation in multiple languages for research, automation, and production systems.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {programmingLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <FontAwesomeIcon icon={faBrain} size="3x" />
              <h3>Machine Learning & AI</h3>
            </div>
            <p>Building and deploying scalable ML systems—from classical models to deep learning and resource-efficient inference.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <FontAwesomeIcon icon={faWandMagicSparkles} size="3x" />
              <h3>Generative AI, NLP & Agents</h3>
            </div>
            <p>Fine-tuning LLMs, RAG pipelines, multi-agent systems, and AI-powered tools with LangChain, LangGraph, and OpenAI.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {genAiLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <FontAwesomeIcon icon={faCloud} size="3x" />
              <h3>Cloud, MLOps & Data</h3>
            </div>
            <p>End-to-end pipelines and cloud-native deployment on AWS with Docker, CI/CD, and observability. Hardware optimization for edge and low-resource inference.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloudDevOpsLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
              {hardwareLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-header">
              <FontAwesomeIcon icon={faCode} size="3x" />
              <h3>Backend & Software</h3>
            </div>
            <p>Full-stack and rapid prototyping with FastAPI, React, Streamlit, and agile methodologies.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {softwareLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

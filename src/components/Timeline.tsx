import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RevealOnScroll } from "./effects";
import SectionHeader from "./SectionHeader";
import '../assets/styles/Timeline.scss';

const iconStyle = { background: '#1e88e5', color: 'white' };

function Timeline() {
  return (
    <div id="history" className="section-block">
      <div className="items-container">
        <RevealOnScroll>
          <SectionHeader
            title="Professional Experience"
            subtitle="Research, startups, and industry roles across AI and ML"
          />
        </RevealOnScroll>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2026 – Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Scientist I</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Architecting a multi-agent AI grading pipeline integrating parser, symbolic reasoning, semantic analysis, RAG, vector databases, and feedback agents to evaluate handwritten mathematical responses.</p>
            <p>Designing error localization across conceptual, procedural, and notational dimensions, generating explainable, rubric-aligned feedback beyond binary correctness.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 – Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Feedback Fusion, Inc.</h4>
            <p>Co-founded and lead development of an AI-powered platform using NLP and LLM pipelines to transform unstructured student and survey feedback into decision-ready insights.</p>
            <p>Designed and deployed containerized backend and ML services on AWS (ECS, RDS, S3, ALB) with GitHub Actions CI/CD and OpenTelemetry observability; fine-tuned transformers, PII-redaction pipelines, and Canvas LTI 1.3 integrations (OIDC/JWT).</p>
            <p className="card-body">Took the product from research prototype toward institutional pilot, securing GRA grant funding, Georgia Tech Quadrant-I Startup Launch, and CRIDC 2025 winner (<span className="metric-text">$10K</span>); led hiring and <span className="metric-text">70+</span> customer discovery interviews; live demo to <span className="metric-text">1,500+</span> at Create-X Demo Day.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – May 2025"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Researcher (Team Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Tech VIP Program</h4>
            <p>Led a research team applying diffusion models to nanophotonic structure design, reducing GPU memory from 16GB+ to <span className="metric-text">8GB</span> and enabling adoption on low-resource lab hardware.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 – Dec 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Project Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Built an end-to-end NLP service combining a Streamlit interface with a fine-tuned BERT backend for real-time categorization of unstructured MOOC survey responses from <span className="metric-text">2,000+</span> students.</p>
            <p>Halved processing time and reduced false positives by <span className="metric-text">~20%</span> through iterative human-in-the-loop evaluation and model refinement.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 – Jun 2023"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Space Applications Centre (SAC), ISRO, India</h4>
            <p>Engineered a real-time wildfire-detection system using semantic segmentation on 200GB+ Landsat-8 imagery (ResNet, SqueezeNet, VGG, Inception), achieving <span className="metric-text">~97% recall</span>.</p>
            <p>Reduced edge-inference power draw <span className="metric-text">2.5×</span> to 1–1.6W through quantization and pruning on a Xilinx ZCU104 MPSoC.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2022 – Aug 2022"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Physical Research Laboratory, India</h4>
            <p>Researched autoencoder-based anomaly detection on CERN/LHC-style data, studying how reconstruction errors behave across data manifolds.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 – Jul 2021"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Vellore Institute of Technology (VIT), India</h4>
            <p>Delivered <span className="metric-text">95.87% accuracy</span> for ocular disease classification via optimized federated learning on non-IID data, reducing the FL vs. centralized gap to 0.33% (PyTorch/Flower) while preserving data privacy.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

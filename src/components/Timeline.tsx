import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2026 – Present"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Scientist I</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Architecting a multi-agent AI grading pipeline integrating parser, symbolic reasoning, semantic analysis, RAG, vector databases, and feedback agents to evaluate handwritten mathematical responses.</p>
            <p>Designing error localization across conceptual, procedural, and notational dimensions, generating explainable, rubric-aligned feedback beyond binary correctness.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2025 – Present"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Feedback Fusion, Inc.</h4>
            <p>Co-founded and lead development of an AI-powered platform using NLP and LLM pipelines to transform unstructured student and survey feedback into decision-ready insights.</p>
            <p>Designed and deployed containerized backend and ML services on AWS (ECS, RDS, S3, ALB) with GitHub Actions CI/CD and OpenTelemetry observability; fine-tuned transformers, PII-redaction pipelines, and Canvas LTI 1.3 integrations (OIDC/JWT).</p>
            <p>Took the product from research prototype toward institutional pilot—GRA grant funding, Georgia Tech Quadrant-I Startup Launch, CRIDC 2025 winner ($10K); led hiring and 70+ customer discovery interviews; live demo to 1,500+ at Create-X Demo Day.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2024 – May 2025"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Generative AI Researcher (Team Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Tech VIP Program</h4>
            <p>Led a research team applying diffusion models to nanophotonic structure design, reducing GPU memory from 16GB+ to 8GB and enabling adoption on low-resource lab hardware.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="May 2024 – Dec 2024"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Project Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology</h4>
            <p>Built an end-to-end NLP service combining a Streamlit interface with a fine-tuned BERT backend for real-time categorization of unstructured MOOC survey responses from 2,000+ students.</p>
            <p>Halved processing time and reduced false positives by ~20% through iterative human-in-the-loop evaluation and model refinement.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2022 – Jun 2023"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Space Applications Centre (SAC), ISRO, India</h4>
            <p>Engineered a real-time wildfire-detection system using semantic segmentation on 200GB+ Landsat-8 imagery (ResNet, SqueezeNet, VGG, Inception), achieving ~97% recall.</p>
            <p>Reduced edge-inference power draw 2.5× to 1–1.6W through quantization and pruning on a Xilinx ZCU104 MPSoC.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jul 2022 – Aug 2022"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Physical Research Laboratory, India</h4>
            <p>Researched autoencoder-based anomaly detection on CERN/LHC-style data, studying how reconstruction errors behave across data manifolds.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2021 – Jul 2021"
            iconStyle={{ background: '#0d1116', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Vellore Institute of Technology (VIT), India</h4>
            <p>Delivered 95.87% accuracy for ocular disease classification via optimized federated learning on non-IID data, reducing the FL vs. centralized gap to 0.33% (PyTorch/Flower) while preserving data privacy.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

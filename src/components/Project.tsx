import React from "react";
import ragImage from '../assets/images/rag_retrieval_generation.avif';
import trafficImage from '../assets/images/traffic.avif';
import roboticImage from '../assets/images/robotic.png';
import wildfireImage from '../assets/images/wildfire.webp';
import { RevealOnScroll } from "./effects";
import SectionHeader from "./SectionHeader";
import '../assets/styles/Project.scss';

const PROJECTS = [
  {
    key: "rag",
    image: ragImage,
    alt: "RAG and question answering",
    title: "RAG for Question Answering",
    link: "https://drive.google.com/file/d/1QNHGBLm2z-r3N7Cq29m4XaLrujSTyydd/view",
    description: "Developed and evaluated an advanced RAG pipeline using hybrid retrieval, reranking, and query optimization, improving answer correctness by 18% and enhancing precision, recall, and faithfulness metrics.",
  },
  {
    key: "cut",
    image: roboticImage,
    alt: "Robotic simulations",
    title: "Contrastive Unpaired Translation (CUT) for Robotic Simulations",
    description: "Optimized CUT models on robotic simulation datasets reducing FID scores by ~25% and implementing a FastCUT variant that trained 1.7× faster with no loss in output quality.",
  },
  {
    key: "traffic",
    image: trafficImage,
    alt: "Traffic camera analysis",
    title: "Live Traffic Camera Analysis for Improved Navigation",
    link: "https://github.com/AyushiChakrabarty/AC_CS6476_Traffic-Navigation",
    description: "Designed and fine-tuned YOLOv8 and Faster R-CNN models for real-time vehicle detection from live traffic camera feeds, achieving an 83% improvement in mAP50 and demonstrating a scalable, privacy-preserving traffic monitoring solution with a proof-of-concept web app.",
  },
  {
    key: "wildfire",
    image: wildfireImage,
    alt: "Forest fire detection",
    title: "Forest Fire Detection using Vision Techniques",
    link: "https://drive.google.com/file/d/1LBEeR3VcAnm0wtobmtZE1SkIqoqtq0ge/view?usp=sharing",
    description: "Built a real-time wildfire detection system from 200GB+ Landsat-8 imagery using semantic segmentation (~97% recall). Optimized for edge: 2.5× lower power (1–1.6W) via quantization and pruning on ZCU104.",
  },
];

function Project() {
  return (
    <div className="projects-container section-block" id="projects">
      <RevealOnScroll>
        <SectionHeader
          title="Key Projects"
          subtitle="Selected work in RAG, computer vision, and edge ML"
        />
      </RevealOnScroll>
      <div className="projects-grid">
        {PROJECTS.map((item, index) => (
          <RevealOnScroll key={item.key} className="project glass-panel" delay={index * 90}>
            <div className="project-image-mask">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <h2 className="card-title">{item.title}</h2>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer" className="project-link text-link">View project →</a>
            ) : null}
            <p className="card-body">{item.description}</p>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

export default Project;

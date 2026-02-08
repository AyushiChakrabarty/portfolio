import React from "react";
import ragImage from '../assets/images/rag_retrieval_generation.avif';
import trafficImage from '../assets/images/traffic.avif';
import roboticImage from '../assets/images/robotic.png';
import wildfireImage from '../assets/images/wildfire.webp';
import '../assets/styles/Project.scss';

const PROJECT_IMAGES = {
  rag: ragImage,
  cut: roboticImage,
  traffic: trafficImage,
  wildfire: wildfireImage,
};

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Key Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://drive.google.com/file/d/1QNHGBLm2z-r3N7Cq29m4XaLrujSTyydd/view" target="_blank" rel="noreferrer"><img src={PROJECT_IMAGES.rag} className="zoom" alt="RAG and question answering" width="100%" loading="lazy" /></a>
          <a href="https://drive.google.com/file/d/1QNHGBLm2z-r3N7Cq29m4XaLrujSTyydd/view" target="_blank" rel="noreferrer"><h2>RAG for Question Answering</h2></a>
          <p>Developed and evaluated an advanced RAG pipeline using hybrid retrieval, reranking, and query optimization, improving answer correctness by 18% and enhancing precision, recall, and faithfulness metrics.</p>
        </div>
        <div className="project">
          <a href="#projects" rel="noreferrer"><img src={PROJECT_IMAGES.cut} className="zoom" alt="Robotic simulations" width="100%" loading="lazy" /></a>
          <a href="#projects" rel="noreferrer"><h2>Contrastive Unpaired Translation (CUT) for Robotic Simulations</h2></a>
          <p>Optimized CUT models on robotic simulation datasets reducing FID scores by ~25% and implementing a FastCUT variant that trained 1.7× faster with no loss in output quality.</p>
        </div>
        <div className="project">
          <a href="https://github.com/AyushiChakrabarty/AC_CS6476_Traffic-Navigation" target="_blank" rel="noreferrer"><img src={PROJECT_IMAGES.traffic} className="zoom" alt="Traffic camera analysis" width="100%" loading="lazy" /></a>
          <a href="https://github.com/AyushiChakrabarty/AC_CS6476_Traffic-Navigation" target="_blank" rel="noreferrer"><h2>Live Traffic Camera Analysis for Improved Navigation</h2></a>
          <p>Designed and fine-tuned YOLOv8 and Faster R-CNN models for real-time vehicle detection from live traffic camera feeds, achieving an 83% improvement in mAP50 and demonstrating a scalable, privacy-preserving traffic monitoring solution with a proof-of-concept web app.</p>
        </div>
        <div className="project">
          <a href="https://drive.google.com/file/d/1LBEeR3VcAnm0wtobmtZE1SkIqoqtq0ge/view?usp=sharing" target="_blank" rel="noreferrer"><img src={PROJECT_IMAGES.wildfire} className="zoom" alt="Forest fire detection" width="100%" loading="lazy" /></a>
          <a href="https://drive.google.com/file/d/1LBEeR3VcAnm0wtobmtZE1SkIqoqtq0ge/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Forest Fire Detection using Vision Techniques</h2></a>
          <p>Built a real-time wildfire detection system from 200GB+ Landsat-8 imagery using semantic segmentation (~97% recall). Optimized for edge: 2.5× lower power (1–1.6W) via quantization and pruning on ZCU104.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { RevealOnScroll } from "./effects";
import "../assets/styles/Certifications.scss";

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Jan 2022",
    credentialId: "2XVTHY64LQ3X",
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    issuer: "DeepLearning.AI",
    date: "Jul 2022",
    credentialId: "J24GZSWTR4H4",
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "DeepLearning.AI",
    date: "Aug 2022",
    credentialId: "ELTMTC6C6ARU",
  },
  {
    title: "Getting Started with AI using IBM Watson",
    issuer: "IBM",
    date: "Jan 2022",
    credentialId: "PACUBW7BDQF5",
  },
  {
    title: "Graph Neural Network",
    issuer: "Udemy",
    date: "Jul 2022",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2022",
    url: "https://www.credly.com/badges/2a3bb24f-a1b9-4c03-85ef-fa5b9a21f77f",
  },
];

const ONGOING = [
  "Udemy: AI Engineer MLOps Track: Deploy Gen AI & Agentic AI at Scale",
  "Udemy: AI Engineer Agentic Track: The Complete Agent & MCP Course",
];

function Certifications() {
  return (
    <div className="container certifications-container" id="certifications">
      <div className="certifications-inner">
        <RevealOnScroll>
          <h1>Key Certifications</h1>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <p className="certifications-subtitle">Professional credentials in AI, ML, and cloud</p>
        </RevealOnScroll>
        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <RevealOnScroll key={index} delay={index * 70}>
              <article className="cert-card">
              <div className="cert-card-content">
                <span className="cert-date">{cert.date}</span>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View credential
                    <OpenInNewIcon fontSize="small" />
                  </a>
                ) : cert.credentialId ? (
                  <span className="cert-id">ID: {cert.credentialId}</span>
                ) : null}
              </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="certifications-ongoing" delay={180}>
          <h3 className="ongoing-title">In progress</h3>
          <ul className="ongoing-list">
            {ONGOING.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default Certifications;

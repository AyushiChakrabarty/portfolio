import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { RevealOnScroll } from "./effects";
import "../assets/styles/Publications.scss";

type PublicationItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
};

const PUBLICATIONS: PublicationItem[] = [
  {
    title: "AI-Powered Analysis of Student Feedback for Higher Education Decision-Making",
    authors: "Mayer, G. S., & Chakrabarty, A.",
    venue: "Georgia Tech Academic AI Playbook, 2026 Edition, pp. 23–28",
    year: "2026",
    url: "https://sites.gatech.edu/academic-ai-playbook/files/2026/08/Georgia-Tech-Academic-AI-Playbook-2026-Edition.pdf",
  },
  {
    title: "From naive to advanced: Enhancing question answering with retrieval-augmented generation",
    authors: "Chakrabarty, A., Butukuri, R. S. R., Lu, J., Syed, S., & Syed, J.",
    venue: "2025 IEEE International Conference on Future Machine Learning and Data Science (FMLDS), pp. 514–518",
    year: "2025",
    url: "https://doi.org/10.1109/fmlds67896.2025.00066",
  },
  {
    title: "Exploring the Features of FreeRTOS and Testing the Performance Using Arduino – To Compare FreeRTOS Performance with ARTE",
    authors: "Chakrabarty, A., Gayathri, G., Manaswini, U. S., & Maheswari, R.",
    venue: "International Journal of Management, Engineering and Technology, Vol. 1(1), pp. 23–41",
    year: "2023",
    url: "https://www.ijmetonline.com/v1-n1/",
  },
  {
    title: "Smart Robot Car for Industrial Internet of Things",
    authors: "Chakrabarty et al.",
    venue: "CRC Press, Taylor & Francis Group, Vol. 2, 1st ed.",
    year: "2023",
  },
];

function Publications() {
  return (
    <div className="container publications-container" id="publications">
      <div className="publications-inner">
        <RevealOnScroll>
          <h1>Publications</h1>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <p className="publications-subtitle">Peer-reviewed research, book chapters, and academic resources</p>
        </RevealOnScroll>
        <div className="publications-list">
          {PUBLICATIONS.map((pub, index) => (
            <RevealOnScroll key={index} delay={index * 80}>
              <article className="pub-card">
              <div className="pub-card-content">
                <span className="pub-year">{pub.year}</span>
                <h3>{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-link"
                  >
                    View publication
                    <OpenInNewIcon fontSize="small" />
                  </a>
                ) : null}
              </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;

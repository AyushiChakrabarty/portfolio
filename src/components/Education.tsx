import React from "react";
import { RevealOnScroll } from "./effects";
import "../assets/styles/Education.scss";

type EducationItem = {
  degree: string;
  school: string;
  dates: string;
};

type HonorItem = {
  title: string;
  detail?: string;
};

const EDUCATION: EducationItem[] = [
  {
    degree: "M.S., Computer Science",
    school: "Georgia Institute of Technology",
    dates: "Aug 2023 – May 2025",
  },
  {
    degree: "B.Tech, Electronics and Computer Engineering",
    school: "Vellore Institute of Technology",
    dates: "Jul 2019 – Aug 2023",
  },
];

const HONORS: HonorItem[] = [
  { title: "CRIDC 2025 Q-i Innovation Competition Winner", detail: "$10K" },
  { title: "Best Paper Presentation Award, ICUS 2021" },
  { title: "Meritorious Award for Academic Excellence, VIT", detail: "2021–22, 2022–23" },
];

function Education() {
  return (
    <div className="container education-container" id="education">
      <div className="education-inner">
        <RevealOnScroll>
          <h1>Education</h1>
        </RevealOnScroll>
        <div className="education-grid">
          {EDUCATION.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 90}>
              <article className="edu-card">
              <div className="edu-card-content">
                <span className="edu-date">{item.dates}</span>
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
              </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="honors-section" delay={180}>
          <h2 className="honors-title">Honors & Awards</h2>
          <ul className="honors-list">
            {HONORS.map((item, index) => (
              <li key={index}>
                <span className="honor-name">{item.title}</span>
                {item.detail ? <span className="honor-detail"> · {item.detail}</span> : null}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default Education;

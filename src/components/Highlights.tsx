import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { RevealOnScroll } from "./effects";
import SectionHeader from "./SectionHeader";
import '../assets/styles/Highlights.scss';

export type HighlightItem = {
  title: string;
  excerpt: string;
  postUrl: string;
  date?: string;
};

const DEFAULT_HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Create-X Demo Day!",
    excerpt: "Brought our AI-powered survey feedback platform to Create-X Demo Day, pitched to 1,500+ attendees and investors",
    postUrl: "https://www.linkedin.com/posts/ayushi-chakrabarty-7b504220b_georgiatech-demoday-feedbackfusion-activity-7367606165138059264-EC9F?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU4hfkBNLkl1cj_yn024GgVS3VjsDleILU",
    date: "2025",
  },
  {
    title: "Presenting a talk at the 2025 Lifetime Learning Symposium",
    excerpt: "Oct 6–8, 2025, focusing on transforming education for all life stages. The event explored AI in learning, alternative credentials, affordability, and, from K-12 to professional development, bridging industry and academia",
    postUrl: "https://www.linkedin.com/posts/georgia-tech-college-of-lifetime-learning_lifetimelearning-ugcPost-7381701861696802816-aD6L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU4hfkBNLkl1cj_yn024GgVS3VjsDleILU",
    date: "2025",
  },
  {
    title: "CRIDC 2025 Conference Experience",
    excerpt: "Featured in the CRIDC 2025 Conference, showcasing our work on Feedback Fusion and the Quadrant-I Innovation Competition",
    postUrl: "https://www.linkedin.com/posts/ayushi-chakrabarty-7b504220b_cridc-2025-awards-40000-to-competition-activity-7295854484092583936-L_HS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU4hfkBNLkl1cj_yn024GgVS3VjsDleILU",
    date: "2025",
  },
];

function Highlights() {
  const highlights = DEFAULT_HIGHLIGHTS;

  return (
    <div className="container section-block highlights-container" id="highlights">
      <div className="highlights-inner">
        <RevealOnScroll>
          <SectionHeader
            title="Key Highlights"
            subtitle="Selected posts and updates from LinkedIn"
          />
        </RevealOnScroll>
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 90}>
              <article className="highlight-card glass-panel">
              <div className="highlight-card-content">
                {item.date && <span className="card-meta">{item.date}</span>}
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.excerpt}</p>
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="highlight-link text-link"
                >
                  <LinkedInIcon fontSize="small" />
                  View on LinkedIn
                  <OpenInNewIcon fontSize="small" />
                </a>
              </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;

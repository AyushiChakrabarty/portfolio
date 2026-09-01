import React, { useState, useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/avatar.jpeg";
import { MagneticWrap, RevealOnScroll } from "./effects";

const INTRO_TEXT = "AI/ML Engineer with 3+ years building machine learning and Generative AI systems across NLP, computer vision, and multi-agent architectures.\n\nExperienced in end-to-end ML pipelines, fine-tuning transformers, RAG systems, and cloud-native applications on AWS. Co-founded an AI startup taking a product from research prototype to institutional pilot.";
const TYPING_MS = 18;
const PAUSE_AT_END_MS = 2500;
const PAUSE_AT_START_MS = 800;

function Main() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const indexRef = useRef(0);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (indexRef.current >= INTRO_TEXT.length) {
        setIsPaused(true);
        const t = setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, PAUSE_AT_END_MS);
        return () => clearTimeout(t);
      }
      const timeout = setTimeout(() => {
        indexRef.current += 1;
        setDisplayText(INTRO_TEXT.slice(0, indexRef.current));
      }, TYPING_MS);
      return () => clearTimeout(timeout);
    }

    if (displayText.length === 0) {
      setIsPaused(true);
      indexRef.current = 0;
      const t = setTimeout(() => {
        setIsDeleting(false);
        setIsPaused(false);
      }, PAUSE_AT_START_MS);
      return () => clearTimeout(t);
    }
    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev.slice(0, -1));
    }, TYPING_MS);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      backdrop.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container hero-container">
      <div className="about-section">
        <div className="hero-backdrop" ref={backdropRef} aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />

        <RevealOnScroll className="image-wrapper glass-panel hero-glass" delay={100}>
          <img src={avatar} alt="Avatar" />
        </RevealOnScroll>

        <div className="content hero-glass glass-panel">
          <RevealOnScroll delay={150}>
            <div className="social_icons">
              <MagneticWrap>
                <a href="https://github.com/AyushiChakrabarty" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
              </MagneticWrap>
              <MagneticWrap>
                <a href="https://www.linkedin.com/in/ayushi-chakrabarty-7b504220b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
              </MagneticWrap>
              <MagneticWrap>
                <a href="https://scholar.google.com/citations?user=xof8C5gAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><SchoolIcon/></a>
              </MagneticWrap>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={220}>
            <h1>Ayushi Chakrabarty</h1>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="typing-intro">
              <p className="main-intro main-intro-typing">
                {displayText.split("\n\n").map((para, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <><br /><br /></>}
                    {para}
                  </React.Fragment>
                ))}
                <span className="typing-cursor" aria-hidden="true">|</span>
              </p>
            </div>
          </RevealOnScroll>

          <div className="mobile_social_icons">
            <a href="https://github.com/AyushiChakrabarty" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ayushi-chakrabarty-7b504220b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="https://scholar.google.com/citations?user=xof8C5gAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><SchoolIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

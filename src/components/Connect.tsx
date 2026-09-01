import React, { useState, useEffect, useRef } from "react";
import { MagneticWrap, RevealOnScroll } from "./effects";
import '../assets/styles/Connect.scss';

const TAGLINE = "Ideas → Impact. Let's build something together.";
const TAGLINE_WORDS = TAGLINE.split(" ");

const ANIMATION_DURATION_MS = 2500;
const RESET_GAP_MS = 500;

function Connect() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasBeenVisibleRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenVisibleRef.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasBeenVisibleRef.current) return;
    if (visible) {
      const t = setTimeout(() => setVisible(false), ANIMATION_DURATION_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(true), RESET_GAP_MS);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div id="connect" className="connect-section" ref={sectionRef}>
      <div className="items-container">
        <div className="connect-content">
          <RevealOnScroll>
            <h1>Let's Connect!</h1>
          </RevealOnScroll>
          <p className={`connect-tagline ${visible ? "connect-tagline-visible" : ""}`}>
            {TAGLINE_WORDS.map((word, i) => (
              <React.Fragment key={i}>
                <span
                  className="connect-tagline-word"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}
                </span>
                {i < TAGLINE_WORDS.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </p>
          <p className="connect-message">
            If you're excited about using AI to build, iterate, and ship impactful products, let's connect! :)
          </p>
          <MagneticWrap>
            <a href="mailto:ayushi.chakrabarty31@gmail.com" className="connect-email">
              Email me
            </a>
          </MagneticWrap>
        </div>
      </div>
    </div>
  );
}

export default Connect;

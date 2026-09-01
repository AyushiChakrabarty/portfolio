import React, { useRef } from "react";
import { MagneticWrap, RevealOnScroll } from "./effects";
import SectionHeader from "./SectionHeader";
import '../assets/styles/Connect.scss';

function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="connect" className="connect-section section-block" ref={sectionRef}>
      <div className="connect-content glass-panel">
        <RevealOnScroll>
          <SectionHeader title="Let's Connect!" />
        </RevealOnScroll>
        <p className="connect-tagline">
          <span className="accent-text">Ideas → Impact.</span>{" "}
          Let's build something together.
        </p>
        <p className="connect-message">
          If you're excited about using AI to build, iterate, and ship impactful products, let's connect.
        </p>
        <MagneticWrap>
          <a href="mailto:ayushi.chakrabarty31@gmail.com" className="connect-email">
            Email me
          </a>
        </MagneticWrap>
      </div>
    </div>
  );
}

export default Connect;

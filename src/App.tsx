import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Education,
  Publications,
  Highlights,
  Certifications,
  Connect,
  Navigation,
  Footer,
} from "./components";
import { CustomCursor, PageTransition } from "./components/effects";
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <CustomCursor />
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <PageTransition>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Education/>
            <Publications/>
            <Highlights/>
            <Certifications/>
            <Connect/>
        </PageTransition>
        <Footer />
    </div>
    );
}

export default App;

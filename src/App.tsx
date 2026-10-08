import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Education,
  Certificates,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

const getInitialMode = (): string => {
    try {
        const saved = localStorage.getItem('mode');
        if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return 'dark';
};

function App() {
    const [mode, setMode] = useState<string>(getInitialMode);

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        try { localStorage.setItem('mode', mode); } catch {}
        document.body.style.backgroundColor = mode === 'dark' ? '#1E1E22' : '#FFFFFF';
    }, [mode]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main mode={mode}/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Education/>
            <Certificates/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;

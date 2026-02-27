import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Services from './components/Services';
import Stack from './components/Stack';
import Contact from './components/Contact';

const App = () => {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Hero />
          <Experience />
          <Education />
          <Projects />
          <About />
          <Services />
          <Stack />
          <Contact />
          <footer className="footer">
            <p>© 2026 Harsh Gupta · Full Stack Developer · Jaipur, India</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Looking for Full-time & Freelance roles
            </div>
            <h1 className="hero-title">
                Hey, I'm Harsh. <br />
                I build <span>full-stack experiences.</span>
            </h1>
            <p className="hero-description">
                A Full Stack Developer from Jaipur, India with hands-on experience in React, Angular,
                Node.js, and SQL. I recently worked as a Software Developer at AnkTech and am now
                exploring the future of <strong>Agentic AI</strong> and automation with <strong>n8n</strong>.
            </p>
            <div className="hero-actions">
                <a href="https://drive.google.com/drive/folders/1IWKiDBsIsrwtAcVBLJXjbqG_aGyws1ri?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary">View Resume</button>
                </a>
                <a href="https://github.com/harsh18601" target="_blank" rel="noopener noreferrer">
                    <button className="btn-secondary">GitHub</button>
                </a>
            </div>
            <div className="hero-stats">
                <div className="hero-stat">
                    <span className="stat-num">3+</span>
                    <span className="stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                    <span className="stat-num">10+</span>
                    <span className="stat-label">GitHub Projects</span>
                </div>
                <div className="hero-stat">
                    <span className="stat-num">6</span>
                    <span className="stat-label">Internships Done</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;

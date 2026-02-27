import React from 'react';

const About = () => {
    const highlights = [
        { icon: '🌐', label: 'Full Stack Development', desc: 'React, Angular, Node.js, SQL — end-to-end web apps' },
        {
            icon: <img src="/assets/images/eth-logo.png" style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt="Ethereum" />,
            label: 'Blockchain & Web3',
            desc: 'Smart contracts with Solidity on Ethereum'
        },
        { icon: '🤖', label: 'AI & Machine Learning', desc: 'Predictive models and data science (secondary)' },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-card">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    I'm <strong>Harsh Gupta</strong>, a Full Stack Developer based in <strong>Jaipur, India</strong>.
                    I graduated with a B.Tech in Computer Science from BML Munjal University (2023) and previously
                    worked as a <strong>Software Developer at AnkTech Softwares</strong>, where I built full-stack
                    web applications.
                </p>
                <p className="about-text">
                    My core expertise sits in building frontend interfaces (React, Angular) and scalable backend
                    APIs (Node.js, SQL). I've also contributed to research projects in <strong>Neural Science</strong> at HCLTech
                    and <strong>Motor Imagery Decoding</strong> at Sabudh Foundation. Currently, I am deeply
                    invested in mastering <strong>Agentic AI</strong>, workflow automation with <strong>n8n</strong>,
                    and exploring <strong>OpenClaw</strong> as part of my secondary focus in AI/ML.
                </p>

                <div className="about-highlights">
                    {highlights.map((h, i) => (
                        <div key={i} className="about-highlight">
                            <span className="about-highlight-icon">{h.icon}</span>
                            <div>
                                <p className="about-highlight-label">{h.label}</p>
                                <p className="about-highlight-desc">{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

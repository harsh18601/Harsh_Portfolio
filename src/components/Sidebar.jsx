import React, { useState, useEffect } from 'react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'education', 'projects', 'about', 'services', 'stats', 'stack', 'contact'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: '⌂' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'about', label: 'About Me', icon: '👤' },
        { id: 'services', label: 'Services', icon: '💎' },
        { id: 'stats', label: 'GitHub Stats', icon: '📊' },
        { id: 'contact', label: 'Contact', icon: '📧' },
    ];

    return (
        <aside className="sidebar">
            <div className="profile-section">
                <div className="profile-image">
                    <img src="/assets/images/avatar-logo.png" alt="Harsh Gupta" />
                </div>
                <div className="profile-info">
                    <h1>Harsh Gupta</h1>
                    <p>Full Stack Developer</p>
                </div>
            </div>

            <div className="location-badge">
                <span className="location-dot">📍</span>
                <span>Jaipur, India</span>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {navItems.map(item => (
                        <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                            <a href={`#${item.id}`}>
                                <span className="nav-icon">{item.icon}</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="social-section">
                <p className="section-label">Connect</p>
                <ul>
                    <li>
                        <a href="https://github.com/harsh18601" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </span>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/harsh18601/" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </span>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/drive/folders/1IWKiDBsIsrwtAcVBLJXjbqG_aGyws1ri?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </span>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;

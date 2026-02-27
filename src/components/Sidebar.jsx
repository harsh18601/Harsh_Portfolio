import React, { useState, useEffect } from 'react';
import {
    Home,
    Briefcase,
    Rocket,
    User,
    Diamond,
    Mail,
    Github,
    Linkedin,
    FileText,
    MapPin
} from 'lucide-react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'education', 'projects', 'about', 'services', 'stack', 'contact'];
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
        { id: 'home', label: 'Home', icon: <Home size={18} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'projects', label: 'Projects', icon: <Rocket size={18} /> },
        { id: 'about', label: 'About Me', icon: <User size={18} /> },
        { id: 'services', label: 'Services', icon: <Diamond size={18} /> },
        { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="profile-section">
                <div className="profile-icon-wrapper">
                    <User size={24} className="profile-brand-icon" />
                </div>
                <div className="profile-info">
                    <h1>Harsh Gupta</h1>
                    <p>Full Stack Developer</p>
                </div>
            </div>

            <div className="location-badge">
                <MapPin size={12} className="location-dot-icon" />
                <span>Jaipur, India</span>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    {navItems.map(item => (
                        <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                            <a href={`#${item.id}`}>
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
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
                                <Github size={14} />
                            </span>
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/harsh18601/" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">
                                <Linkedin size={14} />
                            </span>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/drive/folders/1IWKiDBsIsrwtAcVBLJXjbqG_aGyws1ri?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon">
                                <FileText size={14} />
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

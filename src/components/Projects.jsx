import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'AI Resume & Interview Coach',
        description: 'An AI-powered application for resume analysis and interview preparation, featuring stable PDF parsing and Next.js 16 compatibility.',
        tag: 'AI',
        tagColor: '#06b6d4',
        lang: 'Next.js / OpenAI / Prisma',
        url: 'https://github.com/harsh18601/AI_Resume_Interview_Coach',
        image: '/assets/images/ai-coach.png',
    },
    {
        id: 2,
        title: 'Shree Radha Govind Jewellers',
        description: 'A luxury jewellery e-commerce platform with personal stylist booking, ring builder, and heritage gallery.',
        tag: 'WEB',
        tagColor: '#3b82f6',
        lang: 'Next.js / Contentful / Tailwind',
        url: 'https://github.com/harsh18601/jewellery-website',
        image: '/assets/images/jewellery.png',
    },
    {
        id: 3,
        title: 'Linear Clone',
        description: 'A comprehensive project management application inspired by Linear, providing a seamless workflow for teams.',
        tag: 'FULLSTACK',
        tagColor: '#f59e0b',
        lang: 'React / Node.js / MongoDB',
        url: 'https://github.com/harsh18601/Linear-Clone',
        image: '/assets/images/linear.png',
    },
    {
        id: 4,
        title: 'TravelTrekApp',
        description: 'An Android app for travel enthusiasts — explore new places, discover events, and plan your next adventure.',
        tag: 'ANDROID',
        tagColor: '#22c55e',
        lang: 'Java',
        url: 'https://github.com/harsh18601/TravelTrekApp',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'TravelTrekWebsite',
        description: 'A one-stop travel web app to plan your entire trip beforehand — built with a server-side templating engine.',
        tag: 'WEB',
        tagColor: '#3b82f6',
        lang: 'Handlebars / Node.js',
        url: 'https://github.com/harsh18601/TravelTrekWebsite',
        image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'LiveWeatherForecast',
        description: 'A real-time weather forecast app that fetches live weather data and displays it in an intuitive interface.',
        tag: 'WEB',
        tagColor: '#3b82f6',
        lang: 'HTML / CSS / JS',
        url: 'https://github.com/harsh18601/LiveWeatherForecast',
        image: '/assets/images/weather-preview.png',
    },
    {
        id: 7,
        title: 'Job Change Prediction',
        description: 'Predicted job-seeking behaviour using classification algorithms. Achieved 91% accuracy with XGBoost on imbalanced data.',
        tag: 'ML',
        tagColor: '#a855f7',
        lang: 'Python / Jupyter',
        url: 'https://github.com/harsh18601/Job-Change-Prediction',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 8,
        title: 'Football Player Analysis',
        description: 'Predicted the market value of football players using regression algorithms and ML techniques. Achieved 94% model accuracy.',
        tag: 'ML',
        tagColor: '#a855f7',
        lang: 'Python / Jupyter',
        url: 'https://github.com/harsh18601/Football-Player-Analysis',
        image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 9,
        title: 'Bankruptcy Prediction',
        description: 'Applied multiple ML classification models to predict whether a company is likely to go bankrupt based on financial indicators.',
        tag: 'ML',
        tagColor: '#a855f7',
        lang: 'Python / Jupyter',
        url: 'https://github.com/harsh18601/Bankruptcy-Prediction',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    },
];

const filters = ['All', 'AI', 'FULLSTACK', 'WEB', 'ANDROID', 'ML'];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tag === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">Projects</h2>
                <div className="filter-tabs">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-grid">
                {filtered.map((project, index) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-card float-${index % 2 === 0 ? 'animation' : 'delayed'}`}
                        style={{
                            transitionDelay: `${index * 0.1}s`
                        }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-image-overlay"></div>
                        </div>
                        <div className="project-content">
                            <div className="project-meta">
                                <span
                                    className="project-tag"
                                    style={{ color: project.tagColor, borderColor: project.tagColor + '40', backgroundColor: project.tagColor + '15' }}
                                >
                                    {project.tag}
                                </span>
                                <span className="project-lang">{project.lang}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <span className="project-link">
                                View on GitHub
                                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;

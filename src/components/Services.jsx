import React from 'react';

const services = [
    {
        title: 'Full-Stack Web Development',
        description: 'Building robust, scalable web applications from scratch using modern technologies like React, Node.js, and SQL.',
        icon: '💻',
        features: ['SPA Development', 'RESTful APIs', 'Database Design']
    },
    {
        title: 'AI Automation & Agents',
        description: 'Streamlining business workflows with Agentic AI, n8n automation, and custom LLM integrations.',
        icon: '🤖',
        features: ['n8n Workflows', 'AI Agent Orchestration', 'LLM Fine-tuning']
    },
    {
        title: 'Freelance Collaboration',
        description: 'Available for short-term projects, MVP development, and technical consulting for startups.',
        icon: '🚀',
        features: ['Technical Consulting', 'MVP Bootstrap', 'Code Review']
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2 className="section-title">Freelance Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, fi) => (
                                <li key={fi}>
                                    <span className="feature-dot"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

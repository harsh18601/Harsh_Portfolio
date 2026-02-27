import React from 'react';

const experiences = [
    {
        id: 1,
        role: 'Software Developer',
        company: 'AnkTech Softwares Pvt. Ltd.',
        duration: 'Oct 2023 – Feb 2026',
        location: 'Jaipur, India',
        type: 'Full-time',
        tag: 'FULL-TIME',
        tagColor: '#22c55e',
        bullets: [
            <>Delivered multiple production-ready features across <strong>React, Angular, and Node.js</strong> applications.</>,
            <>Contributed to <strong>"The VIP Suite"</strong> project, implementing complex UI workflows and backend API integrations.</>,
            <>Improved application performance by <strong>30%</strong> through framework upgrades and optimization.</>,
            <>Ensured <strong>bug-free and timely delivery</strong> of assigned tasks across multiple projects.</>,
        ],
        skills: ['React', 'Angular', 'Node.js', 'API Integration', 'Full Stack'],
    },
    {
        id: 2,
        role: 'Software Developer Intern',
        company: 'Akeo India',
        duration: 'May 2023 – Oct 2023',
        location: 'Jaipur, India',
        type: 'Internship',
        tag: 'INTERNSHIP',
        tagColor: '#3b82f6',
        bullets: [
            <>Designed responsive UI components for a <strong>fintech platform</strong>, improving user interaction by <strong>25%</strong>.</>,
            <>Built backend features using <strong>Node.js and Angular</strong>, improving data processing efficiency by <strong>40%</strong>.</>,
            <>Integrated third-party APIs with improved reliability and reduced error rates by <strong>15%</strong>.</>,
        ],
        skills: ['Node.js', 'Angular', 'API Integration', 'Fintech', 'UI/UX'],
    },
    {
        id: 3,
        role: 'Blockchain Developer Intern',
        company: 'Oasis Pro Markets',
        duration: 'Jan 2023 – May 2023',
        location: 'Remote',
        type: 'Internship',
        tag: 'INTERNSHIP',
        tagColor: '#a855f7',
        bullets: [
            <>Developed and tested <strong>Ethereum smart contracts</strong> using <strong>Solidity</strong>.</>,
            <>Built basic <strong>decentralized applications (dApps)</strong> with wallet connectivity using <strong>MetaMask</strong>.</>,
            <>Worked with <strong>Remix IDE</strong> for contract deployment and testing on test networks.</>,
            <>Implemented <strong>Web3.js / Ethers.js</strong> to interact with smart contracts from frontend applications.</>,
            <>Gained hands-on exposure to <strong>token standards</strong> and blockchain transaction flows.</>,
        ],
        skills: ['Solidity', 'Ethereum', 'Web3.js', 'Ethers.js', 'MetaMask', 'dApps'],
    },
    {
        id: 4,
        role: 'Intern',
        company: 'Sabudh Foundation',
        duration: 'Jul 2022 – Dec 2022',
        location: 'Remote',
        type: 'Internship',
        tag: 'RESEARCH',
        tagColor: '#f59e0b',
        bullets: [
            <>Developed a project to <strong>decode motor imagery</strong> using <strong>machine learning</strong>.</>,
            <>Undertook the task of <strong>preprocessing and analysis (EDA)</strong> of neural data.</>,
            <>Created a model and presented information using <strong>data visualization</strong>.</>,
            <>Effectively communicated the results of the study in technical reports.</>,
        ],
        skills: ['Machine Learning', 'Data Science', 'ANN', 'Data Visualization', 'EDA'],
    },
    {
        id: 5,
        role: 'Intern',
        company: 'HCLTech',
        duration: 'Jan 2022 – Jun 2022',
        location: 'Remote',
        type: 'Internship',
        tag: 'RESEARCH',
        tagColor: '#ef4444',
        bullets: [
            <>Developed a research project titled, <strong>"Hands-free typing system"</strong> using consumer-grade wireless EEG systems.</>,
            <>Participated in <strong>data collection, signal processing, and feature extraction</strong>.</>,
            <>Created a <strong>real-time machine learning pipeline</strong> that can decode neural signals.</>,
            <>Tuned models and prepared <strong>statistical graphs</strong> and reports to present results clearly.</>,
        ],
        skills: ['Signal Processing', 'Machine Learning', 'Research', 'Statistical Analysis', 'EEG'],
    },
    {
        id: 6,
        role: 'Intern',
        company: 'Benciti Technology Pvt Ltd',
        duration: 'May 2021 – Jul 2021',
        location: 'Remote',
        type: 'Internship',
        tag: 'WEB DEV',
        tagColor: '#10b981',
        bullets: [
            <>Developed an interactive <strong>math problem solving platform</strong> called Nudge.</>,
            <>Spearheaded development of the <strong>math engine</strong> that displays questions based on user's ability.</>,
            <>Developed front-end web pages with <strong>HTML5, CSS3, and JavaScript</strong>.</>,
            <>Implemented new features and UI in an <strong>agile environment</strong> in collaboration with project team.</>,
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Agile', 'Frontend'],
    },
];



const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>

            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className={`exp-card float-${index % 2 === 0 ? 'animation' : 'delayed'}`}
                        style={{
                            transitionDelay: `${index * 0.15}s`
                        }}
                    >
                        <div className="exp-header">
                            <div className="exp-header-left">
                                <h3 className="exp-role">{exp.role}</h3>
                                <p className="exp-company">{exp.company}</p>
                            </div>
                            <div className="exp-header-right">
                                <span
                                    className="exp-tag"
                                    style={{ color: exp.tagColor, borderColor: exp.tagColor + '40', backgroundColor: exp.tagColor + '15' }}
                                >
                                    {exp.tag}
                                </span>
                                <p className="exp-duration">{exp.duration}</p>
                                <p className="exp-location">{exp.location}</p>
                            </div>
                        </div>

                        <ul className="exp-bullets">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>

                        <div className="exp-skills">
                            {exp.skills.map((s, i) => (
                                <span key={i} className="exp-skill-chip">{s}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Experience;

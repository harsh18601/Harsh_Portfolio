import React from 'react';

const educationData = [
    {
        id: 1,
        level: 'UNDERGRADUATE',
        levelColor: '#a855f7',
        degree: 'B.Tech — Computer Science Engineering',
        institution: 'BML Munjal University',
        location: 'Gurugram, India',
        duration: '2019 – 2023',
        grade: '7.9 CGPA',
        description: 'Focused on software engineering, data structures, algorithms, and emerging technologies. Active member of the university marketing team and cricket team.',
        highlights: ['Full Stack Development', 'Machine Learning', 'Data Structures & Algorithms'],
    },
    {
        id: 2,
        level: '12TH',
        levelColor: '#3b82f6',
        degree: 'Senior Secondary (12th)',
        institution: 'High School',
        location: 'Jaipur, India', // Assuming location remains the same or is a placeholder
        duration: '2017 – 2019',
        grade: 'Percentage: --%',
        description: 'Completed higher secondary education with a focus on PCM.',
        highlights: [],
    },
    {
        id: 3,
        level: '10TH',
        levelColor: '#22c55e',
        degree: 'Secondary (10th)',
        institution: 'Secondary School',
        location: 'Jaipur, India', // Assuming location remains the same or is a placeholder
        duration: '2016 – 2017',
        grade: 'CGPA: --',
        description: 'Foundational schooling with academic excellence.',
        highlights: [],
    },
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>

            <div className="edu-timeline">
                {educationData.map((edu) => (
                    <div key={edu.id} className="edu-card">
                        <div className="edu-card-left">
                            <div
                                className="edu-level-badge"
                                style={{ color: edu.levelColor, borderColor: edu.levelColor + '40', backgroundColor: edu.levelColor + '15' }}
                            >
                                {edu.level}
                            </div>
                            <div className="edu-timeline-line"></div>
                        </div>
                        <div className="edu-card-right">
                            <div className="edu-card-header">
                                <div>
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <p className="edu-institution">{edu.institution}</p>
                                </div>
                                <div className="edu-card-meta">
                                    <p className="edu-duration">{edu.duration}</p>
                                    <p className="edu-location">{edu.location}</p>
                                    {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                                </div>
                            </div>
                            {edu.description && (
                                <p className="edu-description">{edu.description}</p>
                            )}
                            {edu.highlights.length > 0 && (
                                <div className="edu-highlights">
                                    {edu.highlights.map((h, i) => (
                                        <span key={i} className="exp-skill-chip">{h}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;

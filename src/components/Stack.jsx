import React from 'react';

const stackItems = [
    {
        category: 'Primary — Full Stack',
        tools: [
            { name: 'React', description: 'Frontend UI Library', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', description: 'React Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Angular', description: 'Frontend Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'Node.js', description: 'Backend Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'MongoDB', description: 'NoSQL Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'SQL', description: 'Relational Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'JavaScript', description: 'Core Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', description: 'Typed JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'HTML / CSS', description: 'Markup & Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        ]
    },
    {
        category: 'Blockchain & Web3',
        tools: [
            { name: 'Solidity', description: 'Smart Contracts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
            { name: 'Ethereum', description: 'Blockchain Platform', icon: '/assets/images/eth-logo.png' },
            { name: 'Metamask', description: 'Crypto Wallet', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png' },
            { name: 'Remix IDE', description: 'Smart Contract IDE', icon: 'https://cdn.worldvectorlogo.com/logos/remix.svg' },
        ]
    },
    {
        category: 'Secondary — AI & Data Science',
        tools: [
            { name: 'Python', description: 'ML & Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'NumPy', description: 'Numerical Computing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
            { name: 'Pandas', description: 'Data Manipulation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'scikit-learn', description: 'Machine Learning', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png' },
            { name: 'Jupyter Notebook', description: 'Data Analysis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        ]
    },
    {
        category: 'Tools & Platforms',
        tools: [
            { name: 'Java', description: 'Backend & Android Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Git & GitHub', description: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'VS Code', description: 'Primary Code Editor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        ]
    },
    {
        category: 'Currently Learning — Future Tech',
        tools: [
            { name: 'Agentic AI', description: 'Autonomous AI Agents', icon: '🤖' },
            { name: 'n8n', description: 'Workflow Automation', icon: '⚡' },
            { name: 'OpenClaw', description: 'Agent Orchestration', icon: '🦞' },
        ]
    }
];

const Stack = () => {
    return (
        <section id="stack" className="stack-section">
            <div className="stack-card">
                <h2 className="section-title">Tech Stack</h2>
                <p className="stack-subtitle">Technologies I work with — full stack first, AI/ML secondary.</p>

                {stackItems.map((group, gi) => (
                    <div key={gi} className="stack-group">
                        <p className={`section-label ${group.category.toLowerCase().includes('primary') ? 'label-primary' : ''}`}>
                            {group.category}
                        </p>
                        <div className="tools-list">
                            {group.tools.map((tool, index) => (
                                <div key={index} className="tool-item">
                                    <div className="tool-icon">
                                        {(tool.icon.startsWith('http') || tool.icon.startsWith('/')) ? (
                                            <img src={tool.icon} alt={tool.name} onError={(e) => { e.target.style.opacity = '0.3'; }} />
                                        ) : (
                                            <span style={{ fontSize: '20px' }}>{tool.icon}</span>
                                        )}
                                    </div>
                                    <div className="tool-info">
                                        <h4>{tool.name}</h4>
                                        <p>{tool.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stack;

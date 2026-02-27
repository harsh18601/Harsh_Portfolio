import React from 'react';

const GitHubStats = () => {
    return (
        <section id="stats" className="stats-section">
            <h2 className="section-title">GitHub Activity</h2>
            <div className="stats-grid">
                <div className="stats-card">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=harsh18601&show_icons=true&theme=transparent&title_color=a855f7&icon_color=a855f7&text_color=94a3b8&bg_color=00000000&hide_border=true"
                        alt="Harsh's GitHub Stats"
                    />
                </div>
                <div className="stats-card">
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=harsh18601&layout=compact&theme=transparent&title_color=a855f7&text_color=94a3b8&bg_color=00000000&hide_border=true"
                        alt="Most Used Languages"
                    />
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;

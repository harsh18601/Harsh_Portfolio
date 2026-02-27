import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-card">
                <div className="contact-glow"></div>
                <h3>Let's build something together</h3>
                <p>
                    I'm open to full-time roles and freelance projects.
                    If you'd like to collaborate or just say hi — reach out!
                </p>
                <div className="contact-actions">
                    <a
                        href="https://www.linkedin.com/in/harsh18601/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn contact-btn-secondary"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/harsh18601"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn contact-btn-secondary"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://drive.google.com/drive/folders/1IWKiDBsIsrwtAcVBLJXjbqG_aGyws1ri?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn contact-btn-secondary"
                    >
                        Resume
                    </a>
                    <a
                        href="tel:+918306469764"
                        className="contact-btn contact-btn-secondary"
                    >
                        Call Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

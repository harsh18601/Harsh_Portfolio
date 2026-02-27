import React from 'react';

const Subscription = () => {
    return (
        <section className="subscription-section">
            <div className="subscription-card">
                <h3>Stay up to date</h3>
                <p>Get notified when new products and articles are published.</p>

                <form className="subscription-form">
                    <input type="email" placeholder="Your email" required />
                    <button type="submit">Subscribe now</button>
                </form>
            </div>
        </section>
    );
};

export default Subscription;

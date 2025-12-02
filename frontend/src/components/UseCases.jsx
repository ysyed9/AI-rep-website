import React from 'react';

const UseCases = () => {
    const cases = [
        { title: 'Dentists', icon: '🦷', desc: 'Handle appointment scheduling and emergency inquiries 24/7.' },
        { title: 'Spas & Salons', icon: '💆‍♀️', desc: 'Book treatments and answer service questions while you work.' },
        { title: 'Restaurants', icon: '🍽️', desc: 'Take reservations and answer menu questions during peak hours.' },
        { title: 'Contractors', icon: '🔨', desc: 'Capture leads and schedule estimates while on the job site.' },
    ];

    return (
        <section id="use-cases" className="use-cases-section">
            <div className="container">
                <h2 className="section-title">Perfect For Every Business</h2>
                <div className="features-grid">
                    {cases.map((item, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{item.icon}</div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-description">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;

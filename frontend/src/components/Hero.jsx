import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <img
                    src="/flowrep-logo.png"
                    alt="Flowrep logo"
                    className="hero-logo"
                />
                <h1 className="hero-title">
                    The Future of <br />
                    <span className="gradient-text">Front Desk Automation</span>
                </h1>
                <p className="hero-subtitle">
                    Empower your business with an AI Receptionist that never sleeps.
                    Handle calls, bookings, and inquiries 24/7 with human-like intelligence.
                </p>
                <div className="hero-actions">
                    <a href="#demo" className="btn-primary">Try Demo</a>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-visual">
                {/* Abstract visual representation */}
                <div className="glowing-orb"></div>
            </div>
        </section>
    );
};

export default Hero;

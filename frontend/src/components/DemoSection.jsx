import React from 'react';

const DemoSection = () => {
    return (
        <section id="demo" className="demo-section">
            <div className="container demo-content">
                <div className="demo-text">
                    <h2 className="section-title">
                        Hear <span className="gradient-text">Flowrep</span> in Action
                    </h2>
                    <p className="demo-description">
                        Experience the future of customer service. Call our demo number to chat with our AI receptionist right now.
                    </p>
                    <div className="demo-call-box glass-panel">
                        <div className="phone-icon">📞</div>
                        <div className="phone-number">(517) 628-4976</div>
                        <p className="call-cta">Call now for a live demo</p>
                    </div>
                    <div className="or-divider">or</div>
                    <button className="btn-primary play-audio-btn">
                        ▶ Play Demo Audio
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;

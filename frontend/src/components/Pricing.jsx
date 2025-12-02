import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <h2 className="section-title">Simple, Transparent Pricing</h2>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Starter</h3>
                        <div className="price">$49<span>/mo</span></div>
                        <ul className="features-list">
                            <li>100 Minutes/month</li>
                            <li>Basic Call Handling</li>
                            <li>Email Support</li>
                        </ul>
                        <button className="btn-secondary">Get Started</button>
                    </div>
                    <div className="pricing-card featured">
                        <h3>Pro</h3>
                        <div className="price">$99<span>/mo</span></div>
                        <ul className="features-list">
                            <li>500 Minutes/month</li>
                            <li>Advanced Call Routing</li>
                            <li>Priority Support</li>
                            <li>Appointment Booking</li>
                        </ul>
                        <button className="btn-primary">Get Started</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Enterprise</h3>
                        <div className="price">Custom</div>
                        <ul className="features-list">
                            <li>Unlimited Minutes</li>
                            <li>Custom Integration</li>
                            <li>Dedicated Account Manager</li>
                        </ul>
                        <button className="btn-secondary">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

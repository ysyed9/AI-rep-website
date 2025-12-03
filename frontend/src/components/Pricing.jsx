import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <h2 className="section-title">Simple, Transparent Pricing</h2>
                <div className="pricing-grid">
                    {/* Starter Plan */}
                    <div className="pricing-card">
                        <div className="plan-header">
                            <h3>✅ Starter</h3>
                            <p className="plan-subtitle">Basic Call Handling</p>
                        </div>
                        <div className="price">$249<span>/month</span></div>
                        <ul className="features-list">
                            <li>✔️ 150 AI-Handled Minutes/Month</li>
                            <li>✔️ Call Answering & Message Taking</li>
                            <li>✔️ Business Hours + After-Hours Greeting</li>
                            <li>✔️ Call Transfer to Cellphone</li>
                            <li>✔️ Voicemail Transcription</li>
                            <li>✔️ Basic FAQ Handling</li>
                            <li>✔️ Email Support</li>
                        </ul>
                        <p className="positioning-text">
                            Perfect for barbers, small shops, contractors, and solo service providers needing reliable call coverage.
                        </p>
                        <a href="#contact" className="btn-secondary">Contact Us</a>
                    </div>

                    {/* Pro Plan */}
                    <div className="pricing-card featured">
                        <div className="plan-header">
                            <h3>🚀 Pro</h3>
                            <p className="plan-subtitle">Most Popular — Includes Booking</p>
                        </div>
                        <div className="price">$449<span>/month</span></div>
                        <ul className="features-list">
                            <li>✔️ 600 AI-Handled Minutes/Month</li>
                            <li>✔️ Advanced Call Routing</li>
                            <li>✔️ Appointment Booking (Google Calendar, Calendly)</li>
                            <li>✔️ Two-Way SMS With Customers</li>
                            <li>✔️ Lead Capture + CRM Sync</li>
                            <li>✔️ Custom FAQ Training</li>
                            <li>✔️ Voicemail-to-SMS + Email</li>
                            <li>✔️ Call Recording + Auto Notification</li>
                            <li>✔️ Priority Support</li>
                        </ul>
                        <p className="positioning-text">
                            Ideal for dentists, med-spas, real estate teams, HVAC/plumbers, clinics, and auto shops with medium call volume.
                        </p>
                        <a href="#contact" className="btn-primary">Contact Us</a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="pricing-card">
                        <div className="plan-header">
                            <h3>🏢 Enterprise</h3>
                            <p className="plan-subtitle">Large Operations & High Volume</p>
                        </div>
                        <div className="price">$799+<span>/month</span></div>
                        <p className="custom-quote">Custom Quote</p>
                        <ul className="features-list">
                            <li>✔️ Unlimited Minutes</li>
                            <li>✔️ Custom AI Voice Agent + Persona</li>
                            <li>✔️ Multi-Location Routing</li>
                            <li>✔️ Custom Integrations (CRM, Booking Systems)</li>
                            <li>✔️ Analytics Dashboard</li>
                            <li>✔️ Dedicated Account Manager</li>
                            <li>✔️ 24/7 Failover Routing + SLA</li>
                        </ul>
                        <p className="positioning-text">
                            Designed for dental groups, franchises, nationwide service providers, and high-volume operations.
                        </p>
                        <a href="#contact" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

import React from 'react';

const featuresList = [
    {
        title: "24/7 Phone Answering",
        description: "Human-like AI that picks up every call instantly, ensuring you never miss a lead.",
        icon: "📞"
    },
    {
        title: "Booking & Scheduling",
        description: "Integrates with Calendly, Google Calendar, and business software to book appointments automatically.",
        icon: "📅"
    },
    {
        title: "Call Forwarding",
        description: "Intelligently transfers calls to the owner or specific departments when needed.",
        icon: "🔀"
    },
    {
        title: "SMS Follow-ups",
        description: "Automatically sends directions, reminders, and confirmations via text message.",
        icon: "💬"
    },
    {
        title: "Multi-Language Support",
        description: "Fluent in English, Spanish, and other languages to serve a diverse client base.",
        icon: "🌐"
    },
    {
        title: "Custom Personality",
        description: "Tailored tone and script to match your business's unique brand and voice.",
        icon: "🎭"
    },
    {
        title: "Seamless Integrations",
        description: "Connects with Twilio, WhatsApp, Google Calendar, and more for a unified workflow.",
        icon: "🔗"
    }
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">Key Features</h2>
                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <div key={index} className="feature-card glass-panel">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

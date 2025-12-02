import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content glass-panel">
                    <div className="contact-info">
                        <h3>Ready to automate your front desk?</h3>
                        <p>Contact us today to set up a custom demo for your business.</p>
                        <div className="contact-methods">
                            <div className="method">
                                <span className="icon">📞</span>
                                <span>(903)447-9436</span>
                            </div>
                            <div className="method">
                                <span className="icon">✉️</span>
                                <span>syed@relfow.com</span>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <textarea placeholder="Message" className="form-input" rows="4"></textarea>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

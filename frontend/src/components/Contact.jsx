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
                    <form action="https://formsubmit.co/syed@relfow.com" method="POST" className="contact-form">
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission" />
                        <input type="hidden" name="_captcha" value="false" />

                        <input type="text" name="name" placeholder="Name" className="form-input" required />
                        <input type="email" name="email" placeholder="Email" className="form-input" required />
                        <textarea name="message" placeholder="Message" className="form-input" rows="4" required></textarea>

                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

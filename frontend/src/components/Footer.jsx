import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="gradient-text">AI-Rep</span>
                    <p>The future of business communication.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Demo</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; {new Date().getFullYear()} AI-Rep. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

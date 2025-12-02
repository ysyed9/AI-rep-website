import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <div className="logo">
                    <img
                        src="/flowrep-logo.png"
                        alt="Flowrep logo"
                        className="logo-mark"
                    />
                    <span className="logo-text gradient-text">Flowrep</span>
                </div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact" className="btn-primary">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <div className="logo">
                    {/* Logo removed */}
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#demo">Demo</a>
                    <a href="#use-cases">Use Cases</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

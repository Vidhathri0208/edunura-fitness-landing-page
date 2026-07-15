import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#">
          <img src="https://edunura.com/images/edunura-font-02.png" alt="EduNura Logo" style={{ height: '36px' }} />
        </a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#why-it-matters">Why It Matters</a>
          <a href="#program">Program</a>
          <a href="#schedule">Schedule</a>
          <a href="#register">Register</a>
        </div>
        <a href="#register" className="btn btn-primary">Reserve Your Spot</a>
      </div>
    </nav>
  );
}

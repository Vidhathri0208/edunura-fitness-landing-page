import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const { ref, isVisible } = useReveal();
  
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-07-20T00:00:00") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="overview">
      <div className="container">
        <div className={`hero-grid reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
          
          <div className="hero-content">
            <div className="eyebrow-badge">
              <span className="dot"></span> EDUNURA PRESENTS · ONLINE WORKSHOP
            </div>
            <h1 className="hero-title">
              FITNESS,<br/>
              EXPLAINED <br/>
              <span className="text-accent">PROPERLY.</span>
            </h1>
            <p className="hero-subhead">
              A hands-on, live online workshop on strength, nutrition, and body-type-based training — no fluff, no fads. Just what actually works.
            </p>
            
            <div className="hero-meta">
              <div className="meta-chip">
                <span role="img" aria-label="date">📅</span> July 20–25, 2026
              </div>
              <div className="meta-chip">
                <span role="img" aria-label="location">📍</span> Live Online
              </div>
              <div className="meta-chip">
                <span role="img" aria-label="ticket">🎟️</span> Seats Limited
              </div>
            </div>

            <div className="hero-countdown">
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#register" className="btn btn-primary group">
                Reserve Your Spot <span className="arrow">→</span>
              </a>
              <a href="#what-is-fitness" className="btn btn-ghost">
                Explore Curriculum
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" 
                alt="Athlete training" 
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function WhyFitness() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-bg" id="why-it-matters">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="two-col">
          <div>
            <span className="eyebrow">The Benefits</span>
            <h2>Why Fitness Is Needed</h2>
            <p>Understanding the core reasons to maintain physical fitness.</p>
            <div className="feature-list" style={{ marginTop: '2rem' }}>
              <div className="feature-item">
                <span className="feature-icon" role="img" aria-label="Heart">❤️</span>
                <div className="feature-content">
                  <h4>Heart Health</h4>
                  <p>Reduces risk of heart disease, stroke, and high blood pressure.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon" role="img" aria-label="Brain">🧠</span>
                <div className="feature-content">
                  <h4>Mental Clarity</h4>
                  <p>Exercise boosts mood, reduces anxiety, and sharpens focus.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon" role="img" aria-label="Scale">⚖️</span>
                <div className="feature-content">
                  <h4>Weight Control</h4>
                  <p>Helps maintain a healthy body composition and metabolism.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon" role="img" aria-label="Arm">💪</span>
                <div className="feature-content">
                  <h4>Longevity</h4>
                  <p>Active individuals live longer, healthier, and more independent lives.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80" alt="Fitness lifestyle" />
            <div className="img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

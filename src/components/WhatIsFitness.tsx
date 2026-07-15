import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function WhatIsFitness() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-panel" id="what-is-fitness">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="two-col">
          <div className="img-wrapper">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80" alt="Athlete training" />
            <div className="img-overlay"></div>
          </div>
          <div>
            <span className="eyebrow">The Foundation</span>
            <h2>What Is Fitness?</h2>
            <p>
              Fitness is the ability of your body to perform daily activities with vigor, reduce the risk of health problems, and maintain energy throughout life. It encompasses strength, endurance, flexibility, and balance — all working together for a healthier you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

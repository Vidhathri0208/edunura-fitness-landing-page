import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function ConsistencyKeys() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-bg">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="text-center max-w-2xl">
          <span className="eyebrow">The Bottom Line</span>
          <h2>Consistency & Nutrition: The Real Keys</h2>
        </div>

        <div className="stacked-cards">
          <div className="stacked-card">
            <div className="icon">🏋️</div>
            <div>
              <h3>Consistency</h3>
              <p>Progress is built day by day. Missed workouts happen — what matters is showing up again. Small, repeated actions create lasting transformation.</p>
            </div>
          </div>
          <div className="stacked-card">
            <div className="icon">🥗</div>
            <div>
              <h3>Nutrition</h3>
              <p>You cannot out-train a bad diet. Eat whole foods, stay hydrated, and align your meals with your goals — whether gaining, maintaining, or losing weight.</p>
            </div>
          </div>
        </div>

        <div className="callout success">
          <div className="icon">✓</div>
          <p><strong>Remember:</strong> Fitness is a lifestyle, not a destination. Start where you are, use what you have, and never give up.</p>
        </div>
      </div>
    </section>
  );
}

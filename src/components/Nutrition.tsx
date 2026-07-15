import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function Nutrition() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-panel">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="two-col">
          <div>
            <span className="eyebrow">The Fuel</span>
            <h2>Nutrition: Fueling Your Body Right</h2>
            <p>Nutrition is 70% of your fitness results. Tailor your intake to your specific goals.</p>
            
            <div className="feature-list" style={{ marginTop: '2rem' }}>
              <div className="feature-item" style={{ borderLeftColor: '#4CAF7D' }}>
                <span className="feature-icon" role="img" aria-label="Green circle">🟢</span>
                <div className="feature-content">
                  <h4>Underweight</h4>
                  <p>High-calorie, protein-rich meals. Include healthy fats, complex carbs, and frequent eating.</p>
                </div>
              </div>
              <div className="feature-item" style={{ borderLeftColor: '#4FA3D1' }}>
                <span className="feature-icon" role="img" aria-label="Blue circle">🔵</span>
                <div className="feature-content">
                  <h4>Ideal Weight</h4>
                  <p>Balanced macros — lean protein, whole grains, vegetables, and healthy fats in moderation.</p>
                </div>
              </div>
              <div className="feature-item" style={{ borderLeftColor: '#7A1414' }}>
                <span className="feature-icon" role="img" aria-label="Red circle">🔴</span>
                <div className="feature-content">
                  <h4>Overweight</h4>
                  <p>Calorie deficit with high fiber and protein. Reduce refined sugars and processed foods.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="img-wrapper">
            <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80" alt="Healthy nutrition" />
            <div className="img-overlay"></div>
          </div>
        </div>

        <div className="callout warn">
          <div className="icon">⚠️</div>
          <p><strong>Terms & Conditions:</strong> Always consult a physician and review blood reports before starting any nutrition or fitness program.</p>
        </div>
      </div>
    </section>
  );
}

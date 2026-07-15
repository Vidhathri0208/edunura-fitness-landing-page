import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function TrainingDeepDive() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-bg">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="text-center max-w-2xl">
          <span className="eyebrow">Methodology</span>
          <h2>Training Method Deep-Dive</h2>
        </div>

        <div className="alternating-rows">
          <div className="alt-row">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1200&q=80" alt="Resistance training" />
              <div className="img-overlay"></div>
            </div>
            <div className="alt-content">
              <h3>Resistance Training</h3>
              <ul>
                <li><strong>Equipment:</strong> Tube bands, Loop bands, Yoga mat, mini band</li>
                <li><strong>Benefits:</strong> Builds muscle mass and strength; Boosts metabolism and bone density; Improves posture and joint health</li>
                <li><strong>Basic Diet:</strong> High protein (1.6–2.2g/kg), complex carbs for energy, healthy fats for recovery.</li>
              </ul>
            </div>
          </div>

          <div className="alt-row">
            <div className="alt-content">
              <h3>Calisthenics</h3>
              <ul>
                <li><strong>Equipment:</strong> Parallel bars, Yoga mat, resistance bands, sand weights - 0.5kg</li>
                <li><strong>Benefits:</strong> Reduces disease risk, improves energy, and boosts self-confidence.</li>
                <li><strong>Basic Diet:</strong> Balanced protein and carbs. Hydration is critical.</li>
              </ul>
            </div>
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=80" alt="Calisthenics training" />
              <div className="img-overlay"></div>
            </div>
          </div>

          <div className="alt-row">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" alt="Weight loss training" />
              <div className="img-overlay"></div>
            </div>
            <div className="alt-content">
              <h3>Weight Loss Program</h3>
              <ul>
                <li><strong>Benefits:</strong> Improves heart health, Reduces bad cholesterol, Improves breathing and lung function</li>
                <li><strong>Equipment:</strong> Jump rope, resistance bands, yoga mat, sand weights - 0.5kg</li>
                <li><strong>Basic Diet:</strong> 500-calorie deficit daily. Prioritize protein, fiber, and water. Limit sugars and refined carbs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

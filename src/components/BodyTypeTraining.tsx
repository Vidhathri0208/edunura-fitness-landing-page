import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function BodyTypeTraining() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-bg" id="program">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="max-w-2xl text-center">
          <span className="eyebrow">Personalized Approach</span>
          <h2>Training Based on Body Weight</h2>
          <p>Discover the optimal training strategy designed for your specific starting point.</p>
        </div>

        <div className="three-col-grid">
          <div className="card card-image-top">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80" alt="Underweight training" />
              <div className="img-overlay"></div>
            </div>
            <div className="card-content">
              <p className="eyebrow" style={{color: 'var(--text-muted)'}}>Underweight</p>
              <h3>Nutrition & Resistance Training</h3>
              <ul>
                <li>Prioritize strength training with progressive overload</li>
                <li>Support muscle gain with a caloric surplus</li>
                <li>Choose calorie-dense, high-protein meals</li>
              </ul>
            </div>
          </div>

          <div className="card card-image-top">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=600&q=80" alt="Ideal weight training" />
              <div className="img-overlay"></div>
            </div>
            <div className="card-content">
              <p className="eyebrow" style={{color: 'var(--text-muted)'}}>Ideal Weight</p>
              <h3>Calisthenics</h3>
              <ul>
                <li>Use bodyweight exercises to build strength and mobility</li>
                <li>Focus on pull-ups, push-ups, dips, and core work</li>
                <li>Maintain balanced training and recovery</li>
              </ul>
            </div>
          </div>

          <div className="card card-image-top">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80" alt="Overweight training" />
              <div className="img-overlay"></div>
            </div>
            <div className="card-content">
              <p className="eyebrow" style={{color: 'var(--text-muted)'}}>Overweight</p>
              <h3>Weight Loss Program</h3>
              <ul>
                <li>Start with consistent cardio and walking sessions</li>
                <li>Combine exercise with a sustainable calorie deficit</li>
                <li>Build endurance gradually and track progress over time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

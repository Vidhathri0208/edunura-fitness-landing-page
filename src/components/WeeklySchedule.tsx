import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function WeeklySchedule() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="schedule-section" id="schedule">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="text-center max-w-2xl">
          <span className="eyebrow">Your Routine</span>
          <h2>Workshop Schedule (July 20-25)</h2>
          <p>A structured, balanced approach to building strength and allowing proper recovery.</p>
        </div>

        <div className="schedule-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80" alt="Day 1" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 20</h4>
              <p>Chest & Triceps</p>
            </div>
          </div>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80" alt="Day 2" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 21</h4>
              <p>Back & Biceps</p>
            </div>
          </div>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80" alt="Day 3" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 22</h4>
              <p>Rest / Light Cardio</p>
            </div>
          </div>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" alt="Day 4" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 23</h4>
              <p>Legs & Core</p>
            </div>
          </div>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=600&q=80" alt="Day 5" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 24</h4>
              <p>Shoulders & Arms</p>
            </div>
          </div>
          <div className="schedule-card">
            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80" alt="Day 6" />
            <div className="img-overlay"></div>
            <div className="schedule-card-content">
              <h4>July 25</h4>
              <p>Full Body / HIIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

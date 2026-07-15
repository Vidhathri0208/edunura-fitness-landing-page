import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export function Registration() {
  const { ref, isVisible } = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    height: '',
    weight: '',
    fitnessGoal: '',
    daysPerWeek: '',
    currentlyExercise: '',
    exerciseType: '',
    importantForWeightLoss: '',
    heardResistanceTraining: '',
    sleepHours: '',
    waterIntake: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // TODO: connect to https://edunura.com/register/fitness-workshop form endpoint
  };

  return (
    <section className="registration-section" id="register">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="text-center max-w-2xl">
          <span className="eyebrow">Take Action</span>
          <h2>Seats Are Limited — Reserve Yours</h2>
          <p>Join EduNura's Live Online Fitness Workshop from July 20–25, 2026.</p>
        </div>

        <form className="reg-form" onSubmit={onSubmitRegistration}>
          
          <h3 className="form-section-title">Personal Information</h3>
          <div className="form-group">
            <label htmlFor="name">1. What is your name?</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">2. What is your age?</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="occupation">3. What is your occupation?</label>
            <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="height">4. What is your height (cm)?</label>
            <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="weight">5. What is your weight (kg)?</label>
            <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />
          </div>

          <h3 className="form-section-title">Fitness Goals & Activity</h3>
          <div className="form-group">
            <label htmlFor="fitnessGoal">1. What is your main fitness goal?</label>
            <select id="fitnessGoal" name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange} required className="form-select">
              <option value="" disabled>Select your goal</option>
              <option value="Weight loss">Weight loss</option>
              <option value="Muscle gain">Muscle gain</option>
              <option value="Strength improvement">Strength improvement</option>
              <option value="Better health">Better health</option>
              <option value="Sports performance">Sports performance</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="daysPerWeek">How many days per week do you exercise?</label>
            <select id="daysPerWeek" name="daysPerWeek" value={formData.daysPerWeek} onChange={handleChange} required className="form-select">
              <option value="" disabled>Select days</option>
              <option value="0 days">0 days</option>
              <option value="1–2 days">1–2 days</option>
              <option value="3–4 days">3–4 days</option>
              <option value="5+ days">5+ days</option>
            </select>
          </div>

          <h3 className="form-section-title">Current Fitness Level</h3>
          <div className="form-group">
            <label>1. Do you currently do any exercise?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="currentlyExercise" value="Yes" onChange={handleChange} required />
                Yes
              </label>
              <label className="radio-label">
                <input type="radio" name="currentlyExercise" value="No" onChange={handleChange} required />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exerciseType">Which type of exercise do you do?</label>
            <select id="exerciseType" name="exerciseType" value={formData.exerciseType} onChange={handleChange} className="form-select">
              <option value="" disabled>Select type (if applicable)</option>
              <option value="Walking">Walking</option>
              <option value="Gym workouts">Gym workouts</option>
              <option value="Resistance training">Resistance training</option>
              <option value="Yoga">Yoga</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <h3 className="form-section-title">Knowledge & Habits</h3>
          <div className="form-group">
            <label htmlFor="importantForWeightLoss">What do you think is more important for weight loss?</label>
            <select id="importantForWeightLoss" name="importantForWeightLoss" value={formData.importantForWeightLoss} onChange={handleChange} required className="form-select">
              <option value="" disabled>Select option</option>
              <option value="Exercise">Exercise</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="form-group">
            <label>Have you heard about resistance training before?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="heardResistanceTraining" value="Yes" onChange={handleChange} required />
                Yes
              </label>
              <label className="radio-label">
                <input type="radio" name="heardResistanceTraining" value="No" onChange={handleChange} required />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sleepHours">How many hours do you sleep daily?</label>
            <input type="number" id="sleepHours" name="sleepHours" value={formData.sleepHours} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="waterIntake">How much water do you drink per day?</label>
            <input type="text" id="waterIntake" name="waterIntake" placeholder="e.g., 2 liters, 8 glasses" value={formData.waterIntake} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary">Confirm My Spot</button>
        </form>

        <div className="trust-row">
          <span className="trust-item">Practical, hands-on session</span>
          <span className="trust-item">Led by EduNura trainers</span>
          <span className="trust-item">All fitness levels welcome</span>
        </div>
      </div>
    </section>
  );
}

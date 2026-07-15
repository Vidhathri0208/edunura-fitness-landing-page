import React from 'react';
import { useReveal } from '../hooks/useReveal';

export function HealthyWeightTable() {
  const { ref, isVisible } = useReveal();

  return (
    <section className="bg-panel">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="max-w-2xl text-center">
          <span className="eyebrow">Your Baseline</span>
          <h2>Understanding Your Healthy Weight</h2>
          <p>A reference guide for healthy adult weight ranges based on height and age groups.</p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Age Group</th>
                <th>Height (cm)</th>
                <th>Healthy Weight Range (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>18–25</td><td>152</td><td>43–58</td></tr>
              <tr><td>26–35</td><td>157</td><td>45–61</td></tr>
              <tr><td>36–45</td><td>163</td><td>49–66</td></tr>
              <tr><td>46–55</td><td>168</td><td>52–69</td></tr>
              <tr><td>56+</td><td>173</td><td>55–74</td></tr>
              <tr><td>18–25</td><td>178</td><td>59–79</td></tr>
              <tr><td>26–35</td><td>183</td><td>62–84</td></tr>
              <tr><td>36–45</td><td>188</td><td>66–89</td></tr>
              <tr><td>46–55</td><td>193</td><td>69–94</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout info">
          <div className="icon">ⓘ</div>
          <p>Weight ranges are approximate for adults. Age, muscle mass, and bone density can influence what's healthy for you. Always consult a healthcare professional for personalized advice.</p>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this workshop online or offline?",
    answer: "This is a Live Online workshop, meaning you can join from anywhere in the world. However, we'll guide you as if it were an in-person session, ensuring you get hands-on, practical advice."
  },
  {
    question: "Do I need any special equipment?",
    answer: "For most of the workshop, you won't need equipment. However, having basic items like a yoga mat, some resistance bands, and a jump rope will allow you to participate in the practical demonstrations more fully."
  },
  {
    question: "Whom is this workshop for?",
    answer: "Whether you are a beginner looking to start your fitness journey, or someone with experience wanting to refine your approach based on your specific body type, this workshop is designed to provide actionable insights for all levels."
  },
  {
    question: "Will there be a recording available?",
    answer: "Yes, all registered participants will receive access to the workshop recordings for 30 days after the event concludes, so you can review the material at your own pace."
  }
];

export function FAQ() {
  const { ref, isVisible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className={`container reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="max-w-2xl text-center" style={{ margin: '0 auto 4rem' }}>
          <span className="eyebrow">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the upcoming workshop.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon"></span>
              </button>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

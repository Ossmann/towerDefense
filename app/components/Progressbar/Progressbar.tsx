'use client'

import React, { useState, useEffect } from 'react';
import '../Progressbar/ProgressbarAppear.css';

export default function Progressbar() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep < 3) {
          return prevStep + 1;
        }
        clearInterval(interval);
        return prevStep;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="progress-container">
        <ul className='progress-bar'>
          <li className={activeStep >= 1 ? 'active' : ''}>1. Meeting</li>
          <li className={activeStep >= 2 ? 'active' : ''}>2. Design</li>
          <li className={activeStep >= 3 ? 'active' : ''}>3. Tec</li>
        </ul>
      </div>
    </div>
  );
}

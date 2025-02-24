'use client'

import React, { useState, useEffect } from 'react';
import '../Progressbar/ProgressbarAppear.css';

export default function Progressbar() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep < 10) {
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
      <div className='text-2xl'>Software Projects before </div>
      <div className="progress-container">
        <ul className='progress-bar'>
          <li className={activeStep >= 1 ? 'active' : ''}>1. Meeting</li>
          <li className={activeStep >= 2 ? 'active' : ''}>2. Design</li>
          <li className={activeStep >= 3 ? 'active' : ''}>3. Tec</li>
          <li className={activeStep >= 4 ? 'active' : ''}>4. Meeting</li>
          <li className={activeStep >= 5 ? 'active' : ''}>5. Design</li>
          <li className={activeStep >= 6 ? 'active' : ''}>6. Tec</li>
          <li className={activeStep >= 7 ? 'active' : ''}>7. Tec</li>
          <li className={activeStep >= 8 ? 'active' : ''}>8. Meeting</li>
          <li className={activeStep >= 9 ? 'active' : ''}>9. Design</li>
          <li className={activeStep >= 10 ? 'active' : ''}>10. Tec</li>
        </ul>
      </div>
    </div>
  );
}

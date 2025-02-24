'use client'

import React, { useState, useEffect } from 'react';
import '../Progressbar/ProgressbarAppear.css';
import { FaBeer } from 'react-icons/fa'


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
          <li className={activeStep >= 1 ? 'active' : ''}>
            1. Meeting
          </li>
          <li className={activeStep >= 2 ? 'active' : ''}>2. Requirement Definition</li>
          <li className={activeStep >= 3 ? 'active' : ''}>3. Design</li>
          <li className={activeStep >= 4 ? 'active' : ''}>4. Review Meeting</li>
          <li className={activeStep >= 5 ? 'active' : ''}>5. Coding Session I</li>
          <li className={activeStep >= 6 ? 'active' : ''}>6. Testing</li>
          <li className={activeStep >= 7 ? 'active' : ''}>7. Coding Session II</li>
          <li className={activeStep >= 8 ? 'active' : ''}>8. Testing</li>
          <li className={activeStep >= 9 ? 'active' : ''}>9. Coding Session III</li>
          <li className={activeStep >= 10 ? 'active' : ''}>10. Unsatisfying Solution</li>
        </ul>
      </div>
    </div>
  );
}

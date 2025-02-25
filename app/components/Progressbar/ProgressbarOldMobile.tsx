'use client'

import React, { useState, useEffect } from 'react';
import '../Progressbar/Progressbar.css';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiPencilBrush } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { TfiFaceSad } from "react-icons/tfi";


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
      <div className='text-2xl'>Software Projects Before </div>
      <div className="progress-container">
        <ul className='progress-bar'>
          <li className={activeStep >= 1 ? 'active' : ''}>
            1. 
            <div className="floating-element">
              Meeting
              <div className="icon-container">
                <FaPeopleGroup />
              </div>
            </div>
          </li>
          <li className={activeStep >= 2 ? 'active' : ''}>
            2. 
            <div className="floating-element">
              Requirement Definition
              <div className="icon-container">
                <HiOutlineClipboardDocumentList />
              </div>
            </div>
          </li>
          <li className={activeStep >= 3 ? 'active' : ''}>
            3. 
            <div className="floating-element">
              Design
              <div className="icon-container">
                <GiPencilBrush />
              </div>
            </div>
          </li>
          <li className={activeStep >= 4 ? 'active' : ''}>
            4. 
            <div className="floating-element">
              Review Meeting
              <div className="icon-container">
                <FaPeopleGroup />
              </div>
            </div>
          </li>
          <li className={activeStep >= 5 ? 'active' : ''}>
            5. 
            <div className="floating-element">
              Coding Session
              <div className="icon-container">
                <FaLaptopCode />
              </div>
            </div>
          </li>
          <li className={activeStep >= 6 ? 'active' : ''}>
            6. 
            <div className="floating-element">
              Testing
              <div className="icon-container">
                <RiTestTubeFill />
              </div>
            </div>
          </li>
          <li className={activeStep >= 7 ? 'active' : ''}>
            7. 
            <div className="floating-element">
              Coding Session
              <div className="icon-container">
                <FaLaptopCode />
              </div>
            </div>
          </li>
          <li className={activeStep >= 8 ? 'active' : ''}>
            8. 
            <div className="floating-element">
              Testing
              <div className="icon-container">
                <RiTestTubeFill />
              </div>
            </div>
          </li>
          <li className={activeStep >= 9 ? 'active' : ''}>
            9. 
            <div className="floating-element">
              Coding Session
              <div className="icon-container">
                <FaLaptopCode />
              </div>
            </div>
          </li>
          <li className={activeStep >= 10 ? 'active' : ''}>
            10. 
            <div className="floating-element">
              Unsatisfying Solution
              <div className="icon-container">
                <TfiFaceSad />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );  
}
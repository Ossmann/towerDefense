'use client'

import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.cursor = 'none';

    // Add a class to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"], input[type="submit"], [onclick]');
    clickableElements.forEach(element => {
      element.classList.add('clickable');
    });

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if we're hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('.clickable') !== null;
      setIsVisible(!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;
    
    const animate = () => {
      setCursorPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = 'auto';
      
      // Cleanup clickable classes
      clickableElements.forEach(element => {
        element.classList.remove('clickable');
      });
      
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [position]);

  return (
    <>
      <style>
        {`
          .clickable {
            cursor: pointer !important;
          }
        `}
      </style>
      <div 
        className={`fixed pointer-events-none z-50 w-4 h-4 rounded-full bg-black/40 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 border-2 border-white transition-opacity duration-150
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </>
  );
};

export default CustomCursor;
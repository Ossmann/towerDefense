'use client'

import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      // Update the target position immediately
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop for smooth following
    let animationFrameId: number;
    
    const animate = () => {
      setCursorPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = 'auto';
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [position]);

  return (
    <div 
      className="fixed pointer-events-none z-50 w-4 h-4 rounded-full bg-black/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default CustomCursor;
'use client'

import React, { useState, useEffect } from 'react';

export default function IframeEmbed({ url, className, width, height }: { url: string; className?: string; width: number; height: number }) {
  const [iframeWidth, setIframeWidth] = useState(width);
  const [iframeHeight, setIframeHeight] = useState(height);

  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = height / width;
      const screenWidth = window.innerWidth;
      
      if (screenWidth < width) {
        setIframeWidth(screenWidth);
        setIframeHeight(screenWidth * aspectRatio);
      } else {
        setIframeWidth(width);
        setIframeHeight(height);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <div className={className}>
      <iframe
        src={url}
        width={iframeWidth}
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

'use client'

import React from 'react';

export default function IframeEmbed({ url, className, width, height }: { url: string; className?: string; width: string; height: string }) {
 

  return (
    <div className={className}>
      <iframe
        src={url}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

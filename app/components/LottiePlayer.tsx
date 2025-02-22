'use client'

import React from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ 
  animationData, 
  loop = true, 
  autoplay = true, 
  style,
  className 
}) => {
  return (
    <Lottie 
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
    />
  );
};

export default LottiePlayer;


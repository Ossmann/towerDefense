'use client'

import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

interface LottiePlayerProps {
  path: string;
  playOnHover?: boolean;
}

export default function LottiePlayer({ path = '/Lottie_AI_orb.json', playOnHover = false }: LottiePlayerProps) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: !playOnHover,
        path: path,
      });

      setAnimation(anim);

      return () => {
        anim.destroy();
      };
    }
  }, [path, playOnHover]);

  const handleMouseEnter = () => {
    if (playOnHover && animation) {
      animation.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && animation) {
      animation.pause();
    }
  };

  return (
    <div 
      ref={animationContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}


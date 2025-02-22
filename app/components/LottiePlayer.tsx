'use client'

import React, { useEffect, useRef } from 'react';

interface LottiePlayerProps {
  path: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
  playOnHover?: boolean;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ 
  path,
  loop = true, 
  autoplay = true, 
  style,
  className,
  playOnHover 
}) => {
  const container = useRef<HTMLDivElement>(null);
  const anim = useRef<any>(null);

  useEffect(() => {
    let lottie: any;
    import('lottie-web').then((L) => {
      lottie = L.default;
      if (container.current) {
        anim.current = lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop,
          autoplay,
          path
        });
      }
    });

    return () => anim.current?.destroy();
  }, [path, loop, autoplay]);

  return <div ref={container} style={style} className={className} />;
};

export default LottiePlayer;


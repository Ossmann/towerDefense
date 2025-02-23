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
  const anim = useRef<ReturnType<typeof import('lottie-web')['default']['loadAnimation']>>(null);

  useEffect(() => {
    let lottie: typeof import('lottie-web')['default'];
    import('lottie-web').then((L) => {
      lottie = L.default;
      if (container.current && !anim.current) {
        anim.current = lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop,
          autoplay: playOnHover ? false : autoplay,
          path
        });
      }
    });

    return () => anim.current?.destroy();
  }, [path, loop, autoplay, playOnHover]);

  const handleMouseEnter = () => {
    if (playOnHover && anim.current) {
      anim.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover && anim.current) {
      anim.current.stop();
    }
  };

  return (
    <div 
      ref={container} 
      style={style} 
      className={className}
      onMouseEnter={playOnHover ? handleMouseEnter : undefined}
      onMouseLeave={playOnHover ? handleMouseLeave : undefined}
    />
  );
};

export default LottiePlayer;


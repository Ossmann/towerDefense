import Script from 'next/script';

export default function Home() {

  return (
        <>
      {/* Your page content here */}
      <Script src="/js/placement.js" strategy="afterInteractive" />
      <Script src="/js/waypoints.js" strategy="afterInteractive" />
      <Script src="/js/classes.js" strategy="afterInteractive" />
      <Script src="/js/index.js" strategy="afterInteractive" />

    <div className='relative'>



        <canvas></canvas>
        <div id="gameOver" className='absolute inset-0 flex items-center justify-center text-8xl hidden'>Game Over</div>



        {/* Empty bottom space */}
        <div className='p-8'></div>
      </div></>
  );
}

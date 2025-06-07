import Script from 'next/script';

export default function Home() {

  return (
        <>
      {/* Your page content here */}
      <Script src="/js/waypoints.js" strategy="afterInteractive" />
      <Script src="/js/index.js" strategy="afterInteractive" />

    <div>



        <canvas></canvas>



        {/* Empty bottom space */}
        <div className='p-8'></div>
      </div></>
  );
}

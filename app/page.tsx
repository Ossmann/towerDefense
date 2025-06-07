import Script from 'next/script';

export default function Home() {

  return (
        <>
      {/* Your page content here */}
      <Script src="/JavaScript/index.js" strategy="afterInteractive" />

    <div>



        <canvas></canvas>



        {/* Empty bottom space */}
        <div className='p-8'></div>
      </div></>
  );
}

import Script from 'next/script';
import { HeartIcon, CircleStackIcon } from '@heroicons/react/24/solid';


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
        <div id="gameOver" className='absolute inset-0 flex items-center justify-center text-6xl font-bold bg-black bg-opacity-40 hidden'>Game Over</div>
        <div className='flex items-center gap-2 absolute top-2 right-2'>
          <div className="text-xl font-bold bg-black bg-opacity-80 px-2 rounded flex items-center gap-2">
            <CircleStackIcon className="h-6 w-6 text-yellow-300" />
            <div id='coins'>100</div>
          </div>
          <div className="text-xl font-bold bg-black bg-opacity-80 px-2 rounded flex items-center gap-2">
            <HeartIcon className="h-6 w-6 text-red-500" />
            <div id='hearts'>10</div>
          </div>
        </div>

        





        {/* Empty bottom space */}
        <div className='p-8'></div>
      </div></>
  );
}

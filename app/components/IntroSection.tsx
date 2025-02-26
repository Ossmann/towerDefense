import { ChevronDownIcon } from '@heroicons/react/24/solid';
import LottiePlayer from './LottiePlayer';

export default function IntroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center space-y-8 md:space-y-12 w-full items-center text-center px-4 py-20 md:py-0 text-white">
      <h1 className="text-3xl md:text-6xl font-bold mb-2">Real-Time Software Development</h1>
      <p className='max-w-2xl text-xl'>We leverage the latest technologies to built customised applications in real-time together with you, while saving costs.</p>
      <div className="hidden md:flex items-center justify-center -space-x-12 flex-wrap">
        <div className='agile-bolt '>
          <p className='-ml-12'>Others sell agile</p>
        </div>
        <div className='agile-bolt-inverse'>
          <p className='-mr-8'>We live it</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-6 md:h-[100px] md:items-end md:space-x-8 items-center justify-center md:mt-20">
        <div className="flex flex-col items-center p-4 md:p-4">
            <div className='w-[70px] h-[70px] hover:w-[90px] hover:h-[90px] transition-all duration-300'>
                <LottiePlayer path='/lotties/stopwatch.json' playOnHover={true} />
            </div>
          <p className="font-medium text-sm uppercase tracking-wider">real-time development</p>
        </div>
        <div className="flex flex-col items-center p-4 md:p-4">
            <div className='w-[70px] h-[70px] hover:w-[90px] hover:h-[90px] transition-all duration-300'>
                <LottiePlayer path='/lotties/experiment.json' playOnHover={true} />
            </div>
          <p className="font-medium text-sm uppercase tracking-wider">rapid prototyping</p>
        </div>
        <div className="flex flex-col items-center p-4 md:p-4">
            <div className='w-[65px] h-[65px] hover:w-[85px] hover:h-[85px] transition-all duration-300'>
                <LottiePlayer path='/lotties/design.json' playOnHover={true} />
            </div>
          <p className="font-medium text-sm uppercase tracking-wider">fully customised</p>
        </div>
        <div className="flex flex-col items-center p-4 md:p-4">
          <p className='text-5xl hover:text-6xl transition-all duration-300 mb-2'>🇦🇺</p>
          <p className="font-medium text-sm uppercase tracking-wider">made in Australia</p>
        </div>
      </div>
      <a href="#Portfolio" className='pt-6 relative z-10'>
        <ChevronDownIcon className="h-16 w-16 animate-bounce" />
      </a>
    </section>
  );
} 
import Navbar from './components/navbar';
import GetInTouch from './components/GetInTouch';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';
// import { FaGithub, FaYoutube } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";


export default async function Home() {

  return (
    <div className='relative h-screen'>
      <div className='sm:p-20'>
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      {/* Intro */}
      <section id="home" className="min-h-screen flex flex-col justify-center space-y-8 md:space-y-12 w-full items-center text-center px-4 py-20 md:py-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Real-Time Software Development</h1>
          <p className='max-w-2xl'>We leverage the latest technologies to built customised applications in real-time together with you.</p>
          <div className="hidden md:block flex items-center justify-center -space-x-12 flex-wrap">
            <div className='agile-bolt font-bold'>
              <p>Others sell agile</p>
            </div>
            <div className='agile-bolt-inverse font-bold'>
              <p>We live it</p>
            </div>
          </div>
          <div className="flex space-x-8 items-center justify-center flex-wrap gap-y-6">
            <div className="flex flex-col items-center">
              <p className='text-4xl mb-2'>⏱️</p>
              <p className="font-medium text-gray-800 text-sm uppercase tracking-wider">real-time development</p>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-4xl mb-2'>🧪</p>
              <p className="font-medium text-gray-800 text-sm uppercase tracking-wider">rapid prototyping</p>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-4xl mb-2'>🖌</p>
              <p className="font-medium text-gray-800 text-sm uppercase tracking-wider">fully customised</p>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-4xl mb-2'>🇦🇺</p>
              <p className="font-medium text-gray-800 text-sm uppercase tracking-wider">made in Australia</p>
            </div>
          </div>
          <div className="flex gap-5">
            <GetInTouch />
          </div>
          <a href="#portfolio" className='pt-10'>
            <ChevronDownIcon className="h-16 w-16 text-black animate-bounce " />
          </a>
        
      </section>

      {/* Empty bottom space */}
      <div className='p-16'></div>
    </div>
    </div>
  );
}

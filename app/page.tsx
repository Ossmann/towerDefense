import Navbar from './components/navbar';
import { promises as fs } from 'fs';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



export default async function Home() {

  return (
    <div className='relative h-screen'>
      <div className='sm:p-20'>
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      {/* Intro */}
      <section id="home" className="h-screen flex flex-col justify-center space-y-6 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Real-time Software Development</h1>
        <p className='-mt-2'>Customised applications tailored to your needs.</p>
        <div className="flex items-center justify-center -space-x-12">
          <div className='agile-bolt'>
            <p>Others sell agile</p>
          </div>
          <div className='agile-bolt-inverse'>
            <p>We live it</p>
          </div>
        </div>
        <div className="flex space-x-8 items-center justify-center">
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
          <a href="mailto:office@softwaresuccess.com.au">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button>
          </a>
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

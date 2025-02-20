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
      <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Real-time Software Development</h1>
        <div className="space-y-0 w-3/4">
          <p>Customised applications tailored to your needs.</p>
          <p>Others sell agile. We live it.</p>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <p>real-time development</p>
          <p>rapid prototyping</p>
          <p>fully customised</p>
          <p>Made in Australia 🇦🇺</p>
        </div>
        <div className="flex gap-5">
          <a href="mailto:Jakobossmann@gmail.com">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button>
          </a>
          <a href="/CV_Jakob_Ossmann.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-gray-300 text-white hover:bg-blue-800">
              Download resume
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

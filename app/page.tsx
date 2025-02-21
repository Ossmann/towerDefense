import Navbar from './components/Topbar';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';
// import { FaGithub, FaYoutube } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
import portfolioData from './data/portfolio.json';

export default async function Home() {

  return (
    <div className='relative h-screen'>
      
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='sm:p-20'>
      {/* Intro */}
      <section id="home" className="min-h-screen flex flex-col justify-center space-y-8 md:space-y-12 w-full items-center text-center px-4 py-20 md:py-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Real-Time Software Development</h1>
          <p className='max-w-2xl'>We leverage the latest technologies to built customised applications in real-time together with you.</p>
          <div className="hidden md:flex items-center justify-center -space-x-12 flex-wrap">
            <div className='agile-bolt font-bold'>
              <p className='-ml-12'>Others sell agile</p>
            </div>
            <div className='agile-bolt-inverse font-bold'>
              <p className='-mr-8'>We live it</p>
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
          <a href="#Portfolio" className='pt-10'>
            <ChevronDownIcon className="h-16 w-16 text-black animate-bounce " />
          </a>
        
      </section>
      </div>

      {/* Dynamic Portfolio Sections */}
      {portfolioData.projects.map((project, index) => (
        <section 
          key={project.id} 
          id={'Portfolio'} 
          className={`${index % 2 === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-20`}
        >
          <div className={`container mx-auto px-4 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`}>
              <img 
                src={project.image}
                alt={project.imageAlt}
                className="rounded-lg w-full max-h-[400px] object-contain shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">{project.title}</h2>
              <div className={`${index % 2 === 0 ? 'text-gray-300' : ''} text-lg space-y-4`}>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Empty bottom space */}
      <div className='p-16'></div>
    </div>
  );
}

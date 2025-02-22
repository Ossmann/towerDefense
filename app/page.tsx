import Navbar from './components/Topbar';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';
// import { FaGithub, FaYoutube } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
import portfolioData from './data/portfolio.json';
import IntroSection from './components/IntroSection';
import PortfolioSection from './components/PortfolioSection';

export default async function Home() {

  return (
    <div className='relative h-screen'>
      
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='sm:p-20 section-intro'>
        <IntroSection />
      </div>

      {/* Dynamic Portfolio Sections */}
      {portfolioData.projects.map((project, index) => (
        <PortfolioSection key={project.id} project={project} index={index} />
      ))}

      {/* Empty bottom space */}
      <div className='p-16'></div>
    </div>
  );
}

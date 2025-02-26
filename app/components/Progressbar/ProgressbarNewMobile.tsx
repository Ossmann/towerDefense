'use client'

import LottiePlayer from '../LottiePlayer';

export default function ProgressbarNew() {

  return (
    <div className='space-y-4 flex flex-col items-center text-justify'>
      <div className='text-2xl font-bold text-center'>Live Software Projects</div>
          <div className=''>
            <p>Where before it took months to get to your new application by hiring an agency, you now get your working prototype instantly.</p>
            <p>We levarge the latest AI tools to build together with you in interactive agile sessions on real working applications.</p>
          </div>

      <h2 className='text-xl'>1. Vision Meeting </h2>
      <p>In an introductory meeting we get a feeling for your vision and brainstorm ideas together.</p>
      <div className='flex justify-center w-full'>
        <div className='w-[140px] h-[120px] -mt-8 mb-6'>
          <LottiePlayer 
            path='/lotties/meeting.json' 
            autoplay={true} 
            loop={true} 
          />
        </div>
      </div>

      <h2 className='text-xl'>2. Live Coding Session </h2>
      <p>In Live face-to-face sessions we work with you on real interafaces to bring your ideas to life in real-time.</p>
      <p>After every session you end up with a working application. Agile in the age of AI!</p>
      <div className='flex justify-center w-full'>
        <div className='w-[140px] h-[120px] -mt-4'>
          <LottiePlayer 
            path='/lotties/development.json' 
            autoplay={true} 
            loop={true} 
          />
        </div>
      </div>
    </div>
  );
}

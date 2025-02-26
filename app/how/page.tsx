import ProgressbarOld from '../components/Progressbar/ProgressbarOld';
import ProgressbarNew from '../components/Progressbar/ProgressbarNew';
import ProgressbarNewMobile from '../components/Progressbar/ProgressbarNewMobile';
import Topbar from '../components/Topbar';
import MobileNav from '../components/MobileNav';

export default function How() {
    return (
    <div className='text-black'>
        <div className='hidden md:block'>
         <Topbar />
        </div>

        <div className='block md:hidden fixed top-0 left-0 right-0 z-20'>
        <MobileNav />
      </div>
        
        <div className='hidden md:block mx-20 pt-20 text-center'>
            <ProgressbarOld />
        </div>
        {/* <div className='block md:hidden'>
            <ProgressbarOldMobile />
        </div> */}

    <div className='hidden md:block mx-20'>
        <div className='mx-24 text-center'>
            <ProgressbarNew />
        </div>
        <div className='mx-24 mt-14'>
        <p className='text-base mb-4'>
            Where before it took months to get you to your new application by hiring an agency, you now get your working prototype instantly.
        </p>
        <p className='text-base mb-6'>
            We leverage the latest AI tools to build together with you in interactive agile sessions on real working applications.
        </p>

        <h2 className='text-2xl mb-4'>1. Introductory Vision Meeting</h2>
        <p className='text-base mb-6'>
        In an introductory meeting we get a feeling for your vision and brainstorm ideas together.
        </p>

        <h2 className='text-2xl mb-4'>2. Live Coding Session</h2>
        <p className='text-base mb-3'>
        In Live face-to-face sessions we work with you on real interfaces to bring your ideas to life in real-time.
        </p>
        <p className='text-base mb-6'>
        After every session you end up with a working application. Agile in the age of AI!
        </p>

        </div>
    </div>

        <div className='block md:hidden mx-12 mt-32 text-center'>
            <ProgressbarNewMobile />
        </div>
        
        {/* Empty bottom space */}
      <div className='p-20'></div>
    </div>
    );
  }
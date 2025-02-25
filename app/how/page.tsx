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
        <div className='hidden md:block mx-44 text-center'>
            <ProgressbarNew />
        </div>
        <div className='block md:hidden mx-12 mt-32 text-center'>
            <ProgressbarNewMobile />
        </div>
    </div>
    );
  }
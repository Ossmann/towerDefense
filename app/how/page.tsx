import ProgressbarOld from '../components/Progressbar/ProgressbarOld';
import ProgressbarNew from '../components/Progressbar/ProgressbarNew';
import Topbar from '../components/Topbar';
import Footer from '../components/MobileNav';

export default function How() {
    return (
    <div className='text-black'>
        <Topbar />
        
        <div className='mx-20 pt-20 text-center'>
            <ProgressbarOld />
        </div>
        <div className='mx-20 text-center'>
            <ProgressbarNew />
        </div>
    </div>
    );
  }
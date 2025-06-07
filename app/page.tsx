// import Navbar from './components/Topbar/Topbar';
// import MobileNav from './components/Topbar/MobileNav';

export default async function Home() {

  return (
    <div className='relative h-screen'>
      
      {/* <div className='hidden sm:mb-200 md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='block md:hidden fixed top-0 left-0 right-0 z-20'>
        <MobileNav />
      </div> */}

      {/* Main content area */}
      <div className='flex flex-col items-center justify-center h-full bg-gray-100'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Tower Defense</h1>
      </div>

      
  
      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>
  );
}

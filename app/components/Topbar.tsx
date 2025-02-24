'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetInTouch from './Contactbutton';

export default function Topbar() {
  const pathname = usePathname();
  const links = [
    { href: '/how', label: 'How it works', name: '/how' },
    { href: '/about', label: 'About', name: '/about' },
  ];

  return (
    <div>
      <div className='flex justify-between p-4 border-b px-20 glass-morph'>
        <div className='justify-start pl-2'>
        <Link href="/" className=''>Software Success</Link>
          <div className='text-xs lowercase mt-1 italic'>Customised solutions</div>
        </div>

        <div className='flex items-center'>
          <div className='flex space-x-4 items-center'>
            <GetInTouch />
            {links.map((link, index) => (
              <div className='px-4 hover:underline whitespace-nowrap' key={index}>
                <Link className={`link ${pathname === link.name ? 'font-semibold' : ''}`} href={link.href}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

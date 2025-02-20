'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/#portfolio', label: 'My Portfolio', name: '/' },
    { href: '/me', label: 'About Me', name: '/me' },
  ];

  return (
    <div>
      <div className='flex justify-between p-4 bg-white border font-light text-sm px-20'>
        <div className='justify-start pl-2'>
          <div>Software Success</div>
          <div className='text-xs lowercase font-mono mt-1'>Customised solutions</div>
        </div>

        <div className='flex items-center'>
          <div className='flex space-x-4'>
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

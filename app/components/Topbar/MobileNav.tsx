'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '/about', label: 'About', name: '/about' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className='text-gray-700 text-opacity-80'>Sport Games Free</Link>
          <div className="flex-1 flex items-center justify-end">
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.name ? 'text-black font-semibold' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNav;

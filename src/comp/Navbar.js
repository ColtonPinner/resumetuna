import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'; // Removed BellIcon
import { Transition } from '@headlessui/react';

// Mock profile data
const mockProfile = {
  id: '123',
  avatar_url: '',
};

const Navbar = ({ profile = mockProfile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed notification-related states
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  // Removed notification-related functions

  const navLinkClasses = "text-slate-700 dark:text-slate-200 font-medium px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors";
  const mobileNavLinkClasses = "block text-slate-700 dark:text-slate-200 font-medium px-4 py-3 text-base hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors w-full text-center";

  return (
    <>
      {/* Add padding to body or main content to prevent overlap with fixed navbar */}
      <div className="pb-[80px]">
        <nav className="fixed top-0 left-0 right-0 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-b border-slate-300 dark:border-slate-700">
          <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" legacyBehavior>
                  <a className="flex-shrink-0">
                    <Image
                      src="/resumeTuna2.png"
                      alt="ResumeTuna Logo"
                      width={150}
                      height={40}
                      className="h-auto"
                    />
                  </a>
                </Link>
              </div>

              {/* Desktop: Links */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/" legacyBehavior><a className={navLinkClasses}>Home</a></Link>
                <Link href="/about" legacyBehavior><a className={navLinkClasses}>About</a></Link>
                <Link href="/features" legacyBehavior><a className={navLinkClasses}>Features</a></Link>
              </div>

              {/* Desktop: Sign Up Button */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Removed notification bell */}
                
                {/* Sign Up Button */}
                <Link href="/signup" legacyBehavior>
                  <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-150">
                    Sign Up
                  </a>
                </Link>
              </div>

              {/* Mobile: Menu Button */}
              <div className="md:hidden flex items-center">
                {/* Removed notification button */}
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle main menu"
                >
                  {isMobileMenuOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <Transition
            show={isMobileMenuOpen}
            as="div"
            className="md:hidden border-t border-slate-200 dark:border-slate-700"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Home</a></Link>
              <Link href="/about" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>About</a></Link>
              <Link href="/features" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Features</a></Link>
              <Link href="/templates" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Templates</a></Link>
              <Link href="/pricing" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Pricing</a></Link>
              <Link href="/login" legacyBehavior><a className={mobileNavLinkClasses} onClick={toggleMobileMenu}>Login</a></Link>
              <Link href="/signup" legacyBehavior><a className="block text-center w-full py-3 px-4 mt-2 rounded-md text-white bg-green-600 hover:bg-green-700 font-medium transition-colors duration-150" onClick={toggleMobileMenu}>Sign Up</a></Link>
            </div>
          </Transition>
        </nav>
      </div>

      {/* Removed mobile notifications modal */}
    </>
  );
};

// Make sure to export the component
export default Navbar;
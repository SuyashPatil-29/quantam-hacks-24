"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import { signOut, useSession } from 'next-auth/react';
import { Button, buttonVariants } from '@/components/ui/button';

interface NavItemProps {
  href: string;
  text: string;
}


const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  
  const toggleMenu = (): void => {
    setOpen(!open);
  };

  const handleLogout = () => {
    signOut({callbackUrl: 'http://localhost:3000'})
  }

  return (
    <div>
      <div className='flex justify-between lg:mx-0 mx-3 items-center text-white dark:bg-transparent py-8 mb-9'>
        <div>
          <Link href="/">
            <h1 className='lg:text-4xl text-3xl font-bold tracking-wider dark:text-white cursor-pointer'>Semicolon ;</h1>
          </Link>
        </div>
        {session?.user ? (
                  <ul className='lg:flex md:flex hidden items-center lg:gap-11 gap-5'>
                  <NavItem href="/blogs" text="Blogs" />
                  <NavItem href="/categories" text="Categories" />
                  <Button className="rounded-xl text-white bg-transparent" onClick={handleLogout}>Log Out</Button>
                </ul>
        ) : (
          <ul>
            <NavItem href="/sign-in" text="Sign In" />
          </ul>
        )}
        <button className='lg:hidden md:hidden block mr-4' onClick={toggleMenu}>
          <span className='sr-only'>Menu</span>
          <svg
            className={`h-6 w-6 text-white`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      {open && <HeaderMenu />}
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => (
  <li>
    <Link href={href} as={href} className='text-xl font-semibold hover:text-pink-900 text-white cursor-pointer'>
      {text}
    </Link>
  </li>
);

export default Header;

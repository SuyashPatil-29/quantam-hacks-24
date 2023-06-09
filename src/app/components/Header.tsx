"use client"
import Link from 'next/link';
import React from 'react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>

        <div className='flex justify-between lg:mx-0 mx-3 items-center text-white dark:bg-transparent bg-white py-[40px] mb-9'>
            <div>
                <Link href="/">
                    <h1 className='lg:text-4xl text-3xl font-bold tracking-wider dark:text-white text-black'>Suyash Patil</h1>
                </Link>
            </div>
            <ul className='lg:flex hidden items-center lg:gap-11 gap-5'>
                <Link href="/blogs" as={`/blogs`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Blogs</Link>
                <Link href="/categories" as={`/categories`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Categories</Link>
                <Link href="/about" as={`/about`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">About</Link>
            </ul>
            <button className='lg:hidden block mr-4' onClick={() => setOpen((p) => !p)}>
            <span className='sr-only'>Menu</span>
            <svg
              className='h-6 w-6 dark:text-white text-black'
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
}

export default Header;

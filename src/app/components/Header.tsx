import Link from 'next/link';
import React from 'react';


const Header = () => {
    return (
        <div className='flex lg:justify-between justify-evenly lg:mx-0 mx-3 items-center text-white dark:bg-transparent bg-white py-[40px] mb-9'>
            <div>
                <Link href="/">
                    <h1 className='text-4xl font-bold tracking-wider dark:text-white text-black'>Suyash Patil</h1>
                </Link>
            </div>
            <ul className='flex items-center lg:gap-11 gap-5'>
                <Link href="/blogs" className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Blogs</Link>
                <Link href="/categories" className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Categories</Link>
                <Link href="/about" className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">About</Link>
            </ul>
        </div>
    );
}

export default Header;

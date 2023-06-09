import Link from 'next/link'
import React from 'react'

function HeaderMenu() {
  return (
    <ul className="menu bg-base-200 w-[90vw] rounded-box relative bottom-10 left-5">
      <li className='w-full'><Link href="/blogs" as={`/blogs`} className=" place-content-center text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Blogs</Link></li>
      <hr className="w-full border-b-2 border-pink-500"/>
      <li className='w-full'><Link href="/categories" as={`/categories`} className=" place-content-center text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Categories</Link></li>
      <hr className="w-full border-b-2 border-pink-500"/>
      <li className='w-full'><Link href="/about" as={`/about`} className=" place-content-center text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">About</Link></li>
      <hr className="w-full border-b-2 border-pink-500"/>
    </ul>
  )
}

export default HeaderMenu
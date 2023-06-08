import Link from 'next/link'
import React from 'react'

function HeaderMenu() {
  return (
    <ul className="menu bg-base-200 w-[90vw] rounded-box relative bottom-10 left-5">
      <li><Link href="/blogs" as={`/blogs`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Blogs</Link></li>
      <li><Link href="/categories" as={`/categories`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">Categories</Link></li>
      <li><Link href="/about" as={`/about`} className="text-lg font-semibold hover:text-pink-500 dark:hover:text-pink-900 dark:text-white text-black">About</Link></li>
    </ul>
  )
}

export default HeaderMenu
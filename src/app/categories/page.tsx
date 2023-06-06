import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../lib/sanity.client'
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/footer';


type Props = {
    title: string;
}


export default async function Post({title}:Props) {

    const query = groq`
      *[_type == "category"]{
  title
}
    `
  
    const categories = await client.fetch(query)

    return (
        <div className="mx-[162px]"> 
            <header>
            <Header />
        </header>
            <h1 className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">All Categories</h1>
                
                <div className= "justify-start dark:text-green-400 text-green-600 flex hover:opacity-80 pt-7 lg:mx-0 mx-3">
                    <Link href="/blogs" className="inline-flex items-center py-2 text-md font-medium text-center">
                        Go to all Blogs
                        <svg aria-hidden="true" className="w-4 h-4 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
        <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
        <div className="flex items-center justify-center my-20  lg:mx-0 mx-4">
            <div className="mr-3 border-r-4 dark:border-white border-black">
                <h1 className="pr-3 text-3xl font-semibold  dark:text-white text-black">Tags</h1>
            </div>
            <div className="grid grid-cols-3 gap-2">
            {categories.map((category :Props) => {
                return (
                    <Link href={`/categories/${category.title.toLowerCase()}`} key={category.title} className="text-center text-md dark:text-white font-medium text-black hover:text-pink-500">{category.title.trim()}</Link>)}
                    )}
            </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

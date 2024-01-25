"use client"

import { groq } from 'next-sanity'
import { client } from '../../../../../lib/sanity.client'
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/footer';

type Props = {
    title: string,
}


export default async function Post() {

    const query = groq`
      *[_type == "category"]{
       title
       }
    `
      
    const categories = await client.fetch(query)

    return (
        <div className="h-full min-h-screen flex flex-col justify-between">
        <header className= "lg:mx-[150px] bg-transparent">
            <Header />

            <div className='lg:mx-[112px]'>
            <h1 className="text-3xl font-bold text-white grid lg:place-content-start place-content-center">All Categories</h1>
                
            <div className= "justify-start text-green-400  flex hover:opacity-80 pt-7 lg:mx-0 mx-3">
                <Link as={"/blogs"} href="/blogs" className="inline-flex items-center py-2 text-md font-medium text-center">
                    Go to all Blogs
                    <svg aria-hidden="true" className="w-4 h-4 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
            <hr className="border-[#F7AB0A] my-10 bg-white h-0"/>
            </div>
        </header>

        <div className='lg:mx-[262px]'>

            <div className="flex items-center justify-center my-20  lg:mx-0 mx-4">
            <div className="mr-3 border-r-4 border-white">
                <h1 className="pr-3 text-3xl font-semibold text-white">Tags</h1>
            </div>
            <div className="grid grid-cols-3 gap-2">
            {categories.map((category :Props) => {
                return (
                    <Link href={`/categories/category?category=${category.title}`} as={`/categories/category?category=${category.title}`} key={category.title} className="text-center text-md text-[#F7AB0A] font-medium  hover:text-pink-500">{category.title}</Link>)}
                    )}
            </div>
            </div>
        </div>
            <footer className="">
            <Footer />
            </footer>
        </div>
    )
}

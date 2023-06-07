import Link from 'next/link'
import React from 'react'
import { client } from '../../../lib/sanity.client';
import { groq } from 'next-sanity';
import { Post } from '../../../type';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';

export const query = groq`
*[_type == "post"]{
...,
author->,
categories[]->
} | order(_createdAt desc)
`;

export default async function Blogs() {

  const posts :Post[] = await client.fetch(query);
  return (
    <div  className='lg:mx-[162px]'>
        <header>
            <Header />
            <Banner heading='All Posts' />
            <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
        </header>
        {posts.map(post => {
            return(
                <Link href={`blogs/${post.slug.current}`} key={post._id} className="flex lg:flex-row flex-col flex-start lg:gap-32">
                    <div className="mt-6 text-xl">
                    <p key={post._id} className="text-md text-gray-800 dark:text-gray-200 grid lg:place-content-center lg:mr-0 ml-5 -mb-5">
                        {new Date(post._createdAt).toLocaleDateString(
                            'en-US', {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                        )}
                    </p>
                    </div>    
                    <div className="flex flex-col justify-center mx-4 my-5">
                        <div className="text-3xl dark:text-white font-bold md:text-3xl">{post.title}</div>
                        <div className="flex flex-wrap gap-2">
                        {post.categories.map(tag=>{
                            return(
                                <p key={tag._id} className="dark:text-green-300 text-emerald-500">{tag.title}</p>
                                )
                            })}
                        </div>
                    </div>
                </Link>
            )})}
            <footer>
                <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
                <Footer />
            </footer>
    </div>
  )
}

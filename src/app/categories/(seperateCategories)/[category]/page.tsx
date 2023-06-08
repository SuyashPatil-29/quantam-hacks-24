"use client"

import React from 'react'
import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import Header from '@/app/components/Header';
import Banner from '@/app/components/Banner';
import Footer from '@/app/components/footer';
import { useSearchParams } from 'next/navigation';
import { Post } from '../../../../../type';
import Link from 'next/link';

const query = groq`
*[_type == "post"]{
...,
author->,
categories[]->
} | order(_createdAt desc)
`;



export default async function Category() {
    
    const searchParams = useSearchParams();
    const search = searchParams.get("category");

  const posts :Post[] = await client.fetch(query);
  return (
    <div  className='lg:mx-[162px] min-h-screen flex flex-col justify-between'>
        <header>
            <Header />
            <Banner heading='All Posts' />
            <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
        </header>
        {posts.map((post) =>{
            if(post.categories.some((category) => category.title === search)){
                return (
                    <Link as={`/blogs/${post.slug.current}`} href={`blogs/${post.slug.current}`} key={post._id} className="flex lg:flex-row flex-col flex-start lg:gap-32">
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
                )
            }
         }
        )
        }
        <footer>
            <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
            <Footer />
        </footer>
    </div>
  )
}

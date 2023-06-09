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
import BlogLinksPage from '@/app/components/BlogLinksPage';

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
                    <BlogLinksPage key={post._id} post={post}/>
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

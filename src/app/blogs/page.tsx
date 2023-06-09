import Link from 'next/link'
import React from 'react'
import { client } from '../../../lib/sanity.client';
import { groq } from 'next-sanity';
import { Post } from '../../../type';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import BlogLinksPage from '../components/BlogLinksPage';

const query = groq`
*[_type == "post"]{
...,
author->,
categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60

export default async function Blogs() {

  const posts :Post[] = await client.fetch(query);
  return (
    <div  className='lg:mx-[162px] min-h-screen'>
        <header>
            <Header />
            <Banner heading='All Posts' />
            <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
        </header>
        {posts.map(post => {
            return(
                <BlogLinksPage key={post._id} post={post}/>
            )})}
            <footer>
                <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
                <Footer />
            </footer>
    </div>
  )
}

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
    <div  className='flex flex-col justify-between'>
        <header className="md:mx-[150px]">
            <Header />
        </header>


        <main className="md:mx-[262px]">
        <Banner heading='All Posts' />
        <hr className="border-[#F7AB0A] my-14 bg-white h-0"/>

        <div className="justify-around">
          {posts.map(post => {
            return(
              <BlogLinksPage key={post._id} post={post}/>
              )})}
        </div>

        <hr className="border-[#F7AB0A] my-14 bg-white h-0"/>
        </main>

        
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

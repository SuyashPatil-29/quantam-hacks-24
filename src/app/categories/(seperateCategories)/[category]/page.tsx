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
    <div  className=''>
        <div className="justify-around">
        {posts.map((post) =>{
            if(post.categories.some((category) => category.title === search)){
                return (
                    <BlogLinksPage key={post._id} post={post}/>
                    )
                }
            }
            )
        }
        </div>
    </div>
  )
}

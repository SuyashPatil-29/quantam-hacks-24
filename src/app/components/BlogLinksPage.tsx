import Link from 'next/link'
import React from 'react'
import { Post } from '../../../type';

type post = {
    post :Post
}

export default function BlogLinksPage({post} :post) {
  return (
    
    <div key={post._id} className="flex lg:flex-row md:flex-row flex-col flex-start lg:gap-32 md:gap-32">
                    <div className="mt-6 text-xl">
                    <p key={post._id} className="text-md text-gray-200 grid lg:place-content-center lg:mr-0 ml-5 -mb-5">
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
                        <Link href={`blogs/${post.slug.current}`} className="text-3xl text-white font-bold md:text-3xl">{post.title}</Link>
                        <div className="flex gap-2">
                        {post.categories.map(tag=>{
                            return(
                                <Link href={`/categories/category?category=${tag.title}`} key={tag._id} className="text-green-300">{tag.title}</Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
  )
}
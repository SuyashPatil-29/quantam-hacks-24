"use client"
import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../../../lib/sanity.client'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/app/components/RichTextComponents'
import Header from '@/app/components/Header'
import Footer from '@/app/components/footer'
import Link from 'next/link'
import ScrollToTop from '@/app/components/ScrollToTop'
import { Post } from '../../../../../type'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60 

export async function generateStaticParams() {
  const query = groq`
    *[_type == "post"]{
      "slug": slug.current
    }
  `
  const slug :Post[] = await client.fetch(query)
  const slugRoutes = slug.map((slug)=>slug.slug.current)

  return slugRoutes.map((slug)=>({
    slug,
  }))
  }

async function Post({params :{slug}}:Props) {

  const query = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
      ...,
      author->,
      categories[]->
    }
  `


  const post = await client.fetch(query,{slug})
  
  return (
    <div  className='lg:mx-[162px]'>
      <header>
            <Header />
        </header>
      <div>
          <p className="text-md text-gray-800 dark:text-gray-200 grid place-content-center lg:-mb-3">
          {new Date(post._createdAt).toLocaleDateString(
                        'en-US', {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                        )}
          </p>
          <h1 className="lg:text-[48px] text-3xl  font-bold dark:text-white grid place-content-center lg:mx-0 mx-auto mt-5">{post.title}</h1>
      </div>
                <div className= "my-10 justify-start dark:text-green-400 text-green-500 flex hover:opacity-80 -mb-10">
                  <Link href="/blogs" as={"/blogs"} className="inline-flex items-center px-3 lg:py-2 pr-5 text-md font-medium text-center">
                       Back to blogs
                       <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </div>
      <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1" id='top'/>

      <article className="lg:mx-0 mx-4">
        <PortableText value={post.body} components={RichTextComponents} />
      </article>
      <ScrollToTop />
      <footer>
                <div className= " my-10 justify-end dark:text-green-400 text-green-500 flex hover:opacity-80">
                  <Link href="/blogs" as={"/blogs"} className="inline-flex items-center px-3 lg:py-2 pr-5 text-md font-medium text-center">
                       Continue browsing blogs
                       <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </div>
                <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
                <Footer />
            </footer>
    </div>
  )
}

export default Post
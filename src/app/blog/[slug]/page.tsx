import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../../lib/sanity.client'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/app/components/RichTextComponents'

type Props = {
  params: {
    slug: string
  }
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
    <div>
      <div className="">
          <p className="text-md text-gray-800 dark:text-gray-200 grid place-content-center lg:-mb-3">
          {new Date(post._createdAt).toLocaleDateString(
                        'en-US', {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                        )}
          </p>
          <h1 className="lg:text-[48px] text-3xl  font-bold dark:text-white grid place-content-center lg:mx-0 mx-3 mt-5 -mb-10">{post.title}</h1>
      </div>

      <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>

      <article>
        <PortableText value={post.body} components={RichTextComponents} />
      </article>
    </div>
  )
}

export default Post
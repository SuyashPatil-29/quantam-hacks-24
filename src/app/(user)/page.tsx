import { draftMode } from "next/dist/client/components/headers"
import groq from 'groq'
import { client } from "../../../lib/sanity.client";
import BlogList from "../components/BlogList";
import Link from "next/link";

export const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function Home() {

  const posts = await client.fetch(query);
  
  return (
    <div>
       <BlogList posts={posts}/>
       <div className= " my-10 justify-end dark:text-green-400 text-green-500 flex hover:opacity-80">
       <Link href="/blogs" className="inline-flex items-center px-3 lg:py-2 pr-5 text-md font-medium text-center">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
       </Link>
    </div>
    </div>
  )
}

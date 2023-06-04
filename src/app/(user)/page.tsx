import { draftMode } from "next/dist/client/components/headers"
import groq from 'groq'
import { client } from "../../../lib/sanity.client";
import BlogList from "../components/BlogList";

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
    </div>
  )
}

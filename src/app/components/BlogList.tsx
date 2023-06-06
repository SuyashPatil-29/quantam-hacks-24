import urlFor from "../../../lib/urlFor";
import { Post } from "../../../type";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HomePageCard from "./HomePageCard";

type Props = {
    posts : Post[]
}

function BlogList({posts}:Props) {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:w-fit px-8">
        {posts.map((post)=>{
            return(
                <HomePageCard key={post._id} image={urlFor(post.mainImage).url()} heading={post.title} description={post.description} category={post.categories} link={`/blogs/${post.slug.current}`} createdAt={post._createdAt} author = {post.author.name}/>
            )
        })}
      </div>
  )
}

export default BlogList
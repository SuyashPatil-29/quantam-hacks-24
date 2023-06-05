import Link from "next/link";

type props ={
  heading :string;
}

function Banner({heading} :props) {
  return (
    <div className=" flex items-center justify-between">
    <div  className="text-3xl font-bold dark:text-white text-black grid lg:place-content-start place-content-center">
        <h1>{heading}</h1>
    </div>
    <div className= " my-10 justify-end dark:text-green-400 text-green-500 flex hover:opacity-80">
    <Link href="/studio/desk/post" className="inline-flex items-center px-3 lg:py-2 pr-5 text-md font-medium text-center">
            Write a blog
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </Link>
    </div>
    </div>
  )
}

export default Banner
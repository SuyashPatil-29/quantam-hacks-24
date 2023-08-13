import { Card, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const HomePageFooter = () => {
    return (
        <div className='flex gap-6 lg:mx-[150px] md:mx-[100px]'>
            <Link href="/contact" className='h-[250px] flex flex-col group justify-center gap-4 border border-[#F7AB0A]/25 mt-8 text-card-foreground shadow-sm bg-[rgb(16,16,16)] p-6 rounded-3xl w-[65%] mb-20'>
                <div className='flex justify-between'>
                <div>
                <CardTitle className=' font-extralight text-5xl'>Lets get in</CardTitle>
                <CardTitle className='text-[#F7AB0A] font-extralight text-5xl'>touch</CardTitle>
                </div>
                <div className=' text-white/70 group-hover:text-[#F7AB0A]/70 pt-10'>
                <svg fill="currentColor" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	                viewBox="0 0 232.395 232.395">
                <path d="M177.121,83.258c-5.921,0-11.324,2.26-15.393,5.962c-4.068-3.702-9.472-5.962-15.393-5.962
	                c-5.925,0-11.333,2.261-15.404,5.963c-1.672-1.522-3.579-2.783-5.645-3.76c7.467-9.163,11.828-20.792,11.828-33.095
	                C137.115,23.491,113.627,0,84.756,0C55.878,0,32.383,23.491,32.383,52.366c0,20.105,11.649,38.4,29.469,47.085v63.871
	                c0,38.086,30.988,69.072,69.077,69.072c38.092,0,69.083-30.986,69.083-69.072V106.15C200.012,93.527,189.743,83.258,177.121,83.258z
	                 M47.383,52.366C47.383,31.762,64.148,15,84.756,15c20.6,0,37.359,16.762,37.359,37.366c0,11.702-5.529,22.549-14.467,29.515V52.366
	                c0-12.628-10.27-22.902-22.893-22.902c-12.629,0-22.904,10.274-22.904,22.902v29.513C52.912,74.915,47.383,64.068,47.383,52.366z
	                 M185.012,163.322c0,29.815-24.262,54.072-54.083,54.072c-29.818,0-54.077-24.257-54.077-54.072V94.887
	                c0.013-0.251,0.013-0.502,0-0.751v-41.77c0-4.357,3.546-7.902,7.904-7.902c4.352,0,7.893,3.545,7.893,7.902v53.784v16.451
	                c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.54-7.893,7.891-7.893c4.351,0,7.89,3.541,7.89,7.893v16.451
	                c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.547-7.893,7.907-7.893c4.352,0,7.893,3.541,7.893,7.893
	                v16.451c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5V106.15c0-4.352,3.541-7.893,7.893-7.893
	                c4.351,0,7.891,3.541,7.891,7.893V163.322z"/>
                </svg>
                </div>
                </div>
            </Link>
    
            <div className='h-[250px] border flex gap-4 justify-evenly items-center border-[#F7AB0A]/25 mt-8 text-card-foreground shadow-sm bg-[rgb(16,16,16)] w-[35%] p-6 rounded-3xl mb-20'>
                <div className='border-[#F7AB0A]/40 hover:bg-[#F7AB0A] border rounded-full p-6 bg-black group'><a href="https://github.com/SuyashPatil-29" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current group-hover:text-black text-gray-200 h-8 w-7"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div>
                <div className='border-[#F7AB0A]/40 hover:bg-[#F7AB0A] border rounded-full p-6 bg-black group'><a href="https://www.linkedin.com/in/suyash-patil-1921b0202/ " target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current group-hover:text-black text-gray-200 h-8 w-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div>
                <div className='border-[#F7AB0A]/40 hover:bg-[#F7AB0A] border rounded-full p-6 bg-black group'><a href="https://twitter.com/_suyashpatil" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current group-hover:text-black text-gray-200 h-8 w-7"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path></svg></a> </div>   
                <div className='border-[#F7AB0A]/40 hover:bg-[#F7AB0A] border rounded-full p-6 bg-black group'><a href="https://www.instagram.com/_suyashpatil_/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current group-hover:text-black text-gray-200 h-8 w-7"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"/></svg></a> </div>   
            </div>
        </div>
    );
}

export default HomePageFooter;
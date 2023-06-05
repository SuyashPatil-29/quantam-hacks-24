import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePageCard = (props :any) => {
    return (
        <Link href={`${props.link}`}>
        <div className="bg-white border-gray-200 dark:bg-transparent border-2 dark:border-gray-300 rounded-3xl hover:transform hover:scale-105 dark:shadow-none shadow-2xl transition-all duration-500 min-h-[400px] relative">
            <img className=" rounded-t-3xl h-[200px] object-cover min:w-[400px] w-full" src={props.image} alt="home" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
                <p className='absolute bottom-14 left-3'>By - {props.author}</p>
                <p className='absolute bottom-4 left-3'>
                    {new Date(props.createdAt).toLocaleDateString(
                        'en-US', {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                        )}
               </p>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 absolute bottom-4 right-3">
                {props.category.map((category :any)=>{
                    return (
                        <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                            <p>{category.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
        </Link>
    );
}

export default HomePageCard;

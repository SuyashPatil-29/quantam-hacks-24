import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePageCard = (props :any) => {
    return (
        <Link href={`${props.link}`} as={`${props.link}`}>
        <div className="bg-transparent border-2 border-gray-300 rounded-3xl hover:transform hover:scale-105 shadow-none transition-all duration-500 min-h-[400px] relative">
            <Image className=" rounded-t-3xl h-[200px] object-cover min:w-[400px] w-full" src={props.image} alt="home" height={200} width={400} />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.heading}</h5>
                <p className='absolute bottom-14 text-white left-3'>By - {props.author}</p>
                <p className='absolute bottom-4 text-white left-3'>
                    {new Date(props.createdAt).toLocaleDateString(
                        'en-US', {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                        )}
               </p>
        </div>
    </div>
        </Link>
    );
}

export default HomePageCard;
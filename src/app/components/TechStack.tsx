import React from 'react'
import { TechStack1, TechStack2 } from "@/lib/techstack";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "../../components/ui/card";
import Image from 'next/image';

type Props = {}

const TechStack = (props: Props) => {
  return (
    <Card className="w-full flex flex-col px-10 py-10 gap-8">
    <CardHeader>Teah Stack</CardHeader>

    <div className="flex justify-between">
    {TechStack1.map((item, index) => (
      <div key={index} className='flex items-center gap-2'>
        <div className="flex flex-col items-center justify-between gap-2">
        <Image src={item.icon} alt={item.name} width={100} height={100} />
        <span className="text-white">{item.name}</span>
        </div>
      </div>
    ))}
    </div>

    <div className="flex justify-between">
    {TechStack2.map((item, index) => (
      <div key={index} className='flex items-center gap-2'>
        <div className="flex flex-col items-center justify-between gap-2 min-h-[100px]">
        <Image src={item.icon} alt={item.name} className="" width={100} height={100} />
        <span className="text-white">{item.name}</span>
        </div>
      </div>
    ))}
    </div>
  </Card>
  )
}

export default TechStack
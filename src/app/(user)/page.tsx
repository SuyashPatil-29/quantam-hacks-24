import Approach from "@/app/components/Approach";
import TechStack from "../components/TechStack"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import Image from 'next/image';

export const revalidate = 60

export default async function Home() {
  
  return (
      <div className='flex flex-col md:flex-row items-center justify-between md:gap-6 gap-3 md:mx-0 mx-3'>
        <Card className='flex items-center justify-center md:w-[400px] w-full'>
          <Image src="/images/NewPfp.jpg" alt="logo" width={300} height={300} className='rounded-3xl' />
        </Card>

        <Card className="min-h-fit mb-3">
          <CardHeader>About me</CardHeader>
          <CardContent>
            Hello, I am a Self Taught Software Engineer based in Bengaluru, India. I focus on creating experiences that put people and their stories first. I love creating things that I could see people interact with and enjoy.
            <br /><br />
            My focus is strategy, design & user experience. I am a craftsman at heart and take pride in mastering all aspects of the design process, from initial concepts to all levels of implementation. I care about the details and maintain consistent quality in everything I do.
            <br /><br />
            Feel free to take a look at my work and read my blogs.
          </CardContent>
        </Card>
      </div>
  )
}

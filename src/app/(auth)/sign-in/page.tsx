import SignIn from '@/app/components/SignIn'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import "../../../styles/globals.css"

const page = () => {
  return (
    <div className='absolute inset-0 text-white'>
        <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
            <Link href="/" className={cn(buttonVariants({variant: "ghost"}), "self-start -mt-2 text-white hover:bg-white hover:text-black rounded-xl")}><ChevronLeft className='mr-2 h-4 w-4' />Home</Link>
            <SignIn />
        </div>
    </div>
  )
}

export default page 
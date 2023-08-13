import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {

    return (
        <div className='flex justify-between items-center gap-5'>
         <Card className='w-1/4 flex flex-col justify-evenly h-[500px]'>
            <div className='flex gap-3 items-center'>
                <div className='p-6 border border-[#F7AB0A]/30 bg-[rgb(26,26,26) rounded-2xl'>
                    <Image src="/svgs/email.svg" width={25} height={25} alt='Email' className='text-white'/>
                </div>
                <div className='flex flex-col text'>
                    <p className='text-[rgb(87,87,87)] text-xl'>E-mail</p>
                    <p className='text-[rgb(188,188,188)] text-xl'>patilsuyash892@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='p-6 border border-[#F7AB0A]/30 bg-[rgb(26,26,26) rounded-2xl'>
                    <Image src="/svgs/phone.svg" width={25} height={25} alt='Email' className='text-white'/>
                </div>
                <div className='flex flex-col text'>
                    <p className='text-[rgb(87,87,87)] text-xl'>Phone</p>
                    <p className='text-[rgb(188,188,188)] text-xl'>+91 7483543757</p>
                </div>
            </div>
            <Link href="https://api.whatsapp.com/send/?phone=%2B917483543757&text&type=phone_number&app_absent=0" className='flex gap-3 items-center'>
                <div className='p-6 border border-[#F7AB0A]/30 bg-[rgb(26,26,26) rounded-2xl'>
                    <Image src="/svgs/whatsapp.svg" width={25} height={25} alt='Email' className='text-white'/>
                </div>
                <div className='flex flex-col text'>
                    <p className='text-[rgb(87,87,87)] text-xl'>WHATSAPP</p>
                    <p className='text-[rgb(188,188,188)] text-xl'>Chat with me</p>
                </div>
            </Link>
         </Card>
         <Card className='w-3/4 h-[500px]'>
            <CardHeader><p className='text-4xl font-thin'>Lets get in <span className='text-[#F7AB0A]'>touch</span></p></CardHeader>
            <form>
            <input
            type="text"
            id="subject"
            name="subject"
            className=" text-[rgb(46,46,46)] focus:outline-none mt-2 p-2 w-full h-12 rounded-xl bg-[rgb(26,26,26)]"
            required
            style={{ caretColor: 'white' }}
            placeholder='Name*'
          />
            <input
            type="email"
            id="subject"
            name="subject"
            className=" text-[rgb(46,46,46)] focus:outline-none mt-2 p-2 w-full h-12 rounded-xl bg-[rgb(26,26,26)]"
            required
            style={{ caretColor: 'white' }}
            placeholder='Email*'
          />
            <input
            type="text"
            id="subject"
            name="subject"
            className=" text-[rgb(46,46,46)] focus:outline-none mt-2 p-2 w-full h-12 rounded-xl bg-[rgb(26,26,26)]"
            required
            style={{ caretColor: 'white' }}
            placeholder='Subject*'
          />

        <textarea
            id="message"
            name="message"
            rows={5}
            className=" text-[rgb(46,46,46)] focus:outline-none mt-2 p-2 w-full rounded-xl bg-[rgb(26,26,26)] resize-none"
            required
            style={{ caretColor: 'white' }}
            placeholder='Message*'
          />
          <button
            type="submit"
            className="w-[200px] h-12 mt-2 text-white hover:bg-[#F7AB0A] bg-[rgb(50,50,50)] rounded-xl text-lg"
          >
            Send Message
          </button>
            </form>
         </Card>
        </div>
    );
}

export default About;

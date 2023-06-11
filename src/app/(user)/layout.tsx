import "../../styles/globals.css"
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "SUYASH'S BLOG | Home",
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header className='lg:mx-[162px] md:mx-[100px]'>
      <Header />
      <Banner heading='Latest Posts' />
      <hr className="border-[#F7AB0A] my-14 dark:bg-white bg-black dark:h-0 h-1"/>
        {children}
      </header>
        <footer className='mt-20'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

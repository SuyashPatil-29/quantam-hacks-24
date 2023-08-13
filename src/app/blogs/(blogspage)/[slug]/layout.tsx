import "../../../../styles/globals.css"
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
}


export default function BlogsPageLayout({children,}: {children: React.ReactNode;}) {
  return <section>{children}</section>;
}
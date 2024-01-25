import "../../../../styles/globals.css"

export const metadata = {
  title: 'Tags',
  description: 'Generated by Next.js',
}

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  )
}
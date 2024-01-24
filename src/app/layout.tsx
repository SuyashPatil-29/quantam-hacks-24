import { Toaster } from "@/components/ui/sonner"

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}

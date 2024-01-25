import AllProviders from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner"

export default async function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
      <AllProviders>
        {children}
        <Toaster position="top-center"/>
      </AllProviders>
      </body>
    </html>
  );
}

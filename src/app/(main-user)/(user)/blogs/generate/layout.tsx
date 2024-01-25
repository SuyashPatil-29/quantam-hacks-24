import Header from "@/app/components/Header";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="min-h-screen flex flex-col justify-between lg:mx-[150px] md:mx-[100px]">
        <Header />
        {children}
      </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/50">Last updated: {updated}</p>
        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/70 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-accent [&_a:hover]:underline">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

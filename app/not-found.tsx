import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="text-sm text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Page not found</h1>
        <p className="mt-4 text-white/60">The page you are looking for does not exist or has moved.</p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}

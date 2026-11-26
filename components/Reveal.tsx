import { cn } from "@/lib/utils";

// Scroll-reveal without JavaScript: a CSS scroll-driven animation where the browser supports it
// (see globals.css). Everywhere else the content is simply visible. `delay` is kept for call sites.
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}

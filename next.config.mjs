/** @type {import('next').NextConfig} */
// Static export for Cloudflare Pages. Security headers live in public/_headers.
const nextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;

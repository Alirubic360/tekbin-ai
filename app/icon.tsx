export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill="#050505" />
        <g transform="translate(32 33) scale(.78) translate(-32 -36)"><path d="M10 22H54M32 22V52" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" fill="none" /><circle cx="10" cy="22" r="6.5" fill="#fff" /><circle cx="54" cy="22" r="6.5" fill="#fff" /><circle cx="32" cy="52" r="6.5" fill="#fff" /><circle cx="32" cy="22" r="10" fill="#0070f3" /></g>
      </svg>
    ),
    size
  );
}

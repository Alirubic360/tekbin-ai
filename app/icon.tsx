export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="14" fill="#0070f3" />
        <path d="M18 22H46M32 22V44" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="22" r="5.5" fill="#fff" />
        <circle cx="46" cy="22" r="5.5" fill="#fff" />
        <circle cx="32" cy="44" r="5.5" fill="#fff" />
      </svg>
    ),
    size
  );
}

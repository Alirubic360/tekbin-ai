export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <rect width="64" height="64" rx="14" fill="#0070f3" />
      <path d="M18 22H46M32 22V44" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="22" r="5.5" fill="#fff" />
      <circle cx="46" cy="22" r="5.5" fill="#fff" />
      <circle cx="32" cy="44" r="5.5" fill="#fff" />
    </svg>
  );
}

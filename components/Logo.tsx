export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <rect x="0.5" y="0.5" width="63" height="63" rx="14" fill="#050505" stroke="rgba(255,255,255,0.18)" />
      <g transform="translate(32 33) scale(.78) translate(-32 -36)"><path d="M10 22H54M32 22V52" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" fill="none" /><circle cx="10" cy="22" r="6.5" fill="#fff" /><circle cx="54" cy="22" r="6.5" fill="#fff" /><circle cx="32" cy="52" r="6.5" fill="#fff" /><circle cx="32" cy="22" r="10" fill="#0070f3" /></g>
    </svg>
  );
}

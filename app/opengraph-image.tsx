export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const alt = "Tekbin AI — AI Agents & Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% -10%, rgba(0,112,243,0.45), rgba(5,5,5,0) 60%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 600 }}>
          <svg width="56" height="56" viewBox="0 0 64 64">
            <rect x="0.5" y="0.5" width="63" height="63" rx="14" fill="#050505" stroke="rgba(255,255,255,0.25)" />
            <g transform="translate(32 33) scale(.78) translate(-32 -36)"><path d="M10 22H54M32 22V52" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" fill="none" /><circle cx="10" cy="22" r="6.5" fill="#fff" /><circle cx="54" cy="22" r="6.5" fill="#fff" /><circle cx="32" cy="52" r="6.5" fill="#fff" /><circle cx="32" cy="22" r="10" fill="#0070f3" /></g>
          </svg>
          Tekbin AI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            AI agents and automation,
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#3b94ff" }}>
            built, monitored, managed.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.6)" }}>
            Automation that stays up.
          </div>
        </div>
      </div>
    ),
    size
  );
}

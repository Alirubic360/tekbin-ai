import { ImageResponse } from "next/og";

export const alt = "Tekbin AI — AI Automation Agency";
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
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#0070f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            T
          </div>
          Tekbin AI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Automate the work.
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#3b94ff" }}>
            Keep the growth.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.6)" }}>
            Custom AI automation for growing businesses
          </div>
        </div>
      </div>
    ),
    size
  );
}

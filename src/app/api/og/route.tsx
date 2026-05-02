import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          backgroundColor: "#131314",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top row: Shield icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Shield icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              backgroundColor: "rgba(138, 180, 248, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8AB4F8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "64px", fontWeight: 700, color: "#E8EAED" }}>
              RealvsAi
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#9AA0A6",
            marginTop: "16px",
          }}
        >
          AI Media Authenticity Scanner
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              backgroundColor: "rgba(138, 180, 248, 0.1)",
              border: "1px solid rgba(138, 180, 248, 0.2)",
              color: "#8AB4F8",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Deep Scan
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              backgroundColor: "rgba(138, 180, 248, 0.1)",
              border: "1px solid rgba(138, 180, 248, 0.2)",
              color: "#8AB4F8",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Generator ID
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              backgroundColor: "rgba(138, 180, 248, 0.1)",
              border: "1px solid rgba(138, 180, 248, 0.2)",
              color: "#8AB4F8",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            90+ AI Signals
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#6B7280",
            marginTop: "28px",
          }}
        >
          Detect AI-generated images, videos, and audio instantly
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#8AB4F8",
            marginTop: "32px",
          }}
        >
          realvs.ai
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

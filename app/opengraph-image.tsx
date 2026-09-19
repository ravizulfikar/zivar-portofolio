import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — Backend & System Integration Engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "rgba(14, 165, 233, 0.15)",
              border: "1px solid #0ea5e9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#38bdf8",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            RZ
          </div>
          <span style={{ color: "#94a3b8", fontSize: "22px", fontFamily: "monospace" }}>
            zivar.my.id // systems
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#38bdf8",
              margin: 0,
              fontWeight: "600",
            }}
          >
            Backend &amp; System Integration Engineer
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            DPMPTSP Provinsi DKI Jakarta • PHP • Laravel • PostgreSQL • RESTful API • GovTech Interoperability
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }} />
            <span style={{ color: "#10b981", fontSize: "17px", fontWeight: "bold" }}>
              5+ Tahun Pengalaman
            </span>
          </div>
          <span style={{ color: "#475569", fontSize: "18px" }}>•</span>
          <span style={{ color: "#cbd5e1", fontSize: "17px" }}>
            12+ Sistem Terintegrasi
          </span>
          <span style={{ color: "#475569", fontSize: "18px" }}>•</span>
          <span style={{ color: "#94a3b8", fontSize: "17px" }}>
            Jakarta, Indonesia
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

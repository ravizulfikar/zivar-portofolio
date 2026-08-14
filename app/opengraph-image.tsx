import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — Software Developer & Laravel Specialist`;
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
          backgroundColor: "#0b0d14",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            RZ
          </div>
          <span style={{ color: "#94a3b8", fontSize: "24px", fontFamily: "monospace" }}>
            zivar.my.id
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
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
              fontSize: "30px",
              color: "#818cf8",
              margin: 0,
              fontWeight: "600",
            }}
          >
            Software Developer &amp; Laravel Backend Specialist
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            DPMPTSP Provinsi DKI Jakarta • PHP • Laravel • Python • Node.js • RESTful API • PostgreSQL
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            borderTop: "1px solid #1e2433",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }} />
            <span style={{ color: "#10b981", fontSize: "18px", fontWeight: "bold" }}>
              5+ Tahun Pengalaman
            </span>
          </div>
          <span style={{ color: "#64748b", fontSize: "18px" }}>•</span>
          <span style={{ color: "#cbd5e1", fontSize: "18px" }}>
            12+ Sistem Terintegrasi
          </span>
          <span style={{ color: "#64748b", fontSize: "18px" }}>•</span>
          <span style={{ color: "#cbd5e1", fontSize: "18px" }}>
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

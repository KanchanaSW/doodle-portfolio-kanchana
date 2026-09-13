import { ImageResponse } from "next/og";

export const alt = "Kanchana Walagambahu - Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e6eaef",
          color: "#1b1e24",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 1,
            color: "#c24a22",
            fontWeight: 600,
          }}
        >
          doodleui-react
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Kanchana Walagambahu
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#5a606b",
            }}
          >
            Senior Software Engineer, Frontend
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

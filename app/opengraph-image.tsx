import { ImageResponse } from "next/og";

export const alt = "Sañudo — El cuero se aprende haciendo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#c97841", color: "#14120f", display: "flex", flexDirection: "column", padding: "55px 64px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>
        <span>SAÑUDO®</span><span>BARCELONA · DESDE 1971</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 102, lineHeight: .82, fontWeight: 900, letterSpacing: -7, textTransform: "uppercase" }}>
        <span>El cuero</span><span style={{ color: "#eee9df" }}>se aprende</span><span>haciendo.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, fontWeight: 700 }}>
        <span>Poble Espanyol · Cursos y artesanía</span><span style={{ background: "#f0d31f", padding: "15px 22px" }}>SEIS PLAZAS</span>
      </div>
    </div>,
    size,
  );
}

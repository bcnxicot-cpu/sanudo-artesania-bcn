import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanudo-artesania-bcn.vercel.app"),
  title: "Sañudo — Artesanía en cuero y cursos en Barcelona",
  description:
    "Aprende marroquinería y descubre piezas de cuero hechas a mano en el taller Sañudo del Poble Espanyol de Barcelona.",
  openGraph: {
    title: "Sañudo — El cuero se aprende haciendo",
    description:
      "Cursos, talleres y piezas artesanales de cuero en el Poble Espanyol de Barcelona.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14120f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

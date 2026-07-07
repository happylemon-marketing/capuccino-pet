import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://capuccino.pet";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Calculadora de edad de hámster · en memoria de Capuccino",
    template: "%s · capuccino.pet",
  },
  description:
    "Calcula la edad de tu hámster en años humanos según su especie (sirio, roborovski, ruso, chino, campbell). Herramienta gratuita creada en memoria de Capuccino, un hámster enano ruso muy amado.",
  keywords: [
    "calculadora edad hámster",
    "edad de mi hámster en años humanos",
    "cuántos años tiene mi hámster",
    "esperanza de vida hámster",
    "edad hámster sirio",
    "edad hámster ruso",
    "edad hámster roborovski",
  ],
  authors: [{ name: "Luis Rocha" }],
  creator: "Luis Rocha",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "capuccino.pet",
    title: "Calculadora de edad de hámster · en memoria de Capuccino",
    description:
      "Cuántos años humanos tiene tu hámster. Cálculo por especie. Gratis, sin registro. En memoria de Capuccino.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de edad de hámster",
    description:
      "Cuántos años humanos tiene tu hámster. Cálculo por especie. En memoria de Capuccino.",
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

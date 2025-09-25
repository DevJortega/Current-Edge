import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})
<section
  id="inicio"
  className={`py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center transition-colors duration-300 ${
    isDark ? "bg-gray-900" : "bg-white"
  }`}
>
  <div
    className={`w-40 h-40 rounded-full flex items-center justify-center mb-6 transition-colors ${
      isDark ? "bg-blue-900/30 border-4 border-blue-400" : "bg-blue-50 border-4 border-blue-200"
    }`}
  >
    <Image
      src={isDark ? "/images/current-edge-logo-dark.png" : "/images/current-edge-logo.png"}
      alt="Current Edge Logo"
      width={120}
      height={120}
      className="w-28 h-28 object-contain"
    />
  </div>
  <h1
    className={`font-serif font-bold text-4xl sm:text-5xl transition-colors ${
      isDark ? "text-white" : "text-gray-900"
    }`}
  >
    Current Edge
  </h1>
  <p
    className={`mt-6 text-xl max-w-2xl mx-auto transition-colors ${
      isDark ? "text-gray-300" : "text-gray-600"
    }`}
  >
    Somos un equipo de ingenieros especializados en electrónica analógica,
    comprometidos con el diseño y desarrollo de sistemas de medición de
    corriente de alta precisión y confiabilidad.
  </p>
</section>

export const metadata: Metadata = {
  title: "Current Edge",
  description: "Innovando el Futuro de la Medición de Corriente",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

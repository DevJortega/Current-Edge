import Image from "next/image"

interface IntroProps {
  isDark: boolean
}

export function Intro({ isDark }: IntroProps) {
  return (
    <section
      id="inicio"
      className={`py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center transition-colors duration-300 flex-col border-none tracking-wider border-transparent bg-transparent text-transparent ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-48 h-48 flex items-center justify-center mb-6 transition-colors text-popover-foreground underline opacity-100 rounded-full shadow-2xl border-primary bg-slate-50 ${
          isDark
            ? "bg-blue-900/30 border-4 border-blue-400"
            : "bg-blue-50 border-4 border-blue-200"
        }`}
      >
        <Image
          src={
            isDark
              ? "/images/design-mode/current-edge-logo-dark.png" // 👈 tu logo para modo oscuro
              : "/images/design-mode/current-edge-logo.png" // 👈 tu logo para modo claro
          }
          alt="Current Edge Logo"
          width={160}
          height={160}
          className="w-36 h-36 object-contain"
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
  )
}

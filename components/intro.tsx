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
        className={`w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center transition-colors underline opacity-100 rounded-full bg-slate-50 shadow-2xl text-secondary-foreground tracking-normal flex-col mt-3 mb-6 ml-2.5 ${
          isDark
            ? "bg-blue-900/30 border-4 border-yellow-400"
            : "bg-blue-50 border-4 border-blue-200"
        }`}
      >
        <Image
          src={
            isDark
              ? "/images/design-mode/current-edge-logo-dark.png" // 👈 logo modo oscuro
              : "/images/design-mode/current-edge-logo.png" // 👈 logo modo claro
          }
          alt="Current Edge Logo"
          width={220}
          height={220}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
        />
      </div>
      <h1
        className={`transition-colors bg-transparent font-sans font-bold text-6xl md:text-7xl lg:text-8xl ${
          isDark ? "text-yellow-400" : "text-blue-700"
        }`}
      >
        Current Edge
      </h1>
      <p
        className={`mt-6 text-xl max-w-2xl mx-auto transition-colors ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {""}
      </p>
    </section>
  )
}

import Image from "next/image"

interface IntroProps {
  isDark: boolean
}

export function Intro({ isDark }: IntroProps) {
  return (
    <section
      id="inicio"
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center transition-colors duration-300 flex-col border-none tracking-wider border-transparent bg-transparent text-transparent ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center transition-colors underline opacity-100 rounded-full bg-slate-50 shadow-2xl text-secondary-foreground tracking-normal flex-col mt-3 mb-4 sm:mb-6 ml-2.5 ${
          isDark ? "bg-blue-900/30 border-4 border-yellow-400" : "bg-blue-50 border-4 border-blue-200"
        }`}
      >
        <Image
          src={isDark ? "/images/design-mode/current-edge-logo-dark.png" : "/images/design-mode/current-edge-logo.png"}
          alt="Current Edge Logo"
          width={190}
          height={190}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        />
      </div>
      <h1
        className={`transition-colors bg-transparent font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${
          isDark ? "text-yellow-400" : "text-blue-700"
        }`}
      >
        Current Edge
      </h1>
      <p
        className={`mt-4 sm:mt-6 text-lg sm:text-xl max-w-2xl mx-auto transition-colors ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {""}
      </p>
    </section>
  )
}

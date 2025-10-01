import { Button } from "@/components/ui/button"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

const ZapIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

interface HeroProps {
  isDark: boolean
}

export function Hero({ isDark }: HeroProps) {
  return (
    <section
      id="inicio"
      className={`pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1
              className={`font-bold transition-colors text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans px-2 sm:px-4 py-0 mx-1.5 my-0 border-0 text-center tracking-normal leading-tight sm:leading-normal ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Innovando el futuro de la medición de{" "}
              <span className={isDark ? "text-yellow-400" : "text-blue-600"}>corriente</span>
            </h1>
            <p
              className={`max-w-3xl mx-auto leading-relaxed transition-colors text-popover-foreground text-center font-sans text-base sm:text-lg md:text-xl lg:text-2xl px-2 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Desarrollamos amperímetros de precisión que combinan teoría avanzada y práctica innovadora, impulsando la
              innovación a través de la colaboración y el conocimiento técnico especializado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <Button
              size="lg"
              className={`group text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto transition-colors ${
                isDark ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              asChild
            >
              <a href="#producto">
                Descubre nuestra tecnología
                <ArrowRightIcon />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 h-auto transition-colors ${
                isDark
                  ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
              asChild
            >
              <a href="#equipo">Conoce al equipo</a>
            </Button>
          </div>

          <div className="mb-0 mt-8 sm:mt-12 ml-0 mr-0 px-4 sm:px-6 py-8 sm:py-11 border-0 bg-transparent text-transparent border-transparent">
            <img
              src="/images/design-mode/AMPERIMETRO-.png"
              alt="Circuito electrónico moderno"
              className="rounded-lg max-w-full h-auto text-xs mx-auto my-0 px-0 py-0 opacity-100 w-full sm:w-10/12 md:w-9/12 lg:w-8/12 shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

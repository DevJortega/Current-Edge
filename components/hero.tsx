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
      className={`pt-16 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isDark ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-600"
              }`}
            >
              <ZapIcon />
              <span>Innovación Tecnológica</span>
            </div>
            <h1
              className={`font-serif font-bold transition-colors text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Innovando el Futuro de la medición de <span className={isDark ? "text-blue-400" : "text-blue-600"}>Corriente</span>
            </h1>
            <p
              className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
            Desarrollamos amperímetros de precisión que combinan teoría avanzada y práctica innovadora, impulsando la innovación a través de la colaboración y el conocimiento técnico especializado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              Conoce nuestro producto
              <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg">
              Ver el equipo
            </Button>
          </div>

          <div className="mt-12">
            <img
              src="/modern-electronic-circuit-board.png"
              alt="Circuito electrónico moderno"
              className="mx-auto rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

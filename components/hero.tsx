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
            
            <h1
              className={`font-bold transition-colors text-4xl font-sans px-0 py-0 mx-1.5 my-0 border-0 text-center tracking-normal leading-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Innovando el futuro de la medición de <span className={isDark ? "text-yellow-400" : "text-blue-600"}>corriente</span>
            </h1>
            <p
              className={`max-w-3xl mx-auto leading-relaxed transition-colors text-popover-foreground text-center font-sans text-2xl ${
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

          <div className="mb-0 mt-12 ml-0 mr-0 px-6 py-11 border-0 bg-transparent text-transparent border-transparent">
            <img
              src="/images/design-mode/AMPERIMETRO.png"
              alt="Circuito electrónico moderno"
              className="rounded-lg shadow-2xl max-w-full h-auto text-xs mx-auto my-0 px-0 py-0 opacity-100 w-8/12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

interface ProductProps {
  isDark: boolean
}

export function Product({ isDark }: ProductProps) {
  return (
    <section
      id="producto"
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent ${isDark ? "bg-gray-900" : "bg-slate-50"}`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* 👇 TÍTULO PRINCIPAL - Cambia aquí */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2
            className={`font-bold font-sans text-2xl sm:text-3xl md:text-4xl transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Explora nuestro <span className={isDark ? "text-yellow-400" : "text-blue-600"}>amperimetrix v 1.0</span>
          </h2>
          
          {/* 👇 DESCRIPCIÓN PRINCIPAL - Cambia aquí */}
          <p
            className={`max-w-3xl mx-auto font-sans text-base sm:text-lg md:text-xl lg:text-2xl px-2 transition-colors text-secondary text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {"En Current Edge llevamos la medición de corriente a un nuevo nivel. Nuestro amperímetro combina un diseño propio, protección inteligente y una respuesta rápida en un formato compacto y versátil. El resultado: mediciones precisas y confiables, incluso en las aplicaciones más exigentes."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pcb-UwmH4gEuuBoZhhxMtTfPppLA8UbeRs.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="rounded-lg shadow-xl w-full h-auto"
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <Badge className="mb-3 sm:mb-4"></Badge>
              
              {/* 👇 TÍTULO SECUNDARIO - Cambia aquí */}
              <h3
                className={`font-bold mb-3 sm:mb-4 text-left font-sans text-2xl sm:text-3xl transition-colors ${isDark ? "text-yellow-400" : "text-blue-600"}`}
              >
                Amperimetrix v 1.0
              </h3>
              
              {/* 👇 DESCRIPCIÓN DETALLADA - Cambia aquí */}
              <p
                className={`leading-relaxed mb-4 sm:mb-6 font-sans leading-6 sm:leading-7 tracking-normal transition-colors text-xl text-justify text-secondary ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Su esencia y su nombre (&quot;1.0”) representan el punto de partida de un nuevo estándar en medición: la primera versión de nuestro amperímetro de alta precisión. En esta etapa inicial, Amperimetrix 1.0 integra el sensor de corriente WCS1900, un componente reconocido por su excelente estabilidad y rápida respuesta dinámica. Gracias a este sensor, nuestro equipo ofrece mediciones confiables incluso en condiciones exigentes, estableciendo la base tecnológica sobre la que seguiremos evolucionando nuestras futuras versiones.
              </p>
            </div>

            <Button
              className={`w-full sm:w-auto group transition-colors ${
                isDark ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              asChild
            >
              <a href="#especificaciones">
                Ver documentación técnica
                <ArrowRightIcon />
              </a>
            </Button>
          </div>
        </div>

        {/* TABLA DE ESPECIFICACIONES */}
        <Card id="especificaciones" className={isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}>
          <CardHeader>
            <CardTitle className={`font-serif text-xl sm:text-2xl ${isDark ? "text-white" : "text-gray-900"}`}>
              Especificaciones técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <th
                      className={`py-2 sm:py-3 px-2 sm:px-4 font-medium font-sans text-base sm:text-lg text-left text-popover-foreground ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Parámetro
                    </th>
                    <th
                      className={`text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      Especificación
                    </th>
                  </tr>
                </thead>
                <tbody>
  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium font-sans text-sm sm:text-base md:text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
      Modelo
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base md:text-lg font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      Amperimetrix v1.0
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Sensor de corriente
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      WCS1900 (sensor Hall lineal, ±20 A, 60 mV/A)
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Rango de medición
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      15 A – 20 A
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Núcleo de procesamiento
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      Op-Amp personalizado (diseño propio)
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Arquitectura del circuito
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      Acondicionamiento analógico con amplificación, filtrado RC y salida escalada 0–12V
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Topología
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      Configuración con transistores PNP/NPN
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Ancho de banda
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      23 kHz (sensor) / 180 kHz (etapa de salida)
    </td>
  </tr>

  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Entrada
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      5 V
    </td>
  </tr>

  <tr>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
      Salida
    </td>
    <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      0–12 V
    </td>
  </tr>
</tbody>

              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

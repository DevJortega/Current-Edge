import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const CpuIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
)

const WifiIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
)

const BatteryIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

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
  const features = [
    {
      icon: CpuIcon,
      title: "Procesamiento Avanzado",
      description: "Microcontrolador de alta performance para procesamiento en tiempo real",
    },
    {
      icon: WifiIcon,
      title: "Conectividad IoT",
      description: "Comunicación inalámbrica integrada para aplicaciones IoT",
    },
    {
      icon: BatteryIcon,
      title: "Eficiencia Energética",
      description: "Diseño optimizado para máxima duración de batería",
    },
    {
      icon: ShieldIcon,
      title: "Seguridad Integrada",
      description: "Protocolos de seguridad avanzados para datos críticos",
    },
  ]

  return (
    <section id="producto" className={`py-20 px-4 sm:px-6 lg:px-8 bg-transparent ${isDark ? "bg-gray-900" : "bg-slate-50"}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
            Explora Nuestro Amperimetrix Current Edge
          </h2>
          <p className={`text-xl max-w-3xl mx-auto text-center ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Presentamos nuestro sistema de medición de corriente de alta precisión que integra amplificadores
            operacionales propios, protección avanzada y respuesta ultrarrápida en un diseño compacto y versátil para
            aplicaciones críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  <div>
    <video
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pcb-UwmH4gEuuBoZhhxMtTfPppLA8UbeRs.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls   // 👈 opcional: si quieres mostrar botones de reproducción
      className="rounded-lg shadow-xl w-full h-auto"
    />
  </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-4">Producto Principal</Badge>
              <h3 className={`font-serif font-bold text-2xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                Amperimetrix v2.0
              </h3>
              <p className={`leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Su esencia y su nombre ("2.0") radican en que es la evolución natural de nuestro primer gran hito: el
                diseño y construcción de nuestro propio Amplificador Operacional. Este Op-Amp, optimizado desde sus
                transistores internos, es el corazón de Amperimetrix 2.0, proporcionando la base para una medición de
                corriente de alta fidelidad, estabilidad y respuesta ultrarrápida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                      isDark ? "bg-blue-900/30 text-blue-400" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <feature.icon />
                  </div>
                  <div>
                    <h4 className={`font-medium text-sm mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {feature.title}
                    </h4>
                    <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="group">
              Ver documentación técnica
              <ArrowRightIcon />
            </Button>
          </div>
        </div>

        <Card className={isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}>
          <CardHeader>
            <CardTitle className={`font-serif ${isDark ? "text-white" : "text-gray-900"}`}>
              Especificaciones Técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <th className={`text-left py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      Parámetro
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      Especificación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Modelo</td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Amperimetrix 2.0</td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                      Rango de medición
                    </td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>10 A - 15 A</td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                      Núcleo de procesamiento
                    </td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Op-Amp personalizado (diseño propio)
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Topología</td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      Configuración con transistores PNP/NPN
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Precisión</td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      ±10% del fondo de escala
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                      Ancho de banda
                    </td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>180 kHz</td>
                  </tr>
                  <tr className={`border-b ${isDark ? "border-gray-600" : "border-gray-200"}`}>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Entrada</td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>5 V</td>
                  </tr>
                  <tr>
                    <td className={`py-3 px-4 font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Salida</td>
                    <td className={`py-3 px-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>0-12V</td>
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

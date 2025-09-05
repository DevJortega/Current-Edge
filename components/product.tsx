import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const CpuIcon = () => (
  null
)

const WifiIcon = () => (
  null
)

const BatteryIcon = () => (
  null
)

const ShieldIcon = () => (
  null
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

export function Product() {
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
    <section id="producto" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-400">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
            Explora Nuestro Amperimetrix Current Edge       
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            {"Presentamos nuestro sistema de medición de corriente de alta precisión que integra \namplificadores operacionales propios, protección avanzada y respuesta ultrarrápida \nen un diseño compacto y versátil para aplicaciones críticas."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/advanced-electronic-device.png"
              alt="Producto ElectroTech"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-4">Producto Principal</Badge>
              <h3 className="font-serif font-bold text-2xl mb-4">Amperimetrix v2.0 </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Su esencia y su nombre (&quot;2.0&quot;) radican en que es la evolución natural de nuestro primer gran hito: el diseño y construcción de nuestro propio Amplificador Operacional. Este Op-Amp, optimizado desde sus transistores internos, es el corazón de Amperimetrix 2.0, proporcionando la base para una medición de corriente de alta fidelidad, estabilidad y respuesta ultrarrápida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    {feature.icon()}
                  </div>
                  <div>
                    
                    
                  </div>
                </div>
              ))}
            </div>

            <Button className="group">
              Ver documentación técnica
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Especificaciones Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Parámetro</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Especificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Modelo</td>
                    <td className="py-3 px-4">Amperimetrix 2.0</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Rango de medición</td>
                    <td className="py-3 px-4">10 A - 15 A</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Núcleo de procesamiento</td>
                    <td className="py-3 px-4">Op-Amp personalizado (diseño propio)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Topología</td>
                    <td className="py-3 px-4">Configuración con transistores PNP/NPN</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Precisión</td>
                    <td className="py-3 px-4">±10% del fondo de escala</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Ancho de banda</td>
                    <td className="py-3 px-4">180 kHz</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    
                    
                  </tr>
                  <tr className="border-b border-border/50">
                    
                    
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Entrada</td>
                    <td className="py-3 px-4">{"5 V"}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Salida</td>
                    <td className="py-3 px-4">0-12V    </td>
                  </tr>
                  <tr>
                    
                    
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

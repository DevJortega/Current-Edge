import { Separator } from "@/components/ui/separator"

interface FooterProps {
  isDark?: boolean
}

export default function Footer({ isDark = false }: FooterProps) {
  return (
    <footer
      id="contacto"
      className={`${isDark ? "bg-gray-900" : "bg-gradient-to-r from-indigo-600 to-purple-600"} text-white py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚡</span>
              </div>
              <span className="font-bold text-lg">Current Edge</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              "Midiendo el Futuro, Amperio por Amperio"
              <br />
              Team Bravo - Electrónica III
              <br />
              Universidad del Norte
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">📧 Contacto Team</h4>
            <div className="space-y-2 text-sm text-white/90">
              <p>
                <span className="font-medium">Design Leader:</span> Jorge Ortega
              </p>
              <p>
                <span className="font-medium">Archivist:</span> Darwin Diaz
              </p>
              <p>
                <span className="font-medium">Com Officer:</span> Laura Guerrero
              </p>
              <p>
                <span className="font-medium">R&F Manager:</span> Kenneth Lascarro
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">🎯 Proyecto AmperiMax</h4>
            <div className="space-y-2 text-sm text-white/90">
              <p>✓ Metodología EPICS</p>
              <p>✓ OP-AMP Propio</p>
              <p>✓ Precisión ±0.1%</p>
              <p>✓ Respuesta &lt;50ms</p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-white/90 text-sm">© 2024 Current Edge - Team Bravo | Electrónica III</p>
            <p className="text-xs text-white/70">Universidad del Norte • Diseño Analógico • Semestre 2025-1</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-white/90 text-sm">Desarrollado con ⚡ por el Team Bravo</p>
            <p className="text-xs text-white/90 font-medium">"Midiendo el Futuro, Amperio por Amperio"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

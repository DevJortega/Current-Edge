import { Separator } from "@/components/ui/separator"

interface FooterProps {
  isDark?: boolean
}

export function Footer({ isDark = false }: FooterProps) {
  return (
    <footer id="contacto" className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 ${
                  isDark ? "bg-yellow-400/20" : "bg-blue-500/20"
                } rounded-lg flex items-center justify-center`}
              >
                <span className={`${isDark ? "text-yellow-400" : "text-blue-600"} font-bold text-sm`}>⚡</span>
              </div>
              <span
                className={`font-bold text-lg text-popover-foreground ${isDark ? "text-yellow-400" : "text-blue-700"}`}
              >
                Current Edge
              </span>
            </div>
            <p className={`text-sm leading-relaxed text-popover-foreground ${isDark ? "text-white" : "text-gray-700"}`}>
              "Midiendo el Futuro, Amperio por Amperio"
              <br />
              Team Bravo - Electrónica III
              <br />
              Universidad del Norte
            </p>
          </div>

          <div>
            <h4
              className={`font-semibold mb-4 text-lg text-popover-foreground ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              📧 Contacto Team
            </h4>
            <div className={`space-y-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}>
              <p>
                <span className="font-medium text-popover-foreground">Design Leader: Jorge Ortega</span>
              </p>
              <p>
                <span className="font-medium text-popover-foreground">Archivist: Darwin Diaz</span>
              </p>
              <p>
                <span className="font-medium text-popover-foreground">Com Officer: Laura Guerrero</span>
              </p>
              <p>
                <span className="font-medium text-popover-foreground">R&amp;F Manager: Kenneth Lascarro</span>
              </p>
            </div>
          </div>

          <div>
            <h4
              className={`font-semibold mb-4 text-lg text-popover-foreground ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              🎯 Proyecto AmperiMax
            </h4>
            <div className={`space-y-2 text-sm ${isDark ? "text-white" : "text-gray-700"}`}>
              <p className="text-popover-foreground">✓ Metodología EPICS</p>
              <p className="text-popover-foreground">✓ OP-AMP Propio</p>
              <p className="text-popover-foreground">✓ Precisión ±0.1%</p>
              <p className="text-popover-foreground">{""}</p>
            </div>
          </div>
        </div>

        <Separator className={`mb-8 ${isDark ? "bg-gray-500" : "bg-gray-300"}`} />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className={`text-popover-foreground text-sm ${isDark ? "text-white" : "text-gray-700"}`}>
              © 2025 Current Edge - Team Bravo | Electrónica III
            </p>
            <p className={`text-popover-foreground text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Universidad del Norte • Diseño Analógico • Semestre 2025-1
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className={`text-popover-foreground text-base ${isDark ? "text-white" : "text-gray-700"}`}>
              Desarrollado con ⚡ por el Team Bravo
            </p>
            <p className={`font-medium text-base text-popover-foreground ${isDark ? "text-white" : "text-gray-700"}`}>
              "Midiendo el Futuro, Amperio por Amperio"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

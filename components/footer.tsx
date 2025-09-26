Dark?: boolean
}

export default function Footer({ isDark = false }: FooterProps) {
  return (
    <footer
      id="contacto"
      className="bg-transparent py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Overlay para mejorar legibilidad del texto */}
      <div className={`absolute inset-0 ${
        isDark 
          ? "bg-black/20" 
          : "bg-white/30"
      }`}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 ${
                isDark ? "bg-yellow-400/20" : "bg-blue-500/20"
              } rounded-lg flex items-center justify-center`}>
                <span className={`${
                  isDark ? "text-yellow-400" : "text-blue-600"
                } font-bold text-sm`}>⚡</span>
              </div>
              <span className={`font-bold text-lg ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}>Current Edge</span>
            </div>
            <p className={`${
              isDark ? "text-white" : "text-gray-700"
            } text-sm leading-relaxed`}>
              "Midiendo el Futuro, Amperio por Amperio"
              <br />
              Team Bravo - Electrónica III
              <br />
              Universidad del Norte
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 text-lg ${
              isDark ? "text-white" : "text-gray-800"
            }`}>📧 Contacto Team</h4>
            <div className={`space-y-2 text-sm ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>
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
            <h4 className={`font-semibold mb-4 text-lg ${
              isDark ? "text-white" : "text-gray-800"
            }`}>🎯 Proyecto AmperiMax</h4>
            <div className={`space-y-2 text-sm ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>
              <p>✓ Metodología EPICS</p>
              <p>✓ OP-AMP Propio</p>
              <p>✓ Precisión ±0.1%</p>
              <p>✓ Respuesta &lt;50ms</p>
            </div>
          </div>
        </div>

        <Separator className={`mb-8 ${
          isDark ? "bg-gray-600" : "bg-gray-300"
        }`} />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className={`text-sm ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>© 2024 Current Edge - Team Bravo | Electrónica III</p>
            <p className={`text-xs ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>Universidad del Norte • Diseño Analógico • Semestre 2025-1</p>
          </div>
          <div className="text-center sm:text-right">
            <p className={`text-sm ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>Desarrollado con ⚡ por el Team Bravo</p>
            <p className={`text-xs font-medium ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>"Midiendo el Futuro, Amperio por Amperio"</p>
          </div>
        </div>
      </div>
    </footer>
  )

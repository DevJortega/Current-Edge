import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const TargetIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const LightbulbIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21h6" />
    <path d="M12 17h.01" />
    <path d="M12 3a6 6 0 0 1 6 6c0 1.7-.7 3.2-1.8 4.3L15 15H9l-1.2-1.7C6.7 12.2 6 10.7 6 9a6 6 0 0 1 6-6z" />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
)

interface AboutProps {
  isDark: boolean
}

export function About({ isDark }: AboutProps) {
  const features = [
    {
      icon: TargetIcon,
      title: "Misión",
      description:
        "Diseñar y desarrollar instrumentos de medición de corriente eléctrica de alta precisión, fomentando la innovación tecnológica en el campo de la electrónica mediante soluciones prácticas y eficientes.",
    },
    {
      icon: UsersIcon,
      title: "Visión",
      description:
        "Ser reconocidos como líderes en el desarrollo de soluciones de medición de corriente eléctrica, estableciendo nuevos estándares de precisión y confiabilidad en la industria.",
    },
    {
      icon: LightbulbIcon,
      title: "Innovación",
      description: "Aplicamos tecnologías de vanguardia para crear productos que resuelvan problemas reales.",
    },
    {
      icon: AwardIcon,
      title: "Excelencia",
      description: "Nos comprometemos con los más altos estándares de calidad en cada proyecto que desarrollamos.",
    },
  ]

  return (
    <section
      id="nosotros"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center mb-16">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-colors ${
              isDark ? "bg-blue-900/30 border-2 border-blue-400" : "bg-blue-50 border-2 border-blue-200"
            }`}
          >
            <Image
              src={isDark ? "/images/current-edge-logo-dark.png" : "/images/current-edge-logo.png"}
              alt="Current Edge Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className={`font-serif font-bold text-2xl transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
            Current Edge
          </h3>
        </div>

        <div className="text-center space-y-4 mb-16">
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Sobre Current Edge
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {
              "Somos un equipo de ingenieros especializados en electrónica analógica, comprometidos con el diseño \ny desarrollo de sistemas de medición de corriente de alta precisión y confiabilidad."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-lg transition-all duration-300 ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="pt-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors ${
                    isDark ? "bg-blue-900/30" : "bg-blue-50"
                  }`}
                >
                  {feature.icon()}
                </div>
                <h3
                  className={`font-serif font-semibold text-lg mb-2 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-16 rounded-lg p-8 shadow-sm transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3
            className={`font-serif font-bold text-2xl mb-6 text-center transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Nuestra Historia
          </h3>
          <div className={`prose prose-lg max-w-none transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            <p className="mb-4">
              {
                "Current Edge se fundó con el propósito de desarrollar instrumentación de medición de \ncorriente de clase mundial, aplicando metodologías avanzadas de diseño analógico y \ntecnologías de precisión."
              }
            </p>
            <p className="mb-4">
              {
                "Especializados en el diseño de amplificadores operacionales propios y sistemas de \nmedición de alta precisión, hemos desarrollado soluciones que responden a las \ndemandas más exigentes del mercado industrial y científico."
              }
            </p>
            <p>
              {
                "Nuestra experiencia en metodología EPICS y diseño analógico nos posiciona como \nlíderes en el desarrollo de instrumentos de medición confiables y exactos."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"

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

const LightningIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
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
    <section id="about" className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`font-bold mb-4 font-sans text-5xl transition-colors ${
            isDark ? "text-yellow-400" : "text-blue-600"
          }`}>
            Sobre Current Edge
          </h2>
          <p className={`max-w-3xl mx-auto font-sans text-2xl transition-colors ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Somos una empresa especializada en el diseño y desarrollo de instrumentos de medición de corriente eléctrica
            de alta precisión. Nuestro enfoque se centra en la innovación tecnológica y la excelencia en cada proyecto
            que emprendemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              } hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    isDark ? "bg-blue-900 text-blue-400" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <feature.icon />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

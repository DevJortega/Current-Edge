import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TeamProps {
  isDark: boolean
}

export function Team({ isDark }: TeamProps) {
  const teamMembers = [
    {
      name: "Darwin Díaz",
      role: "ARCHIVIST",
      description: "Especialista en diseño de circuitos y gestión de proyectos electrónicos.",
      image: "/images/team/darwin.jpg",
      skills: ["Circuitos", "Gestión", "Electrónica"],
    },
    {
      name: "Laura Guerrero",
      role: "COM OFFICER",
      description: "Experta en comunicación y coordinación de equipos de ingeniería.",
      image: "/images/team/laura.jpg",
      skills: ["Comunicación", "Hardware", "Embebidos"],
    },
    {
      name: "Kenneth Lascarro",
      role: "R & F MANAGER",
      description: "Encargado de investigación y pruebas en proyectos electrónicos.",
      image: "/images/team/kenneth.jpg",
      skills: ["Investigación", "Pruebas", "Validación"],
    },
    {
      name: "Jorge Ortega",
      role: "DESIGN LEADER",
      description: "Líder en diseño y optimización de hardware electrónico.",
      image: "/images/team/jorge.jpg",
      skills: ["Diseño", "Optimización", "Hardware"],
    },
  ]

  return (
    <section
      id="equipo"
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-transparent text-transparent ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl text-transparent bg-transparent">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 bg-transparent text-transparent">
          <h2
            className={`font-serif font-bold text-2xl sm:text-3xl md:text-4xl transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Conoce a los visionarios del proyecto
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2 transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Nuestro equipo combina experiencia técnica con innovación, trabajando juntos para crear soluciones
            electrónicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-lg transition-all duration-300 group ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="pt-4 sm:pt-6 px-3 sm:px-4">
                <div className="relative mb-4 sm:mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <h3
                  className={`font-serif font-bold text-base sm:text-lg mb-1 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`font-medium text-sm sm:text-base mb-2 sm:mb-3 transition-colors ${isDark ? "text-blue-400" : "text-blue-600"}`}
                >
                  {member.role}
                </p>
                <p
                  className={`text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed transition-colors ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs transition-colors ${
                        isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

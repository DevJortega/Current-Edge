import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Inline SVG components
const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

interface TeamProps {
  isDark: boolean
}

export function Team({ isDark }: TeamProps) {
  const teamMembers = [
  {
    name: "Darwin Díaz",
    role: "ARCHIVIST",
    description: "Especialista en diseño de circuitos y gestión de proyectos electrónicos.",
    image: "/professional-woman-engineer.png",
    social: {
      github: "#",
      linkedin: "#",
      email: "dherrerad@uninorte.edu.co",
    },
    skills: ["Circuitos", "Gestión", "Electrónica"],
  },
  {
    name: "Laura Guerrero",
    role: "COM OFFICER",
    description: "Experta en comunicación y coordinación de equipos de ingeniería.",
    image: "/professional-engineer-circuit-boards.png",
    social: {
      github: "#",
      linkedin: "#",
      email: "lcanoles@uninorte.edu.co",
    },
    skills: ["Comunicación", "Hardware", "Embebidos"],
  },
  {
    name: "Kenneth Lascarro",
    role: "R & F MANAGER",
    description: "Encargado de investigación y pruebas en proyectos electrónicos.",
    image: "/woman-programmer-electronics.png",
    social: {
      github: "#",
      linkedin: "#",
      email: "kennethl@uninorte.edu.co",
    },
    skills: ["Investigación", "Pruebas", "Validación"],
  },
  {
    name: "Jorge Ortega",
    role: "DESIGN LEADER",
    description: "Líder en diseño y optimización de hardware electrónico.",
    image: "/placeholder-39ipw.png",
    social: {
      github: "#",
      linkedin: "#",
      email: "janillom.@uninorte.edu.co",
    },
    skills: ["Diseño", "Optimización", "Hardware"],
  },
]


  return (
    <section
      id="equipo"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`font-serif font-bold text-3xl sm:text-4xl transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Conoce a los Visionarios del Proyecto
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Nuestro equipo combina experiencia técnica con innovación, trabajando juntos para crear soluciones electrónicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-lg transition-all duration-300 group ${
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="pt-6">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <h3
                  className={`font-serif font-bold text-lg mb-1 transition-colors ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p className={`font-medium mb-3 transition-colors ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                  {member.role}
                </p>
                <p
                  className={`text-sm mb-4 leading-relaxed transition-colors ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
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

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.github}
                    className={`transition-colors ${
                      isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className={`transition-colors ${
                      isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className={`transition-colors ${
                      isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <MailIcon />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

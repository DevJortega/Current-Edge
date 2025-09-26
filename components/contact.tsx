import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

// ===== ICONOS =====
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

// ===== PROPS =====
interface ContactProps {
  isDark: boolean
}

// ===== COMPONENTE =====
export function Contact({ isDark }: ContactProps) {
  const socialLinks: { icon: React.FC; label: string; href: string; gradient?: boolean }[] = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/currentedge-solutions" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/company/currentedge-solutions" },
    { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/currentedge_solutions", gradient: true },
  ]

  const contactInfo: { icon: React.FC; label: string; value: string }[] = [
    { icon: MailIcon, label: "Email", value: "contacto@currentedge-solutions.com" },
    { icon: PhoneIcon, label: "Teléfono", value: "+(57)3153187938" },
    { icon: MapPinIcon, label: "Ubicación", value: "Universidad del Norte, Campus Principal" },
  ]

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank')
  }

  return (
    <section id="contacto" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`font-bold text-3xl font-sans sm:text-5xl ${isDark ? "text-white" : "text-gray-900"}`}>
            Conectemos
          </h2>
          <p className={`max-w-3xl mx-auto text-2xl font-sans ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            ¿Tienes preguntas sobre nuestro proyecto o quieres colaborar con nosotros? No dudes en contactarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ===== FORMULARIO ===== */}
          <Card className={isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}>
            <CardHeader>
              <CardTitle className={`font-serif ${isDark ? "text-white" : "text-gray-900"}`}>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Asunto
                </label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Cuéntanos más..." rows={5} />
              </div>

              <Button className="w-full">Enviar mensaje</Button>
            </CardContent>
          </Card>

          {/* ===== INFO ===== */}
          <div className="space-y-8">
            <Card className={isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}>
              <CardHeader>
                <CardTitle className={`font-serif ${isDark ? "text-white" : "text-gray-900"}`}>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? "bg-blue-900/30 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                      <info.icon />
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{info.label}</p>
                      <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* REDES SOCIALES */}
            <Card className={isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}>
              <CardHeader>
                <CardTitle className={`font-serif ${isDark ? "text-white" : "text-gray-900"}`}>Síguenos en redes sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(social.href)}
                      className={`
                        group relative p-3 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg
                        ${social.gradient 
                          ? "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white" 
                          : isDark 
                            ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white border border-gray-600" 
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200"
                        }
                      `}
                      aria-label={`Seguir en ${social.label}`}
                    >
                      <social.icon />
                      
                      {/* Efecto de brillo para Instagram */}
                      {social.gradient && (
                        <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      )}
                      
                      {/* Tooltip */}
                      <div className={`
                        absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
                        ${isDark ? "bg-gray-900 text-white" : "bg-gray-800 text-white"}
                      `}>
                        {social.label}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="text-center mt-4">
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    @currentedge_solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

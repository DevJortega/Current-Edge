import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

// ===== ICONOS =====
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 ...z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569...z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12...z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18...z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6...z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

// ===== PROPS =====
interface ContactProps {
  isDark: boolean
}

// ===== COMPONENTE =====
export function Contact({ isDark }: ContactProps) {
  const socialLinks: { icon: React.FC; label: string; href: string }[] = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/electrotech-solutions" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/company/electrotech-solutions" },
    { icon: MailIcon, label: "Email", href: "mailto:contacto@electrotech-solutions.com" },
  ]

  const contactInfo: { icon: React.FC; label: string; value: string }[] = [
    { icon: MailIcon, label: "Email", value: "contacto@currentedge-solutions.com" },
    { icon: PhoneIcon, label: "Teléfono", value: "+(57)3153187938" },
    { icon: MapPinIcon, label: "Ubicación", value: "Universidad del Norte, Campus Principal" },
  ]

  return (
    <section id="contacto" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`font-serif font-bold text-3xl sm:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
            Conectemos
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        isDark ? "bg-gray-700 text-gray-400 hover:text-blue-400" : "bg-gray-100 text-gray-600 hover:text-blue-600"
                      }`}
                      aria-label={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

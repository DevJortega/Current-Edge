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
}

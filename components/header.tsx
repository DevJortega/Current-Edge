"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeaderProps {
  isDark: boolean
  toggleDarkMode: () => void
}

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SunIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

export function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 
      backdrop-blur-md bg-white/60 dark:bg-black/60 border-transparent`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-evenly gap-0 px-3 h-14 font-semibold text-lg shadow-lg rounded-xl">
          {/* Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}>
              Inicio
            </a>
            <a href="#about" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}>
              Nosotros
            </a>
            <a href="#equipo" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}>
              Equipo
            </a>
            <a href="#producto" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}>
              Producto
            </a>
            <a href="#contacto" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"}`}>
              Contacto
            </a>
          </nav>

          {/* Botones */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`transition-colors ${isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 dark:bg-black/80 backdrop-blur-md`}>
              <a href="#inicio" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} block px-3 py-2`}>
                Inicio
              </a>
              <a href="#about" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} block px-3 py-2`}>
                Nosotros
              </a>
              <a href="#equipo" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} block px-3 py-2`}>
                Equipo
              </a>
              <a href="#producto" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} block px-3 py-2`}>
                Producto
              </a>
              <a href="#contacto" className={`${isDark ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"} block px-3 py-2`}>
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

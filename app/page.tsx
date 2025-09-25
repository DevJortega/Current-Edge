"use client"

import { useState, useEffect } from "react"
import { Intro } from "@/components/intro"   // 👈 AQUI importamos el Intro
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Product } from "@/components/product"
import { Contact } from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved) {
      setIsDark(JSON.parse(saved))
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem("darkMode", JSON.stringify(newMode))
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
  <main className="min-h-screen transition-colors duration-300">
    <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
    <Hero isDark={isDark} />
    <About isDark={isDark} />
    <Team isDark={isDark} />
    <Product isDark={isDark} />
    <Contact isDark={isDark} />
    <Footer />
  </main>
)

}

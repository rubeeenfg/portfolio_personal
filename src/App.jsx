import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Portfolio from './components/Portfolio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container py-5">
        <Hero />
        <Servicios />
        <Portfolio />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

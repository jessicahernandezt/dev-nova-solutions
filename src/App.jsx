import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Servicios from "./components/Nuestros-servicios"
import Nosotros from "./components/Quienes-somos"
import Proyectos from "./components/Proyectos"
import Tecnologias from "./components/Tecnologias"
import Experiencia from "./components/Experiencia"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App(){

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <Proyectos />
      <Tecnologias />
      <Experiencia />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
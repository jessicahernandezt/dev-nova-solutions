import Hero from "../components/Hero"
import Servicios from "../components/Servicios"
import QuienesSomos from "../components/QuienesSomos"
import Proyectos from "../components/Proyectos"
import Tecnologias from "../components/Tecnologias"
import ExperienciasClientes from "../components/ExperienciasClientes"
import Contactos from "../components/Contactos"
import Footer from "../components/Footer"


function Home() {
  return (
    <>
    <Hero />
    <Servicios />
    <QuienesSomos />
    <Proyectos />
    <Tecnologias />
    <ExperienciasClientes />
    <Contactos />
    <Footer />
    </>
  )
}

export default Home
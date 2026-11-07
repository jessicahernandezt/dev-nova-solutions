import Hero from "./CClients/Hero"
import Navbar from "./CClients/Navbar"
import Servicios from "./CClients/Servicios"
import Quiénes_somos from "./CClients/Quiénes_somos"
import Proyectos_destacados from "./CClients/Proyectos_destacados"
import Tecnologías from "./CClients/Tecnologías"
import Experiencia_y_clientes from "./CClients/Experiencia_y_clientes"
import Contacto_y_preguntas_frecuentes from "./CClients/Contacto_y_preguntas_frecuentes"
import Footer from "./CClients/Footer"
function Clientes(){
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Servicios/>
    <Quiénes_somos/>
    <Proyectos_destacados/>
    <Tecnologías/>
    <Experiencia_y_clientes/>
    <Contacto_y_preguntas_frecuentes/>
    <Footer/>
    </>
    
  )
}

export default Clientes

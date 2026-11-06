
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Servicios from "./components/Servicios"
import Quiénes_somos from "./components/Quiénes_somos"
import Proyectos_destacados from "./components/Proyectos_destacados"
import Tecnologías from "./components/Tecnologías"
import Experiencia_y_clientes from "./components/Experiencia_y_clientes"
import Contacto_y_preguntas_frecuentes from "./components/Contacto_y_preguntas_frecuentes"
import Footer from "./components/Footer"
function App(){
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

export default App
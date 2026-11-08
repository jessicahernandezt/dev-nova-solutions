
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Quiénes_somos from '../components/Quiénes_somos'
import Proyectos_destacados from '../components/Proyectos_destacados'
import Tecnologías from '../components/Tecnologías'
import Contacto_y_preguntas_frecuentes from '../components/Contacto_y_preguntas_frecuentes'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      
      <Hero/>
      <Servicios />
      <Quiénes_somos/>
      <Tecnologías/>
      <Proyectos_destacados/>
      <Contacto_y_preguntas_frecuentes/>
      <Footer/>
    </>
  )
}

export default Home


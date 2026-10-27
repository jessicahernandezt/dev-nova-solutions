import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import Quienessomos from "./components/Quienessomos"
import Proyectosdestacados from "./components/Proyectosdestacados"
import Tecnologias from "./components/Tecnologias"

function App(){

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Quienessomos />
      <Proyectosdestacados />
      <Tecnologias />
    </>
  )
}

export default App
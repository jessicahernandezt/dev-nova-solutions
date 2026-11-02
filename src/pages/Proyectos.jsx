import Navbar from "./components/Navbar"
import HeroProy from "./components/HeroProy"
import ProyDes from "./components/ProyectosDestacados"
import Footer from "./components/Footer"
import Metodo from "./components/MetodologiasProy"
import Resultados from "./components/Resultados"
import ProyFuturo from "./components/ProyectoFuturo"

function App(){

  return (
    <>
      <Navbar />
      <HeroProy />
      <ProyDes />
      <Metodo />
      <Resultados />
      <ProyFuturo />
      <Footer />
    </>
  )
}

export default App
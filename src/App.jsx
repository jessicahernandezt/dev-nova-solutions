import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Nosotros from "./pages/Nosotros.jsx";
import Esencia from "./pages/Esencia.jsx";
import Valores from "./pages/Valores.jsx";
import Equipo from "./pages/Equipo.jsx";
import Trayectoria from "./pages/Trayectoria.jsx";

function App(){

  return (
    <>
      <Navbar />
      <Nosotros/>
      <Esencia/>
      <Valores/>
  
      <Trayectoria/>
      
      
    </>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Servicios from './components/Servicios'
import QuienesSomos from './components/QuienesSomos'
import Proyectos from './pages/Proyectos'
import Tecnologias from './pages/Tecnologias'
import Experiencia from './pages/Experiencia'
import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'
import DesarrolloWeb from './pages/DesarrolloWeb'
import AplicacionesMoviles from './pages/AplicacionesMoviles'
import DesarrolloSoftware from './pages/DesarrolloSoftware'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="tecnologias" element={<Tecnologias />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="aplicaciones-moviles" element={<AplicacionesMoviles />} />
          <Route path="desarrollo-software" element={<DesarrolloSoftware />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
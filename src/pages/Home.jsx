import Hero from '../components/Hero'
import NuestraTrayectoria from '../components/NuestraTrayectoria'
import Footer from '../components/Footer'
import Metricas from '../components/Metricas'
import Diferenciadores from '../components/Diferenciadores'
import Industrias from '../components/Industrias'
import HistoriaDeExito from '../components/HistoriaDeExito'
import CTA from '../components/CTA'


function Home() {
  return (
    <>
      <Hero />
      <NuestraTrayectoria />
      <Metricas />
      <Diferenciadores />
      <Industrias />
      <HistoriaDeExito />
      <CTA />
      <Footer />
    </>
  )
}

export default Home


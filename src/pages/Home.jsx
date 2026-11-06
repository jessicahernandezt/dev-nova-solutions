import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function Home() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Technologies />
      <Experience />
      <Contact />
    </Box>
  );
}

export default Home;
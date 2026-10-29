import { Box } from '@mui/material';
import ServicesHero from '../components/ServicesHero';
import Services from '../components/Services';
import ServicesProcess from '../components/ServicesProcess';
import ServicesCTA from '../components/ServicesCTA';

function ServicesPage() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC' }}>
      <ServicesHero />
      <Services />
      <ServicesProcess />
      <ServicesCTA />
    </Box>
  );
}

export default ServicesPage;
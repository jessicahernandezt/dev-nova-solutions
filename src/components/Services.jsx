import { Box, Container, Typography, Card, Button } from '@mui/material';

const servicios = [
  { titulo: 'Desarrollo Web', desc: 'Sitios y plataformas web modernos, seguros y escalables.' },
  { titulo: 'Aplicaciones Móviles', desc: 'Apps nativas e híbridas para iOS y Android.' },
  { titulo: 'Desarrollo de Software', desc: 'Soluciones a la medida para procesos específicos de tu empresa.' },
  { titulo: 'Consultoría Tecnológica', desc: 'Te ayudamos a definir la mejor estrategia tecnológica.' },
  { titulo: 'Integración de Sistemas', desc: 'Conectamos tus herramientas y optimizamos tus procesos.' },
  { titulo: 'Soporte y Mantenimiento', desc: 'Tu operación siempre en funcionamiento.' }
];

function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
            NUESTROS SERVICIOS
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Soluciones tecnológicas para cada necesidad
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1, maxWidth: '600px' }}>
            Ofrecemos servicios de desarrollo de software, aplicaciones web y móviles, consultoría y soporte para ayudarte a optimizar tus procesos y alcanzar tus objetivos.
          </Typography>
        </Box>
        <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600 }}>
          Ver todos los servicios →
        </Button>
      </Box>


      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {servicios.map((servicio, index) => (
          <Card key={index} sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {servicio.titulo}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, minHeight: '40px' }}>
              {servicio.desc}
            </Typography>
            <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, p: 0 }}>
              Ver más →
            </Button>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
import { Box, Container, Typography, Button } from '@mui/material';

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
            QUIÉNES SOMOS
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 2 }}>
            Un equipo que convierte ideas en impacto
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            En Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnología y la innovación. Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real.
          </Typography>
          <Button variant="contained" sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2, px: 3, py: 1 }}>
            Conoce más sobre nosotros →
          </Button>
        </Box>

        <Box sx={{ flex: 1, width: '100%' }}>
          <Box 
            component="img"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Equipo de trabajo"
            sx={{ width: '100%', borderRadius: 4, objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
          />
        </Box>

      </Box>
    </Container>
  );
}

export default About;
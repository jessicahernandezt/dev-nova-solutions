import { Box, Container, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';

function Hero() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#F4EFFF',
        backgroundImage: 'url("/hero.png")',
        backgroundSize: 'contain', 
        backgroundPosition: 'right center', 
        backgroundRepeat: 'no-repeat',
        minHeight: '550px', 
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
          
          <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1.5 }}>
            IDEAS • TECNOLOGÍA • RESULTADOS
          </Typography>
          
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1A1B41', mt: 1, mb: 2, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Transformamos ideas <br />
            en <span style={{ color: '#7c4dff' }}>soluciones digitales</span>
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#4b5563', mb: 4 }}>
            Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 5 }}>
            <Button variant="contained" sx={{ backgroundColor: '#7c4dff', textTransform: 'none', fontWeight: 600, px: 3, py: 1, borderRadius: 2 }}>
              Comenzar proyecto →
            </Button>
            <Button variant="outlined" sx={{ textTransform: 'none', fontWeight: 600, px: 3, py: 1, borderRadius: 2, color: '#1A1B41', borderColor: '#d1d5db', backgroundColor: '#fff' }}>
              Conocer nuestros servicios
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}> 
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FavoriteIcon sx={{ color: '#7c4dff' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1 }}>100%</Typography>
                <Typography variant="caption" color="text.secondary">Comprometidos</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AutoAwesomeIcon sx={{ color: '#7c4dff' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1 }}>+50</Typography>
                <Typography variant="caption" color="text.secondary">Proyectos entregados</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon sx={{ color: '#7c4dff' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, lineHeight: 1 }}>98%</Typography>
                <Typography variant="caption" color="text.secondary">Clientes satisfechos</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
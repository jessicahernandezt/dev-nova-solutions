import { Box, Container, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';

function Hero() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FA', py: 10 }}>
      <Container maxWidth="xl"> 
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 4, md: 8 } }}>
          
          <Box sx={{ flex: 1, maxWidth: { md: '550px' } }}>
            <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 2 }}>
              IDEAS • TECNOLOGÍA • RESULTADOS
            </Typography>
            
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mt: 1, mb: 2, lineHeight: 1.2 }}>
              Transformamos ideas <br />
              en <span style={{ color: '#7c4dff' }}>soluciones digitales</span>
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
              <Button variant="contained" sx={{ backgroundColor: '#7c4dff', textTransform: 'none', fontWeight: 600, px: 3, py: 1.5, borderRadius: 2 }}>
                Comenzar proyecto →
              </Button>
              <Button variant="outlined" sx={{ textTransform: 'none', fontWeight: 600, px: 3, py: 1.5, borderRadius: 2, color: '#0f172a', borderColor: '#e0e0e0', backgroundColor: 'white' }}>
                Conocer nuestros servicios
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}> 
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FavoriteIcon sx={{ color: '#7c4dff' }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1 }}>100%</Typography>
                  <Typography variant="caption" color="text.secondary">Comprometidos</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AutoAwesomeIcon sx={{ color: '#7c4dff' }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1 }}>+50</Typography>
                  <Typography variant="caption" color="text.secondary">Proyectos entregados</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PeopleIcon sx={{ color: '#7c4dff' }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1 }}>98%</Typography>
                  <Typography variant="caption" color="text.secondary">Clientes satisfechos</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1.2, display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Box 
              component="img"
              src="/hero.png" 
              alt="Hero Dev Nova"
              sx={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: '550px',
                borderRadius: 4, 
                objectFit: 'cover', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
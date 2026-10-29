import { Box, Container, Typography, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';

function About() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', py: 10 }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            gap: { xs: 6, lg: 4 }, 
            alignItems: 'center' 
          }}
        >
          
          <Box sx={{ flex: 1.2 }}>
            <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
              QUIÉNES SOMOS
            </Typography>
            
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mt: 1, mb: 2, lineHeight: 1.2 }}>
              Un equipo que convierte ideas en impacto
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#6b7280', mb: 4, fontSize: '1rem', lineHeight: 1.6 }}>
              En Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnología y la innovación. Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real.
            </Typography>
            
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#7c4dff', 
                textTransform: 'none', 
                fontWeight: 600, 
                px: 3, 
                py: 1.2, 
                borderRadius: 2,
                '&:hover': { backgroundColor: '#6a3de8' }
              }}
            >
              Conoce más sobre nosotros →
            </Button>
          </Box>

          <Box sx={{ flex: 1.5, position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img"
              src="/about.png" 
              alt="Equipo Dev Nova"
              sx={{ 
                width: '100%', 
                maxWidth: '500px',
                height: '320px',
                objectFit: 'cover', 
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
            <Box sx={{ position: 'absolute', bottom: 25, left: 25, color: 'white' }}>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.2 }}>Código</Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.2 }}>Personas</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>Grandes Ideas</Typography>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', backgroundColor: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c4dff' }}>
                <LockOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>5+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>Años de experiencia</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', backgroundColor: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c4dff' }}>
                <FolderOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>50+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>Proyectos completados</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', backgroundColor: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c4dff' }}>
                <GroupsOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>30+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>Clientes satisfechos</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', backgroundColor: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c4dff' }}>
                <StarsOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1.2 }}>Talento multidisciplinario</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>Desarrolladores, diseñadores y estrategas</Typography>
              </Box>
            </Box>

          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default About;
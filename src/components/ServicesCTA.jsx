import { Box, Container, Typography, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function ServicesCTA() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 10 }}>
      <Container maxWidth="xl"> {/* Usamos xl para tener más espacio horizontal */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: { xs: 6, lg: 4 } 
          }}
        >
          
          
          <Box sx={{ flex: 1.2, maxWidth: { lg: '35%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
              <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
                Hablemos de tu proyecto
              </Typography>
            </Box>
            
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 2, lineHeight: 1.2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              ¿Listo para transformar tu idea en una solución real?
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#4b5563', mb: 4, fontSize: '0.95rem', lineHeight: 1.6 }}>
              Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución para tus objetivos. Nuestro equipo está listo para asesorarte.
            </Typography>
            
            
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#7c4dff', 
                  textTransform: 'none', 
                  fontWeight: 600, 
                  px: 3, 
                  py: 1.2, 
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                  '&:hover': { backgroundColor: '#6a3de8' }
                }}
              >
                Solicitar una cotización →
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  textTransform: 'none', 
                  fontWeight: 600, 
                  px: 3, 
                  py: 1.2, 
                  borderRadius: 2, 
                  color: '#1A1B41', 
                  borderColor: '#d1d5db', 
                  backgroundColor: '#fff',
                  whiteSpace: 'nowrap',
                  '&:hover': { backgroundColor: '#f3f4f6' }
                }}
              >
                Contactar con un asesor
              </Button>
            </Box>
          </Box>

          
          <Box sx={{ flex: 1.5, position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img"
              src="/about.png" 
              alt="Equipo trabajando"
              sx={{ 
                width: '100%', 
                maxWidth: '500px',
                height: '320px', 
                objectFit: 'cover', 
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}
            />
            
            <Box 
              sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 'calc(50% - 250px)', // Lo alinea con el borde izquierdo de la imagen
                backgroundColor: '#7c4dff', 
                color: 'white', 
                p: 2, 
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 12,
                boxShadow: '0 -4px 10px rgba(0,0,0,0.1)',
                display: { xs: 'none', sm: 'block' } // Se oculta en celular para no estorbar
              }}
            >
              <Typography variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>Ideas</Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.2, fontWeight: 500 }}>Personas</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>Grandes Resultados</Typography>
            </Box>
          </Box>

          
          <Box sx={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              { icon: <WorkIcon />, num: '5+', text: 'Años de experiencia' },
              { icon: <CheckCircleIcon />, num: '50+', text: 'Proyectos completados' },
              { icon: <GroupsIcon />, num: '30+', text: 'Clientes satisfechos' },
              { icon: <ThumbUpIcon />, num: '98%', text: 'Satisfacción promedio' }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 45, 
                    height: 45, 
                    borderRadius: '50%', 
                    backgroundColor: '#F3EFFF', 
                    color: '#7c4dff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1, fontSize: '1.2rem' }}>{item.num}</Typography>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.85rem' }}>{item.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default ServicesCTA;
import { Box, Container, Typography, Card, Button } from '@mui/material';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const servicios = [
  { icono: <MonitorOutlinedIcon />, titulo: 'Desarrollo Web', desc: 'Sitios y plataformas web modernos, seguros y escalables.' },
  { icono: <PhoneIphoneOutlinedIcon />, titulo: 'Aplicaciones Móviles', desc: 'Apps nativas e híbridas para iOS y Android.' },
  { icono: <CodeOutlinedIcon />, titulo: 'Desarrollo de Software', desc: 'Soluciones a la medida para procesos específicos.' },
  { icono: <LightbulbOutlinedIcon />, titulo: 'Consultoría Tecnológica', desc: 'Te ayudamos a definir la mejor estrategia tecnológica.' },
  { icono: <DeviceHubOutlinedIcon />, titulo: 'Integración de Sistemas', desc: 'Conectamos tus herramientas y optimizamos procesos.' },
  { icono: <VerifiedUserOutlinedIcon />, titulo: 'Soporte y Mantenimiento', desc: 'Tu operación siempre en funcionamiento.' }
];

function Services() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 8 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
            <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
              Nuestros servicios
            </Typography>
          </Box>
          
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 1 }}>
            Soluciones tecnológicas para cada necesidad
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body1" sx={{ color: '#6b7280', maxWidth: '600px' }}>
              Ofrecemos servicios de desarrollo de software, aplicaciones web y móviles, consultoría y soporte, para ayudarte a optimizar tus procesos y alcanzar tus objetivos.
            </Typography>
            <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, color: '#7c4dff' }}>
              Ver todos los servicios →
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {servicios.map((servicio, index) => (
            <Card 
              key={index} 
              sx={{ 
                p: 2.5, 
                borderRadius: 2, 
                boxShadow: '0px 2px 10px rgba(0,0,0,0.03)', 
                border: '1px solid #F0F0F0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 2,
                backgroundColor: '#FFFFFF'
              }}
            >
              <Box 
                sx={{ 
                  backgroundColor: '#F3EFFF', 
                  borderRadius: 2, 
                  width: 56, 
                  height: 56, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#7c4dff',
                  fontSize: '32px',
                  flexShrink: 0
                }}
              >
                {servicio.icono}
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1A1B41', mb: 0.5, fontSize: '1rem' }}>
                  {servicio.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280', mb: 1.5, lineHeight: 1.4, fontSize: '0.85rem' }}>
                  {servicio.desc}
                </Typography>
                <Button variant="text" sx={{ textTransform: 'none', fontWeight: 700, p: 0, color: '#7c4dff', fontSize: '0.85rem' }}>
                  Ver más →
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Services;
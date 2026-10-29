import { Box, Container, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CodeIcon from '@mui/icons-material/Code';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SendIcon from '@mui/icons-material/Send';

function ServicesProcess() {
  const steps = [
    { num: '1', title: 'Análisis', text: 'Entendemos tus necesidades y definimos los objetivos.', icon: <SearchIcon sx={{ fontSize: 32 }} /> },
    { num: '2', title: 'Diseño', text: 'Creamos una solución a la medida con enfoque en el usuario.', icon: <EditOutlinedIcon sx={{ fontSize: 32 }} /> },
    { num: '3', title: 'Desarrollo', text: 'Convertimos la idea en un producto real.', icon: <CodeIcon sx={{ fontSize: 32 }} /> },
    { num: '4', title: 'Pruebas', text: 'Validamos calidad, rendimiento y seguridad.', icon: <SettingsOutlinedIcon sx={{ fontSize: 32 }} /> },
    { num: '5', title: 'Entrega', text: 'Lanzamos tu proyecto y te acompañamos en su crecimiento.', icon: <SendIcon sx={{ fontSize: 32 }} /> }
  ];

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', py: 8 }}>
      <Container maxWidth="lg">
        
        {/* Encabezado */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 6, gap: 2 }}>
          <Box sx={{ maxWidth: '600px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
              <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
                Nuestro proceso
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 1 }}>
              Una metodología clara y efectiva
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280' }}>
              Te acompañamos en cada etapa del proyecto, desde la idea inicial hasta el lanzamiento y más allá, con un enfoque en la calidad, la comunicación y los resultados.
            </Typography>
          </Box>
          <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, color: '#7c4dff', mt: { md: 2 } }}>
            Conoce más sobre nuestro proceso →
          </Button>
        </Box>

        
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 0 }, mt: 4 }}>
          
          
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '35px', 
              left: '5%', 
              right: '5%', 
              height: '2px', 
              borderTop: '2px dashed #d1d5db', 
              zIndex: 0,
              display: { xs: 'none', md: 'block' }
            }} 
          />

          
          {steps.map((step, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                flex: 1,
                px: 2
              }}
            >
              
              <Box 
                sx={{ 
                  width: 70, 
                  height: 70, 
                  borderRadius: '50%', 
                  backgroundColor: '#F3EFFF', 
                  color: '#7c4dff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 1
                }}
              >
                {step.icon}
              </Box>

              
              <Box 
                sx={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  border: '1px solid #d1d5db', 
                  backgroundColor: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#6b7280', lineHeight: 1 }}>{step.num}</Typography>
              </Box>

              
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1A1B41', mb: 0.5 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.4 }}>
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default ServicesProcess;
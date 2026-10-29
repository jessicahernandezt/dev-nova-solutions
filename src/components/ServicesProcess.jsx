import { Box, Container, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';

function ServicesProcess() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 5 }}>
          <Box>
            <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700 }}>NUESTRO PROCESO</Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41' }}>Una metodología clara y efectiva</Typography>
            <Typography variant="body2" sx={{ color: '#6b7280', mt: 1 }}>
              Te acompañamos en cada etapa del proyecto, desde la idea inicial hasta el lanzamiento.
            </Typography>
          </Box>
          <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, color: '#7c4dff' }}>
            Conoce más sobre nuestro proceso →
          </Button>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' }, gap: 2 }}>
          {[
            { num: '1', title: 'Análisis', text: 'Entendemos tus necesidades y definimos los objetivos.', icon: <SearchIcon /> },
            { num: '2', title: 'Diseño', text: 'Creamos una solución a la medida con enfoque en el usuario.', icon: <EditOutlinedIcon /> },
            { num: '3', title: 'Desarrollo', text: 'Convertimos la idea en un producto real.', icon: <CodeIcon /> },
            { num: '4', title: 'Pruebas', text: 'Validamos calidad, rendimiento y seguridad.', icon: <CheckCircleIcon /> },
            { num: '5', title: 'Entrega', text: 'Lanzamos tu proyecto y te acompañamos en su crecimiento.', icon: <SendIcon /> }
          ].map((step, index) => (
            <Box key={index} sx={{ textAlign: 'center', p: 2 }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#F3EFFF', color: '#7c4dff', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                {step.icon}
              </Box>
              <Typography variant="caption" sx={{ color: '#7c4dff', fontWeight: 800 }}>{step.num}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1A1B41' }}>{step.title}</Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem', mt: 1 }}>{step.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesProcess;
import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#0f172a', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mb: 6 }}>
          
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#7c4dff', mb: 2 }}>DevNova Solutions</Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>Soluciones digitales para un mejor mañana.</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Navegación</Typography>
            {['Inicio', 'Servicios', 'Quiénes somos', 'Proyectos'].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: '#94a3b8', mb: 1, cursor: 'pointer' }}>{item}</Typography>
            ))}
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Contacto</Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>hola@devnova.com</Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 1 }}>+52 55 1234 5678</Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>Ciudad de México, México</Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Suscríbete a nuestro boletín</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField size="small" placeholder="Tu correo" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1, flexGrow: 1 }} />
              <Button variant="contained" sx={{ backgroundColor: '#7c4dff', minWidth: 'auto', px: 2 }}>→</Button>
            </Box>
          </Box>

        </Box>
        <Box sx={{ borderTop: '1px solid #334155', pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>© 2025 Dev Nova Solutions. Todos los derechos reservados.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
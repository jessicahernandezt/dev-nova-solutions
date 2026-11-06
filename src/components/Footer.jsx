import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#0B1120', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '1.5fr 1fr 1.2fr 1fr 1.5fr' }, 
            gap: 4, 
            mb: 6 
          }}
        >
          

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#7c4dff' }}>N</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', lineHeight: 1 }}>DevNova<br/>Solutions</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontSize: '0.85rem' }}>
              Soluciones digitales para un mejor mañana.
            </Typography>
            

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {['in', 'github', 'you', 'insta'].map((icon) => (
                <Box 
                  key={icon}
                  component="img"
                  src={`/${icon}.png`}
                  alt={icon}
                  sx={{ 
                    width: 28, 
                    height: 28, 
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.1)' }
                  }}
                />
              ))}
            </Box>
          </Box>


          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Navegación</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Inicio', 'Servicios', 'Quiénes somos', 'Proyectos', 'Tecnologías', 'Clientes', 'Contacto'].map((item) => (
                <Typography key={item} variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', '&:hover': { color: '#7c4dff' } }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>


          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Servicios</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Desarrollo Web', 'Aplicaciones Móviles', 'Desarrollo de Software', 'Consultoría Tecnológica', 'Integración de Sistemas', 'Soporte y Mantenimiento'].map((item) => (
                <Typography key={item} variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', '&:hover': { color: '#7c4dff' } }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>


          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Contacto</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>✉ hola@devnova.com</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>📞 +52 55 1234 5678</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>📍 Ciudad de México, México</Typography>
            </Box>
          </Box>


          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>Suscríbete a nuestro boletín</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField 
                size="small" 
                placeholder="Tu correo electrónico" 
                variant="outlined" 
                sx={{ 
                  backgroundColor: '#fff', 
                  borderRadius: 1, 
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': { borderRadius: 1 }
                }} 
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#7c4dff', 
                  minWidth: 'auto', 
                  px: 2, 
                  borderRadius: 1,
                  '&:hover': { backgroundColor: '#6a3de8' }
                }}
              >
                →
              </Button>
            </Box>
            <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
              Recibe noticias, novedades y contenido útil.
            </Typography>
          </Box>

        </Box>


        <Box sx={{ borderTop: '1px solid #1e293b', pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            © 2025 Dev Nova Solutions. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="caption" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>Aviso de privacidad</Typography>
            <Typography variant="caption" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>Términos de servicio</Typography>
          </Box>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            Innovación hoy. Un mejor mañana.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default Footer;
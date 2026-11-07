import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: 'INICIO', path: '/' },
    { label: 'SERVICIOS', path: '/servicios' },
    { label: 'QUIÉNES SOMOS', path: '/quienes-somos' },
    { label: 'PROYECTOS', path: '/proyectos' },
    { label: 'TECNOLOGÍAS', path: '/tecnologias' },
    { label: 'CONTACTO', path: '/contacto' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #f0f0f0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            <Typography variant="h5" sx={{ fontWeight: 900, color: '#7c4dff' }}>N</Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>DevNova<br/>Solutions</Typography>
          </Box>

          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#7c4dff' : '#4b5563',
                  fontWeight: location.pathname === item.path ? 700 : 600,
                  fontSize: '0.85rem',
                  '&:hover': { color: '#7c4dff' }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#7c4dff', textTransform: 'none', fontWeight: 600, borderRadius: 2 }}
          >
            Solicitar cotización →
          </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
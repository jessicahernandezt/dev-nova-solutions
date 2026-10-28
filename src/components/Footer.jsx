import React from 'react';
import {
    Box,
    Typography,
    Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0b0f19', color: '#94a3b8', py: 6, px: '2%' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
          mb: 4
        }}>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  bgcolor: '#7c4dff',
                  color: '#fff',
                  width: 36,
                  height: 36,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                }}
              >
                N
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
                  DevNova
                </Typography>
                <Typography variant="caption" sx={{ color: '#94a3b8', letterSpacing: 0.5 }}>
                  Solutions
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="caption" sx={{ display: 'block', color: '#94a3b8', mb: 2, lineHeight: 1.5 }}>
              Soluciones digitales para un mejor mañana.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5, color: '#94a3b8' }}>
              <LinkedInIcon fontSize="small" sx={{ cursor: 'pointer', '&:hover': { color: '#7c4dff' } }} />
              <GitHubIcon fontSize="small" sx={{ cursor: 'pointer', '&:hover': { color: '#7c4dff' } }} />
              <YouTubeIcon fontSize="small" sx={{ cursor: 'pointer', '&:hover': { color: '#7c4dff' } }} />
              <InstagramIcon fontSize="small" sx={{ cursor: 'pointer', '&:hover': { color: '#7c4dff' } }} />
            </Box>
          </Box>

          <Box sx={{ width: { xs: '45%', sm: '30%', md: '13%' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
              Navegación
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Inicio', 'Servicios', 'Quiénes somos', 'Proyectos', 'Tecnologías', 'Clientes', 'Contacto'].map((item) => (
                <Typography 
                  key={item} 
                  sx={{ color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', '&:hover': { color: '#7c4dff' } }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: { xs: '45%', sm: '30%', md: '17%' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
              Servicios
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Desarrollo Web', 'Aplicaciones Móviles', 'Desarrollo de Software', 'Consultoría Tecnológica', 'Integración de Sistemas', 'Soporte y Mantenimiento'].map((item) => (
                <Typography 
                  key={item} 
                  sx={{ color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', '&:hover': { color: '#7c4dff' } }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '18%' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" sx={{ color: '#7c4dff' }} />
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>hola@devnova.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" sx={{ color: '#7c4dff' }} />
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>+52 55 1234 5678</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ color: '#7c4dff' }} />
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>Ciudad de México, México</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '100%', md: '22%' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
              Suscríbete a nuestro boletín
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Box
                sx={{
                  bgcolor: '#1e293b',
                  borderRadius: 1,
                  p: '10px 14px',
                  width: '100%',
                  color: '#64748b',
                  fontSize: '0.85rem',
                }}
              >
                Tu correo electrónico
              </Box>
              <Box
                sx={{
                  bgcolor: '#7c4dff',
                  color: '#fff',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 2,
                  cursor: 'pointer',
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
              Recibe noticias, novedades y contenido útil.
            </Typography>
          </Box>

        </Box>

        <Divider sx={{ borderColor: '#1e293b', my: 3 }} />

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            © 2026 Dev Nova Solutions. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Typography variant="caption" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
              Aviso de privacidad
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
              Términos de servicio
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b', display: { xs: 'none', md: 'block' } }}>
              Innovación hoy. Un mejor mañana.
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
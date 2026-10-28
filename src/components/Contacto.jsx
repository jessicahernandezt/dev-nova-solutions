import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const faqs = [
  '¿Cuánto tiempo tarda un proyecto?',
  '¿Qué tecnologías utilizan?',
  '¿Ofrecen soporte después del lanzamiento?',
  '¿Trabajan con empresas y pymes?',
];

export default function ContactoFAQ() {
  return (
    <Box sx={{ width: '99%', margin: '2% 1%', background: '#ededfc' }}>
      
      <Box sx={{ padding: '0% 1%', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '40px', height: '3px', backgroundColor: '#7c4dff', marginRight: '10px' }} />
          <Typography sx={{ fontWeight: 'bold', color: '#7c4dff' }}>
            Contacto y preguntas frecuentes
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: '#172554' }}>
          Contacto y preguntas frecuentes
        </Typography>
      </Box>

      <Box sx={{
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>

        <Box sx={{
          marginTop: '20px',
          borderRadius: '10px',
          padding: '20px',
          width: { xs: '100%', md: '28%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
          bgcolor: '#fff',
        }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ width: '20px', height: '2px', backgroundColor: '#7c4dff', marginRight: '8px' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#172554' }}>
                ¿Hablamos?
              </Typography>
            </Box>
            <Typography sx={{ color: '#888691', fontSize: '0.85rem', mb: 3 }}>
              Cuéntanos sobre tu proyecto. Estamos listos para ayudarte a hacerlo realidad.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <Box sx={{ bgcolor: '#ede7f6', p: 1, borderRadius: 2, display: 'flex', color: '#7c4dff' }}>
                <EmailIcon fontSize="small" />
              </Box>
              <Typography sx={{ color: '#334155', fontSize: '0.85rem' }}>
                hola@devnova.com
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <Box sx={{ bgcolor: '#ede7f6', p: 1, borderRadius: 2, display: 'flex', color: '#7c4dff' }}>
                <PhoneIcon fontSize="small" />
              </Box>
              <Typography sx={{ color: '#334155', fontSize: '0.85rem' }}>
                +52 55 1234 5678
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
              <Box sx={{ bgcolor: '#ede7f6', p: 1, borderRadius: 2, display: 'flex', color: '#7c4dff' }}>
                <LocationOnIcon fontSize="small" />
              </Box>
              <Typography sx={{ color: '#334155', fontSize: '0.85rem' }}>
                Ciudad de México, México
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          marginTop: '20px',
          borderRadius: '10px',
          padding: '20px',
          width: { xs: '100%', md: '35%' },
          boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
          bgcolor: '#fff',
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField fullWidth label="Nombre completo *" size="small" variant="outlined" />
              <TextField fullWidth label="Correo electrónico *" size="small" variant="outlined" />
            </Box>

            <TextField select fullWidth SelectProps={{ native: true }} label="Tipo de proyecto" size="small" variant="outlined" defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              <option value="web">Desarrollo Web</option>
              <option value="mobile">Aplicación Móvil</option>
              <option value="other">Otro</option>
            </TextField>

            <TextField fullWidth label="Mensaje *" multiline rows={3} size="small" variant="outlined" />

            <Button
              variant="contained"
              sx={{
                bgcolor: '#7c4dff',
                '&:hover': { bgcolor: '#6538e2' },
                textTransform: 'none',
                fontWeight: 'bold',
                py: 1.2,
                borderRadius: '8px',
              }}
            >
              Enviar mensaje →
            </Button>
          </Box>
        </Box>

        <Box sx={{
          marginTop: '20px',
          borderRadius: '10px',
          padding: '20px',
          width: { xs: '100%', md: '30%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
          bgcolor: '#fff',
        }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#172554', mb: 2 }}>
              Preguntas frecuentes
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {faqs.map((pregunta, index) => (
                <Box 
                  sx={{ 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '8px', 
                    p: '10px 14px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    bgcolor: '#fafafa'
                  }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: '#1e293b' }}>
                    {pregunta}
                  </Typography>
                  <UnfoldMoreIcon sx={{ fontSize: '1rem', color: '#64748b' }} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, pt: 1 }}>
            <img 
              src='public/img (4).png' 
              alt='Gato mascota' 
              style={{ width: '120px', height: 'auto', objectFit: 'contain' }} 
            />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
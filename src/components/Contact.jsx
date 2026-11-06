import { Box, Container, Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Contact() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 8 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr 1.3fr' }, gap: 5, alignItems: 'start' }}>
          
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
              <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
                ¿HABLAMOS?
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 2, lineHeight: 1.2 }}>
              Cuéntanos sobre tu proyecto
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280', mb: 4, lineHeight: 1.6 }}>
              Estamos listos para ayudarte a hacerlo realidad.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1.5, display: 'flex', color: '#7c4dff' }}>
                  <EmailOutlinedIcon fontSize="small" />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#4b5563' }}>hola@devnova.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1.5, display: 'flex', color: '#7c4dff' }}>
                  <PhoneOutlinedIcon fontSize="small" />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#4b5563' }}>+52 55 1234 5678</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1.5, display: 'flex', color: '#7c4dff' }}>
                  <LocationOnOutlinedIcon fontSize="small" />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#4b5563' }}>Ciudad de México, México</Typography>
              </Box>
            </Box>
          </Box>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField label="Nombre completo *" fullWidth size="small" InputProps={{ sx: { borderRadius: 2, backgroundColor: '#fff' } }} />
              <TextField label="Correo electrónico *" fullWidth size="small" InputProps={{ sx: { borderRadius: 2, backgroundColor: '#fff' } }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <TextField 
                label="Tipo de proyecto" 
                select 
                SelectProps={{ native: true }} 
                fullWidth 
                size="small" 
                InputProps={{ sx: { borderRadius: 2, backgroundColor: '#fff' } }}
              >
                <option value=""></option>
                <option value="web">Desarrollo Web</option>
                <option value="movil">Aplicación Móvil</option>
                <option value="software">Software a la medida</option>
              </TextField>
              <TextField 
                label="Mensaje *" 
                multiline 
                rows={1} 
                fullWidth 
                size="small" 
                InputProps={{ sx: { borderRadius: 2, backgroundColor: '#fff' } }} 
              />
            </Box>
            <Button 
              variant="contained" 
              sx={{ 
                alignSelf: 'flex-start', 
                textTransform: 'none', 
                fontWeight: 600, 
                px: 4, 
                py: 1.2, 
                borderRadius: 2,
                backgroundColor: '#7c4dff',
                mt: 1,
                '&:hover': { backgroundColor: '#6a3de8' }
              }}
            >
              Enviar mensaje →
            </Button>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', mb: 2, fontSize: '1.1rem' }}>
                  Preguntas frecuentes
                </Typography>
                {[
                  '¿Cuánto tiempo tarda un proyecto?', 
                  '¿Qué tecnologías utilizan?', 
                  '¿Ofrecen soporte después del lanzamiento?',
                  '¿Trabajan con empresas y pymes?'
                ].map((faq, index) => (
                  <Accordion 
                    key={index} 
                    sx={{ 
                      mb: 1.5, 
                      boxShadow: 'none', 
                      border: '1px solid #EAEAEA', 
                      borderRadius: 2,
                      backgroundColor: '#fff',
                      '&:before': { display: 'none' } 
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#7c4dff', fontSize: 20 }} />}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.8rem', color: '#1A1B41', lineHeight: 1.2 }}>
                        {faq}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.8rem' }}>
                        Nos adaptamos a tus necesidades. Contáctanos para darte un estimado.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>


              <Box sx={{ display: { xs: 'none', lg: 'block' }, width: '150px', ml: 2, mt: 3 }}>
                <Box 
                  component="img" 
                  src="/catcontact.png" 
                  alt="Gatito" 
                  sx={{ width: '100%', objectFit: 'contain' }} 
                />
              </Box>

            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
import { Box, Container, Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>¿HABLAMOS?</Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 4 }}>Cuéntanos sobre tu proyecto</Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Nombre completo" variant="outlined" fullWidth required />
          <TextField label="Correo electrónico" variant="outlined" fullWidth required type="email" />
          <TextField label="Tipo de proyecto" variant="outlined" fullWidth select SelectProps={{ native: true }}>
            <option value=""></option>
            <option value="web">Desarrollo Web</option>
            <option value="movil">Aplicación Móvil</option>
            <option value="software">Software a la medida</option>
          </TextField>
          <TextField label="Mensaje" variant="outlined" fullWidth multiline rows={4} required />
          <Button variant="contained" sx={{ alignSelf: 'flex-start', textTransform: 'none', fontWeight: 600, px: 4, py: 1 }}>
            Enviar mensaje →
          </Button>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Preguntas frecuentes</Typography>
          {['¿Cuánto tiempo tarda un proyecto?', '¿Qué tecnologías utilizan?', '¿Ofrecen soporte después del lanzamiento?'].map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1, boxShadow: 'none', border: '1px solid #e0e0e0', '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{faq}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  El tiempo depende de la complejidad, pero siempre mantenemos una comunicación clara.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
export default Contact;
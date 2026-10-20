import { Box, Container, Typography, Card } from '@mui/material';

const tecnologias = ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'AWS', 'Flutter', 'Python'];

function Technologies() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>TECNOLOGÍAS</Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>Herramientas que hacen posibles grandes ideas</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
          Utilizamos tecnologías modernas y confiables para desarrollar soluciones escalables, seguras y de alto rendimiento.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {tecnologias.map((tech, index) => (
          <Card key={index} sx={{ width: 100, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>{tech[0]}</Typography>
            <Typography variant="caption" sx={{ fontWeight: 600 }}>{tech}</Typography>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
export default Technologies;
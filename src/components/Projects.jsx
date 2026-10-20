import { Box, Container, Typography, Card, CardMedia, Chip, Button } from '@mui/material';

const proyectos = [
  { titulo: 'Plataforma de gestión empresarial', desc: 'Sistema completo para la administración de procesos internos.', categoria: 'Web', tags: ['React', 'Node.js', 'PostgreSQL'] },
  { titulo: 'App de reservas', desc: 'Aplicación móvil para reservas de servicios y control de estado.', categoria: 'Móvil', tags: ['Flutter', 'Firebase', 'Node.js'] },
  { titulo: 'Sistema de inventario', desc: 'Control de productos, entradas y reportes en tiempo real.', categoria: 'Web', tags: ['React', 'Express', 'MongoDB'] },
  { titulo: 'Tienda en línea', desc: 'Plataforma de comercio electrónico con pagos en línea.', categoria: 'E-commerce', tags: ['Next.js', 'Stripe', 'AWS'] }
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, backgroundColor: '#F9F9FB', borderRadius: 4, my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
        <Box>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>PROYECTOS DESTACADOS</Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>Soluciones reales para negocios reales</Typography>
        </Box>
        <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600 }}>Ver todos los proyectos →</Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        {proyectos.map((proyecto, index) => (
          <Card key={index} sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ height: 140, backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="caption" color="text.secondary">Imagen del proyecto</Typography>
            </Box>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Chip label={proyecto.categoria} size="small" color="primary" sx={{ alignSelf: 'flex-start', mb: 1, fontWeight: 600 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>{proyecto.titulo}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1 }}>{proyecto.desc}</Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                {proyecto.tags.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                ))}
              </Box>
              <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, p: 0, justifyContent: 'flex-start' }}>Ver proyecto →</Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
export default Projects;
import { Box, Container, Typography, Card, CardMedia, Chip, Button } from '@mui/material';

const proyectos = [
  { 
    titulo: 'Plataforma de gestión empresarial', 
    desc: 'Sistema completo para la administración de procesos internos.', 
    categoria: 'Web', 
    tags: ['React', 'Node.js', 'PostgreSQL'], 
    img: '/plat.jpg' 
  },
  { 
    titulo: 'App de reservas', 
    desc: 'Aplicación móvil para reservas de servicios y control de estado.', 
    categoria: 'Móvil', 
    tags: ['Flutter', 'Firebase', 'Node.js'], 
    img: '/app.jpg' 
  },
  { 
    titulo: 'Sistema de inventario', 
    desc: 'Control de productos, entradas y reportes en tiempo real.', 
    categoria: 'Web', 
    tags: ['React', 'Express', 'MongoDB'], 
    img: '/inven.jpg' 
  },
  { 
    titulo: 'Tienda en línea', 
    desc: 'Plataforma de comercio electrónico con pagos en línea.', 
    categoria: 'E-commerce', 
    tags: ['Next.js', 'Stripe', 'AWS'], 
    img: '/t.jpg' 
  }
];

function Projects() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 8 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
            <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
              Proyectos destacados
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 0.5 }}>
                Soluciones reales para negocios reales
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280' }}>
                Conoce algunos de nuestros proyectos más recientes y cómo ayudamos a nuestros clientes a alcanzar sus objetivos.
              </Typography>
            </Box>
            <Button variant="text" sx={{ textTransform: 'none', fontWeight: 600, color: '#7c4dff' }}>
              Ver todos los proyectos →
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {proyectos.map((proyecto, index) => (
            <Card 
              key={index} 
              sx={{ 
                borderRadius: 2, 
                overflow: 'hidden', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.05)', 
                display: 'flex', 
                flexDirection: 'column',
                border: '1px solid #F0F0F0'
              }}
            >
              <CardMedia 
                component="img" 
                height="160" 
                image={proyecto.img} 
                alt={proyecto.titulo} 
                sx={{ objectFit: 'cover' }} 
              />
              
              <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Chip 
                  label={proyecto.categoria} 
                  size="small" 
                  sx={{ 
                    alignSelf: 'flex-start', 
                    mb: 1.5, 
                    fontWeight: 600, 
                    backgroundColor: '#7c4dff', 
                    color: 'white' 
                  }} 
                />
                
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2, color: '#1A1B41' }}>
                  {proyecto.titulo}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#6b7280', mb: 2, flexGrow: 1, fontSize: '0.85rem' }}>
                  {proyecto.desc}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {proyecto.tags.map((tag, i) => (
                    <Chip 
                      key={i} 
                      label={tag} 
                      size="small" 
                      sx={{ 
                        fontSize: '0.75rem', 
                        backgroundColor: '#F3F4F6', 
                        color: '#4b5563',
                        border: 'none'
                      }} 
                    />
                  ))}
                </Box>
                
                <Button 
                  variant="text" 
                  sx={{ 
                    textTransform: 'none', 
                    fontWeight: 700, 
                    p: 0, 
                    justifyContent: 'flex-start', 
                    color: '#7c4dff',
                    fontSize: '0.85rem'
                  }}
                >
                  Ver proyecto →
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Projects;
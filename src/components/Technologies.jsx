import { Box, Container, Typography, Card } from '@mui/material';

const tecnologias = [
  { nombre: 'React', img: '/react.png' },
  { nombre: 'Vite', img: '/vite.jpg' },
  { nombre: 'Node.js', img: '/node.png' },
  { nombre: 'Express', img: '/express.png' },
  { nombre: 'MongoDB', img: '/mongodb.jpg' },
  { nombre: 'PostgreSQL', img: '/postgre.png' },
  { nombre: 'Git', img: '/git.png' },
  { nombre: 'AWS', img: '/aws.png' },
  { nombre: 'Flutter', img: '/flutter.png' },
  { nombre: 'Python', img: '/python.png' }
];

function Technologies() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 8 }}>
      <Container maxWidth="lg">
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'flex-start', 
            mb: 5,
            gap: 3
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
              <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
                Tecnologías
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41' }}>
              Herramientas que hacen posibles grandes ideas
            </Typography>
          </Box>

          <Typography 
            variant="body2" 
            sx={{ 
              color: '#6b7280', 
              maxWidth: '380px', 
              mt: { xs: 0, md: 3.5 },
              textAlign: 'left' 
            }}
          >
            Utilizamos tecnologías modernas y confiables para desarrollar soluciones escalables, seguras y de alto rendimiento.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(10, 1fr)' }, gap: 2 }}>
          {tecnologias.map((tech, index) => (
            <Card 
              key={index} 
              sx={{ 
                p: 2, 
                borderRadius: 2, 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.03)', 
                border: '1px solid #EAEAEA',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                height: '110px'
              }}
            >
              <Box 
                component="img"
                src={tech.img}
                alt={tech.nombre}
                sx={{ 
                  width: 45, 
                  height: 45, 
                  objectFit: 'contain',
                  mb: 1
                }}
              />
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#1A1B41', fontSize: '0.75rem' }}>
                {tech.nombre}
              </Typography>
            </Card>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Technologies;
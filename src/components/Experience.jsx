import { Box, Container, Typography, Card, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Experience() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>EXPERIENCIA Y CLIENTES</Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>La confianza de nuestros clientes nos impulsa</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 6 }}>
        {[ {num: '5+', txt: 'Años de experiencia'}, {num: '50+', txt: 'Proyectos completados'}, {num: '30+', txt: 'Clientes satisfechos'}, {num: '98%', txt: 'Satisfacción'} ].map((stat, i) => (
          <Box key={i} sx={{ flex: '1 1 200px', textAlign: 'center', p: 2, backgroundColor: '#F9F9FB', borderRadius: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>{stat.num}</Typography>
            <Typography variant="body2" color="text.secondary">{stat.txt}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
        {[1, 2].map((item) => (
          <Card key={item} sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Box sx={{ display: 'flex', color: '#FFC107', mb: 2 }}>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </Box>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
              "El equipo de DevNova entendió perfectamente nuestras necesidades y entregó un producto de gran valor. Altamente recomendados."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>{item === 1 ? 'L' : 'C'}</Avatar>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{item === 1 ? 'Laura Martínez' : 'Carlos Ramírez'}</Typography>
                <Typography variant="caption" color="text.secondary">{item === 1 ? 'Directora de Marketing' : 'CTO, Empresa de Retail'}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
export default Experience;
import { Box, Container, Typography, Card, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Experience() {
  return (
    <Box sx={{ backgroundColor: '#F8F9FC', py: 8 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 5, gap: 4 }}>
          
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Box sx={{ width: 24, height: 2, backgroundColor: '#7c4dff' }} />
              <Typography variant="overline" sx={{ color: '#7c4dff', fontWeight: 700, letterSpacing: 1 }}>
                Experiencia y clientes
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1A1B41', mb: 1 }}>
              La confianza de nuestros clientes nos impulsa
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280' }}>
              Resultados que hablan y relaciones construidas con la calidad y la innovación.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1, display: 'flex', color: '#7c4dff' }}>
                <AccessTimeIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>5+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>Años de experiencia</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1, display: 'flex', color: '#7c4dff' }}>
                <CheckCircleOutlineIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>50+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>Clientes completados</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1, display: 'flex', color: '#7c4dff' }}>
                <PeopleAltOutlinedIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>30+</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>Casos exitosos</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ backgroundColor: '#F3EFFF', borderRadius: '50%', p: 1, display: 'flex', color: '#7c4dff' }}>
                <FavoriteBorderIcon fontSize="small" />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1A1B41', lineHeight: 1 }}>98%</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>Satisfacción promedio</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: '0px 4px 12px rgba(0,0,0,0.03)', border: '1px solid #EAEAEA', backgroundColor: '#FFFFFF' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar src="/laura.jpg" sx={{ width: 50, height: 50 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1A1B41' }}>Laura Martínez</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>Directora de Marketing, Startup</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: '#4b5563', fontStyle: 'italic', mb: 2, lineHeight: 1.6 }}>
              "El equipo de DevNova entendió perfectamente nuestras necesidades y entregó un producto de gran valor. Altamente recomendados."
            </Typography>
            <Box sx={{ display: 'flex', color: '#FFC107' }}>
              <StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" />
            </Box>
          </Card>

          <Card sx={{ p: 3, borderRadius: 3, boxShadow: '0px 4px 12px rgba(0,0,0,0.03)', border: '1px solid #EAEAEA', backgroundColor: '#FFFFFF' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar src="/carlos.jpg" sx={{ width: 50, height: 50 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1A1B41' }}>Carlos Ramírez</Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>CTO, Empresa de Retail</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: '#4b5563', fontStyle: 'italic', mb: 2, lineHeight: 1.6 }}>
              "Soluciones creativas, comunicación efectiva y un gran dominio técnico. Sin duda los volvería a contratar para futuros proyectos."
            </Typography>
            <Box sx={{ display: 'flex', color: '#FFC107' }}>
              <StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" />
            </Box>
          </Card>

          <Card sx={{ p: 3, borderRadius: 3, boxShadow: '0px 4px 12px rgba(0,0,0,0.03)', border: '1px solid #EAEAEA', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1A1B41', mb: 3 }}>
              Empresas que han confiado en nosotros
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, alignItems: 'center', justifyItems: 'center' }}>
              <Box component="img" src="/bbva.png" alt="BBVA" sx={{ height: 25, objectFit: 'contain' }} />
              <Box component="img" src="/cinepolis.png" alt="Cinépolis" sx={{ height: 25, objectFit: 'contain' }} />
              <Box component="img" src="/telcel.png" alt="Telcel" sx={{ height: 20, objectFit: 'contain' }} />
              <Box component="img" src="/aws.png" alt="AWS" sx={{ height: 25, objectFit: 'contain' }} />
              <Box component="img" src="/bimbo.png" alt="Bimbo" sx={{ height: 25, objectFit: 'contain' }} />
              <Box component="img" src="/microsoft.png" alt="Microsoft" sx={{ height: 25, objectFit: 'contain' }} />
            </Box>
          </Card>

        </Box>

      </Container>
    </Box>
  );
}

export default Experience;
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Quienessomos() {
    return (
        <Box
            sx={{
                minHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 6
            }}>
                <Container maxWidth='lg'>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                    }}>

                    <Box sx={{ width: '70%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                            color: '#171b35',
                            fontWeight: 'bold',
                            letterSpacing: 2
                            }}>
                        --Proyectos destacados
                        </Typography>

                         <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight:'1'}}>
                            Soluciones reales para negocios reales
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '0.8rem', mb:5}}
                        >Conoce algunos de nuestros proyectos mas recientes y como ayudamos a nuestos clientes a alcanzar sus objetivos</Typography>
                    </Box>
                        <Button sx={{color: '#7c4dff', textTransform: 'none', fontWeight:'bold' }}>Ver todos los proyectos →</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Quienessomos
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

function HeroAppsMoviles() {
    return (
        <Box
            sx={{
                minHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 6
            }}
        >

            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                    }}>

                    <Box sx={{ width: '50%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                                color: '#000000',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            Desarrollo Movil --

                        </Typography>

                        <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight: 1 }}>
                            Aplicaciones moviles que   <br />
                        <Box component="span" sx={{ color: '#7c4dff'}}> 
                            conectan con tus usuarios
                            </Box>
                        </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Creamos aplicaciones moviles nativas e hibridas con experiencias intuitivas, alto rendimiento y una arquitectura escalable que impulsa el crecimiento de tu negocio. </Typography>

                         <Button
                        sx={{
                            color: '#fff',
                            ml: 1,
                            backgroundColor:'#7c4dff',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            Crear mi app →
                        </Button>

                        <Button
                        sx={{
                            color: '#000',
                            ml: 5,
                            backgroundColor:'#fff',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            Ver capacidades
                        </Button>
                    </Box>
                    
                    <Box
                    component="img"
                    src='public/img (14).png'
                    sx={{
                        width: '100%',
                        maxWidth: 600,
                        borderRadius: 2
                    }}
                    >
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default HeroAppsMoviles
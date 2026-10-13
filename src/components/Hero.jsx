import {
    Box,
    Button,
    Container,
    Stack,
    Typography
} from '@mui/material'

function Hero() {
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
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            IDEAS · TECNOLOGIA · RESULTADOS

                        </Typography>

                        <Typography
                            variant='h3'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2, lineHeight: 1 }}>
                        Transformamos ideas en <br />
                        <Box component="span" sx={{ color: '#7c4dff'}}> 
                            soluciones digitales
                            </Box>
                            </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales</Typography>
                    </Box>
                </Box>

                         <Button variant='contained'
                        sx={{
                            ml: 2,
                            backgroundColor:'#7c4dff',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            
                            Comenzar Proyectos →
                        </Button>

                         <Button variant='contained'
                        sx={{
                            ml: 2,
                            backgroundColor:'#ffffff',
                            color: '#000000',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                             Conocer nuestros servicios
                        </Button>
            </Container>
        </Box>
    )
}
export default Hero

import { BorderColor, StarPurple500 } from '@mui/icons-material'
import {
    Box,
    Button,
    Container,
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

                    <Box alt="Aca debes poner los botones" sx={{ width: '50%' }}>
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
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight: 1 }}>
                        Transformamos ideas en <br />
                        <Box component="span" sx={{ color: '#7c4dff'}}> 
                            soluciones digitales
                            </Box>
                            </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales</Typography>
                        <Box>
                        <Button variant='contained'

                        sx={{
                            ml: 2,
                            backgroundColor:'#7c4dff',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            Solicitar cotización →
                        </Button>

                        <Button variant='contained'
                        sx={{
                            ml: 2,
                            backgroundColor:'#ffffff',
                            color: '#000000',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            Conocer nuestros Servicios
                        </Button>


                        </Box>

                        <box
                        sx={{
                            display: 'flex',
                            gap: 2.5,
                            margintop: '10px'
                        }}>
                            <box 
                            sx={{borderRadius: '50%',
                                gap: 0.9,
                                BorderColor: '#7c4dff',
                                display: 'inline-flex'
                            }}>
                            <StarPurple500
                            sx={{
                                color: '#7c4dff',

                                width: '30px',
                                height: '60px'
                            }}></StarPurple500>
                            <Typography
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold', mt: 1, mb: 1,
                            }}>100%<br/> <Typography
                            sx={{ 
                                color: '#7c4dff'
                            }}>Comprometidos</Typography> </Typography>
                            </box>
                        </box>
                        












                    </Box>
                    <Box alt="Aca va la imagen">

                    </Box>
                </Box>

                         
            </Container>
        </Box>
    )
}
export default Hero
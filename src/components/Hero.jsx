import { ArrowForward } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'
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

                    <Box sx={{ width: '50%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                letterSpacing: 2,
                                
                            }}>

                            IDEAS · TECNOLOGIA · RESULTADOS

                        </Typography>

                        <Typography
                            variant='h3'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2 }}
                        >Transformamos ideas en 
                        <Typography variant='h3'
                        sx={{
                            color:'#7c4dff',
                            fontWeight: 'bold',
                            mt: 1, mb: 2
                        }}>soluciones digitales</Typography></Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales
                        </Typography>
                        <Box 
                        sx={{
                            gap:2,
                            display: 'flex'

                        }}>
                            <Button variant='contained'
                            sx={{
                                color:'white',
                                backgroundColor: '#7c4dff'
                                
                            }}>comenzar proyecto <ArrowForward></ArrowForward></Button>
                            <Button variant='outlined'
                            sx={{
                                borderColor: '#7c4dff',
                                color: '#7c4dff'
                            }}>conoce nuestros servicios</Button>
                        </Box>
                        <Box
                        sx={{
                            display:'flex'
                        }}>
                            <StarPurple500
                            sx={{
                                color:'#7c4dff',
                                marginTop:'10px'
                            }}></StarPurple500>
                            <Typography
                            sx={{
                                color:'#7c4dff'
                            }}>100%
                            <Typography>Comprometidos</Typography></Typography>

                        </Box>
                        
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default Hero
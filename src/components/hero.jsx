import { ArrowForward } from '@mui/icons-material'
import {Box, 
    Button, 
    Container,
    Typography} from '@mui/material'

function Hero() {
    return(
        <Box
        sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}
        >

        <Container maxWidth='lg'
        sx={{
            display: 'flex',
            gap:22
        }}>
            <Box
            sx={{
                display: 'inline',
                alignItems: 'center',
                gap: 6
            }}>

                <Typography variant='subtitle1'
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    letterSpacing: 2,
                    marginTop: '10px'
                    
                }}>

                    IDEAS · TECNOLOGIA · RESULTADOS

                </Typography>
                <Typography variant='h4' component='h4'
                sx={{
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    color: '#0d0d0ee8',
                    marginTop: '10px'
                    
                }}>
                    Tranformar ideas en 
                    
                    <Typography variant='h4'
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        color: '#7c4dff'
                    }}>
                        soluciones digitales
                    </Typography>
                    

                </Typography>
                <Typography variant='body2'
                sx={{
                    marginTop:'10px'
                }}>
                    Desarrollamos software a la medida para impulsar el crecimiento <br/> de tu negocio. Combinamos tecnologia, creatividad y experiencia <br/> para convertir tus ideas en productos reales.

                </Typography>
                <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop:'10px'
                }}>
                    <Button variant='contained' size='medium'
                    sx={{
                        backgroundColor: '#7c4dff',
                        color:'white',
                        fontSize:'10px',
                        gap: 1,
                        borderRadius:'4px'
                        
                    }}>Solicitar Cotizacion <ArrowForward
                    sx={{
                        width:'22px',
                        height:'22px',
                        
                    }}></ArrowForward> </Button>
                    <Button variant='outline' size='large'
                    sx={{
                        borderBlockColor: '#7c4dff',
                        color: '#7c4dff',
                        fontSize:'10px',
                        border:'1px solid',
                        borderRadius:'4px',
                        
                    }}> Conoce mas </Button>

                </Box>
                <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 23,
                    marginTop: '10px'
                }}>
                    <Box
                    sx={{
                        height: '50px',
                        width: '5px',
                        display: 'flex'
                    }}>
                        <img src="src/components/Captura de pantalla 2026-10-08 192917.png" alt="" />
                    </Box>
                    <Box
                    sx={{
                        height: '50px',
                        width: '5px',
                        display: 'flex'
                    }}>
                        <img src="src/components/Captura de pantalla 2026-10-08 193620.png" alt="" />
                    </Box>
                    <Box
                    sx={{
                        height: '50px',
                        width: '5px',
                        display: 'flex'
                    }}>
                        <img src="src/components/Captura de pantalla 2026-10-08 193626.png" alt="" />
                    </Box>

                </Box>

            </Box>
            <Box 
            sx={{
                display: 'block',
                gap: 6,
                width: '1px',
                
            }}>
                <img src="src/components/Captura de pantalla 2026-10-08 194635.png" alt="" />
            </Box>

        </Container>
        </Box>
    )
}
export default Hero
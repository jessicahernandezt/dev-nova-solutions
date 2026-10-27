import { ArrowForward, Bolt, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Container,
    ImageListItem,
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


                    <Box alt='box de info' sx={{ width: '50%',  }}>
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
                            display:'flex',
                            gap: 2.8,
                            marginTop:'10px'
                        }}>
                            <Box 
                            sx={{
                                borderRadius:'50%',
                                gap: 0.9 ,
                                borderColor:'#7c4dff',
                                display:'inline-flex',  
                            }}  >
                                <StarPurple500 
                                sx={{
                                    color:'#7c4dff',
                                    
                                    width: '30px',
                                    height: '60px'
                                }}></StarPurple500>
                                <Typography
                                sx={{
                                    color:'#7c4dff',
                                    fontWeight: 'bold',
                                    mt: 1, mb: 1,
                                    
                                }}>100%<br/> <Typography 
                                sx={{
                                    color:'#7c4dff'
                                }}>Comprometidos</Typography> </Typography>
                                

                               
                            </Box>

                            <Box 
                            sx={{
                                borderRadius:'50%',
                                gap: 0.9 ,
                                borderColor:'#7c4dff',
                                display:'inline-flex',
                                
                                
                            }}>
                                <Bolt 
                                sx={{
                                    color:'#7c4dff',
                                    width:'30px',
                                    height:'60px'
                                }}></Bolt>
                                <Typography
                                sx={{
                                    color:'#7c4dff',
                                    fontWeight: 'bold',
                                    mt: 1, mb: 1
                                }}>+50 <br/> 
                                    <Typography
                                    sx={{
                                        color: '#7c4dff'
                                    }}>Entegrados</Typography> 
                                </Typography>

                            </Box>
                            <Box sx={{
                                borderRadius:'50%',
                                gap: 0.9 ,
                                borderColor:'#7c4dff',
                                display:'inline-flex'
                            }}>
                                <PeopleAltRounded
                                sx={{
                                    color:'#7c4dff',
                                    width:'30px',
                                    height:'60px'

                                }}></PeopleAltRounded>

                                <Typography 
                                sx={{
                                    color:'#7c4dff',
                                    fontWeight: 'bold',
                                    mt: 1, mb: 1 
                                }}>98% <br/>
                                <Typography 
                                sx={{
                                    color: '#7c4ddf'
                                }}>Clientes satisfechos</Typography> 
                                </Typography>
                            </Box>
                            
                                
                        </Box>
                        
                    </Box>
                    <Box alt='imagen'
                    sx={{
                        alignItems:'end',
                        width:'40%',
                        height:'40%'
                    }}>
                        <Box component="img"
                        src='/img (8).png'
                        sx={{
                            width:'160%',
                            height:'120%'
                        }}
                        >
                        

                        </Box>
                    </Box>
                   
                    
                </Box>

            </Container>
        </Box>
    )
}
export default Hero
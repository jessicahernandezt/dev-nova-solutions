import { ArrowForward, Bolt, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function HeroDW() {
    return (
        <Box
            sx={{
                minHeight: '380px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 1
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
                                color: "black",
                                fontWeight: 'bold',
                                letterSpacing: 2,
                                
                                
                            }}>

                            Desarrollo Web

                        </Typography>

                        <Typography
                            variant='h3'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2 }}
                        >Soluciones web que 
                        <Typography variant='h3'
                        sx={{
                            color:'#7c4dff',
                            fontWeight: 'bold',
                            mt: 1, mb: 2
                        }}>impulsan tu negocio</Typography></Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Creamos sitios web y plataformas digitales modernas, escalables y seguras que se adapten a tus objetivos  y generan resultados reales para tu negocio
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
                                
                            }}>Solicitar tu sitio web <ArrowForward></ArrowForward></Button>
                            <Button variant='outlined'
                            sx={{
                                borderColor: '#7c4dff',
                                color: '#7c4dff'
                            }}>Conocer el proceso</Button>
                        </Box>
                        
                        
                    </Box>
                    <Box alt='imagen'
                    sx={{
                        alignItems:'end',
                        width:'40%',
                        height:'40%'
                    }}>
                        <Box component="img"
                        src='/img (18).png'
                        sx={{
                            width:'120%',
                            height:'70%'
                        }}
                        >
                        

                        </Box>
                    </Box>
                   
                    
                </Box>

            </Container>
        </Box>
    )
}
export default HeroDW
import { ArrowForward, Bolt, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function CallAction() {
    return (
        <Box
            sx={{
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 3
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

                            ¿Listo para llevar tu negocio al siguiente nivel?

                        </Typography>

                        <Typography
                        variant='h4'
                        sx={{ 
                            fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2

                        }}>
                            Hablemoos de tu próximo proyecto web
                        </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.0rem', mb:3}}
                        >
                            Cuentanos tu idea y convirtamosla en una solución digital que genere resultados reales.
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
                                
                            }}>Solicitar cotización <ArrowForward></ArrowForward></Button>
                            <Button variant='outlined'
                            sx={{
                                borderColor: '#7c4dff',
                                color: '#7c4dff'
                            }}>Conoce nuestros servicios</Button>
                        </Box>
                        
                        
                    </Box>
                    <Box alt='imagen'
                    sx={{
                        alignItems:'end',
                        width:'40%',
                        height:'40%'
                    }}>
                        <Box component="img"
                        src='./Grandes ideas, dulces sueños.png'
                        sx={{
                            width:'140%',
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
export default CallAction
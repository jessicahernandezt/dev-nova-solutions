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
            backgroundColor: '#F8F5FA',
            py: 6

        }}
        >

        <Container maxWidth='lg'  >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>
                <Box sx={{ width: '50%',display:'flow', alignContent:'flex-start'}}>
                    <Typography
                    sx={{
                        color: '#7c4dff',
                        fontWeight: 'bold',
                        letterSpacing: 2
                    }}>

                        Nuestros clientes

                    </Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        justifyContent: 'left',
                        fontSize: '40px'
                    }}>
                        La confianza de nuestros clientes impulsa </Typography>
                        <Typography
                        sx={{
                            color:'#7c4dff',
                            fontWeight:'bold',
                            fontSize:'40px'
                        }}>nuestro crecimiento</Typography>
                
                    <Typography sx={{py:1, color:'gray'}}>
                    En dev nova solutions, cada proyecto es una relacion a largo plazo. nos enorgullece ser aliado tecnologico de empresas que confian en nuestro talento, compromiso y capacidad para generar resultados reales  

                    </Typography>
                    <Box 
                    sx={{
                        display: 'flex',
                        gap: 2
                    }}>
                        <Button variant='contained' 
                    sx={{
                        backgroundColor:'#7c4dff',
                        color: 'white',
                        gap: 1

                    }}>
                        Conoce sus historias<ArrowForward sx={{
                            width:'20px',
                            height:'20px',

                        }}></ArrowForward>
                    </Button>
                    <Button variant='outlined' sx={{
                        color: '#202020',
                        borderColor:'#494949'

                    }}>
                        Hablemos de tu proyecto

                    </Button>
                    </Box>
                    

                </Box>
                <Box sx={{width:"50%",height:"50%", }}>
                    <Box component="img" sx={{width:"130%",height:"130%",borderRadius:"20px" }}
                    src="public/images.jfif">

                    </Box>
                </Box>
                
            </Box>
            


        </Container>
        </Box>
    )
}
export default Hero
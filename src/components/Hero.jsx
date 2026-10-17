import { ArrowForward } from '@mui/icons-material'
import {Box, 
    Button, 
    Container,
    responsiveFontSizes,
    Typography} from '@mui/material'

function Hero() {
    return(
        <Box
        sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F7F5FF',
            py: 6

        }}
        >

        <Container maxWidth='lg' >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>
                <Box sx={{ width: '50%'}}>
                    <Typography
                    sx={{
                        color: '#7c4dff',
                        fontWeight: 'bold',
                        letterSpacing: 2
                    }}>

                        IDEAS · TECNOLOGIA · RESULTADOS

                    </Typography>
                    <Typography sx={{
                        fontWeight: 'extra bold',
                        justifyContent: 'left',
                        fontSize: '40px'
                    }}>
                        Trasformando ideas en 
                        <Typography
                        sx={{
                            color:'#7c4dff',
                            fontWeight:'extra bold',
                            fontSize:'40px'
                        }}>soluciones digitales</Typography>
                    </Typography>
                    <Typography sx={{padding: ('7px')}}>
                        Desarrollamos sofware a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos visuales  

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
                        Comenzar proyecto <ArrowForward sx={{
                            width:'20px',
                            height:'20px',

                        }}></ArrowForward>
                    </Button>
                    <Button variant='outlined' sx={{
                        color: '#7c4dff',
                        borderColor:'#7c4dff'

                    }}>
                        Conocer nuestros servicios

                    </Button>
                    </Box>
                    <Typography sx={{ fontSize: ('10px'), padding: ('7px') }}>
                        COMPROMETIDOS
                        · 
                        PROYECTOS ENTREGADOS 
                        · 
                        CLIENTES SATISFECHOS 

                    </Typography>


                </Box>
                <Box>
                    <Box component='img' src='' >

                    </Box>
                </Box>
                <Box></Box>
               


            </Box>
            


        </Container>
        </Box>
    )
}
export default Hero
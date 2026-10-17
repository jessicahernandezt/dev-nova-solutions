import { HeatPumpOutlined } from '@mui/icons-material'
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

        <Container maxWidth='lg'>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>

                <Typography
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    letterSpacing: 2
                }}>

                    IDEAS · TECNOLOGIA · RESULTADOS

                </Typography>

            </Box>

         <Box>
                <Typography sx={{
                             fontWeight:'extra bold',
                             justifyContent: 'left',
                             fontSize:'40px'}}>
                                
                          Transformando ideas en soluciones digitales   
                         
                </Typography>
             
                              <br/> Desarrollamos Foftware a la medida, 
                              para poder impulsar el crecimiento de tu negocio
                              combinando tu negocio con la tecnologia, creatividad y experiencia para poder 
                              convertir tus ideas en productos reales.
         </Box>

<button> {"->comenzar el Proyecto"}   
    

</button>


<button>{"Conoce nuestro servicio"}</button>




        </Container>
        </Box>
    )
}
export default Hero
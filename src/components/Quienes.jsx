import {Box, Button, Container, Typography } from '@mui/material'

function Quienes() {
    return(
        <Box sx={{display: 'flex', marginTop: '50px'}}/*Quienes somos*/>
            <Box /*Informacion y boton*/>
                <Typography>
                    Quienes somos
                    <Typography>
                        Un equipo que convierte ideas en impacto
                        <Typography>
                            En DevNova Solutions somos un equipo de profesionales apasionados<br/>
                            por la tecnologia y la innovacion. Ayudamos a empresas y emprendedores<br/>
                            a transformar sus ideas en soluciones digitales que generan valor real.
                        </Typography>
                    </Typography>
                </Typography>
                <Button>
                    Conoce mas sobre nosotros →
                </Button>
            </Box>

            <Box component="img" src='./img_18.png' alt='Quienes_somos' sx={{width: '210px', height: '2+10px'}}>
            </Box>

            
        </Box>



    )
}
export default Quienes
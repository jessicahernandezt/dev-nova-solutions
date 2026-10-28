import {Box, Button, Container, Typography } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleIcon from '@mui/icons-material/People';

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

            <Box /*Iconos-Quienes-Somos*/>
                <Box sx={{display:'flex'}} /*Años de experiencia*/>
                    <WatchLaterIcon>
                    </WatchLaterIcon>

                <Typography>
                5+
                <Typography>
                Años de experiencia
                </Typography>                
                </Typography>
                </Box>

                <Box sx={{display:'flex'}} /*Proyectos completados*/>
                    <FileCopyIcon>
                    </FileCopyIcon>

                <Typography>
                50+
                <Typography>
                Proyectos completados
                </Typography>                
                </Typography>
                </Box>

                <Box sx={{display:'flex'}} /*Clientes satisfechos*/>
                    <PeopleIcon>
                    </PeopleIcon>

                <Typography>
                30+
                <Typography>
                Clientes satisfechos
                </Typography>                
                </Typography>
                </Box>

                <Box sx={{display:'flex'}} /*Talento multidisciplinario*/>
                    <WatchLaterIcon>
                    </WatchLaterIcon>

                <Typography>
                Talento multidisciplinario
                <Typography>
                Desarrolladores, diseñadores<br/>
                Y estrategias
                </Typography>                
                </Typography>
                </Box>

            </Box>

            
        </Box>



    )
}
export default Quienes
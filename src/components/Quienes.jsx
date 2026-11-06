import {Box, Button, Container, Typography } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleIcon from '@mui/icons-material/People';

function Quienes() {
    return(
        <Box sx={{display: 'flex', marginTop: '50px', marginLeft:'100px'}}/*Quienes somos*/>
            <Box /*Informacion y boton*/>
                <Typography sx={{fontSize:'20px', fontWeight: 'bold'}}>
                    Quienes somos
                    <Typography sx={{fontSize: '30px', fontWeight:'bold'}}>
                        Un equipo que convierte ideas en impacto
                        <Typography sx={{fontSize:'15px'}}>
                            En DevNova Solutions somos un equipo de profesionales apasionados<br/>
                            por la tecnologia y la innovacion. Ayudamos a empresas y emprendedores<br/>
                            a transformar sus ideas en soluciones digitales que generan valor real.
                        </Typography>
                    </Typography>
                </Typography>
                <Button Variant='contained' type="button" sx={{marginTop:'10px',backgroundColor:'#7c4dff',padding:'15px', color: 'white', fontWeight:'bold'}}>
                    Conoce mas sobre nosotros →
                </Button>
            </Box>

            <Box component="img" src='./img_18.png' alt='Quienes_somos' sx={{width: '520px', height: '350px'}}>
            </Box>

            <Box sx={{marginLeft:'20px'}}/*Iconos-Quienes-Somos*/>
                <Box sx={{display:'flex', marginTop:'10px'}} /*Años de experiencia*/>
                    <WatchLaterIcon sx={{color: '#720b98', height:'30px', width:'30px'}}>
                    </WatchLaterIcon>
                    <Box sx={{marginLeft:'20px'}}/* info*/>
                        <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>
                        5+
                        <Typography sx={{fontSize:'15px'}}>
                        Años de experiencia
                        </Typography>                
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex', marginTop:'10px'}} /*Proyectos completados*/>
                    <FileCopyIcon sx={{color: '#720b98', height:'30px', width:'30px'}}>
                    </FileCopyIcon>
                    <Box sx={{marginLeft:'20px'}}>
                        <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>
                        50+
                        <Typography>
                        Proyectos completados
                        </Typography>                
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex', marginTop:'10px'}} /*Clientes satisfechos*/>
                    <PeopleIcon sx={{color: '#720b98', height:'30px', width:'30px'}}>
                    </PeopleIcon>
                    <Box sx={{marginLeft:'20px'}}>
                        <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>
                        30+
                        <Typography>
                        Clientes satisfechos
                        </Typography>                
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex', marginTop:'10px'}} /*Talento multidisciplinario*/>
                    <WatchLaterIcon sx={{color: '#720b98', height:'30px', width:'30px'}}>
                    </WatchLaterIcon>

                    <Box sx={{marginLeft:'20px'}}>
                        <Typography sx={{fontWeight:'bold', fontSize:'20px'}}>
                        Talento multidisciplinario
                        <Typography>
                        Desarrolladores, diseñadores<br/>
                        Y estrategias
                        </Typography>                
                        </Typography>
                    </Box>

                </Box>

            </Box>

            
        </Box>



    )
}
export default Quienes
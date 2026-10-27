import {Box, Button, Container, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, TextField} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#171b35', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-evenly', gap: 3, borderBottom:'1px solid #666', paddingBottom:'3%'}}>
                    <Box>
                        asda
                    </Box>

                    <Box sx={{padding:2}}>
                        <Typography sx={{color:'#ffffff', fontWeight:"bold", letterSpacing:2, fontSize:'1.2rem'}}>
                            Navegación
                        </Typography>
                        <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2, fontSize:'14px'}}>
                            Inicio <br />
                            Servicios <br />
                            Quienes somos <br />
                            Proyectos <br />
                            Tecnologias <br />
                            Clientes <br />
                            Contactos 
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{color:'#ffffff', fontWeight:"bold", letterSpacing:2, fontSize:'1.2rem'}}>
                            Servicios
                        </Typography>
                        <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2, fontSize:'14px'}}>
                            Desarrollo Web <br />
                            Aplicaciones Moviles <br />
                            Desarrollo de Software <br />
                            Consultoria Tecnologica <br />
                            Integracion de Sistemas <br />
                            Soporte y Mantenimiento 
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:2}}>
                        <Typography sx={{color:'#ffffff', fontWeight:"bold", letterSpacing:2, fontSize:'1.2rem'}}>
                            Contacto
                        </Typography>
                        
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, padding: 1, py: 0, borderRadius: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2}}>
                                    hola@devnova.com
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2}}>
                                    +55 22 3333 4444
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2}}>
                                    Ciudad de Mexico, Mexico.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{color:'#ffffff', fontWeight:"bold", letterSpacing:2, fontSize:'1.2rem', paddingBottom:'3%'}}>
                            Suscribete a nuestro boletin
                        </Typography>
                        <Box component='div' sx={{position:'relative'}}>
                            <TextField defaultValue='Tu correo electronico' sx={{backgroundColor:'white', borderRadius:2, color:'white', width:'100%'}} />
                            <Button sx={{position:'absolute', right: '0', top: '0', height: '100%', backgroundColor: '#8B80C8', color: 'white', borderRadius: 2, fontSize: '22px'}}>
                                →
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', justifyContent:'space-evenly', gap: 3, paddingTop:'3%'}}>
                    asda
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
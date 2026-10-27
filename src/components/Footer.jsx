import {Box, Button, Container, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, TextField} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Footer() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#171b35', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'top', justifyContent:'space-evenly', gap: 3, borderBottom:'1px solid #666', paddingBottom:'3%'}}>

                    <Box>
                        <Box sx={{display: "flex", alignItems: 'center', flexGrow: 1, gap: 1}}>
                            <Typography variant="h4" sx={{fontWeight: 'bold', color: '#7c4dff'}}>
                                N
                            </Typography>
                            <Typography variant="h6" sx={{fontWeight: 'bold', lineHeight: 1, color:'white'}}>
                                DevNova
                                <br/>
                                Solutions
                            </Typography>
                        </Box>
                        <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2, fontSize:'14px'}}>
                            Soluciones para un mejor mañana.
                        </Typography>
                        <Box sx={{display:'flex', gap:2, paddingTop:1}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:'20px', height: '20px', objectFit: 'contain', flexShrink: 0}}></Box>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:'20px', height: '20px', objectFit: 'contain', flexShrink: 0}}></Box>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:'20px', height: '20px', objectFit: 'contain', flexShrink: 0}}></Box>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:'20px', height: '20px', objectFit: 'contain', flexShrink: 0}}></Box>
                        </Box>
                    </Box>

                    <Box sx={{paddingRight:2}}>
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

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', paddingRight:2}}>
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
                        <Typography sx={{color:'#666', fontWeight:"bold", letterSpacing:2, fontSize:'14px', paddingTop:'3%'}}>
                            Recibe noticias, novedades y contenido util.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex', alignItems: 'center', justifyContent:'space-evenly', gap: 3, paddingTop:'3%'}}>
                    <Typography sx={{color:'#666', fontWeight:"bold", letterSpacing:2, fontSize:'14px'}}>
                        © 2025 Dev Nova Solutions. Todos los derechos reservados.
                    </Typography>
                    <Typography sx={{color:'#666', fontWeight:"bold", letterSpacing:2, fontSize:'14px'}}>
                        Aviso de Privacidad | Terminos de servicio
                    </Typography>
                    <Typography sx={{color:'#666', fontWeight:"bold", letterSpacing:2, fontSize:'14px'}}>
                        Inovacion hoy. Un mejor mañana.
                    </Typography>
                </Box>
                
            </Container>
        </Box>
    )
}

export default Footer
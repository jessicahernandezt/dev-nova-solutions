
import {Box, Button, Container, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, TextField} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Contacto() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'space', justifyContent:'space-evenly', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:2}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2, fontSize:'1.4rem'}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>¿Hablamos?
                        </Typography>
                        <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                            Cuentanos sobre tu proyecto. Estamos listos para ayudarte a hacerlo realidad
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, padding: 1, py: 0, borderRadius: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                    hola@devnova.com
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                    +55 22 3333 4444
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                    Ciudad de Mexico, Mexico.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box sx={{display:'flex', backgroundColor:'white', padding:2, borderRadius:2}}>
                        <Box sx={{marginRight:3, minWidth:'180px'}}>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.8rem', paddingBottom:'5px'}}>
                                Nombre completo
                            </Typography>
                            <TextField defaultValue='Tu nombre' multiline maxRows={2} />
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.8rem', paddingBottom:'5px'}}>
                                Tipo de proyecto
                            </Typography>
                            <TextField defaultValue='Selecciona una opción' multiline maxRows={2} />
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff', marginTop:'10px'}}>Enviar mensaje →</Button>
                        </Box>
                        <Box sx={{minWidth:'180px'}}>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.8rem', paddingBottom:'5px'}}>
                                Correo electronico
                            </Typography>
                            <TextField defaultValue='Tu@empresa.com' multiline maxRows={2} />
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.8rem', paddingBottom:'5px'}}>
                                Mensaje
                            </Typography>
                            <TextField defaultValue='Cuentanos sobre tu proyecto' multiline maxRows={4} />
                        </Box>
                    </Box>
                    
                    <Box sx={{backgroundColor:'white', padding:2, borderRadius:2, marginRight:2}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2, fontSize:'1.2rem'}}>
                            Preguntas frecuentes
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component="span">Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component="span">Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component="span">Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography component="span">Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    <Box component='img' src='/img (2).png' alt='' sx={{width:'120px', height: '120px', objectFit: 'contain', flexShrink: 0}}></Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Contacto
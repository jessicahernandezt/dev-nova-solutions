
import {Box, Button, Container, Typography, Accordion, AccordionActions, AccordionSummary, AccordionDetails, TextField} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Contacto() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'space', justifyContent:'space-evenly', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'white', padding:2, borderRadius:2}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>Tecnologias
                        </Typography>
                        <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                            Utilizamos tecnologias modernas y confiables<br /> para desarrollar soluciones escalables, seguras<br /> y de alto rendimiento
                        </Typography>
                    </Box>
                    
                    <Box sx={{display:'flex', backgroundColor:'white', padding:2, borderRadius:2}}>
                        <Box sx={{marginRight:3}}>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                                Nombre completo
                            </Typography>
                            <TextField></TextField>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                                Nombre completo
                            </Typography>
                            <TextField></TextField>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff'}}>Enviar mensaje →</Button>
                        </Box>
                        <Box>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                                Nombre completo
                            </Typography>
                            <TextField></TextField>
                            <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                                Nombre completo
                            </Typography>
                            <TextField></TextField>
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
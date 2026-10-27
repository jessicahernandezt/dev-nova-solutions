import {Box, Button, Container, Typography, Card, CardActions, CardContent, CardMedia, Avatar} from '@mui/material'

function Experiencia() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>

                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>Experiencia y clientes
                        </Typography>
                        


                        <Box sx={{display: 'flex', gap: 2, padding: 1, py: 0, /*backgroundColor: 'white',*/ borderRadius: 2}}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                5+<br />
                                <Box component='span' sx={{color: '#a1a1a1', fontWeight:'normal', fontSize:'12px'}}>
                                    Años de experiencia
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                50+<br />
                                <Box component='span' sx={{color: '#a1a1a1', fontWeight:'normal', fontSize:'12px'}}>
                                    Clienets complacidos
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                30+<br />
                                <Box component='span' sx={{color: '#a1a1a1', fontWeight:'normal', fontSize:'12px'}}>
                                    casos existosos
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                98%<br />
                                <Box component='span' sx={{color: '#a1a1a1', fontWeight:'normal', fontSize:'12px'}}>
                                    Satisfaccion promedio
                                </Box>
                            </Typography>
                        </Box>
                    </Box>



                    </Box>

                    <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.2rem', letterSpacing:2}}>
                        La confianza de nuestros clientes nos impulsa 
                    </Typography>
                    <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                        Resultados que hablan y relaciones contruidas con la calidad y la innovacion.
                    </Typography>

                    <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Card sx={{ maxWidth: 330}}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2}}>
                                    <Avatar alt='' src='/img (7).png' />
                                    <Box sx={{flex: 1, minWidth: 0}}>
                                        <Typography sx={{color: '#666', mb:1}}>
                                            "El equipo de DevNova entendio perfectamente nuestras necesidades y entrego un producto de gran valor. Altamente recomendados."
                                        </Typography>
                                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                                            Laura Martinez
                                        </Typography>
                                        <Typography sx={{color: '#666', mb:1}}>
                                            Directora de Marketing. Startup
                                        </Typography>
                                        <Typography sx={{color: '#faca2c', letterSpacing:2}}>
                                            ★★★★★
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 330}}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2}}>
                                    <Avatar alt='' src='/img (7).png' />
                                    <Box sx={{flex: 1, minWidth: 0}}>
                                        <Typography sx={{color: '#666', mb:1}}>
                                            "Soluciones creativas, comunicacion efectiva y un gran dominio tecnico. Sin duda los volveria a contratar para futuros proyectos."
                                        </Typography>
                                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                                            Carlos Ramirez
                                        </Typography>
                                        <Typography sx={{color: '#666', mb:1}}>
                                            CTO. Empresa de Retal
                                        </Typography>
                                        <Typography sx={{color: '#faca2c', letterSpacing:2}}>
                                            ★★★★★
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        <Card sx={{ maxWidth: 330}}>

                            <CardContent>
                                
                                <Typography gutterBottom variant="h5" component="div">
                                    Plataforma de gestion empresarial
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Sistema completo para la administracion de procesos internos
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>React</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Node.js</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>PostegreSQL</Box>
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                    </Box>
                    
                </Box>
            </Container>
        </Box>
    )
}

export default Experiencia
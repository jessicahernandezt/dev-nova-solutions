import {Box, Button, Container, Typography, Card, CardActions, CardContent, CardMedia} from '@mui/material'

function Proyectos() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>

                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>Proyectos destacados
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver todos los proyectos →</Button>
                    </Box>

                    <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.2rem', letterSpacing:2}}>
                        soluciones para negocios reales
                    </Typography>
                    <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                        Conoce algunos de nuestros proyectos mas recientes y como ayudamos a nuestros clientes alcanzar sus obgetivos
                    </Typography>

                    <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Card sx={{ maxWidth: 270}}>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Box component='div' sx={{backgroundColor:'#7c4dff', color:'white', borderRadius:'50px', padding:'5px', maxWidth:'45px'}}>Web</Box>
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

                        <Card sx={{ maxWidth: 270}}>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Box component='div' sx={{backgroundColor:'#7c4dff', color:'white', borderRadius:'50px', padding:'5px', maxWidth:'50px'}}>Movil</Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    App de reservas
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Aplicacion movil para reservas de servicios y control de estado
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Flusher</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Firebase</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Node.js</Box>
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 270}}>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Box component='div' sx={{backgroundColor:'#7c4dff', color:'white', borderRadius:'50px', padding:'5px', maxWidth:'45px'}}>Web</Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sistema de inventario
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Control de productos, entradas y reportes en tiempo real
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>React</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Express</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>MongoDB</Box>
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>
                        
                        <Card sx={{ maxWidth: 270}}>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Box component='div' sx={{backgroundColor:'#7c4dff', color:'white', borderRadius:'50px', padding:'5px', maxWidth:'105px'}}>E-commerce</Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    Tienda en linea
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Plataforma de comercio electronico con pagos en linea
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Node.js</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>Stripe</Box>
                                <Box sx={{backgroundColor:'#e6e6e6', borderRadius:'5px', border:'1px solid #acacac', padding:'5px', fontSize:'15px', color:'#666'}}>AWS</Box>
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

export default Proyectos
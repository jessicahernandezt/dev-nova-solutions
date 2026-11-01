import {Box, Button, Container, Typography, Card, CardActions, CardContent, CardMedia, Chip, Stack} from '@mui/material'

function ProyectosDestacados() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', paddingBottom: 1}}>

            <Container maxWidth='lg' sx={{ }}>

                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>

                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>PROYECTOS DESTACADOS
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label='Todos' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                            <Chip label='Web' sx={{backgroundColor:'#e6e6e6', color:'#7c4dff'}} />
                            <Chip label='Movil' sx={{backgroundColor:'#e6e6e6', color:'#7c4dff'}} />
                            <Chip label='Software' sx={{backgroundColor:'#e6e6e6', color:'#7c4dff'}} />
                            <Chip label='E-commerse' sx={{backgroundColor:'#e6e6e6', color:'#7c4dff'}} />
                        </Stack>
                    </Box>

                    <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.4rem', letterSpacing:2}}>
                        soluciones para negocios reales
                    </Typography>
                    <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                        Explora algunos de nuestros mas recientes. Cada solucion esta diseñada a la medida de las<br />
                        necesidades de nuestros clientes, combinando tecnologia, diseño y experiencia de usuario.
                    </Typography>

                    <Box component='div' sx={{display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px'}}>
                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='Web' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Plataforma de gestion empresarial
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Sistema completo para la administracion de procesos internos
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='React' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Node.js' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='PostgreSQL' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='Movil' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    App de reservas
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Aplicacion movil para reservas de servicios y control de estado
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='Flutter' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Firebase' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Node.js' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>
                        
                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='E-commerce' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Tienda en linea
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Plataforma de comercio electronico con pagos en linea
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='Next.js' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Stripe' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='AWS' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='Software' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Sistema de inventario
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Control de productos, entradas y reportes en tiempo real
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='React' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Express' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='MongoDB' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='SaaS' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    Plataforma de análisis de datos
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Solucion en la nube para análisis y visualizacion de datos, con reportes personalizados
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='React' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Express' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='MongoDB' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                            </CardActions>
                            <CardActions>
                                <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver proyecto →</Button>
                            </CardActions>
                        </Card>

                        <Card>
                            <CardMedia sx={{ height: 140 }} image="/img (8).png" title="neko"/>
                            <CardContent>
                                <Chip label='Movil' sx={{backgroundColor:'#7c4dff', color:'#fff'}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    App de bienestar y salud
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Aplicacion movil para el seguimiento de habitos, rutinas y salud personal
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Chip label='React' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='Express' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
                                <Chip label='MongoDB' sx={{backgroundColor:'#e6e6e6', color:'#a8a8a8', border:'1px solid #acacac'}} />
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
export default ProyectosDestacados
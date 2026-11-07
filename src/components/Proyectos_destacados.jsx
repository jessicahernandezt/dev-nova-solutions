import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CardContent from '@mui/material/CardContent';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import {Box, 
    Button, 
    Container,
    Typography,
    Card,
    CardActions,
    CardMedia,
    Chip} from '@mui/material'

function Proyectos_destacados() {   
    return(
        <Box  sx={{
            minHeight: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fcfcfc',
            py: 6
            
        }}>
            <Container sx={{alignItems: 'flex-start'}}>
                <Box >
                    <Box sx={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                }}>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    fontWeight:'bold',
                                    alignItems: "center",
                                    }}><HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>Proyectos destacados</Typography>
                        <Box >
                            <Button sx={{color: '#7c4dff',
                                        fontWeight: 'bold'}}>
                                Ver Proyectos<ArrowRightAltIcon></ArrowRightAltIcon>
                            </Button>
                        </Box>
                    </Box>
                    <Box >
                        
                        <Typography sx={{
                            fontWeight:'bold',
                            fontSize:'25px',}}>
                            Solucines reales para negocios reales
                        </Typography>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    color:'gray'}}>
                            Conoce algunos de nuestros proyectos mas recientes y como ayudamos a nuestros clientes a alcanzar sus objetivos  
                         </Typography>
                         
                    
                    </Box>
                    
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'stretch',
                        gap: 2}}>
                        <Box sx={{width:'25%', display: 'flex'}}>
                            <Card sx={{borderRadius:'10px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                                <CardMedia component='img' sx={{height: '160px', objectFit: 'cover'}} src='public/7-Panel-de-control-KPIS-de-inventario-con-pedidos-de-ventas-y-trabajos-pendientes-de-envio.png'></CardMedia>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                                    <Box>
                                        <Chip label="Web" sx={{background:'#7c4dff', color:'white'}}/>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "14px",
                                                        fontWeight:"bold"}}>Plataforma de gestion empresarial</Typography>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "13px",
                                                        color:'gray'}}>Sistema completo para la administracion de procesos internos</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="React"/><Chip label="Node.js"/><Chip label="PostgreSQL"/></Box>
                                    </Box>
                                    <Box>
                                        <Button sx={{color:'#7c4dff'}}>
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%', display: 'flex'}}>
                            <Card sx={{borderRadius:'10px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                                <CardMedia component='img' sx={{height: '160px', objectFit: 'cover'}} src='public/images.jfif'></CardMedia>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                                    <Box>
                                        <Chip label="Móvil" sx={{background:'#7c4dff', color:'white'}}/>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "14px",
                                                        fontWeight:"bold"}}>App de reservas</Typography>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "13px",
                                                        color:'gray'}}>Aplicacion móvil para reservas de servicios y control de estado</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Flutter"/><Chip label="Firebase"/><Chip label="Node.js"/></Box>
                                    </Box>
                                    <Box>
                                        <Button sx={{color:'#7c4dff'}}>
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%', display: 'flex'}}>
                            <Card sx={{borderRadius:'10px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                                <CardMedia component='img' sx={{height: '160px', objectFit: 'cover'}} src='public/sistemas-de-gestion-empresarial.webp'></CardMedia>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                                    <Box>
                                        <Chip label="Web" sx={{background:'#7c4dff', color:'white'}}/>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "14px",
                                                        fontWeight:"bold"}}>Sistema de inventario</Typography>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "13px",
                                                        color:'gray'}}>Control de productos, entradas y reportes en tiempo real</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="React"/><Chip label="Express"/><Chip label="MongoDB"/></Box>
                                    </Box>
                                    <Box>
                                        <Button sx={{color:'#7c4dff'}}>
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%', display: 'flex'}}>
                            <Card sx={{borderRadius:'10px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'}}>
                                <CardMedia component='img' sx={{height: '160px', objectFit: 'cover'}} src='public/74293137-image-of-business-person-using-laptop-at-desk-and-mobile-phone.jpg'></CardMedia>
                                <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                                    <Box>
                                        <Chip label="E-commerce" sx={{background:'#7c4dff', color:'white'}}/>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "14px",
                                                        fontWeight:"bold"}}>Tienda en linea</Typography>
                                        <Typography sx={{display: "flex",
                                                        flexDirection: "row",
                                                        gap: "20px",
                                                        alignItems: "center",
                                                        fontSize: "13px",
                                                        color:'gray'}}>Plataforma de comercio electronico con pago en linea</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Node.js"/><Chip label="Stripe"/><Chip label="AWS"/></Box>
                                    </Box>
                                    <Box>
                                        <Button sx={{color:'#7c4dff'}}>
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
        
        

    )

}
export default Proyectos_destacados
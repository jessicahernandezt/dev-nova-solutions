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
                        alignItems: 'center',
                        gap: 2}}>
                        <Box sx={{width:'25%'}}>
                            <Card sx={{borderRadius:'10px'}}>
                                <CardMedia component='img' src='public/7-Panel-de-control-KPIS-de-inventario-con-pedidos-de-ventas-y-trabajos-pendientes-de-envio.png'></CardMedia>
                                <CardContent>
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
                                                        fontSize: "13px",}}>Sistema completo para la administracion de procesos internos</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Web"/><Chip label="Web"/><Chip label="Web"/></Box>
                                    </Box>
                                    <Box>
                                        <Button >
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%', flexWrap: 'wrap'}}>
                            <Card sx={{borderRadius:'10px'}}>
                                <CardMedia component='img' src='public/images.jfif'></CardMedia>
                                <CardContent>
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
                                                        fontSize: "13px",}}>Sistema completo para la administracion de procesos internos</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Web"/><Chip label="Web"/><Chip label="Web"/></Box>
                                    </Box>
                                    <Box>
                                        <Button >
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%'}}>
                            <Card sx={{borderRadius:'10px'}}>
                                <CardMedia component='img' src='public/sistemas-de-gestion-empresarial.webp'></CardMedia>
                                <CardContent>
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
                                                        fontSize: "13px",}}>Sistema completo para la administracion de procesos internos</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Web"/><Chip label="Web"/><Chip label="Web"/></Box>
                                    </Box>
                                    <Box>
                                        <Button >
                                            <Typography sx={{fontSize: "12px"}}>Ver proyecto </Typography><ArrowRightAltIcon></ArrowRightAltIcon>
                                        </Button>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:'25%'}}>
                            <Card sx={{borderRadius:'10px'}}>
                                <CardMedia component='img' src='public/sistemas-de-gestion-empresarial.webp'></CardMedia>
                                <CardContent>
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
                                                        fontSize: "13px",}}>Sistema completo para la administracion de procesos internos</Typography>
                                        <Box style={{display: "flex", flexDirection: "row", gap: "7px", alignItems: "center"}}><Chip label="Web"/><Chip label="Web"/><Chip label="Web"/></Box>
                                    </Box>
                                    <Box>
                                        <Button >
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
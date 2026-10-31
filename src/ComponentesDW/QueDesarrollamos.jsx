import { AppSettingsAlt, ArrowForward, ArrowRightAlt, Bolt, Business, CodeOff, DeviceHub, Directions, HorizontalRule, Lightbulb, Monitor, Phone, RocketLaunch, Rule, ShoppingCartOutlined, VerifiedUser } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function QueDesarrollamos(){
    return (
        <Box sx={{
            minHeight:'520px',
            display: 'flex',
            alignItems: 'center',
           
            py:"10px"
        }}>
            <Container maxWidth="lg" sx={{
                
            }}>
                <Box 
                sx={{
                    display:"block",
                    py:"10px"
                 
                    
                    
                }}>
                    <Box alt="box general" sx={{
                    
                    }}>
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",

                        }}>
                            <Typography variant='overline' sx={{
                                        
                                fontSize:"bold"
                            }}>
                                Nuestros servicios
                                        
                                    
                            </Typography>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Soluciones para cada necesidad
                                </Typography>
                                <Typography variant='caption'>
                                    Desarrollamos soluciones web a la medida de tu negocio, desde sitios informativos <br/> hasta plataformas complejas.
                                    
                                </Typography>                                
                            </Box>

                        </Box>
                        <Box sx={{
                           display:"grid",
                           gap:2,
                           width:"100%",
                           alignItems:"center",
                           marginTop:"10px",
                           margin:"20px"
                           
                        }}>
                            <Box sx={{
                                display:"flex",
                                gap:3
                            }}>
                                <Card sx={{
                                    width:"30%",
                                    height:"90%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            height:"50%",
                                            width:"50%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <Business sx={{
                                                width:"50%",
                                                height:"65%",
                                                borderRadius:"20%",
                                        
                                                borderColor:"#7c4dff",
                                                backgroundColor:"#fb08df36",
                                                marginTop:"1px",
                                                
                                                
                                            }} />
                                        </Box>
                                        <Box
                                        sx={{
                                            borderLeft:"10px",
                                            display:"block",
                                            width:"230px",
                                            height:"130px"
                                        }}>
                                            <Typography variant='body2' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Sitios corporativos
                                            </Typography>
                                               
                                            <Typography variant='caption' sx={{
                                            
                                                fontSize:"11px",
                                                color:"#837f7f"
                                            }}>
                                                Sitios web profesionales que comunican tu marca, servicios y valores de forma efectiva
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"90%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            
                                            width:"65%",
                                            
                                            marginTop:"10px",
                                            
                                        }}>
                                        <RocketLaunch sx={{
                                            width:"65%",
                                            height:"55%",
                                            color:"#7c4dff",
                                            borderRadius:"20%",
                                            borderColor:"#7c4dff",
                                            backgroundColor:"#fb08df36"}} />
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Landing Pages
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"11px",
                                                color:"#837f7f"
                                                }}>
                                                    Paginas enfocadas en convertir visitantes en clientes, ideales para campañas y lanzamientos.
                                                </Typography>
                                            </Box>
                                            


                                            
                                        </Box>
                                        

                                        

                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"90%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            
                                            width:"65%",
                                            
                                            marginTop:"10px",
                                            
                                        }}>
                                        <ShoppingCartOutlined sx={{
                                            width:"65%",
                                            height:"55%",
                                            color:"#7c4dff",
                                            borderRadius:"20%",
                                            borderColor:"#7c4dff",
                                            backgroundColor:"#fb08df36"}} />
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                E-commerce
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"11px",
                                                color:"#837f7f"
                                                }}>
                                                Tiendas en linea seguras, escalables y fáciles de gestionar para vender tus productos o servicios
                                                </Typography>
                                            </Box>
                                            


                                            
                                        </Box>
                                        

                                        

                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"90%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            
                                            width:"65%",
                                            
                                            marginTop:"10px",
                                            
                                        }}>
                                        <CodeOff sx={{
                                            width:"65%",
                                            height:"55%",
                                            color:"#7c4dff",
                                            borderRadius:"20%",
                                            borderColor:"#7c4dff",
                                            backgroundColor:"#fb08df36"}} />
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Sistemas web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"11px",
                                                color:"#837f7f"
                                                }}>
                                                Plataformas a la medida para automatizar procesos y resolver necesidades especificas de tu negocio 
                                                </Typography>
                                            </Box>
                                            


                                            
                                        </Box>
                                        

                                        

                                    </CardContent>

                                </Card>
                                
                                
                            </Box>
                            
                        </Box>

                    </Box>

                    

                    

                </Box>
            </Container>
        </Box>
    )
}

export default QueDesarrollamos
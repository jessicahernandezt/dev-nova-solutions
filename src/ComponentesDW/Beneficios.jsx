import { AppSettingsAlt, ArrowForward, ArrowRightAlt, Bolt, BoltOutlined, Business, CodeOff, DeviceHub, Directions, HorizontalRule, Lightbulb, Monitor, PeopleAltOutlined, Phone, RocketLaunch, Rule, ShoppingCartOutlined, StackedBarChartOutlined, VerifiedUser, VerifiedUserOutlined } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function Beneficios(){
    return (
        <Box sx={{
            minHeight:'300px',
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
                                Beneficios de un sitio bien construido
                                        
                                    
                            </Typography>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Más que un sitio web, una ventaja competitiva.
                                </Typography>
                                <Typography variant='caption'>
                                    Un sitio web bien desarrollado impulsa tu marca, mejora la experiencia de tus usuarios y abre nuevas oportunidades de crecimientos.
                                    
                                </Typography>                                
                            </Box>

                        </Box>
                        <Box sx={{
                           display:"grid",
                           gap:2,
                           width:"100%",
                           marginTop:"5pxpx"
                           
                        }}>
                            <Box sx={{
                                display:"flex",
                                gap:3,
                                justifyContent:"center",
                                alignItems:"center",
                                marginLeft:"5px"
                            }}>
                                <Card sx={{
                                    width:"30%",
                                    height:"75%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            height:"70%",
                                            width:"55%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <BoltOutlined sx={{
                                                width:"60%",
                                                height:"70%",
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
                                            height:"130px",
                                            marginLeft:"1px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Rendimiento
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Sitios rapidos y optimizados para ofrecer la mejor experiencia.
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"75%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            height:"70%",
                                            width:"55%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <VerifiedUserOutlined sx={{
                                                width:"60%",
                                                height:"70%",
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
                                            height:"130px",
                                            marginLeft:"1px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Seguridad
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Proteccion de datos y mejores practicas de seguridad web
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"75%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            height:"70%",
                                            width:"55%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <StackedBarChartOutlined sx={{
                                                width:"60%",
                                                height:"70%",
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
                                            height:"130px",
                                            marginLeft:"1px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Escalabilidad
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Arquitectura preparada para crecer junto con tu negocio.
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"30%",
                                    height:"75%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            height:"70%",
                                            width:"55%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <PeopleAltOutlined sx={{
                                                width:"60%",
                                                height:"70%",
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
                                            height:"130px",
                                            marginLeft:"1px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Experiencia de usuario
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Diseño intuitivo y atractivos que convierten visitantes en clientes.
                                            </Typography>
                                            
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

export default Beneficios
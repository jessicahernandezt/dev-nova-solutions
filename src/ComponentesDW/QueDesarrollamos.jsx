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
                           marginTop:"10px"
                           
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
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Sitios corporativos
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
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
                                            height:"50%",
                                            width:"50%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <RocketLaunch sx={{
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
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Landing pages
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Paginas enfocadas en convertir visitantes en clientes, ideales para campañas y lanzamientos.
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
                                            height:"50%",
                                            width:"50%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <ShoppingCartOutlined sx={{
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
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                E-commerce
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Tiendas en linea seguras, escalables y fáciles de gestionar para vender tus productos o servicios 
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
                                            height:"50%",
                                            width:"50%",
                                            color:"#7c4dff",
                                            
                                            display:"flex",
                                            
                                        }}>
                                            <CodeOff sx={{
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
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Sistemas web
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Plataformas a la medida para automatizar pprocesos y resolver necesidades especificas de tu negocio.
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

export default QueDesarrollamos
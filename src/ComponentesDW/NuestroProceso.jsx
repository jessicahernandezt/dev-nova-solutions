import { AppSettingsAlt, ArrowForward, ArrowRightAlt, Bolt, BrushOutlined, Business, CodeOff, DeviceHub, Directions, HorizontalRule, Lightbulb, Monitor, Phone, RocketLaunch, RocketLaunchOutlined, Rule, SearchOutlined, ShoppingCartOutlined, VerifiedUser } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function NuestrosProceso(){
    return (
        <Box sx={{
            minHeight:'300px',
            display: 'flex',
            alignItems: 'center',
           backgroundColor:"#f7f7ff",
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
                                Nuestro proceso
                                        
                                    
                            </Typography>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    De una idea a una gran solución 
                                </Typography>
                                <Typography variant='caption'>
                                    Te acompañamos en cada etapa del proyecto para asegurar un resultado <br/> exitoso, alineado a tus objetivos.
                                    
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
                                gap:3
                            }}>
                                <Card sx={{
                                    width:"20%",
                                    height:"80%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            display:"flex",
                                            gap:"1",
                                            width:"130px",
                                        }}>
                                            <Box sx={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                backgroundColor:"#d84dff5e",
                                                borderRadius:"50%",
                                                width:"50px",
                                                height:"50px"
                                            }}>
                                                <Typography>
                                                    01
                                                </Typography>
                                            </Box>
                                            <SearchOutlined sx={{
                                                width:"40%",
                                                height:"40%",
                                                color:"#7c4dff"
                                            }}/>

                                        </Box>
                                        <Box
                                        sx={{
                                            
                                            display:"block",
                                            width:"180px",
                                            height:"130px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Descubrimiento
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Entendemos tus objetivos, analizamos tus necesidades y definimos la mejor estrategia.
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"20%",
                                    height:"80%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            display:"flex",
                                            gap:"1",
                                            width:"130px",
                                        }}>
                                            <Box sx={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                backgroundColor:"#d84dff5e",
                                                borderRadius:"50%",
                                                width:"50px",
                                                height:"50px"
                                            }}>
                                                <Typography>
                                                    02
                                                </Typography>
                                            </Box>
                                            <BrushOutlined sx={{
                                                width:"40%",
                                                height:"40%",
                                                color:"#7c4dff"
                                            }}/>

                                        </Box>
                                        <Box
                                        sx={{
                                            
                                            display:"block",
                                            width:"180px",
                                            height:"130px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Diseño
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Creamos una experiencia visual atractiva y funcional, enfocada en tus usuarios.
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"20%",
                                    height:"80%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            display:"flex",
                                            gap:"1",
                                            width:"130px",
                                        }}>
                                            <Box sx={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                backgroundColor:"#d84dff5e",
                                                borderRadius:"50%",
                                                width:"50px",
                                                height:"50px"
                                            }}>
                                                <Typography>
                                                    03
                                                </Typography>
                                            </Box>
                                            <CodeOff sx={{
                                                width:"40%",
                                                height:"40%",
                                                color:"#7c4dff"
                                            }}/>

                                        </Box>
                                        <Box
                                        sx={{
                                            
                                            display:"block",
                                            width:"180px",
                                            height:"130px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Desarrollo
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Construimos tu sitio web con tecnologias modernas, buenas prácticas y altos estandares.
                                            </Typography>
                                            
                                        </Box>
                                    </CardContent>

                                </Card>
                                <Card sx={{
                                    width:"20%",
                                    height:"80%"
                                }}>
                                    <CardContent sx={{
                                        display:"flex"
                                    }}>
                                        <Box sx={{
                                            display:"flex",
                                            gap:"1",
                                            width:"130px",
                                        }}>
                                            <Box sx={{
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                backgroundColor:"#d84dff5e",
                                                borderRadius:"50%",
                                                width:"50px",
                                                height:"50px"
                                            }}>
                                                <Typography>
                                                    04
                                                </Typography>
                                            </Box>
                                            <RocketLaunchOutlined sx={{
                                                width:"40%",
                                                height:"40%",
                                                color:"#7c4dff"
                                            }}/>

                                        </Box>
                                        <Box
                                        sx={{
                                            
                                            display:"block",
                                            width:"180px",
                                            height:"130px"
                                        }}>
                                            <Typography variant='body1' sx={{
                                                fontSize:"bold",
                                                
                                            }}>
                                                Lanzamiento
                                            </Typography>
                                               
                                            <Typography variant='sutitle1' sx={{
                                            
                                                fontSize:"13px",
                                                color:"#837f7f"
                                            }}>
                                                Publicamos tu sitio y te acompañamos en la puerta en marcha y crecimiento
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

export default NuestrosProceso
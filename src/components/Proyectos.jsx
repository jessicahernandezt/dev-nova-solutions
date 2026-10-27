import { ArrowForward, Bolt, FileOpen, Groups2, HealthAndSafety, HomeWork, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function Proyectos() {
    return (
         <Box sx={{
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            
            py: 6
        }}>
            <Container maxWidth='lg'>
                <Box 
                sx={{
                    display:"block",
                    
                 
                    
                    
                }}>
                    <Box alt="box general" sx={{
                    
                    }}>
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",

                        }}>
                            <Box sx={{
                                position:"relative",
                                zIndex:1,
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                gap:"8px"
                            }}>
                                <Box alt="text" 
                                sx={{
                                    width:"50%"

                                }}>
                                    <Typography variant='overline' sx={{
                                        
                                        fontSize:"bold"
                                    }}>
                                        Proyectos Destacados
                                        
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    justifyContent:"flex-end",
                                    
                                }}>
                                    <Button size='small'  sx={{
                                        
                                        color:"#7c4dff",
                                        padding: '4px 8px', 
                                        fontSize: '0.75rem',
                                        minWidth: '0',
                                        minHeight:"0"
                                        
                                    }}>
                                        <Typography variant='caption' sx={{
                                            fontSize:"9px"
                                        }}>
                                            Ver todos los proyectos <ArrowForward sx={{
                                                width:"18px",
                                                height:"10px"
                                            }}></ArrowForward>
                                        </Typography>
                                    </Button>

                                </Box>

                            </Box>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Soluciones reales para negocios reales
                                </Typography>
                                <Typography variant='caption'>
                                    Conoce algunos de nuestros proyectos más recientes y cómo ayudamos a nuestros clientes a alcanzar sus objetivos
                                    
                                </Typography>                                
                            </Box>

                        </Box>
                        <Box sx={{
                            marginTop:"10px"
                        }}>
                            <Box alt="cards" sx={{
                                display:"flex",
                                gap:2,
                                
                            }}>
                                <Card sx={{
                                    width:"270px",
                                    height:"280px"
                                }}>
                                    <CardMedia 
                                    component="img"
                                    src='./cardimg1.png'
                                    sx={{
                                        width:"270px",
                                        height:"100px"
                                    }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            width:"20%",
                                            height:"10%",
                                            borderColor:"#7c4dff",
                                            borderRadius:"41%",
                                            backgroundColor:"#7c4dff",
                                            color:"white",
                                            display:"flex",
                                            alignItems:"center",
                                            justifyContent:"center",
                                            fontSize:"15px"
                                        }}>
                                            web
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"14px",
                                            
                                        }}>
                                            Plataforma de gestion empresarial
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"12px"
                                        }}>
                                            Sistema completo para la administración de procesos internos
                                        </Typography>
                                        <Box sx={{
                                            width:"290px",
                                            height:"45px",
                                            gap:3,
                                        }}>
                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48"
                                                
                                            }}>react</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize: "8px",
                                                backgroundColor:"#7a7a7a48"
                                            }}>node.js</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48",
                                            }}>PostegreSQL</Button>
                                        </Box>
                                       
                                        <Button sx={{
                                            fontSize:"8px",
                                            color:"#7c4dff",
                                            gap:1

                                        }}>
                                            Ver proyecto <ArrowForward sx={{
                                                width:"9px"
                                            }} />
                                        </Button>
                                        
                                       

                                    </CardContent>
                                
                                </Card>
                                <Card sx={{
                                    width:"270px",
                                    height:"280px"
                                }}>
                                    <CardMedia 
                                    component="img"
                                    src='./Cardimg2.png'
                                    sx={{
                                        width:"270px",
                                        height:"100px"
                                    }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            width:"20%",
                                            height:"10%",
                                            borderColor:"#7c4dff",
                                            borderRadius:"41%",
                                            backgroundColor:"#7c4dff",
                                            color:"white",
                                            display:"flex",
                                            alignItems:"center",
                                            justifyContent:"center",
                                            fontSize:"15px"
                                        }}>
                                            Movil
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"14px",
                                            
                                        }}>
                                            App de reservas
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"12px"
                                        }}>
                                            Aplicacion movil para reservas de servicio y control de estado
                                        </Typography>
                                        <Box sx={{
                                            width:"290px",
                                            height:"45px",
                                            gap:3,
                                        }}>
                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48"
                                                
                                            }}>Flutter</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize: "8px",
                                                backgroundColor:"#7a7a7a48"
                                            }}>Firebase</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48",
                                            }}>node.js</Button>
                                        </Box>
                                       
                                        <Button sx={{
                                            fontSize:"8px",
                                            color:"#7c4dff",
                                            gap:1

                                        }}>
                                            Ver proyecto <ArrowForward sx={{
                                                width:"9px"
                                            }} />
                                        </Button>
                                        
                                       

                                    </CardContent>
                                
                                </Card>
                                <Card sx={{
                                    width:"270px",
                                    height:"280px"
                                }}>
                                    <CardMedia 
                                    component="img"
                                    src='./cardimg3.png'
                                    sx={{
                                        width:"270px",
                                        height:"100px"
                                    }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            width:"20%",
                                            height:"10%",
                                            borderColor:"#7c4dff",
                                            borderRadius:"41%",
                                            backgroundColor:"#7c4dff",
                                            color:"white",
                                            display:"flex",
                                            alignItems:"center",
                                            justifyContent:"center",
                                            fontSize:"15px"
                                        }}>
                                            web
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"14px",
                                            
                                        }}>
                                            Sistema de inventario
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"12px"
                                        }}>
                                            Control de productos, entradas y reportes en tiempo real.
                                        </Typography>
                                        <Box sx={{
                                            width:"290px",
                                            height:"45px",
                                            gap:3,
                                        }}>
                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48"
                                                
                                            }}>react</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize: "8px",
                                                backgroundColor:"#7a7a7a48"
                                            }}>Expres</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48",
                                            }}>MongoDB</Button>
                                        </Box>
                                       
                                        <Button sx={{
                                            fontSize:"8px",
                                            color:"#7c4dff",
                                            gap:1

                                        }}>
                                            Ver proyecto <ArrowForward sx={{
                                                width:"9px"
                                            }} />
                                        </Button>
                                        
                                       

                                    </CardContent>
                                
                                </Card>
                                <Card sx={{
                                    width:"270px",
                                    height:"280px"
                                }}>
                                    <CardMedia 
                                    component="img"
                                    src='./cardimg4.png'
                                    sx={{
                                        width:"270px",
                                        height:"100px"
                                    }}
                                    />
                                    <CardContent>
                                        <Typography sx={{
                                            width:"50%",
                                            height:"10%",
                                            borderColor:"#7c4dff",
                                            borderRadius:"45%",
                                            backgroundColor:"#7c4dff",
                                            color:"white",
                                            display:"flex",
                                            alignItems:"center",
                                            justifyContent:"center",
                                            fontSize:"15px"
                                        }}>
                                            E-commerce
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"14px",
                                            
                                        }}>
                                            Tienda en linea
                                        </Typography>
                                        <Typography sx={{
                                            fontSize:"12px"
                                        }}>
                                            Plataforma de comercio electronico con pagos en linea
                                        </Typography>
                                        <Box sx={{
                                            width:"290px",
                                            height:"45px",
                                            gap:3,
                                        }}>
                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48"
                                                
                                            }}>react</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize: "8px",
                                                backgroundColor:"#7a7a7a48"
                                            }}>node.js</Button>

                                            <Button variant='small' sx={{
                                                width:"10px",
                                                height:"29px",
                                                fontSize:"8px",
                                                backgroundColor:"#7a7a7a48",
                                            }}>PostegreSQL</Button>
                                        </Box>
                                       
                                        <Button sx={{
                                            fontSize:"8px",
                                            color:"#7c4dff",
                                            gap:1

                                        }}>
                                            Ver proyecto <ArrowForward sx={{
                                                width:"9px"
                                            }} />
                                        </Button>
                                        
                                       

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

export default Proyectos
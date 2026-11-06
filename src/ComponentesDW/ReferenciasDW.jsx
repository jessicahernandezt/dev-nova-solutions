import { AppSettingsAlt, ArrowForward, ArrowRightAlt, Bolt, Business, CodeOff, DeviceHub, Directions, HorizontalRule, Lightbulb, Monitor, Phone, RocketLaunch, Rule, ShoppingCartOutlined, VerifiedUser } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function ReferenciasDW() {
    return (
        <Box sx={{
            minHeight:'150px',
            display: 'flex',
            alignItems: 'center',
          
            py:"10px"
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box alt='box de info' sx={{ 
                        display:"block",
                        gap:10,
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
                                    Proyectos relacionados
                                    
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
                        <Box sx={{
                            display:"flex",
                        }}>

                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Casos de éxito
                                </Typography>
                                <Typography variant='caption'>
                                    Conoce algunos de los proyectos web que hemos desarrollado para nuestros clientes.                                
                                </Typography>                                
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
                                        height:"220px"
                                    }}>
                                        <CardMedia 
                                        component="img"
                                        src='./Cardimg1.png'
                                        sx={{
                                            width:"270px",
                                            height:"100px"
                                        }}
                                        />
                                        <CardContent>
                                            <Typography sx={{
                                                width:"40%",
                                                height:"5%",
                                                borderColor:"#7c4dff",
                                                borderRadius:"10%",
                                                backgroundColor:"#7c4dff59",
                                                color:"white",
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                fontSize:"11px"
                                            }}>
                                                Sitio corporativo
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"14px",
                                                
                                            }}>
                                                NovaTech
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px"
                                            }}>
                                                Sitio web para empresas de tecnologia con enfoque en servicios B2B.
                                            </Typography>
                                            
                                        
                                            
                                        

                                        </CardContent>
                                    
                                    </Card>
                                    <Card sx={{
                                        width:"270px",
                                        height:"220px"
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
                                                width:"40%",
                                                height:"5%",
                                                borderColor:"#7c4dff",
                                                borderRadius:"10%",
                                                backgroundColor:"#7c4dff59",
                                                color:"white",
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                fontSize:"11px"
                                            }}>
                                                E-commerce
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"14px",
                                                
                                            }}>
                                                Luna Store
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px"
                                            }}>
                                                Tienda en linea de moda con integración de pagos y gestión de inventario.
                                            </Typography>
                                            
                                            
                                        

                                        </CardContent>
                                    
                                    </Card>
                                    <Card sx={{
                                        width:"270px",
                                        height:"220px"
                                    }}>
                                        <CardMedia 
                                        component="img"
                                        src='./Cardimg3.png'
                                        sx={{
                                            width:"270px",
                                            height:"100px"
                                        }}
                                        />
                                        <CardContent>
                                            <Typography sx={{
                                                width:"40%",
                                                height:"5%",
                                                borderColor:"#7c4dff",
                                                borderRadius:"10%",
                                                backgroundColor:"#7c4dff59",
                                                color:"white",
                                                display:"flex",
                                                alignItems:"center",
                                                justifyContent:"center",
                                                fontSize:"11px"
                                            }}>
                                                Sistema web
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"14px",
                                                
                                            }}>
                                                GestorPro
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px"
                                            }}>
                                                Plataforma de gestión de proyectos y equiposa de trabajo.
                                            </Typography>
                                            
                                            
                                        

                                        </CardContent>
                                    
                                    </Card>
                                    
                                </Box>    

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>


    )
}

export default ReferenciasDW
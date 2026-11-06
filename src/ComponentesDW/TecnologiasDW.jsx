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

function TecnologiasDW() {
    return (
        <Box sx={{
            minHeight:'150px',
            display: 'flex',
            alignItems: 'center',
           backgroundColor: '#f7f7ff',
            py:"10px"
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box alt='box de info' sx={{ 
                        display:"flex",
                        gap:10,
                    }}>
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                        }}>
                            <Typography variant='overline' sx={{
                                        
                                fontSize:"bold"
                            }}>
                                Tecnologias para la web
                                        
                                    
                            </Typography>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Tecnologías de vanguardia
                                </Typography>
                                <Typography variant='caption'>
                                    Utilizamos herramientas modernas y confiables para crear soluciones web de alto rendimiento. 
                                    
                                </Typography>                                
                            </Box>
                        </Box>
                        
                        <Box alt="herramientas" sx={{
                            display:"flex",
                            gap:2
                        }}>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./react-icon.webp' sx={{
                                    width:"40%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        React
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./vite.webp' sx={{
                                    width:"50%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        Vite
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./node.webp' sx={{
                                    width:"50%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        Node.JS
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./express.png' sx={{
                                    width:"50%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        Express
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./mongo db.webp' sx={{
                                    width:"50%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        MongoDB
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"110px",
                                height:"100px",
                                
                            }}>
                                <CardMedia component="img" src='./postegresql.webp' sx={{
                                    width:"50%",
                                    height:"50%",
                                    display:"block",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginLeft:"auto",
                                    marginRight:"auto",
                                    marginTop:"5px"
                                }}/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginLeft:"auto",
                                        marginRight:"auto",
                                        fontSize:"14px"
                                    }}>
                                        PostegreSQL
                                    </Typography>
                                </CardContent>
                            </Card> 
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>


    )
}

export default TecnologiasDW
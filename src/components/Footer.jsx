import { ArrowForward, Bolt, Opacity, PeopleAltRounded, FileOpen, BusinessCenterOutlined, EngineeringOutlined, CasesOutlined, FavoriteOutlined, Email, EmailOutlined, Phone, PersonPinCircleOutlined, ExpandMore, Add, GitHub, LinkedIn, YouTube, Instagram } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    ImageListItem,
    Rating,
    Typography,
    TextField,
    Autocomplete,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'


function Footer(){
    return(
        <Box sx={{
           minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor:"#000",
            py: 6,
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"block",
                    gap:3
                }}>
                    <Box alt="Anuncios Parroquiales" sx={{
                        display:"flex",
                        gap:6
                    }}>
                        <Box alt="logo y redes" sx={{
                            width:"200px",
                            height:"160px"
                        }}>
                            <Box component="img" src='./img (23).png' sx={{
                                width:"100%",
                                display:"flex",
                                alignItems:"start",
                                justifyContent:"start",
                                marginRight:"10px",
                                marginLeft:"1px"
                            }}></Box>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px",
                                marginTop:"10px"
                            }}>
                                Soluciones digitales para un mejor mañana
                            </Typography>
                            <Box sx={{
                                display:"flex",
                                gap:3,
                                marginTop:"10px"
                            }}>
                                <LinkedIn sx={{
                                    color:"white"
                                }} />
                                <GitHub sx={{
                                    color:"white"
                                }} />
                                <YouTube sx={{
                                    color:"white"
                                }} />
                                <Instagram sx={{
                                    color:"white"
                                }} />
                                
                            </Box>
                        </Box>
                        <Box alt="navegacion" sx={{
                            display:"block"
                        }}>
                            <Typography sx={{
                               color:"white",
                               fontSize:"12px",
                               marginTop:"20px"
                            }}>
                                Navegacion
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px",
                                marginTop:"10px"
                            }}>
                                Inicio
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Servicios
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Quienes Somos
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Proyectos
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Tecnologias
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Clientes
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Contactos
                            </Typography>
                            
                        </Box>
                        <Box alt="navegacion" sx={{
                            display:"block"
                        }}>
                            <Typography sx={{
                               color:"white",
                               fontSize:"12px",
                               marginTop:"20px"
                            }}>
                                Servicios
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px",
                                marginTop:"10px"
                            }}>
                                Desarrollo Web
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Aplicaciones Moviles
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Desarrollo de Software
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Consultorias Tecnologicas
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Integracion de Sistemas
                            </Typography>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                            }}>
                                Soporte y Mantenimiento
                            </Typography>
                            
                            
                        </Box>
                        <Box alt="Contacto">
                            <Typography sx={{
                               color:"white",
                               fontSize:"12px",
                               marginTop:"20px"
                            }}>
                                Contactos
                            </Typography>
                            <Box sx={{
                            marginTop:"15px"
                            }}>
                                <Box sx={{
                                    display:"flex",
                                    gap:1
                                }}>
                                    <EmailOutlined sx={{
                                        color:"white"
                                    }} />
                                    <Typography sx={{
                                        fontSize:"14px",
                                        color:"#837f7f"
                                    }}>
                                        hola@devnova.com
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    display:"flex",
                                    gap:1,
                                    marginTop:"10px"
                                }}>
                                    <Phone sx={{
                                        color:"white"
                                    }} />
                                    <Typography sx={{
                                        fontSize:"14px",
                                        color:"#837f7f"
                                    }}>
                                        +52 551 234 5678
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    display:"flex",
                                    gap:1,
                                    marginTop:"10px"
                                }}>
                                    <PersonPinCircleOutlined sx={{
                                        color:"white"
                                    }} />
                                    <Typography sx={{
                                        fontSize:"14px",
                                        color:"#837f7f"
                                    }}>
                                        Ciudad de Mexico. Mexico
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                        <Box alt="Suscripcion">
                            <Typography sx={{
                               color:"white",
                               fontSize:"12px",
                               marginTop:"20px"
                            }}>
                                Suscribete a nuestro boletin
                            </Typography>
                            <Box sx={{
                                marginTop:"10px"
                            }}>
                                <TextField id="outlined-basic" label="Tu correo electronico" variant="outlined" size='small' sx={{
                                    borderColor:"white",
                                    borderWidth:"2px",
                                    backgroundColor:"#ffffff21",
                                    "& .MuiInputLabel-root": {
                                        color: "#837f7f",
                                    }   
                                }} /><Button sx={{
                                    color:"white",
                                    backgroundColor:"#7c4dff",
                                    width:"63px",
                                    height:"38px"
                                }}>
                                    <ArrowForward></ArrowForward>
                                </Button>
                            </Box>
                            <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px",
                                marginTop:"10px"
                            }}>
                                Recibe noticias, novedades y contenido util
                            </Typography>
                        </Box>

                    </Box>
                    <Box alt="parte baja" sx={{
                        display:"flex",
                        gap:20,
                        marginTop:"10px",
                        borderTop:"1px solid #837f7f4b",
                        
                    }}>
                        <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                        }}>
                            © Dev Nova Solutions. Todos los derechos reservados
                        </Typography>
                        <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                        }}>
                            Avisos de privacidad | Terminos y condiciones
                        </Typography>
                        <Typography sx={{
                                color:"#837f7f",
                                fontSize:"11px"
                        }}>
                            Innovacion hoy. Un mejor mañana
                        </Typography>
                    </Box>

                </Box>
            </Container>

        </Box>
    )
}

export default Footer
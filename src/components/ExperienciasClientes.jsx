import { ArrowForward, Bolt, Opacity, PeopleAltRounded, FileOpen, BusinessCenterOutlined, EngineeringOutlined, CasesOutlined, FavoriteOutlined } from '@mui/icons-material'
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
    Typography
} from '@mui/material'

function ExperienciasClientes(){
    return(
        <Box sx={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            
            py: 6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'block',
                    alignItems: 'center',
                        
                }}>
                    <Box alt="general">
                        <Box alt="text" sx={{
                            width:"100%"

                        }}>
                            <Typography variant='overline' sx={{
                                
                                fontSize:"bold"
                            }}>
                                Experiencias y clientes
                                
                            </Typography>

                        </Box>
                            <Box sx={{
                                position:"relative",
                                zIndex:1,
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                gap:12
                            }}>
                                <Box sx={{
                                    width:"500px",
                                }}>
                                    <Typography variant='h6' 
                                    sx={{
                                        fontSize:"bold"
                                    }}>
                                        La confianza de nuestros clientes nos impulsa
                                    </Typography>
                                    <Typography variant='caption'>
                                        Resultados que hablan y relaciones construidas con la calidad y la innovación
                                        
                                    </Typography>                                
                                </Box>
                                <Box sx={{
                                    justifyContent:"flex-end",
                                    display:"flex",
                                    gap:3
                                }}>
                                    <Box sx={{
                                        display:"flex",
                                        gap:1,
                                        marginTop:"5px"
                                    }}>
                                        <BusinessCenterOutlined sx={{
                                            color:"#7c4dff"
                                        }} />
                                        <Box sx={{
                                            display:"block",
                                            
                                        }}>
                                            <Typography sx={{
                                                fontSize:"bold"
                                            }}>
                                                5+ 
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px",
                                                color:"#837f7f"
                                            }}>
                                                Años de experiencia
                                            </Typography>
                                        </Box>
                                    
                                    </Box>
                                    <Box sx={{
                                        display:"flex",
                                        gap:1,
                                        marginTop:"5px"
                                    }}>
                                        <EngineeringOutlined sx={{
                                            color:"#7c4dff"
                                        }} />
                                        <Box sx={{
                                            display:"block",
                                            
                                        }}>
                                            <Typography sx={{
                                                fontSize:"bold"
                                            }}>
                                                50+ 
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px",
                                                color:"#837f7f"
                                            }}>
                                                Clientes Complacidos
                                            </Typography>
                                        </Box>
                                    
                                    </Box>
                                    <Box sx={{
                                        display:"flex",
                                        gap:1,
                                        marginTop:"5px"
                                    }}>
                                        <CasesOutlined sx={{
                                            color:"#7c4dff"
                                        }} />
                                        <Box sx={{
                                            display:"block",
                                            
                                        }}>
                                            <Typography sx={{
                                                fontSize:"bold"
                                            }}>
                                                30+ 
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px",
                                                color:"#837f7f"
                                            }}>
                                                Casos exitosos
                                            </Typography>
                                        </Box>
                                    
                                    </Box>
                                    <Box sx={{
                                        display:"flex",
                                        gap:1,
                                        marginTop:"5px"
                                    }}>
                                        <FavoriteOutlined sx={{
                                            color:"#7c4dff"
                                        }} />
                                        <Box sx={{
                                            display:"block",
                                            
                                        }}>
                                            <Typography sx={{
                                                fontSize:"bold"
                                            }}>
                                                50+ 
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:"12px",
                                                color:"#837f7f"
                                            }}>
                                                Proyectos terminados
                                            </Typography>
                                        </Box>
                                    
                                    </Box>

                                </Box>

                            </Box>


                    </Box>
                    <Box sx={{
                        display:"flex"
                    }}>
                        <Box alt="comentario" sx={{
                            display:"flex",
                            width:"600px",
                            height:"auto",
                            gap:2
                        }}>
                            <Card sx={{
                                width:"50%",
                                height:"85%",
                                display:"flex"
                            }}>
                                <Avatar sx={{
                                    width:"56px",
                                    height:"56px",
                                    marginTop:"10px",
                                    display:"flex",
                                    marginLeft:"5px",
                                    marginRight:"auto"
                                }} src='./Laura-Villarreal-Martínezxd.webp'/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        fontSize:"11px",
                                        color:"#837f7f"
                                    }}>
                                        "El equipo de DevNova entendio perfectamente nuestras necesidades y entregó un producto de gran valor. Altamente recomendado"
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"12px",
                                        marginTop:"5px"
                                        
                                    }}>
                                        Laura Martinez
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"10px",
                                        color:"#837f7f"
                                    }}>
                                        Directora de Marketing. StarUp
                                    </Typography>
                                    <Rating value={5}  readOnly>
                                        
                                    </Rating>

                                </CardContent>
                            </Card>
                            <Card sx={{
                                width:"50%",
                                height:"85%",
                                display:"flex"
                            }}>
                                <Avatar sx={{
                                    width:"56px",
                                    height:"56px",
                                    marginTop:"10px",
                                    display:"flex",
                                    marginLeft:"5px",
                                    marginRight:"auto"
                                }} src='./convicted-venezuelan-terrorist-ilich-ramirez-sanchez-aka-carlos-waits-28-november-2000-at.webp'/>
                                <CardContent sx={{
                                    
                                }}>
                                    <Typography sx={{
                                        fontSize:"11px",
                                        color:"#837f7f"
                                    }}>
                                        "Soluciones creativas, comunicacion efectiva y un gran dominio tecnico. Sin duda los volveria a contratar para futuros proyectos"
                                    </Typography>

                                    <Typography sx={{
                                        fontSize:"12px",
                                        marginTop:"5px"
                                        
                                    }}>
                                        Carlos Ramirez
                                    </Typography>
                                    <Typography sx={{
                                        fontSize:"10px",
                                        color:"#837f7f"
                                    }}>
                                        CTO. Empresa de Retal
                                    </Typography>
                                    <Rating value={5}  readOnly>
                                        
                                    </Rating>

                                </CardContent>
                            </Card>
                        </Box>
                        <Box alt="Marcas" sx={{
                            width:"430px"
                        }}>
                            <Typography sx={{
                                fontSize:"12px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                color:"#837f7f",
                                marginLeft:"15px"
                            }}>
                                Empresas que han confiado en nosotros.
                            </Typography>
                            <Box alt="imagenes" sx={{
                                display:"block",
                                grid:"initial",
                                justifyContent:"center",
                                alignItems:"center",
                                marginTop:"1px",
                            }}>
                                <Box sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    gap:7,
                                    marginTop:"2px",
                                    marginLeft:"60px",
                                    marginRight:"auto"
                                }}>
                                    <Box component="img" src='./bbva_800.webp' sx={{
                                        width:"20%",
                                        height:"24%"
                                    }}></Box>
                                    <Box component="img" src='./cinepolis.webp' sx={{
                                        width:"20%",
                                        height:"24%"
                                    }}></Box>
                                    <Box component="img" src='./Bimbo.webp' sx={{
                                        width:"20%",
                                        height:"24%"
                                    }}></Box>
                                </Box>
                                <Box sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    gap:7,
                                    marginTop:"1px",
                                    marginLeft:"60px",
                                    marginRight:"auto"
                                }}>
                                    <Box component="img" src='./telcel.webp' sx={{
                                        width:"20%",
                                        height:"24%",
                                    }}></Box>
                                    <Box component="img" src='./AWS.webp' sx={{
                                        width:"20%",
                                        height:"24%"
                                    }}></Box>
                                    <Box component="img" src='./Microsoft-Logo-600x338.webp' sx={{
                                        width:"20%",
                                        height:"24%"
                                    }}></Box>
                                </Box>
                                
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

    )
}

export default ExperienciasClientes
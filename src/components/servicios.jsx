import { AppSettingsAlt, ArrowForward, ArrowRightAlt, Bolt, CodeOff, DeviceHub, Directions, HorizontalRule, Lightbulb, Monitor, Phone, Rule, VerifiedUser } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function Servicios(){
    return (
        <Box sx={{
            minHeight:'520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}>
            <Container maxWidth="lg" sx={{
                
            }}>
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
                                        <ArrowRightAlt sx={{color:"#7c4dff",}}></ArrowRightAlt> Nuestros servicios
                                        
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    justifyContent:"flex-end",
                                    
                                }}>
                                    <Button size='small'  sx={{
                                        
                                        color:"#7c4dff",
                                        padding: '4px 8px', 
                                        fontSize: '0.75rem',
                                        minWidth: 'auto'
                                        
                                    }}>
                                        <Typography variant='caption' >
                                            Ver todos nuestros servicios <ArrowForward sx={{
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
                                    Soluciones tecnologicas para cada necesidad
                                </Typography>
                                <Typography variant='caption'>
                                    ofrecemos servicios de desarrollo de software, aplicaciones web y movil, consultoria <br/> y soporte, para ayudarte a optimizar los procesos y alcanzar tus objetivos
                                    
                                </Typography>                                
                            </Box>

                        </Box>
                        <Box sx={{
                           display:"grid",
                           gap:2,
                           width:"100%",
                           alignItems:"center",
                           
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff"
                                        }}>
                                        <Monitor sx={{
                                            width:"70%",
                                            height:"90%",
                                            color:"#7c4dff",
                                            
                                           
                                        }}></Monitor>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff"
                                        }}>
                                        <AppSettingsAlt sx={{
                                            width:"70%",
                                            height:"90%",
                                            color:"#7c4dff",
                                        }}>

                                        </AppSettingsAlt>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff"
                                        }}>
                                        <CodeOff sx={{
                                            width:"70%",
                                            height:"90%",
                                            color:"#7c4dff",
                                        }}>

                                        </CodeOff>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
                                            </Box>


                                            
                                        </Box>
                                        

                                        

                                    </CardContent>

                                </Card>
                            </Box>
                            <Box 
                            sx={{
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff"
                                        }}>
                                        <Lightbulb sx={
                                            {
                                            width:"70%",
                                            height:"90%",
                                            color:"#7c4dff",
                                            }
                                        }></Lightbulb>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff"
                                        }}>
                                        <DeviceHub sx={{
                                            width:"70%",
                                            height:"90%",
                                            color:"#7c4dff",
                                        }}></DeviceHub>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
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
                                            borderRadius:"50%",
                                            borderColor:"#7c4dff",
                                            width:"50%",
                                            justifyItems:"center",
                                            alignItems:"center"
                                        }}>
                                        <VerifiedUser sx={{
                                            width:"70%",
                                            height:"70%",
                                            color:"#7c4dff",
                                        }}></VerifiedUser>
                                        </Box>
                                        <Box
                                        sx={{
                                            
                                        }}>
                                            <Typography variant='overline' sx={{
                                                fontSize:"bold"
                                            }}>
                                                Desarrollo web
                                            </Typography>
                                            <Box>
                                                <Typography variant='caption' sx={{
                                                lineHeight:"1.1",
                                                fontSize:"10px",
                                                color:"#837f7f"
                                                }}>
                                                    Sitios y plataformas web modernas, seguras y escalables
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                
                                            }}>
                                                <Button size='small' sx={{
                                                    minHeight:"0",
                                                    minWidth:"0",
                                                    color:"#7c4dff",
                                                    
                                                }}>
                                                    <Typography variant='caption' sx={{
                                                        fontSize:"9px"
                                                    }}>
                                                        Ver más
                                                    </Typography><ArrowForward sx={{
                                                        width:"9px",
                                                        height:"9px"
                                                    }}></ArrowForward>
                                                </Button>
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

export default Servicios
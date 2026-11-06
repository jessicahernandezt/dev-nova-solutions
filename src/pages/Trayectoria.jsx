import{Box,Button,Card,colors,Container,Typography} from '@mui/material';

function Trayectoria(){
    return(
      <Box 
        sx={{
            
            display:"flex",
            alignItems:"center",
            backgroundColor:"#f7f7ff",
            
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <HorizontalRuleIcon sx={{
                        color:"#7c4dff"
                    }}/>

                    <Typography sx={{
                        color:"#000",
                        fontWeight:"bold"
                    }}>
                        Nuestra Trayectoria
                    </Typography>
                </Box>
                
                    <Typography  variant="h5"sx={{
                        color:"#000",
                        fontWeight:"bold"
                    }}> Talento que hace la diferencia </Typography>
                    
                    <Box sx={{
                        display:"flex",
                        alignItems:"center"
                    }}>
                        <Typography variant='subtitle2' sx={{
                        color:"#000",
                        fontWeight:"light"
                        }}>
                            Somos un equipo multidisciplinario de desarrolladores,
                            <br></br>
                            diseñadores,consultores y estrategias que comparten
                            <br></br>
                            una misma pasion:crear soluciones digitales que
                            <br></br>
                            impulsen el crecimiento de nuestro clientes
                        </Typography>
                    </Box>

                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:1

                    }}>
                        <Button variant='contained'sx={{
                            backgroundColor:"#7c4dff",

                        }}>Conoce nuestro equipo →</Button>
                    </Box>

                    <Card sx={{
                        width:"22%",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        ml:45,
                        mt:-19
                    }}>
                        <Box sx={{
                            display:"flex",
                            width:"100%",
                            gap:3
                        }}>
                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:4
                            }}>
                            <PeopleIcon />
                            </Box>

                            <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"bold"
                            }}>Laura Martinez</Typography>

                          

                            
                        </Box>
                          <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"light"
                            }}>Directora de Marketing</Typography>

                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:-2
                            }}>
                                <FactoryIcon/>
                                <AttractionsIcon/>

                            </Box>


                    </Card>

                       <Card sx={{
                        width:"22%",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        ml:80,
                        mt:-9
                    }}>
                        <Box sx={{
                            display:"flex",
                            width:"100%",
                            gap:3
                        }}>
                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:4
                            }}>
                            <PeopleIcon />
                            </Box>

                            <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"bold"
                            }}>Carlos Ramirez</Typography>

                          

                            
                        </Box>
                          <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"light"
                            }}>CTO,Desarrollo</Typography>

                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:-2
                            }}>
                                <DisplaySettingsIcon/>
                                <WebhookIcon/>

                            </Box>


                    </Card>
                    
                     <Card sx={{
                        width:"19%",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        ml:115,
                        mt:-9
                        
                    }}>
                        <Box sx={{
                            display:"flex",
                            width:"100%",
                            gap:3
                        }}>
                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:4
                            }}>
                            <PeopleIcon />
                            </Box>

                            <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"bold"
                            }}>Carlos Ramirez</Typography>

                          

                            
                        </Box>
                          <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"light"
                            }}>CTO,Desarrollo</Typography>

                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:-2
                            }}>
                                <FlutterDashIcon/>
                                <AccessTimeFilledIcon/>

                            </Box>


                    </Card>

                     <Card sx={{
                        width:"22%",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        ml:144,
                        mt:-9
                        
                    }}>
                        <Box sx={{
                            display:"flex",
                            width:"100%",
                            gap:3
                        }}>
                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:4
                            }}>
                            <PeopleIcon />
                            </Box>

                            <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"bold"
                            }}>Carlos Ramirez</Typography>

                          

                            
                        </Box>
                          <Typography sx={{
                                display:"flex",
                                color:"#000",
                                fontWeight:"light"
                            }}>CTO,Desarrollo</Typography>

                            <Box sx={{
                                display:"flex",
                                alignItems:"center",
                                gap:2,
                                ml:-2
                            }}>
                                <FlutterDashIcon/>
                                <AccessTimeFilledIcon/>

                            </Box>


                    </Card>


                     
                








            </Container>
        </Box>


    )
}

export default Trayectoria
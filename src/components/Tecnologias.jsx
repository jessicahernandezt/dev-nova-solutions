

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

function Tecnologias(){
    return (
        <Box sx={{
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: "10px"
        }}>
            <Container maxWidth="lg">
                <Box alt="general">
                    <Box alt="text">
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
                                    Tecnologias
                                    
                                </Typography>

                            </Box>
                            <Box sx={{
                                justifyContent:"flex-end",
                                
                            }}>
                                
                                    <Typography variant='caption' sx={{
                                        fontSize:"12px",
                                        color:"#837f7f"
                                    }}>
                                        Utilizamos tecnologias modernas y confiables para desarrollar soluciones <br/> escalables, seguras y de alto rendimiento 
                                    </Typography>
                                

                            </Box>

                        </Box>
                        <Box>
                            <Typography variant='h5' 
                            sx={{
                                    fontSize:"bold"
                            }}>
                                Herramientas que hacen posibles grandes ideas.
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
                            <CardMedia component="img" src='public/node.webp' sx={{
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
                            <CardMedia component="img" src='./postegredb.webp' sx={{
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

                        <Card sx={{
                            width:"110px",
                            height:"100px",
                            
                        }}>
                            <CardMedia component="img" src='./git.webp' sx={{
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
                                    Git
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            width:"110px",
                            height:"100px",
                            
                        }}>
                            <CardMedia component="img" src='./AWS.webp' sx={{
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
                                    AWS
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            width:"110px",
                            height:"100px",
                            
                        }}>
                            <CardMedia component="img" src='./Flutter.webp' sx={{
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
                                    Flutter
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            width:"110px",
                            height:"100px",
                            
                        }}>
                            <CardMedia component="img" src='./Python.webp' sx={{
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
                                    Python
                                </Typography>
                            </CardContent>
                        </Card>
                        
                    </Box>
                    


                </Box>
            </Container>
        </Box>
    )
}

export default Tecnologias

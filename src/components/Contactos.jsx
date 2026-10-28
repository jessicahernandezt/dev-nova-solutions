import { ArrowForward, Bolt, Opacity, PeopleAltRounded, FileOpen, BusinessCenterOutlined, EngineeringOutlined, CasesOutlined, FavoriteOutlined, Email, EmailOutlined, Phone, PersonPinCircleOutlined, ExpandMore, Add } from '@mui/icons-material'
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

function Contactos(){
    return(
        <Box sx={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            
            py: 6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    gap:3
                }}>
                    <Box alt="Text y contactos" sx={{
                        display:"block",
                        width:"300px",
                        height:"200px"
                    }}>
                        <Typography variant='h6' sx={{
                            fontSize:"bold"
                        }}>
                            ¿Hablamos?
                        </Typography>
                        <Typography sx={{
                            color:"#837f7f",
                            fontSize:"12px"
                        }}>
                            Cuentanos sobre tu proyecto. Estamos listos para ayudarte a hacerlos realidad 
                        </Typography>
                        <Box sx={{
                            marginTop:"15px"
                        }}>
                            <Box sx={{
                                display:"flex",
                                gap:1
                            }}>
                                <EmailOutlined sx={{
                                    color:"#7c4dff"
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
                                    color:"#7c4dff"
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
                                    color:"#7c4dff"
                                }} />
                                <Typography sx={{
                                    fontSize:"14px",
                                    color:"#837f7f"
                                }}>
                                    hola@devnova.com
                                </Typography>

                            </Box>
                        </Box>
                    </Box>
                    <Box alt="Formulario" sx={{
                        width:"380px",
                        height:"200px",
                        marginTop:"20px"
                    }}>
                        <Box sx={{
                            display:"flex",
                            gap:1,
                            marginTop:"20px"
                        }}>
                            <TextField id="outlined-basic" label="Nombre Completo" variant="outlined" size='small' sx={{
                                
                            }}>

                            </TextField>
                            <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" size='small' sx={{
                                
                            }}>

                            </TextField>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            gap:1,
                            marginTop:"20px"
                        }}>
                            <TextField id="outlined-basic" label="Tipo de proyecto" variant="outlined" size='small'>

                            </TextField>
                            <TextField id="outlined-basic" label="Mensaje" multiline rows={4}>

                            </TextField>
                            
                        </Box>
                        <Button  sx={{
                            color:"white",
                            backgroundColor:"#7c4dff",
                            fontSize:"9px",
                            width:"170px",
                            height:"30px",
                            gap:1
                        }}>
                            Enviar mensaje <ArrowForward sx={{
                                width:"15px",
                                height:"15px"
                            }} />
                        </Button>
                    </Box>
                    <Box alt="Preguntas frecuentes" sx={{
                        width:"280px",
                        height:"200px",
                        
                    }}>
                        <Typography sx={{
                            justifyContent:"center",
                            alignItems:"center",
                            fontSize:"15px",
                            marginTop:"30px"
                        }}>
                            Preguntas frecuentes
                        </Typography>
                        <Box sx={{
                            marginTop:"5px"
                        }}>
                            <Accordion sx={{
                                
                            }}>
                                <AccordionSummary >
                                    <Typography component="span" sx={{
                                        fontSize:"12px",
                                        
                                    }} >
                                        Cuanto tiempo tarda un proyecto
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    fontSize:"12px",
                                    
                                }}>
                                    3-6 Meses dependiendo del tipo de proyecto.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{
                                
                            }}>
                                <AccordionSummary >
                                    <Typography component="span" sx={{
                                        fontSize:"12px"
                                    }} >
                                        ¿Que tecnologias usan?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    fontSize:"12px"
                                }}> 
                                    React, node.js, Mongodb, PostegreSQL, Express, Python, por mencionar algunas.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{
                                
                            }}>
                                <AccordionSummary sx={{
                                    
                                }}>
                                    <Typography component="span" sx={{
                                        fontSize:"12px"
                                    }}>
                                        ¿Ofrecen mantenimineto despues del lanzamiento?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    fontSize:"12px"
                                }}>
                                    Si. Si usted lo necesita nos podemos encargar del mantenimineto si realiza un contrato.
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{
                                
                            }}> 
                                <AccordionSummary sx={{
                                    
                                }}>
                                    <Typography component="span" sx={{
                                        fontSize:"12px"
                                    }} >
                                        ¿Trabajan con empresas y pymes?
                                    </Typography>

                                </AccordionSummary>
                                <AccordionDetails sx={{
                                    fontSize:"12px"
                                }}>
                                    Si. Trabajamos con todo tipo de empresas, sean pequeñas o grandes
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                    <Box alt="Imagen" sx={{
                        marginTop:"80px"
                    }}>
                        <Box component="img" src='./img (22).png' sx={{
                            width:"200px",
                            height:"180px"
                        }}>

                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Contactos
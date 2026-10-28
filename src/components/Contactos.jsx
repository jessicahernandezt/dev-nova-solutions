import { ArrowForward, Bolt, Opacity, PeopleAltRounded, FileOpen, BusinessCenterOutlined, EngineeringOutlined, CasesOutlined, FavoriteOutlined, Email, EmailOutlined, Phone, PersonPinCircleOutlined } from '@mui/icons-material'
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
    Autocomplete
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
                        <Button>
                            hoa
                        </Button>
                    </Box>
                    <Box alt="Preguntas frecuentes"></Box>
                    <Box alt="Imagen"></Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Contactos
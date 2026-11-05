import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CardContent from '@mui/material/CardContent'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import PhoneIcon from '@mui/icons-material/Phone'

import {Box, 
    Button, 
    Container,
    Typography,
    Card,
    CardActions,
    CardMedia,
    Chip,
    TextField} from '@mui/material'

function Contacto_y_preguntas_frecuentes() {
    return(
        <Box sx={{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#F8F5FA',
                py:6}}>
            <Container >
                <Box>
                    <Box sx={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap:'1%'
                                }}>

                        <Box sx={{width:"25%"}}>
                        
                            <Box>
                                <Typography sx={{
                                            fontWeight:'bold',
                                            fontSize:'20px',}}>
                                    <HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>¿Hablamos?
                                </Typography>
                            </Box>
                            <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    color: "grey",
                                    fontSize:"13px"}}>
                                Cuéntanos sobre tu proyecto. Estamos listos para ayudarte a hacerlo realidad   
                            </Typography>
                            
                            <Box sx={{py:"10px", }}>
                                <Box sx={{display:"flex", alignItems:"center", gap:"2%"}}>
                                    <Avatar><MailIcon sx={{color:'#7c4dff'}}></MailIcon></Avatar>
                                    <Typography sx={{color:"grey", fontSize:"14px"}}>hola@devnova.com</Typography>
                                </Box>
                                <Box sx={{display:"flex", alignItems:"center", gap:"2%"}}>
                                    <Avatar><LocationPinIcon sx={{color:'#7c4dff'}}></LocationPinIcon></Avatar>
                                    <Typography sx={{color:"grey", fontSize:"14px"}}>+52 55 1234 5678</Typography>
                                </Box>
                                <Box sx={{display:"flex", alignItems:"center", gap:"2%"}}>
                                    <Avatar><PhoneIcon sx={{color:'#7c4dff'}}></PhoneIcon></Avatar>
                                    <Typography sx={{color:"grey", fontSize:"14px"}}>Ciudad de Mexico, Mexico</Typography>
                                </Box>
                            </Box>
                         
                    
                        </Box>
                        <Box sx={{width:"45%", display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'top-center',
                                backgroundColor:'white',
                                p:'1%',
                                borderRadius:'10px'}} >
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width:'50%',
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{fontSize:'13px'}}>Nombre completo</Typography>
                                <TextField label="Tu nombre" sx={{
                                                                                    width: '100%',
                                                                                    '& .MuiInputBase-input': {
                                                                                        fontSize: '13px'
                                                                                    },
                                                                                    '& .MuiInputLabel-root': {
                                                                                        fontSize: '13px'
                                                                                    }
                                                                                }}></TextField>
                                <Typography sx={{fontSize:'13px'}}>Tipo de proyecto</Typography>
                                <TextField select label="Selecciona una opcion" sx={{
                                                                                    width: '100%',
                                                                                    '& .MuiInputBase-input': {
                                                                                        fontSize: '13px'
                                                                                    },
                                                                                    '& .MuiInputLabel-root': {
                                                                                        fontSize: '13px'
                                                                                    }
                                                                                }}></TextField>
                                <Button>Enviar mensaje <ArrowForward></ArrowForward></Button>
                            </Box>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width:'50%',
                                    alignItems: 'flex-start'}}>
                                <Typography sx={{fontSize:'13px'}}>Correo electronico</Typography>
                                <TextField label="@" sx={{
                                                                                    width: '100%',
                                                                                    '& .MuiInputBase-input': {
                                                                                        fontSize: '13px'
                                                                                    },
                                                                                    '& .MuiInputLabel-root': {
                                                                                        fontSize: '13px'
                                                                                    }
                                                                                }}></TextField>
                                <Typography sx={{fontSize:'13px'}}>Mensaje</Typography>
                                <TextField label="Cuentanos sobre tu proyecto" sx={{
                                                                                    width: '100%',
                                                                                    '& .MuiInputBase-input': {
                                                                                        fontSize: '13px'
                                                                                    },
                                                                                    '& .MuiInputLabel-root': {
                                                                                        fontSize: '13px'
                                                                                    }
                                                                                }}></TextField>

                            </Box>
                        </Box>
                        <Box sx={{
                            width: "45%",
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            backgroundColor: 'white',
                            p: '1%',
                            borderRadius: '10px'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                alignItems: 'flex-start'
                            }}>
                                <Typography>Preguntas frecuentes</Typography>

                                <Button sx={{
                                    width: '100%',
                                    border: '1px solid #010003',
                                    borderRadius:'3',
                                    fontSize: '11px',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left'
                                }}>
                                    ¿Cuánto tiempo tarda un proyecto?
                                </Button>

                                <Button sx={{
                                    width: '100%',
                                    border: '1px solid #010003',
                                    borderRadius:'3',
                                    fontSize: '11px',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left'
                                }}>
                                    ¿Qué tecnologías utilizan?
                                </Button>

                                <Button sx={{
                                    width: '100%',
                                    border: '1px solid #010003',
                                    borderRadius:'3',
                                    fontSize: '11px',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left'
                                }}>
                                    ¿Ofrecen soporte después del lanzamiento?
                                </Button>

                                <Button sx={{
                                    width: '100%',
                                    border: '1px solid #010003',
                                    borderRadius:'3',
                                    fontSize: '11px',
                                    justifyContent: 'flex-start',
                                    textAlign: 'left'
                                }}>
                                    ¿Trabajan con empresas y pymes?
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{width:"25%"}}>

                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        )

}
export default Contacto_y_preguntas_frecuentes
import{Box,Button,Card,colors,Container,Typography} from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PeopleIcon from '@mui/icons-material/People';
import HighlightIcon from '@mui/icons-material/Highlight';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Valores(){
    return(
        <Box
        sx={{
            minHeight:"520px",
            display:"flex",
            alignItems:"center",
            backgroundColor:"#f7f7ff",
            py:6
        }}>
            <Container maxWidth="lg" >
            <Box
            sx={{
                display:"flex",
                alignItems:"center"
            }}>
                <HorizontalRuleIcon
                sx={{
                    color:"#7c4dff"
                }}/>

                <Typography sx={{
                    color:"#000",
                    fontWeight:"bold"
                }}>
                    Nuestros Valores
                </Typography>

            </Box>

            <Typography variant='h5'sx={{
                color:"#000",
                fontWeight:"bold",
            }}> Lo que nos define</Typography>

            <Box sx={{
                display:"flex",
                alignItems:"center"
            }}>
                <Typography variant='subtitle2' sx={{
                    color:"#000",
                    fontWeight:"light"

                }}>
                    Nuestros valores son la base de cada proyecto y cada logro
                </Typography>
            </Box>

            <Card sx={{
                width:"25%"
            }}>
                <Box sx={{
                    display:"flex",
                    gap:2
                }}>
                    <Typography sx={{
                        color:"#7c4dff"
                    }}>
                        <PeopleIcon/>
                    </Typography>

                    <Box sx={{
                        gap:3
                    }}>
                        <Typography
                        sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"bold"
                        }}>Orientada al cliente</Typography>

                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"light"
                        }}>
                            Escuchamos entendimos
                            <br></br>
                            y nos comprometemos con
                            <br></br>
                            sus objetivos
                        </Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{
                width:"25%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                ml:35,
                mt:-12,
                
            }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    gap:2
                }}>
                    <Typography sx={{
                        color:"#7c4dff"
                    }}>
                        <HighlightIcon/>

                    </Typography>

                    <Box sx={{
                        gap:3
                    }}>
                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"bold"

                        }}> Innovacion constante</Typography>

                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"light"
                        }}>
                            Exploramos nuevas
                            <br></br>
                            tecnologias y mejoras 
                            <br></br>
                            formas de crear valor

                        </Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{
                width:"25%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                ml:70,
                mt:-12
            }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    gap:2
                }}>
                    <Typography sx={{
                        color:"#7c4dff"
                    }}>
                        <ThumbUpAltIcon/>

                    </Typography>

                    <Box sx={{
                       gap:3                      
                    }}>
                        <Typography sx={{
                        display:"flex",
                        color:"#000",
                        fontWeight:"bold"  
                        }}> Calidad y compromiso</Typography>

                        <Typography sx={{
                        display:"flex",
                        color:"#000",
                        fontWeight:"light"  
                        }}>
                            Cuidamos cada detalle 
                            <br></br>
                            para entregar soluciones
                            <br></br>
                            confiables y duraderas
                        </Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{
                width:"25%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                ml:105,
                mt:-12
            }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    gap:2
                }}>
                    <Typography sx={{
                        color:"#7c4dff"
                    }}>
                        <FavoriteIcon/>

                    </Typography>

                    <Box sx={{
                        gap:3
                    }}>
                        <Typography sx={{
                        display:"flex",
                        color:"#000",
                        fontWeight:"bold"  
                            
                        }}> Trabajo en equipo</Typography>

                        <Typography sx={{
                        display:"flex",
                        color:"#000",
                        fontWeight:"light"  
                        }}>
                            Creamos el talento
                            <br></br>
                            colectivo y en la colaboracion
                            <br></br>
                            para lograr 
                        </Typography>
                    </Box>
                </Box>
            </Card>










            </Container>
        </Box>
    )


}

export default Valores
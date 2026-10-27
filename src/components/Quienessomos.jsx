import { ArrowForward, Bolt, FileOpen, Groups2, HealthAndSafety, HomeWork, Opacity, PeopleAltRounded } from '@mui/icons-material'
import { StarPurple500 } from '@mui/icons-material'

import {
    Box,
    Button,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function QuienesSomos() {
    return (
        <Box sx={{
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: "10px"
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:6
                }}>
                    <Box alt="texto" sx={{
                        width:"60%"
                    }}>
                        <Typography variant='overline' sx={{
                            fontSize:"bold"
                        }}>
                            Quiénes somos
                        </Typography>

                        <Typography variant='h5' sx={{
                            fontSize:"bold"
                        }}>
                            Un equipo que convierte ideas en impacto
                        </Typography>

                        <Typography variant='subtittle' sx={{
                            marginTop:"15px",
                            fontSize:"14px",
                            color:"#837f7f"
                        }}>
                            En Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnologia y la innovación. Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real
                        </Typography>

                        <Box sx={{
                            display:"flex",
                            marginTop:"15px",
                        }}>
                            <Button variant='contained' size='small' sx={{
                                
                                backgroundColor:"#7c4dff",
                                fontSize:"12px",
                                width:"60%",
                                fontSize:"10px"
                                
                            }}>
                                conoce mas sobre nosotros<ArrowForward></ArrowForward>
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        width:"49%",
                        height:"55%",
                        display:"flex",
                        justifyContent:"flex-end",
                        alignItems:"flex-end"
                        
                    }
                    }>
                        
                        <Box component="img" src='./img (1).png' sx={{
                            width:"60%",
                            height:"35%",
                            borderRadius:"10%"
                            
                            
                        }}>
                            

                        </Box>
                    </Box>
                    
                    <Box alt="iconos" 
                    sx={{
                        alignItems:"flex-start",
                        width:"25%",
                        
                    }}>
                        <Box sx={{
                           display:"flex" ,
                           gap:1
                        }}>
                            <HomeWork sx={
                                {
                                    color:"#7c4dff",
                                    border:"#7c4dff44"
                                }
                            } />
                            <Box sx={{
                                display:"block",
                                
                            }}>
                                <Typography sx={{
                                    fontSize:"bold"
                                }}>5+ </Typography>
                                <Typography sx={{
                                    fontSize:"12px",
                                    color:"#837f7f"
                                }}>años de experiencia</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            gap:1,
                            marginTop:"5px"
                        }}>
                            <FileOpen sx={{
                                color:"#7c4dff",
                            }} />
                            <Box sx={{
                                display:"block",
                                
                            }}>
                                <Typography sx={{
                                    fontSize:"bold"
                                }}>50+ </Typography>
                                <Typography sx={{
                                    fontSize:"12px",
                                    color:"#837f7f"
                                }}>Proyectos terminados</Typography>
                            </Box>

                        </Box>
                        <Box sx={{
                            display:"flex",
                            gap:1,
                            marginTop:"5px"
                        }}>
                            <Groups2 sx={{
                                color:"#7c4dff",
                            }} />
                            <Box sx={{
                                display:"block",
                                
                            }}>
                                <Typography sx={{
                                    fontSize:"bold"
                                }}>30+ </Typography>
                                <Typography sx={{
                                    fontSize:"12px",
                                    color:"#837f7f"
                                }}>Clientes satisfechos</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display:"flex",
                            gap:1,
                            marginTop:"5px"
                        }}>
                            <HealthAndSafety sx={{
                                color:"#7c4dff",
                            }} />
                            <Box sx={{
                                display:"block",
                                
                            }}>
                                <Typography sx={{
                                    fontSize:"bold",
                                    fontSize:"14px"
                                }}>Talento Multidisciplinario </Typography>
                                <Typography sx={{
                                    fontSize:"12px",
                                    color:"#837f7f"
                                }}>Desarrolladores, diseñadores y estrategias </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default QuienesSomos
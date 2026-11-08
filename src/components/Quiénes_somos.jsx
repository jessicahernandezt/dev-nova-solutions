

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import GradeIcon from '@mui/icons-material/Grade'
import Avatar from '@mui/material/Avatar'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import {Box, 
    Button, 
    Container,
    Typography,
    Card,
    CardContent,

    } from '@mui/material'

function Quiénes_somos() {   
    return(
        <Box sx={{
            minHeight: '1px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F5FA',
            py: 6

        }}>
            <Container>
                <Box >
                    <Box sx={{width:'60%'}}>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    fontWeight:'bold',
                                    alignItems: "center",
                                    }}><HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>Testimonios destacados</Typography>
                        <Typography sx={{
                            fontWeight:'bold',
                            fontSize:'25px',}}>
                            Lo que dicen nuestros clientes
                        </Typography>
                        <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    color:'gray'}}>
                            Sus palabras reflejan nuestro compromiso, la calidad de nuestro trabajo y el impacto real que generamos   
                         </Typography>
                         
                    
                    </Box>
                    
                    <Box sx={{width:"100%",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2}}>
                        <Box sx={{width:"25%"}}>
                            <Card>
                                
                                <CardContent>
                                    <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                            </Box>
                                    <Typography sx={{
                                            fontSize: "14px",
                                            color: "gray"
                                        }}>
                                            "Dev nova solucions superó nuestras expectativas, Su equipo entiende el negocio y propone soluciones innovadoras que generan resultados reales."
                                    </Typography>
                                    <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}>
                                        <Avatar sx={{
                                        width: 50,
                                        height: 50,
                                        flexShrink: 0
                                        }} src='public/images.jpg' />

                                        <Box>
                                        

                                            <Typography sx={{
                                                fontWeight: "bold",
                                                fontSize: "12px",
                                                mt: 1
                                            }}>
                                                Laura Martinez
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "12px",
                                                color: "gray"
                                            }}>
                                                Directora de marketing. Startup
                                            </Typography>

                                            
                                        </Box>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:"25%"}}>
                            <Card>
                                
                                <CardContent>
                                    <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                            </Box>
                                    <Typography sx={{
                                            fontSize: "14px",
                                            color: "gray"
                                        }}>
                                            "Dev nova solucions superó nuestras expectativas, Su equipo entiende el negocio y propone soluciones innovadoras que generan resultados reales."
                                    </Typography>
                                    <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}>
                                        <Avatar sx={{
                                        width: 50,
                                        height: 50,
                                        flexShrink: 0
                                        }} src='public/images.jpg' />

                                        <Box>
                                        

                                            <Typography sx={{
                                                fontWeight: "bold",
                                                fontSize: "12px",
                                                mt: 1
                                            }}>
                                                Laura Martinez
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "12px",
                                                color: "gray"
                                            }}>
                                                Directora de marketing. Startup
                                            </Typography>

                                            
                                        </Box>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:"25%"}}>
                            <Card>
                                
                                <CardContent>
                                    <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                            </Box>
                                    <Typography sx={{
                                            fontSize: "14px",
                                            color: "gray"
                                        }}>
                                            "Dev nova solucions superó nuestras expectativas, Su equipo entiende el negocio y propone soluciones innovadoras que generan resultados reales."
                                    </Typography>
                                    <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}>
                                        <Avatar sx={{
                                        width: 50,
                                        height: 50,
                                        flexShrink: 0
                                        }} src='public/images.jpg' />

                                        <Box>
                                        

                                            <Typography sx={{
                                                fontWeight: "bold",
                                                fontSize: "12px",
                                                mt: 1
                                            }}>
                                                Laura Martinez
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "12px",
                                                color: "gray"
                                            }}>
                                                Directora de marketing. Startup
                                            </Typography>

                                            
                                        </Box>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:"25%"}}>
                            <Card>
                                
                                <CardContent>
                                    <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                                <GradeIcon sx={{color: "gold"}} />
                                            </Box>
                                    <Typography sx={{
                                            fontSize: "14px",
                                            color: "gray"
                                        }}>
                                            "Dev nova solucions superó nuestras expectativas, Su equipo entiende el negocio y propone soluciones innovadoras que generan resultados reales."
                                    </Typography>
                                    <Box sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}>
                                        <Avatar sx={{
                                        width: 50,
                                        height: 50,
                                        flexShrink: 0
                                        }} src='public/images.jpg' />

                                        <Box>
                                        

                                            <Typography sx={{
                                                fontWeight: "bold",
                                                fontSize: "12px",
                                                mt: 1
                                            }}>
                                                Laura Martinez
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "12px",
                                                color: "gray"
                                            }}>
                                                Directora de marketing. Startup
                                            </Typography>

                                            
                                        </Box>
                                    </Box>
                                    
                                </CardContent>
                            </Card>
                        </Box>

                    </Box>
                    
                </Box>
                <Box sx={{gap: 1, py:1}}>
                        <Button variant='contained' sx={{
                                                        backgroundColor:'#7c4dff',
                                                        color: 'white',
                                                        gap: 1 }}>
                            Conoce mas sobre nocotros <ArrowRightAltIcon></ArrowRightAltIcon>

                        </Button>
                </Box>
            </Container>

        </Box>

    )

}
export default Quiénes_somos
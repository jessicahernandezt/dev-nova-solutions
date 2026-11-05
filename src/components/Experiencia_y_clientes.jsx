import { ArrowForward } from '@mui/icons-material'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import CardContent from '@mui/material/CardContent'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import LoyaltyIcon from '@mui/icons-material/Loyalty'
import Avatar from '@mui/material/Avatar'
import GradeIcon from '@mui/icons-material/Grade'
import {Box, 
    Button, 
    Container,
    Typography,
    Card,
    CardActions,
    CardMedia,
    Chip} from '@mui/material'

function Experiencia_y_clientes() {
    return(
        <Box sx={{display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                py:6}}>
            <Container >
                <Box>
                    <Box sx={{display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                
                                }}>

                        <Box sx={{width:"40%"}}>
                            <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    }}>Experiencia y clientes</Typography>
                        
                            <Typography sx={{
                            color:'#7c4dff',
                            fontWeight:'bold',
                            fontSize:'20px',
                            }}>
                                La confianza de nuestros clientes nos impulsa
                            </Typography>
                            <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    gap: "20px",
                                    alignItems: "center",
                                    color: "grey",
                                    fontSize:"13px"}}>
                                Resultados que hablan y relaciones construidas con la calidad y la innovación   
                            </Typography>
                         
                    
                        </Box>
                        <Box>
                            <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap:"9px",
                                    
                                    mt:"3%"
                                    }}>
                                <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap:"3px"
                                        }}>
                                    <Avatar sx={{bgcolor:"lightgray"}}><EditCalendarIcon sx={{color:'#7c4dff'}}></EditCalendarIcon></Avatar>
                                    <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            
                                            alignItems: 'flex-start'}}>
                                        <Typography sx={{ fontSize: '12px'}}>5+</Typography>
                                        <Typography sx={{ fontSize: '12px'}}>Años de experiencia</Typography>

                                    </Box>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap:"3px"
                                        }}>
                                    <Avatar sx={{bgcolor:"lightgray"}}><GroupAddIcon sx={{color:'#7c4dff'}}></GroupAddIcon></Avatar>
                                    <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            
                                            alignItems: 'flex-start'}}>
                                        
                                        <Typography sx={{ fontSize: '12px'}}>5+</Typography>
                                        <Typography sx={{ fontSize: '12px'}}>Años de experiencia</Typography>

                                    </Box>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap:"3px"
                                        }}>
                                    <Avatar sx={{bgcolor:"lightgray"}}><BeenhereIcon sx={{color:'#7c4dff'}}></BeenhereIcon></Avatar>
                                    <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            
                                            alignItems: 'flex-start'}}>
                                        <Typography sx={{ fontSize: '12px'}}>5+</Typography>
                                        <Typography sx={{ fontSize: '12px'}}>Años de experiencia</Typography>

                                    </Box>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap:"3px"
                                        }}>
                                    <Avatar sx={{bgcolor:"lightgray"}}><LoyaltyIcon sx={{color:'#7c4dff'}}></LoyaltyIcon></Avatar>
                                    <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            
                                            alignItems: 'flex-start'}}>
                                        <Typography sx={{ fontSize: '12px'}}>5+</Typography>
                                        <Typography sx={{ fontSize: '12px'}}>Años de experiencia</Typography>

                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{width:"100%",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2}}>
                        <Box sx={{width:"33%"}}>
                            <Card>
                                <CardContent sx={{
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
                                            fontSize: "12px",
                                            color: "gray"
                                        }}>
                                            "El equipo de Devnova entendió perfectamente
                                            nuestras necesidades y entregó un producto
                                            de gran valor. Altamente recomendado."
                                        </Typography>

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
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:"33%"}}>
                            <Card>
                                <CardContent sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2
                                }}>
                                    <Avatar sx={{
                                        width: 50,
                                        height: 50,
                                        flexShrink: 0
                                    }} src='public/hombre.jpg' />

                                    <Box>
                                        <Typography sx={{
                                            fontSize: "12px",
                                            color: "gray"
                                        }}>
                                            "Soluciones creativas, comunicación efectiva y 
                                            un gran dominio técnico. Sin duda los volveria 
                                            a contratar para futuros proyectos."
                                        </Typography>

                                        <Typography sx={{
                                            fontWeight: "bold",
                                            fontSize: "12px",
                                            mt: 1
                                        }}>
                                            Carlos Ramírez
                                        </Typography>

                                        <Typography sx={{
                                            fontSize: "12px",
                                            color: "gray"
                                        }}>
                                            CTO. Empresa de Retal
                                        </Typography>

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
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box sx={{width:"33%"}}>
                            <Card>
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2
                                }}>
                                    <Typography sx={{fontSize:"12px"}}>Empresas que han confiado en nosotros</Typography>
                                    <Box sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(3, 1fr)',
                                            gap: 2}}>
                                        <Box component="img" src='public/Amazon_Web_Services_Logo.svg.webp' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>

                                        </Box>
                                        <Box component="img" src='public/Logo_Grupo_BIMBO.svg.webp' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>
                                            
                                        </Box>
                                        <Box component="img" src='public/Cinépolis_logo.svg' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>
                                            
                                        </Box>
                                        
                                    </Box>
                                    <Box sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(3, 1fr)',
                                            gap: 2}}>
                                        <Box component="img" src='public/BBVA_2019.svg' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>
                                            
                                        </Box>
                                        <Box component="img" src='public/Telcel_logo.svg.webp' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>
                                            
                                        </Box>
                                        <Box component="img" src='public/Microsoft_logo_(2012).svg.webp' sx={{
                                                                                                            width: '60%',
                                                                                                            height: "60%",
                                                                                                            objectFit: 'contain'}}>
                                            
                                        </Box>
                                        
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>

        )

}
export default Experiencia_y_clientes
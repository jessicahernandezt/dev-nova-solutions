import { ArrowForward, Bolt, Opacity, PeopleAltRounded } from '@mui/icons-material'
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
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:6
                }}>
                    <Box alt="texto" sx={{
                        
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
                                width:"50%"
                                
                            }}>
                                conoce mas sobre nosotros<ArrowForward></ArrowForward>
                            </Button>
                        </Box>
                    </Box>
                    <Box alt="imagen"> 
                        <Box component="img" src='public/img (1).png' sx={{
                            width:"20%",
                            height:"20%"
                        }}></Box>
                    </Box>
                    <Box alt="iconos">
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                    </Box>

                </Box>

            </Container>
        </Box>
    )
}

export default QuienesSomos
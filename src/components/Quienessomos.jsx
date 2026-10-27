import { HomeWork, FileOpen, Groups2, HealthAndSafety } from '@mui/icons-material'
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Quienessomos() {
    return (
        <Box
            sx={{
                minHeight: '560px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#e9e9ff',
                py: 6
            }}>
                <Container maxWidth='lg'>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                    }}>

                    <Box sx={{ width: '70%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                            color: '#171b35',
                            fontWeight: 'bold',
                            letterSpacing: 2
                            }}>
                        --Quienes somos
                        </Typography>

                         <Typography
                            variant='h5'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight:'0.8'}}>
                            Un equipo que convierte ideas en impacto
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:8}}
                        >En Dev Nova somos un equipo  de profesionales apasionados por la tecnologia y la innovacion. Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generen valor real.</Typography>

                        <Button variant='contained'
                        sx={{
                            mt: -6,
                            backgroundColor:'#7c4dff',
                            textTransform: 'none',
                            borderRadius: 2
                        }}>
                            Conoce mas sobre nosotros →
                        </Button>
                    </Box>
                    <Box>
                        <Box component="img"
                        src='public/img (1).png'
                        sx={{
                            height: '270px',
                            width: '130%',
                            borderRadius: 3
                        }}>
                        </Box>
                    </Box>
                        <Box
                        sx={{
                            display: 'flex', mt: -1,
                            flexDirection:'column',
                            gap: 1,
                            ml: 12,
                            height: '100%',
                            justifyContent: 'center'
                        }}>
                            <Box 
                            sx={{borderRadius: '50%',
                                gap: 0.8,
                                BorderColor: '#7c4dff',
                                display: 'inline-flex'
                            }}>
                                <HomeWork
                                sx={{
                                color: '#7c4dff',
                                width: '30px',
                                height: '60px',
                                }}>
                                </HomeWork>
                                <Typography
                                sx={{
                                color: '#000000',
                                fontWeight: 'bold', mt: 1, mb: 1, ml:1
                                }}>5+<br/> <Typography
                                sx={{ 
                                color: '#666'
                                }}>Años de experiencia</Typography> </Typography>
                            </Box>
                                
                            <Box 
                            sx={{
                                display:"inline-flex",
                            }}>
                                <FileOpen
                                sx={{
                                color: '#7c4dff',
                                width: '30px',
                                height: '60px'
                                }}>
                                </FileOpen>
                                <Typography
                                sx={{
                                    color: '#000000',
                                    fontWeight: 'bold', mt: 1, mb: 1, ml: 1
                                }}>50+<br/> <Typography
                                sx={{ 
                                    color: '#666'
                                }}>Proyectos completados</Typography> </Typography>
                            </Box>
                            <Box sx={{
                                display:"inline-flex"
                            }}>
                             <Groups2
                                sx={{
                                color: '#7c4dff',
                                width: '30px',
                                height: '60px'
                                }}>
                                </Groups2>
                                <Typography
                                sx={{
                                color: '#000000',
                                fontWeight: 'bold', mt: 1, mb: 1, ml: 1
                                }}>30+<br/> <Typography
                                sx={{ 
                                color: '#666',
                                }}>Clientes Satisfechos</Typography> </Typography>   
                            </Box>
                            <Box sx={{
                                display:"inline-flex"
                            }}>
                             <HealthAndSafety
                                sx={{
                                color: '#7c4dff',
                                width: '30px',
                                height: '60px'
                                }}>
                                </HealthAndSafety>
                                <Typography
                                sx={{
                                color: '#000000',
                                fontWeight: 'bold', mt: 1, mb: 1, ml: 1
                                }}>30+<br/> <Typography
                                sx={{ 
                                color: '#666',
                                }}>Desarrolladores, diseñadores y estrategias</Typography> </Typography>   
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Quienessomos
import GppGoodIcon from '@mui/icons-material/GppGood';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'
import { Height } from '@mui/icons-material';

function Hero() {
    return (
        <Box
            sx={{
                minHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 6
            }}
        >

            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                    }}>

                    <Box sx={{ width: '50%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            IDEAS · TECNOLOGIA · RESULTADOS

                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2 }}
                        >Transformamos ideas en soluciones digitales</Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales</Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                    gap: 1
                }}>

                    <Button variant='contained' type='button'  
                    sx={{
                        backgroundColor: "#7c4dff",
                        padding: '15px'
                    }}>
                        Comenzar proyecto →
                    </Button>

                    <Button variant='contained' type='button' 
                    sx={{
                        backgroundColor: "white",
                        color: 'black',
                        padding: '15px'
                    }}>
                        Conocer nuestros servicios
                    </Button>
                    
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    <Box>
                        <GppGoodIcon
                        sx={{  
                            color: '#7c4dff'
                        }}>
                          
                        </GppGoodIcon>
                    </Box>

                    <Box>
                        <RocketLaunchIcon 
                        sx={{
                            color: '#7c4dff'
                            }}>

                        </RocketLaunchIcon>
                    </Box>

                    <Box>
                        <PeopleAltIcon sx={{
                            color: '#7c4dff',
                            }}>

                        </PeopleAltIcon>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default Hero
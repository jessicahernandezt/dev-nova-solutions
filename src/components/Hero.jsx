import {Box, Button, Container, Typography} from '@mui/material'

function Hero() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 2, maxWidth: '55%', width: '100%', py:7}}>
                        <Typography sx={{color: '#7c4dff', fontWeight: 'bold', letterSpacing: 2}}>
                            IDEAS · TECNOLOGIA · RESULTADOS
                        </Typography>

                        <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem'}}>
                            Transformamos ideas en{' '}
                            <Box component='span' sx={{color: '#7c4dff'}}>
                                soluciones digitales
                            </Box>
                        </Typography>

                        <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                            Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos reales
                        </Typography>
                        
                        <Box sx={{display: 'flex', /*width: '100%',*/ alignItems: 'center', gap: 6, padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff'}}>Solicitar cotizacíon →</Button>
                            <Button sx={{color: '#7c4dff', fontWeight: 'bold', borderColor: '#7c4dff', border: 2}}>Conoce más</Button>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, padding: 1, py: 0, /*backgroundColor: 'white',*/ borderRadius: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    100%{' '}
                                    <Box component='span' sx={{color: '#a1a1a1'}}>
                                        Comprometidos
                                    </Box>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    +50{' '}
                                    <Box component='span' sx={{color: '#a1a1a1'}}>
                                        Proyectos entregados
                                    </Box>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    98%{' '}
                                    <Box component='span' sx={{color: '#a1a1a1'}}>
                                        Clientes satisfechos
                                    </Box>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 6, backgroundColor: 'white', borderRadius: 2, padding: 1, py: 2, maxWidth: '45%', width: '100%', height: '100%'}}>
                        <Box component='img' src='/img (8).png' alt='' sx={{width: '500px', height: '100%', objectFit:'contain'}}></Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
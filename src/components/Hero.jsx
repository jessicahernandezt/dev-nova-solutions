import {Box, Button, Container, Typography} from '@mui/material'

function Hero() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 6}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 6}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 2, gap: 6, padding: 3, py: 2, maxWidth: '55%', width: '100%'}}>
                        <Box sx={{display: 'flex', width: '100%', padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Typography sx={{color: '#7c4dff', fontWeight: 'bold', letterSpacing: 2}}>
                                IDEAS · TECNOLOGIA · RESULTADOS
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem'}}>
                                Transformamos ideas en 
                                <Typography sx={{color: '#7c4dff', fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem'}}>
                                    soluciones digitales
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos reales
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', /*width: '100%',*/ alignItems: 'center', gap: 6, padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff'}}>Solicitar cotizacíon →</Button>
                            <Button sx={{color: '#7c4dff', fontWeight: 'bold', borderColor: '#7c4dff', border: 2}}>Conoce más</Button>
                        </Box>
                        <Box sx={{display: 'flex', /*width: '100%',*/ alignItems: 'center', gap: 6, padding: 1, py: 0, /*backgroundColor: 'white',*/ borderRadius: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 6, borderRadius: '50%', backgroundColor: '#d1d1d1', padding: 1}}>
                                    <img src="../public/img (21).png" alt="wasa" style={{width: '100%', height: '100%', }} />
                                </Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    100%
                                    <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                        Comprometidos
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 6, borderRadius: '50%', backgroundColor: '#d1d1d1', padding: 1}}>
                                    <img src="../public/img (21).png" alt="wasa" style={{width: '100%', height: '100%'}} />
                                </Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    +50
                                    <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                        Proyectos entregados
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 6, borderRadius: '50%', backgroundColor: '#d1d1d1', padding: 1}}>
                                    <img src="../public/img (21).png" alt="wasa" style={{width: '100%', height: '100%'}} />
                                </Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    98%
                                    <Typography sx={{color: '#a1a1a1', fontWeight: 'bold', letterSpacing: 2}}>
                                        Clientes satisfechos
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 6, backgroundColor: 'white', borderRadius: 2, padding: 3, py: 2, maxWidth: '45%', width: '100%', height: '100%'}}>
                        <img src="../public/img (21).png" alt="wasa" style={{width: '100%', height: '100%'}} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
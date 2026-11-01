import {Box, Button, Container, Typography} from '@mui/material'

function HeroProy() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 2, maxWidth: '55%', width: '100%', py:7}}>

                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>NUESTROS PROYECTOS<Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}> -</Box>
                        </Typography>

                        <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2, fontSize: '2rem'}}>
                            Ideas que se convierten en{' '}
                            <Box component='span' sx={{color: '#7c4dff'}}>
                                productos reales
                            </Box>
                        </Typography>

                        <Typography sx={{color: '#666', fontWeight: 'bold', letterSpacing: 2}}>
                            Conoce algunos de nuestros proyectos mas recientes y descubre como ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan resultados.
                        </Typography>
                        
                        <Box sx={{display: 'flex', /*width: '100%',*/ alignItems: 'center', justifyContent:'space-evenly', gap: 6, padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff', width:'100%'}}>Conocer nuestros servicios →</Button>
                            <Button sx={{color: '#7c4dff', fontWeight: 'bold', borderColor: '#7c4dff', border: 2, width:'100%'}}>Hablemos de tu proyecto</Button>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, padding: 1, py: 0, /*backgroundColor: 'white',*/ borderRadius: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    50+{' '}
                                    <Box component='span' sx={{color: '#666'}}>
                                        Proyectos completados
                                    </Box>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    30+{' '}
                                    <Box component='span' sx={{color: '#666'}}>
                                        Clientes satisfechos
                                    </Box>
                                </Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, maxWidth:'30%', overflow:'hidden'}}>
                                <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                                <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                    98%{' '}
                                    <Box component='span' sx={{color: '#666'}}>
                                        Satisfaccion promedio
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

export default HeroProy
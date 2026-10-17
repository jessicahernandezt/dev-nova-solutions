import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

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

            <Container maxWidth='lg'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '1200px',
                }}>
                <Box
                    sx={{
                        width: '100%',
                        marginLeft: '-130px',
                    }}>

                    <Typography
                        sx={{
                            color: '#7c4dff',
                            fontWeight: 'bold',
                            letterSpacing: 2,
                        }}>

                        IDEAS · TECNOLOGIA · RESULTADOS

                    </Typography>



                    <Typography variant="h3"
                        sx={{
                            color: '#19181d',
                            fontWeight: 'bold',
                            fontSize: '50px',
                        }}>

                        Transformamos ideas en{' '}



                        <Typography component='span'
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                fontSize: '50px',
                            }}>

                            soluciones digitales
                        </Typography>

                    </Typography>

                    <Typography
                        sx={{
                            color: '#888691',
                            fontWeight: 'light',
                            fontSize: '20px',
                            marginTop: '15px',
                        }}>
                        <b>Desarrollamos software</b> a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos reales
                    </Typography>

                    <Button sx={{
                        color: '#fff',
                        outline: '1px solid #7c4dff',
                        backgroundColor: '#7c4dff',
                        padding: '10px 10px',
                        borderRadius: '10px',
                        margin: '20px 0px',
                        fontWeight: 'bold',
                    }}>

                        Solicitar cotizacion → </Button>


                    <Button sx={{
                        color: '#7c4dff',
                        fontWeight: 'bold',
                        outline: '1px solid #7c4dff',
                        padding: '10px 10px',
                        borderRadius: '5px',
                        margin: '10px 30px',
                    }}>

                        Conoce mas</Button>


                    <Typography>

                    </Typography>

                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '-10px',
                    }}>


                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/Corazon.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>100%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    comprometidos</Typography>
                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/star.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '14px',
                            }}>
                                <h3>+50</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>

                                    proyectos entregados</Typography>

                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/people.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>98%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    Clientes satisfechos</Typography>
                            </Box>

                        </Box>


                    </Box>

                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginRight: '-100px',
                    }}>
                    <Box
                        component="img"
                        src='public/img (8).png'
                        alt='Hero image'
                        sx={{
                            marginLeft: '100px',
                            width: '100%',
                            objectFit: 'cover',

                        }}
                    />

                </Box>



            </Container>

        </Box>

    )
}
export default Hero
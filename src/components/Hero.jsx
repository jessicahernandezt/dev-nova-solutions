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
                backgroundColor: '#f7f7ff',
                py: 6,
            }}
        >

            <Container maxWidth='lg' sx={{
                display: 'flex',
                gap: '20px',
            }}>
                <Box sx={{
                    width: '50%',
                }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>

                        <Box sx={{
                            width: '40px',
                            height: '3px',
                            backgroundColor: '#7c4dff',
                        }}>
                        </Box>

                        <Typography sx={{
                            fontWeight: 'Bolder',
                        }}>
                            NUESTRA EXPERIENCIA
                        </Typography>

                    </Box>

                    <Typography variant="h3"
                        sx={{
                            color: '#19181d',
                            fontWeight: 'bold',
                            fontSize: '40px',
                        }}>

                        Experiencia que impulsa{' '}



                        <Typography component='span'
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                fontSize: '40px',
                            }}>

                            resultados reales
                        </Typography>

                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                    }}>
                        A lo largo de los años hemos acompañado a empresas de diferentes industrias en su transformacion digital, convirtiendo ideas en soluciones que generan un impacto medible y duradero.
                    </Typography>

                    <button type='submit' style={{
                        backgroundColor: '#7c4dff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '9px',
                        width: '40%',
                        height: '35px',
                        marginTop: '20px',
                        fontWeight: 'bold',
                    }} >Conoce nuestra trayectoria →</button>


                </Box>

                <Box sx={{
                    width: '50%',
                    height: '400px',
                    backgroundColor: '#7c4dff',
                    backgroundImage: `url(public/equipo.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                }}>

                </Box>

            </Container>
        </Box>
    )
}
export default Hero
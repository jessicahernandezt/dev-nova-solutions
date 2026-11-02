import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function CTA() {
    return (

        <Box
            sx={{
                minHeight: '300px',
                backgroundColor: '#f7f7ff',
                py: 6,

            }}
        >

            <Container maxWidth='lg' sx={{
                gap: '2%',
                display: 'flex',
            }}>

                <Box sx={{
                    width: '50%',
                    marginBottom: '20px',

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
                            ¿LISTO PARA ESCRIBIR LA SIGUIENTE HISTORIA?
                        </Typography>

                    </Box>

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '28px',
                    }}>
                        Hablemos de tu proximo proyecto
                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                        fontSize: '15px',
                    }}>
                        Nos encantaria conocer tus ideas y ayudarte a conservarlas en soluciones digitales que generen resultados.
                    </Typography>

                    <Box sx={{
                        marginTop: '20px',
                    }}>
                        <Button sx={{
                            backgroundColor: '#7c4dff',
                            color: '#fff',
                            padding: '10px 20px',
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                            fontSize: '13px',
                            }}>
                                Contáctanos →
                            </Typography>
                        </Button>

                        <Button sx={{
                            backgroundColor: '#fff',
                            padding: '10px 20px',
                            marginLeft: '10px',
                            border: '1px solid #88869154',
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '13px',
                                color: '#000000',
                            }}>
                                Conocer nuestros servicios
                            </Typography>
                        </Button>
                    </Box>

                </Box>


                <Box sx={{
                    width: '50%',
                    height: 'auto',
                    backgroundColor: '#7c4dff',
                    backgroundImage: `url(public/banner2.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    
                }}>

                </Box>

            </Container>
        </Box>

    )
}
export default CTA
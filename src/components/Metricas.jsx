import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Metricas() {
    return (

        <Box
            sx={{
                minHeight: '250px',
                backgroundColor: '#f7f7ff',
                py: 6,
            }}
        >

            <Container maxWidth='lg' sx={{
                display: 'flex',
                gap: '2%',
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

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '28px',
                    }}>
                        Resultados que nos respaldan
                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                        fontSize: '15px',
                    }}>
                        Nuestra experiencia se refleja en numeros, pero tambien en las relaciones de confianza que hemos construido con nuestros clientes
                    </Typography>

                </Box>

                <Box sx={{
                    width: '60%',
                    display: 'flex',
                    gap: '2%',
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        backgroundColor: '#fff',
                        gap: '5px',
                        padding: '10px 20px',
                        borderRadius: '10px',
                    }}>

                        <Box sx={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#7c4dff',
                            backgroundImage: `url(public/calendario.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>

                        </Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>
                            5+
                        </Typography>

                        <Typography sx={{
                            fontSize: '11px',
                            color: '#888691',
                        }}>
                            Años de experiencia
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        backgroundColor: '#fff',
                        gap: '5px',
                        padding: '10px 20px',
                        borderRadius: '10px',
                    }}>

                        <Box sx={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#7c4dff',
                            backgroundImage: `url(public/proyectos.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>

                        </Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>
                            5+
                        </Typography>

                        <Typography sx={{
                            fontSize: '11px',
                            color: '#888691',
                        }}>
                            Años de experiencia
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        backgroundColor: '#fff',
                        gap: '5px',
                        padding: '10px 20px',
                        borderRadius: '10px',
                    }}>

                        <Box sx={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#7c4dff',
                            backgroundImage: `url(public/clientes.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>

                        </Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>
                            5+
                        </Typography>

                        <Typography sx={{
                            fontSize: '11px',
                            color: '#888691',
                        }}>
                            Años de experiencia
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '25%',
                        backgroundColor: '#fff',
                        gap: '5px',
                        padding: '10px 20px',
                        borderRadius: '10px',
                    }}>

                        <Box sx={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: '#7c4dff',
                            backgroundImage: `url(public/estrella.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>

                        </Box>
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}>
                            5+
                        </Typography>

                        <Typography sx={{
                            fontSize: '11px',
                            color: '#888691',
                        }}>
                            Años de experiencia
                        </Typography>

                    </Box>

                    

                </Box>



            </Container>


        </Box>



    )
}

export default Metricas
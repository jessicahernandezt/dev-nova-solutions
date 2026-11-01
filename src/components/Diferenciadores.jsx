import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Diferenciadores() {
    return (

        <Box
            sx={{
                minHeight: '300px',
                backgroundColor: '#fff',
                py: 6,
            }}
        >

            <Container maxWidth='lg' sx={{
                gap: '2%',
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
                            LO QUE NOS HACE DIFERENTES
                        </Typography>

                    </Box>

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '28px',
                    }}>
                        Experiencia que se traduce en valor
                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                        fontSize: '15px',
                    }}>
                        Nuestra trayectoria nos ha permitido desarrollar una forma de trabajar centrada en la calidad. la innovacion y, sobre todo, en las personas.
                    </Typography>

                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    gap: '2%',
                }}>

                    <Box sx={{
                        display: 'flex',
                        gap: '1%',
                        border: '1px solid #e0e0e0',
                        width: '23%',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <Box sx={{

                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#7c4dff',
                                backgroundImage: `url(public/calendario.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>

                            </Box>

                        </Box>

                        <Box>

                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '15px',
                            }}>
                                Calidad comprobada
                            </Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#888691',
                            }}>
                                Años de experiencia entregando soluciones confiables, escalables y de alta calidad.
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '1%',
                        border: '1px solid #e0e0e0',
                        width: '23%',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <Box sx={{

                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#7c4dff',
                                backgroundImage: `url(public/calendario.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>

                            </Box>

                        </Box>

                        <Box>

                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '15px',
                            }}>
                                Innovacion constante
                            </Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#888691',
                            }}>
                                Nos mantenemos a la vanguardia en tecnologias y metodologias para ofrecer siempre lo mejor
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '1%',
                        border: '1px solid #e0e0e0',
                        width: '23%',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <Box sx={{

                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#7c4dff',
                                backgroundImage: `url(public/calendario.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>

                            </Box>

                        </Box>

                        <Box>

                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '15px',
                            }}>
                                Acompañamiento real
                            </Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#888691',
                            }}>
                                Trabajamos de la mano con nuestros clientes en todas las etapas del proyecto
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '1%',
                        border: '1px solid #e0e0e0',
                        width: '23%',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <Box sx={{

                        }}>
                            <Box sx={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#7c4dff',
                                backgroundImage: `url(public/calendario.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}>

                            </Box>

                        </Box>

                        <Box>

                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '15px',
                            }}>
                                Enfoque en resultados
                            </Typography>
                            <Typography sx={{
                                fontSize: '14px',
                                color: '#888691',
                            }}>
                                Nuestra experiencia nos permite entender mejor cada necesidad y convertirla en resultados medibles
                            </Typography>
                        </Box>

                    </Box>





                </Box>


            </Container>

        </Box>

    )
}
export default Diferenciadores
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function NuestraTrayectoria() {
    return (

        <Box
            sx={{
                minHeight: '520px',
                backgroundColor: '#fff',
                py: 6,
            }}>

            <Container maxWidth='lg' sx={{

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
                        NUESTRA TRAYECTORIA
                    </Typography>

                </Box>

                <Box sx={{
                    width: '50%',
                    marginBottom: '2%',
                }}>

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                    }}>
                        Un camino de crecimiento constante
                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Cada etaopa de nuestra historia representa nuevos aprendizajes, mas desafios superados y un mayor compromiso con nuestros clientes
                    </Typography>

                </Box>


                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#7c4dff',
                        backgroundImage: `url(public/equipo.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '100px',
                    }}>

                    </Box>

                    <Box sx={{
                        width: '24%',
                        height: '3px',
                        backgroundColor: '#974dff96',
                    }}></Box>

                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#7c4dff',
                        backgroundImage: `url(public/equipo.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '100px',
                    }}>

                    </Box>

                    <Box sx={{
                        width: '25%',
                        height: '3px',
                        backgroundColor: '#974dff96',
                    }}></Box>

                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#7c4dff',
                        backgroundImage: `url(public/equipo.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '100px',
                    }}>

                    </Box>

                    <Box sx={{
                        width: '22%',
                        height: '3px',
                        backgroundColor: '#974dff96',
                    }}></Box>

                    <Box sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#7c4dff',
                        backgroundImage: `url(public/equipo.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '100px',
                    }}>

                    </Box>

                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: '10%',
                    marginTop: '2%',
                }}>
                    <Box sx={{
                        width: '25%',
                    }}>
                        <Typography sx={{
                            color: '#7c4dff',
                            fontWeight: 'bold',
                        }}>
                            2019
                        </Typography>

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}>
                            Nuestros inicios
                        </Typography>

                        <Typography sx={{
                            fontSize: '13px',
                            color: '#888691',
                        }}>
                            Nacemos con la vision de crear soluciones digitales que generen valor real
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '25%',
                    }}>
                        <Typography sx={{
                            color: '#7c4dff',
                            fontWeight: 'bold',
                        }}>
                            2021
                        </Typography>

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}>
                            Crecimiento del equipo
                        </Typography>

                        <Typography sx={{
                            fontSize: '13px',
                            color: '#888691',
                        }}>
                            Fortalecemos nuestro talento y ampliamos nuestras capacidades de desarrollo
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '23%',
                    }}>
                        <Typography sx={{
                            color: '#7c4dff',
                            fontWeight: 'bold',
                        }}>
                            2023
                        </Typography>

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}>
                            Mas proyectos,  mayor impacto
                        </Typography>

                        <Typography sx={{
                            fontSize: '13px',
                            color: '#888691',
                        }}>
                            Seperamos los 50 proyectos completados en diversas industrias de Latinoamerica
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: '25%',
                    }}>
                        <Typography sx={{
                            color: '#7c4dff',
                            fontWeight: 'bold',
                        }}>
                            2025
                        </Typography>

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }}>
                            Seguimos innovando
                        </Typography>

                        <Typography sx={{
                            fontSize: '13px',
                            color: '#888691',
                        }}>
                            Continuamos evolucionando para ofrecer soluciones mas completas con mayor impacto en los negocios
                        </Typography>
                    </Box>

                </Box>



            </Container>

        </Box>

    )
}
export default NuestraTrayectoria
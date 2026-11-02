import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function HistoriaDeExito() {
    return (


        <Box
            sx={{
                minHeight: '250px',
                backgroundColor: '#fff',
                py: 6,
            }}
        >

            <Container maxWidth='lg' sx={{
                gap: '2%',
            }}>

                <Box sx={{
                    display: 'flex',
                    gap: '20px',
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
                                LA CONFIANZA DE NUESTROS CLIENTES
                            </Typography>

                        </Box>

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: '28px',
                        }}>
                            Historias de exito que nos inspiran
                        </Typography>

                        <Typography sx={{
                            color: '#888691',
                            fontSize: '15px',
                        }}>
                            Cada proyecto es una oportunidad para generar un impacto positivo. Esto es lo que algunos de nuestros clientes dicen sobre nosotros.
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '20px',
                        width: '50%',
                        padding: '20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>

                        <Box>

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

                        </Box>

                        <Box>
                            <Typography sx={{
                                fontSize: '13px',
                                color: '#888691',
                            }}>
                                "DevNova Solutions se convirtio en un aliado estrategico para nuestro crecimiento. Su experiencia y compromiso se reflejan en cada etapa del proyecto"
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                marginTop: '10px',
                            }}>
                                <Box sx={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: '#7c4dff',
                                    backgroundImage: `url(public/empresaria.jpeg)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '50%',
                                }}>

                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                    }}>
                                        Carolina Mendez
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '13px',
                                        color: '#888691',
                                    }}>
                                        Directora de Operaciones, Grupo Andina
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            flexDirection: 'row',
                            gap: '10px',
                        }}>
                            <button style={{
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                padding: '5px 10px',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                            }}>
                                &lt;
                            </button>
                            <button style={{
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                padding: '5px 10px',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                            }}>
                                &gt;
                            </button>
                        </Box>
                    </Box>

                </Box>



            </Container>


        </Box>




    )
}
export default HistoriaDeExito
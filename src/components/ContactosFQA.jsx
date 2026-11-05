import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function ContactosFQA() {
    return (

        <Box sx={{
            MaxWidth: '100%',
            height: 'auto',
            backgroundColor: '#f7f7ff',
            py: 4,
        }}>

            <Container maxWidth='lg' sx={{

            }}>

                <Box sx={{
                    gap: '20px',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}>

                    {/* primer bloque */}

                    <Box sx={{
                        width: '23%',
                    }}>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>


                            <Box sx={{
                                width: '40px',
                                height: '3px',
                                backgroundColor: '#7c4dff',
                                marginRight: '10px',
                            }}>
                            </Box>

                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: 'bold'
                            }}>
                                ¿Hablamos?
                            </Typography>

                        </Box>

                        <Typography sx={{
                            color: '#888691',
                            margin: '10px 0px',
                        }}>
                            Cuentanos sobre tu proyecto. Estamos listos para ayudarte a hacerlo realidad.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                        }}>

                            <img src='public/star.png' alt='correo'

                                style={{ width: '40px', height: '40px', }}></img>

                            <Box sx={{
                                marginBottom: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '10px',
                            }}>
                                <Typography sx={{
                                    color: '#888691',
                                    marginBottom: '-10px',
                                }}>

                                    hola@devnova.com</Typography>

                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                        }}>

                            <img src='public/star.png' alt='correo'

                                style={{ width: '40px', height: '40px', }}></img>

                            <Box sx={{
                                marginBottom: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '10px',
                            }}>
                                <Typography sx={{
                                    color: '#888691',
                                    marginBottom: '-10px',
                                }}>

                                    +52 55 1234 5678</Typography>

                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                        }}>

                            <img src='public/star.png' alt='correo'

                                style={{ width: '40px', height: '40px', }}></img>

                            <Box sx={{
                                marginBottom: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '10px',
                            }}>
                                <Typography sx={{
                                    color: '#888691',
                                    marginBottom: '-10px',
                                }}>

                                    Ciudad de México, México</Typography>

                            </Box>

                        </Box>

                    </Box>

                    {/* fin del primer bloque */}

                    {/* segundo bloque */}
                    <Box sx={{
                        width: '40%',
                        height: 'auto',
                        borderRadius: '9px',
                        boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
                        padding: '1% 20px',
                        backgroundColor: '#ffffff',
                    }}>

                        <Box sx={{
                            display: 'flex',

                        }}>

                            <Box sx={{
                                marginRight: '20px',
                            }}>

                                <Typography sx={{
                                    color: '#888691',
                                    marginBottom: '5px',
                                }}>
                                    Nombre completo *
                                </Typography>

                                <input type="text" placeholder='Nombre completo' style={{
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '5px',
                                    border: '1px solid #888691',
                                    padding: '5px',
                                }}></input>

                                <Typography sx={{
                                    color: '#888691',
                                    margin: '5px 0px',
                                }}>
                                    Tipo de Proyecto *
                                </Typography>

                                <input type="text" placeholder='Selecciona una opcion' style={{
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '5px',
                                    border: '1px solid #888691',
                                    padding: '5px',
                                }}></input>

                            </Box>

                            <Box >

                                <Typography sx={{
                                    color: '#888691',
                                    marginBottom: '5px',
                                }}>
                                    Correo electronico *
                                </Typography>

                                <input type="text" placeholder='tu@empresa.com' style={{
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '5px',
                                    border: '1px solid #888691',
                                    padding: '5px',
                                }}></input>

                                <Typography sx={{
                                    color: '#888691',
                                    margin: '5px 0px',
                                }}>
                                    Mensaje *
                                </Typography>

                                <input type="text" placeholder='Cuentanos sobre tu proyecto' style={{
                                    width: '200px',
                                    height: '100px',
                                    borderRadius: '5px',
                                    border: '1px solid #888691',
                                    padding: '5px',
                                }}></input>

                            </Box>


                        </Box>

                        <Box sx={{

                        }}>

                            <button style={{
                                width: '200px',
                                height: '40px',
                                backgroundColor: '#7c4dff',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                borderRadius: '9px',
                                marginTop: '10px',
                            }}>
                                Enviar mensaje →
                            </button>
                        </Box>

                    </Box>

                    {/* fin del segundo bloque */}

                    {/* bloque de preguntas frecuentes */}

                    <Box sx={{
                        width: '23%',
                        borderRadius: '9px',
                        boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
                        padding: '10px 10px',
                        backgroundColor: '#ffffff',
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                        }}>
                            Preguntas frecuentes
                        </Typography>

                        <Box sx={{
                            borderRadius: '5px',
                            borderColor: '#88869148',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            padding: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                            }}>
                                Cuanto tiempo tarda un proyecto?
                            </Typography>
                        </Box>

                        <Box sx={{
                            borderRadius: '5px',
                            borderColor: '#88869148',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            padding: '10px',
                            marginTop: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                            }}>
                                Que tecnologias utilizamos?
                            </Typography>
                        </Box>

                        <Box sx={{
                            borderRadius: '5px',
                            borderColor: '#88869148',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            padding: '10px',
                            marginTop: '10px',
                        }}  >
                            <Typography sx={{
                                fontSize: '14px',
                            }}>
                                Ofrecen soporte despues del lanzamiento?
                            </Typography>
                        </Box>

                        <Box sx={{
                            borderRadius: '5px',
                            borderColor: '#88869148',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            padding: '10px',
                            marginTop: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '14px',
                            }}>
                                Trabajan con empresas y pymes?
                            </Typography>
                        </Box>

                    </Box>

                    {/* fin del bloque de preguntas frecuentes */}

                    <Box sx={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: '#ffffff00',
                        display: 'flex',
                        borderRadius: '10px',
                        backgroundImage: `url(public/img13.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                    }}>



                    </Box>

                </Box>

            </Container>

        </Box>

    )
}
export default ContactosFQA
import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material'



function Footer() {
    return (

        <Box sx={{
            backgroundColor: '#1b2236',
            color: '#fff',
            minHeight: '520px',
            height: 'auto',
            py: 6,

        }}>

            <Container maxWidth='lg' sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>

                <Box sx={{
                    width: '15%',
                }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <img src="public/img (17).png" alt="DevNova-Icon" style={{ width: '60px', height: '50px' }} />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                                DevNova
                            </Typography>

                            <Typography sx={{ fontWeight: 'bolder', fontSize: '16px' }}>
                                Solutions
                            </Typography>

                        </Box>
                    </Box>




                        <Typography sx={{
                            color: '#888691',
                            fontSize: '15px',
                        }}>
                            Soluciones digitales para un mejor mañana
                        </Typography>



                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>
                        <Box>
                            <img src="public/linkedin.jpg" alt="link-in" style={{ width: '30px', height: '30px' }} />
                        </Box>
                        <Box>
                            <img src="public/github.jpg" alt="github" style={{ width: '30px', height: '30px' }} />
                        </Box>
                        <Box>
                            <img src="public/youtube.jpg" alt="youtube" style={{ width: '30px', height: '30px' }} />
                        </Box>
                        <Box>
                            <img src="public/instagram.jpg" alt="instagram" style={{ width: '30px', height: '30px' }} />
                        </Box>

                    </Box>

                </Box>

                <Box>
                    <Typography sx={{
                        fontWeight: "Bold",
                        fontSize: '13px',
                    }}>
                        Navegacion
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Inicio
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Servicios
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Quienes Somos
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Proyectos
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Tecnologias
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Experiencia Clientes
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Contactos y FQA
                    </Typography>
                </Box>

                <Box>

                    <Typography sx={{
                        fontWeight: "Bold",
                        fontSize: '13px',
                    }}>
                        Servicios
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Desarrollo Web
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Aplicaciones Moviles
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Desarrollo de Software
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Consultoria Tecnologica
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Integracion de Sistemas
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Soporte y Mantenimiento
                    </Typography>

                </Box>

                <Box>

                    <Typography sx={{
                        fontSize: '13px',
                        fontWeight: 'bold',
                    }}>
                        Contactos
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                    }}>

                        <img src='public/correo.jpg' alt='correo'

                            style={{ width: '25px', height: '25px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '10px',
                        }}>
                            <Typography sx={{
                                color: '#888691',
                                marginBottom: '-10px',
                                fontSize: '13px',
                            }}>

                                hola@devnova.com</Typography>

                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                    }}>

                        <img src='public/llamada.jpg' alt='correo'

                            style={{ width: '25px', height: '25px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '10px',
                        }}>
                            <Typography sx={{
                                color: '#888691',
                                marginBottom: '-10px',
                                fontSize: '13px',
                            }}>

                                +52 55 1234 5678</Typography>

                        </Box>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                    }}>

                        <img src='public/ubi.jpg' alt='correo'

                            style={{ width: '25px', height: '25px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '10px',
                        }}>
                            <Typography sx={{
                                color: '#888691',
                                marginBottom: '-10px',
                                fontSize: '13px',
                            }}>

                                Ciudad de México, México</Typography>

                        </Box>

                    </Box>

                </Box>


                <Box>

                    <Typography sx={{
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }}>
                        Suscribete a nuestro boletin
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                    }}>

                        <input type="text" placeholder='Ingresa tu correo' style={{
                            width: '300px',
                            height: '40px',
                            borderRadius: '9px 0px 0px 9px',
                            border: 'none',
                            backgroundColor: '#313745',
                            borderColor: '#888691',
                        }} />
                        <button type='submit' style={{
                            backgroundColor: '#7c4dff',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            borderRadius: '0px 9px 9px 0px',
                        }} >➔</button>

                    </Box>

                    <Typography sx={{
                        color: '#888691',
                        fontSize: '13px',
                    }}>
                        Recibe noticias, novedades y contenido util.
                    </Typography>

                </Box>

            </Container>

            <Container>



                <Box sx={{
                    width: '100%',
                    backgroundColor: '#888691',
                    border: '1px solid #888691',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}>

                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        © 2025 DevNova Solutions. Todos los derechos reservados.
                    </Typography>

                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Aviso de privacidad | Términos y condiciones
                    </Typography>

                </Box>

            </Container>



        </Box>

    )
}
export default Footer
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
            width: '100%',
            height: 'auto',
            marginTop: '50px',
            padding: '0px 100px',
            paddingBottom: '60px',
            paddingTop: '20px',
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>

                <Box>

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
                    }}>
                        Soluciones digitales para un mejor mañana
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                    }}>
                        <Box>
                            <img src="public/linkedin.jpg" alt="link-in" style={{ width: '60px', height: '60px' }} />
                        </Box>
                        <Box>
                            <img src="public/github.jpg" alt="github" style={{ width: '60px', height: '60px' }} />
                        </Box>
                        <Box>
                            <img src="public/youtube.jpg" alt="youtube" style={{ width: '60px', height: '60px' }} />
                        </Box>
                        <Box>
                            <img src="public/instagram.jpg" alt="instagram" style={{ width: '60px', height: '60px' }} />
                        </Box>

                    </Box>

                </Box>

                <Box>
                    <Typography sx={{
                        fontWeight: "Bold",
                    }}>
                        Navegacion
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Inicio
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Servicios
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Quienes Somos
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Proyectos
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Tecnologias
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Experiencia Clientes
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Contactos y FQA
                    </Typography>
                </Box>

                <Box>

                    <Typography sx={{
                        fontWeight: "Bold",
                    }}>
                        Servicios
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Desarrollo Web
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Aplicaciones Moviles
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Desarrollo de Software
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Consultoria Tecnologica
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Integracion de Sistemas
                    </Typography>
                    <Typography sx={{
                        color: '#888691',
                    }}>
                        Soporte y Mantenimiento
                    </Typography>

                </Box>

                <Box>

                    <Typography>
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
                            }}>

                                Ciudad de México, México</Typography>

                        </Box>

                    </Box>

                </Box>


                <Box>

                    <Typography>
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
                    }}>
                        Recibe noticias, novedades y contenido util.
                    </Typography>

                </Box>

            </Box>

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



        </Box>

    )
}
export default Footer
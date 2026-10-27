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
                            <Typography>
                                DevNova
                            </Typography>

                            <Typography>
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
                            <img src="" alt="link-in" style={{ width: '60px', height: '50px' }} />
                        </Box>
                        <Box>
                            <img src="" alt="github" style={{ width: '60px', height: '50px' }} />
                        </Box>
                        <Box>
                            <img src="" alt="youtube" style={{ width: '60px', height: '50px' }} />
                        </Box>
                        <Box>
                            <img src="" alt="instagram" style={{ width: '60px', height: '50px' }} />
                        </Box>

                    </Box>

                </Box>

                <Box>
                    <Typography>
                        Navegacion
                    </Typography>
                    <Typography>
                        Inicio
                    </Typography>
                    <Typography>
                        Servicios
                    </Typography>
                    <Typography>
                        Quienes Somos
                    </Typography>
                    <Typography>
                        Proyectos
                    </Typography>
                    <Typography>
                        Tecnologias
                    </Typography>
                    <Typography>
                        Experiencia Clientes
                    </Typography>
                    <Typography>
                        Contactos y FQA
                    </Typography>
                </Box>

                <Box>

                    <Typography>
                        Servicios
                    </Typography>
                    <Typography>
                        Desarrollo Web
                    </Typography>
                    <Typography>
                        Aplicaciones Moviles
                    </Typography>
                    <Typography>
                        Desarrollo de Software
                    </Typography>
                    <Typography>
                        Consultoria Tecnologica
                    </Typography>
                    <Typography>
                        Integracion de Sistemas
                    </Typography>
                    <Typography>
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

                        <img src='public/star.png' alt='correo'

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

                        <img src='public/star.png' alt='correo'

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

                        <img src='public/star.png' alt='correo'

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

                    <Box>

                        <input type="text" placeholder='Ingresa tu correo' />
                        <button type='submit'>➔</button>

                    </Box>

                    <Typography>
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
                <Typography>
                    © 2025 DevNova Solutions. Todos los derechos reservados.
                </Typography>

                <Typography>
                    Aviso de privacidad | Términos y condiciones
                </Typography>

            </Box>



        </Box>

    )
}
export default Footer
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (

        <Box sx={{
            width: '99%',
            margin: '2% 1%',
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>

                <Box sx={{
                    width: '50%',
                    height: 'auto',
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

                        <Typography>
                            Experiencia y clientes
                        </Typography>
                    </Box>

                    <Typography>
                        Resultados que hablan y relaciones construidas con la calidad de innvocacion
                    </Typography>

                </Box>

                <Box sx={{
                    display: 'flex',
                    width: '50%',
                    justifyContent: 'flex-end',
                }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>

                        <img src='public/star.png' alt='icon'

                            style={{ width: '55px', height: '55px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                        }}>
                            <h3>+50</h3>
                            <Typography sx={{
                                color: '#888691',
                                marginTop: '-10px',
                            }}>

                                proyectos entregados</Typography>

                        </Box>



                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',

                    }}>

                        <img src='public/star.png' alt='icon'

                            style={{ width: '55px', height: '55px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                        }}>
                            <h3>+50</h3>
                            <Typography sx={{
                                color: '#888691',
                                marginTop: '-10px',
                            }}>

                                proyectos entregados</Typography>

                        </Box>



                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>

                        <img src='public/star.png' alt='icon'

                            style={{ width: '55px', height: '55px', }}></img>

                        <Box sx={{
                            marginBottom: '14px',
                        }}>
                            <h3>+50</h3>
                            <Typography sx={{
                                color: '#888691',
                                marginTop: '-10px',
                            }}>

                                proyectos entregados</Typography>

                        </Box>



                    </Box>


                </Box>

            </Box>

            <Box sx={{
                height: 'auto',
                width: 'auto',
                display: 'flex',

            }}>

                <Box sx={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    width: '28%',
                    display: 'flex',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    marginBottom: '20px',
                }}>
                    <img src='public/empresaria.jpeg' alt='icon'

                        style={{ width: '90px', height: '90px', }}></img>
                    <Box sx={{
                        marginLeft: '20px',
                    }}>
                        <Typography sx={{
                            color: '#888691',
                        }}>
                            "El equipo de DevNova entendio perfectamente nuestras necesidades y entrego un producto de gran valor. Altamente recomendados"
                        </Typography>
                        <Typography sx={{
                            fontWeight: 'bold',
                            marginTop: '20px',
                        }}>
                            Laura Martinez
                        </Typography>
                        <Typography sx={{
                            color: '#888691',
                        }}>
                            Directora de Marketing Startup
                        </Typography>
                        <img src='public/rating.jpeg' alt='icon'

                            style={{ width: '200px', height: '50px', borderRadius: '10px', }}></img>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    width: '28%',
                    display: 'flex',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    marginBottom: '20px',
                }}>
                    <img src='public/empresario.jpeg' alt='icon'

                        style={{ width: '90px', height: '90px', }}></img>
                    <Box sx={{
                        marginLeft: '20px',
                    }}>
                        <Typography sx={{
                            color: '#888691',
                        }}>
                            "Soluciones creativs, comunicacion efectiva y un gran dominio tecnico. Sin duda los volveria a contratar para futuros proyectos."
                        </Typography>
                        <Typography sx={{
                            fontWeight: 'bold',
                            marginTop: '20px',
                        }}>
                            Carlos Ramirez
                        </Typography>
                        <Typography sx={{
                            color: '#888691',
                        }}>
                            CTO. Empresa de Retal
                        </Typography>
                        <img src='public/rating.jpeg' alt='icon'

                            style={{ width: '200px', height: '50px', borderRadius: '10px', }}></img>
                    </Box>
                </Box>


                <Box>
                    <Typography>
                        Empresa que han confiado en nosotros
                    </Typography>

                    <Box>

                        <Box>
                            <img src="" alt="" />
                        </Box>
                        <Box>
                            <img src="" alt="" />
                        </Box>
                        <Box>
                            <img src="" alt="" />
                        </Box>
                        <Box>
                            <img src="" alt="" />
                        </Box>
                    </Box>

                </Box>



            </Box>


        </Box>


    )
}
export default Hero
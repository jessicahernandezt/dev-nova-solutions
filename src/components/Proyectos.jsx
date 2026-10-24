import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (

        <Box sx={{
            width: '90%',
            margin: '30px 70px',
            height: 'auto',
        }}>

            <Box sx={{
                display: 'flex',
                alignContent: 'center',
                maxWidth: '100%',
            }}>

                <Box sx={{
                    width: '50%',
                }}>

                    <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}>Proyectos Destacados</Typography>

                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                    }}> Soluciones reales para negocios reales</Typography>

                    <Typography sx={{
                        color: '#888691',
                        fontSize: '18px',
                    }}>Conoce alguno de nuestros proyectos mas recientes y como ayudarnos a nuestros clientes a alcanzar sus objetivos</Typography>

                </Box>

                <Box sx={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        color: '#7c4dff',
                    }}>
                        Ver todos los proyectos ➔
                    </Typography>
                </Box>


            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',

            }}>

                <Box sx={{
                    width: '400px',
                    height: '350px',
                    backgroundColor: '#7c4dff',
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundImage: `url(public/tarjeta1.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                    margin: '30px 0px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>

                        <Box sx={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '5px 10px',
                        }}>
                            <Box sx={{
                                width: '50px',
                                backgroundColor: '#7c4dff',
                                padding: '0px 3px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                margin: '4px 10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    color: '#fff',
                                }}>
                                    Web
                                </Typography>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }}>
                                Plataforma de gestion empresarial
                            </Typography>

                            <Typography sx={{
                                color: '#888691',
                                fontSize: '16px',
                                margin: '0px 10px',
                            }}>
                                Sistema completo para la administracion de procesos internos
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        React
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Node.js
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        PostgreSQL
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontSize: '15px',
                                color: '#7c4dff',
                            }}>
                                Ver proyecto ➔
                            </Typography>

                        </Box>

                    </Box>


                </Box>

                <Box sx={{
                    width: '400px',
                    height: '350px',
                    backgroundColor: '#7c4dff',
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundImage: `url(public/tarjeta2.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                    margin: '30px 0px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>

                        <Box sx={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '5px 10px',
                        }}>
                            <Box sx={{
                                width: '50px',
                                backgroundColor: '#7c4dff',
                                padding: '0px 3px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                margin: '4px 10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    color: '#fff',
                                }}>
                                    Movil
                                </Typography>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }}>
                                Plataforma de gestion empresarial
                            </Typography>

                            <Typography sx={{
                                color: '#888691',
                                fontSize: '16px',
                                margin: '0px 10px',
                            }}>
                                Sistema completo para la administracion de procesos internos
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Flutter
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Firebase
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Node.js
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontSize: '15px',
                                color: '#7c4dff',
                            }}>
                                Ver proyecto ➔
                            </Typography>

                        </Box>

                    </Box>


                </Box>

                <Box sx={{
                    width: '400px',
                    height: '350px',
                    backgroundColor: '#7c4dff',
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundImage: `url(public/tarjeta3.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                    margin: '30px 0px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>

                        <Box sx={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '5px 10px',
                        }}>
                            <Box sx={{
                                width: '50px',
                                backgroundColor: '#7c4dff',
                                padding: '0px 3px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                margin: '4px 10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    color: '#fff',
                                }}>
                                    Web
                                </Typography>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }}>
                                Plataforma de gestion empresarial
                            </Typography>

                            <Typography sx={{
                                color: '#888691',
                                fontSize: '16px',
                                margin: '0px 10px',
                            }}>
                                Sistema completo para la administracion de procesos internos
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        React
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Express
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        MongoDB
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontSize: '15px',
                                color: '#7c4dff',
                            }}>
                                Ver proyecto ➔
                            </Typography>

                        </Box>

                    </Box>


                </Box>

                <Box sx={{
                    width: '400px',
                    height: '350px',
                    backgroundColor: '#7c4dff',
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundImage: `url(public/tarjeta4.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '0px 10px 20px rgba(29, 29, 31, 0.3)',
                    margin: '30px 0px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}>

                        <Box sx={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '5px 10px',
                        }}>
                            <Box sx={{
                                width: '110px',
                                backgroundColor: '#7c4dff',
                                padding: '0px 3px',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                margin: '4px 10px',
                            }}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    color: '#fff',
                                }}>
                                    E- commerce
                                </Typography>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }}>
                                Plataforma de gestion empresarial
                            </Typography>

                            <Typography sx={{
                                color: '#888691',
                                fontSize: '16px',
                                margin: '0px 10px',
                            }}>
                                Sistema completo para la administracion de procesos internos
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                width: '100%',
                            }}>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Next.js
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        Stripe
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: 'auto',
                                    backgroundColor: '#b5baec6c',
                                    padding: '0px 8px',
                                    paddingTop: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    borderRadius: '10px',
                                }}>
                                    <Typography sx={{
                                        color: '#0000007a',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                    }}>
                                        AWS
                                    </Typography>
                                </Box>
                            </Box>

                            <Typography sx={{
                                margin: '5px 10px',
                                fontSize: '15px',
                                color: '#7c4dff',
                            }}>
                                Ver proyecto ➔
                            </Typography>

                        </Box>

                    </Box>


                </Box>



            </Box>



        </Box>


    )
}
export default Hero
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function QuienesSomos() {
    return (

        <Box sx={{
            marginTop: '40px',
            maxWidth: '100%',
            display: 'flex',
            backgroundColor: '#f7f7ff',
            paddingTop: '40px',
            paddingBottom: '30px',
        }}>

            <Box sx={{
                maxWidth: '40%',
                marginLeft: '5%',
                height: 'auto',
                paddingTop: '30px',
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                }}>
                    Quienes somos
                </Typography>

                <Typography sx={{
                    fontSize: '35px',
                    fontWeight: 'bold',
                }}>
                    Un equipo que convierte ideas en impacto
                </Typography>

                <Typography sx={{
                    color: '#888691',
                    paddingBottom: '40px',
                    marginTop: '10px',
                }}>
                    En Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnologia y la innovacion, Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real
                </Typography>

                <Button sx={{
                    padding: '15px 20px',
                    color: '#fff',
                    backgroundColor: '#7c4dff',
                    borderRadius: '10px',
                }}>
                    Conoce mas sobre nosotros ➜
                </Button>

            </Box>

            <Box sx={{
                width: '35%',
                height: 'auto',
                marginLeft: '5%',
            }}>
                <img src='public/img (1).png' alt='img-equipo'

                 style={{
                    width: '450px',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
                 }}>

                 </img>
            </Box>

            <Box sx={{
                width: '25%',
                marginLeft: '5%',
                height: 'auto',
            }}>

                <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/Corazon.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>5+</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    Años de experiencia</Typography>
                            </Box>

                        </Box>


                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/Corazon.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>50+</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    Proyectos completados</Typography>
                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/Corazon.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>30+</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    Clientes satisfechos</Typography>
                            </Box>

                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <img src='public/Corazon.png' alt='icon'

                                style={{ width: '55px', height: '55px', }}></img>

                            <Box sx={{
                                marginBottom: '15px',
                            }}>
                                <h3>Talento multidiciplinario</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    Desarrolladores, diseñadores y estrategas</Typography>
                            </Box>

                        </Box>  

            </Box>









        </Box>

            )
}
export default QuienesSomos
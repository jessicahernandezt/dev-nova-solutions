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
            height: '500px',
            display: 'flex',
            backgroundColor: '#f7f7ff',
            paddingTop: '40px',
        }}>

            <Box sx={{
                maxWidth: '40%',
                marginLeft: '5%',
                marginRight: '20px',
            }}>
                <Typography>
                    Quienes somos
                </Typography>

                <h2>
                    Un equipo que convierte ideas en impacto
                </h2>

                <p>
                    En Dev Nova Solutions somos un equipo de profesionales apasionados por la tecnologia y la innovacion, Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real
                </p>

                <button>
                    Conoce mas sobre nosotros ➜
                </button>

            </Box>

            <Box sx={{
                width: '35%',
                height: '100%',
            }}>
                <img src='public/pc.jpg' alt='icon-pc'

                 style={{
                    width: '100%',
                 }}>

                 </img>
            </Box>

            <Box sx={{
                width: '25%',
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
                                <h3>100%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    comprometidos</Typography>
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
                                <h3>100%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    comprometidos</Typography>
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
                                <h3>100%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    comprometidos</Typography>
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
                                <h3>100%</h3>
                                <Typography sx={{
                                    color: '#888691',
                                    marginTop: '-10px',
                                }}>
                                    comprometidos</Typography>
                            </Box>

                        </Box>  

            </Box>









        </Box>

            )
}
export default QuienesSomos
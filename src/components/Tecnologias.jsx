import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (
        <Box sx={{
            width: '100%',
            height: '300px',
            backgroundColor: '#f7f7ff',
            padding: '20px 30px',
            
        }}>

            <Box sx={{
                display: 'flex',
                width: '97%',
                margin: '0px 50px',
            }}>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                    <Box sx={{
                        width: '40px',
                        height: '3px',
                        backgroundColor: '#7c4dff',
                    }}>
                    </Box>

                    <Typography sx={{
                        fontWeight: 'bolder',
                        marginLeft: '10px',
                    }}>
                        Tecnologias
                    </Typography>

                </Box>


                <Box>
                    <Typography sx={{
                        color: '#8c8c8c',
                    }}>
                        Utilizamos tecnologias modernas y confiables para desarrollar solicitudes escalables, seguras y de alto rendimiento
                    </Typography>
                </Box>

            </Box>

            <Typography sx={{
                fontSize: '30px',
                fontWeight: 'bold',

            }}>
                Herramientas que hacen posibles grandes ideas
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/react.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        React
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/Vite.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Vite
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/Node.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Node.Js
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/Express.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Express
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/MongoDB.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        MongoDB
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/PostgreeSQL.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        PostgreeSQL
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/Git.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Git
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/flutter.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Flutter
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/Python.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Python
                    </Typography>

                </Box>

                <Box sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '150px',
                    height: 'auto',
                    borderRadius: '9px',
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
                    padding: '10px',
                    backgroundColor: '#f7f6f1',
                }}>

                    <img src='public/react.png' alt='icon-react'

                        style={{
                            width: '60%',
                            height: 'auto',
                        }}>
                    </img>

                    <Typography>
                        Python
                    </Typography>

                </Box>

            </Box>

        </Box>

    )
}
export default Hero
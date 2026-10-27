import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (
        <Box
            sx={{
                minHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 6
            }}
        >
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        flexWrap: 'wrap'
                    }}
                >
                    <Box sx={{ flex: '1 1 420px' }}>
                        <Typography
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                letterSpacing: 2,
                                mb: 3
                            }}
                        >
                            IDEAS · TECNOLOGIA · RESULTADOS
                        </Typography>

                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '40px',
                                marginBottom: '20px'
                            }}
                        >
                            Transformando ideas en soluciones digitales
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: 'arial',
                                fontSize: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            Desarrollamos software a la medida,
                            para poder impulsar el crecimiento de tu negocio,
                            combinando tu negocio con la tecnología, creatividad y experiencia
                            para convertir tus ideas en productos reales.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Button
                                sx={{
                                    backgroundColor: '#8B5CF6',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#7c3aed' }
                                }}
                            >
                                Comenzar el Proyecto
                            </Button>

                            <Button
                                sx={{
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    color: '#8B5CF6',
                                    border: '1px solid #8B5CF6'
                                }}
                            >
                                Conoce nuestro servicio
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ flex: '1 1 420px', position: 'relative' }}>
                        <Typography
                            sx={{
                                position: 'absolute',
                                top: -55,
                                right: 10,
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                transform: 'rotate(-6deg)',
                                lineHeight: 1.2,
                                zIndex: 2,
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            Código que crea
                            <br />
                            oportunidades
                        </Typography>

                        <Box SX={{
                         display: 'flex',
                         alignItems: 'center',
                          }}>
                           
                           <img src= 'public/inicio.png' alt='icon'
                           style= {{width: '100%', heigth:'60%' }}></img>

                                 <Box sx={{
                                    marginBottom: '30%'
                                 }}>
                                    

                                    <Typography sx={{
                                        color:'#888691',     
                                        marginTop: '-220px',
                                         }}>

                                            Devnova  group solutions
                                    
                                    </Typography>
                                    
            
                                    
                                    </Box>  {/* este box es el fin de la parte de la imagen del inicio de devnova y asi*/}
                                

                          </Box> 

                    </Box>
                </Box>



                              <box>



                                
                              </box>



            </Container>  {/* no passar de este conteiner o todo da error, nota mental, se esta trabajando solo sobre el conteiner y nada debe de ir afuera*/}
        </Box>
    )
}

export default Hero

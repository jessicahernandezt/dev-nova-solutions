<<<<<<< HEAD
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
                        gap: 6
                    }}>

                    <Box sx={{ width: '50%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                                color: '#7c4dff',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            IDEAS · TECNOLOGIA · RESULTADOS

                        </Typography>

                        <Typography
                            variant='h2'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 2 }}
                        >Transformamos ideas en soluciones digitales</Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Desarrollamos software a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnología, creatividad y experiencia para convertir tus ideas en productos reales</Typography>
                    </Box>
                </Box>

            </Container>
=======
import {Box, 
    Button, 
    Container,
    Typography} from '@mui/material'

function Hero() {
    return(
        <Box
        sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}
        >

        <Container maxWidth='lg' 
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
        }}>
            <Box
            sx={{
                width: '80%',
                
            }}>

                <Typography
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    letterSpacing: 2,
                }}>

                    IDEAS · TECNOLOGIA · RESULTADOS

                </Typography>



                <Typography variant="h3"
                sx={{
                    color: '#19181d',
                    fontWeight: 'bold',
                    fontSize: '50px',
                }}>
                    
                    Transformamos ideas en{' '}
                    
                

                <Typography component='span'
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    fontSize: '50px',
                }}>
                    
                soluciones digitales 
                </Typography>

                </Typography>

                <Typography
                sx={{
                    color: '#888691',
                    fontWeight: 'light',
                    fontSize: '20px',
                    marginTop: '15px',
                }}>
                   <b>Desarrollamos software</b> a la medida para impulsar el crecimiento de tu negocio. Combinamos tecnologia, creatividad y experiencia para convertir tus ideas en productos reales
                </Typography>

                <Button sx={{
                color: '#fff',
                outline: '1px solid #7c4dff',
                backgroundColor: '#7c4dff',
                padding: '10px 10px',
                borderRadius: '10px',
                margin: '20px 0px',
                fontWeight: 'bold',
                }}>
                        
                Solicitar cotizacion → </Button>


                <Button sx={{
                color: '#7c4dff',
                fontWeight: 'bold',
                outline: '1px solid #7c4dff',
                padding: '10px 10px',
                borderRadius: '5px',
                margin: '10px 30px',
                }}>
                
                Conoce mas</Button>


                <Typography>
                    
                </Typography>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '-10px',
                 }}>

                    <Box sx={{
                    maxWidth: '33%',
                 }}>

                    <h3>
                    
                    100%
                 
                 </h3>
                       <Typography sx={{
                    color: '#888691',
                 }}>
                    comprometidos</Typography>
                    </Box>


                    <Box sx={{
                    maxWidth: '33%',
                 }}>
                        <h3>+50</h3> 
                       <Typography sx={{
                    color: '#888691',
                 }}>
                    
                    proyectos entregados</Typography>

                    </Box>


                    <Box sx={{
                    maxWidth: '33%',
                 }} >
                        <h3>98%</h3>
                        <Typography sx={{
                    color: '#888691',
                 }}>
                    Clientes satisfechos</Typography>
                    </Box>


                </Box>

            </Box> 

            <Box
            sx={{
                width: '70%',
                height: 'auto',
                marginLeft: '100px',
            }}>
                <img src='src/assets/Hero.png' alt='Hero image' />

            </Box>       

        </Container>
>>>>>>> main
        </Box>
    )
}
export default Hero
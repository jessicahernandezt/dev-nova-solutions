import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

function CrecerAppsM() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 1
            }}
        >

            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5
                    }}>

                    <Box sx={{ width: '50%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                                color: '#000000',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            -- ¿LISTO PARA CRECER?

                        </Typography>

                        <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight: 1 }}>
                            Convirtamos tu idea en una   <br />
                        <Box component="span" sx={{ color: '#7c4dff'}}> 
                            app real
                            </Box>
                        </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1.1rem', mb:3}}
                        >Cuentanos sobre tu proyecto y te ayudaremos a convertirlo en una aplicacion movil exitosa. </Typography>

                         <Button
                        sx={{
                            color: '#fff',
                            ml: 1,
                            backgroundColor:'#7c4dff',
                            textTransform: 'none',
                            borderRadius: 2,
                            boxShadow: 2
                        }}>
                            Solicitar cotizacion →
                        </Button>

                        <Button
                        sx={{
                            color: '#000',
                            ml: 5,
                            backgroundColor:'#fff',
                            textTransform: 'none',
                            borderRadius: 2,
                            boxShadow: 2
                        }}>
                            Conocer nuestro proceso
                        </Button>
                    </Box>
                    
                    <Box
                    component="img"
                    src='public/img (9).png'
                    sx={{
                        width: '100%',
                        maxWidth: 475,
                        height: 320,
                        objectFit: 'cover',
                        objectPosition: 'center bottom',
                        borderRadius: 2
                    }}
                    >
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default CrecerAppsM
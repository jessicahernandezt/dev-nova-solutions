import { DesktopWindowsOutlined, SmartphoneOutlined, CodeOutlined, LightbulbOutlined, AccountTreeOutlined, GppGoodOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    Container,
    Typography
} from '@mui/material'

function Servicios() {
    return (
        <Box
            sx={{
                minHeight: '520px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f7f7ff',
                py: 6
            }}>
                <Container maxWidth='lg'>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                    }}>

                    <Box sx={{ width: '60%' }}>
                        <Typography
                            variant='overline'
                            sx={{
                            color: '#171b35',
                            fontWeight: 'bold',
                            letterSpacing: 2
                            }}>
                        --Nuestros Servicios
                        </Typography>

                         <Typography
                            variant='h3'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight:'1'}}>
                            Soluciones tecnologicas para cada nececidad
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '1rem', mb:5}}
                        >Ofrecemos servicios de desarrollo de software, aplicaciones web y moviles, consultoria y soporte, para ayudarte a optimizar tus procesos y alcanzar tus objetivos</Typography>
                    </Box>
                        <Button sx={{color: '#7c4dff', textTransform: 'none', fontWeight:'bold' }}>Ver Todos Los Servicios →</Button>
                </Box>
                
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr',sm: 'repeat(2, 1fr)',md: 'repeat(3, 1fr)',},
                        gap: 3,
                        mt: 6,
                    }}
                    >

                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                            }}>
                            <DesktopWindowsOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Desarrollo Web
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Sitios y plataformas web modernas, seguras y escalables.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>


                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                        }}>
                        <SmartphoneOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Aplicaciones Móviles
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Apps nativas e híbridas para iOS y Android.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>


                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                        }}>
                        <CodeOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Desarrollo de Software
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Soluciones a la medida para procesos específicos.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>


                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                        }}>
                        <LightbulbOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Consultoría Tecnológica
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Te ayudamos a definir la mejor estrategia tecnológica.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>


                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                        }}>
                        <AccountTreeOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Integración de Sistemas
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Conectamos tus herramientas y optimizamos procesos.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>


                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff' }}>
                        <Box sx={{
                            width: 56, 
                            height: 56, 
                            borderRadius: 2,
                            bgcolor: '#eef0ff', 
                            color: '#7c4dff',
                            display: 'grid', 
                            placeItems: 'center', mb: 2,
                        }}>
                        <GppGoodOutlined />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Soporte y Mantenimiento
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Mantenemos tus sistemas funcionando correctamente.
                        </Typography>
                        <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0 }}>
                        Ver más →
                        </Button>
                    </Box>
</Box>

            </Container>
        </Box>
    )
}

export default Servicios
import { DesktopWindowsOutlined, SmartphoneOutlined, CodeOutlined, LightbulbOutlined, AccountTreeOutlined, GppGoodOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
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
                <Box sx={{
                    display: 'grip',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'},
                    gap: 4,
                    mt: 6,
                }}>
                    <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: '#eef0ff',
                        color: '#7c4dff',
                        display: 'grid',
                        placeItems: 'center',
                    }}>
                        <DesktopWindowsOutlined />
                    </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                                Desarrollo Web
                            </Typography>
                            <Typography variant='body2' sx={{ color: '#text.secondary', my: 0.5}}>
                                Sitios y plataformas web modernas, seguras y escalables.
                            </Typography>
                            <Button sx={{ color: '#7c4dff', textTransform: 'none', fontWeight: 'bold', p: 0}}>
                                Ver mas 
                            </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Servicios
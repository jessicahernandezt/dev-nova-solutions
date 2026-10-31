import DomainIcon from '@mui/icons-material/Domain';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function SolucionesMoviles() {
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
                        --¿Que podemos desarrollar?
                        </Typography>

                         <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight:'1'}}>
                            Soluciones moviles para cada necesidad
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '0.9rem', mb:3}}
                        >Diseñamos y desarrolamos aplicaciones que se adaptan a tus objetivos y al tipo de usuario de tu negocio.</Typography>
                    </Box>
                </Box>
                
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr',sm: 'repeat(4, 1fr)'},
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
                        <DomainIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Apps empresariales
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                            Soluciones internas para equipos, procesos y operacion de tu empresa.
                        </Typography>
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
                        <CalendarTodayIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Apps de reservas
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Sistema de citas, reservas y agendamiento con experiencias simples.
                        </Typography>
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
                        <ShoppingCartIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Apps de comercio
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Apps de e-comerce con catalogo, pagos y gestion de pedidos.
                        </Typography>
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
                            <SettingsIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                        Apps a la medida
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Desarrollamos la idea que tienes en mente, completamente personalizada.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SolucionesMoviles
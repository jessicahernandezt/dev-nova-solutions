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

function ProcesoDesarroloMovil() {
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
                        --Proceso de desarrollo movil
                        </Typography>

                         <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mt: 1, mb: 1, lineHeight:'1'}}>
                            De la idea a las tiendas de aplicaciones
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '0.9rem', mb:3}}
                        >Te acompañamos en todo el proceso con una metodologia agil y transparente.</Typography>
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
                        Estrategia
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Analizamos tu idea, objetivos y usuarios para definir la mejor solucion.
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
                        UX/UI
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Diseñamos una experiencia intuitiva, atractiva y centrada en el usuario.
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
                        Desarrollo
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Construimos la app con tecnologias modernas, seguras y escalables.
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
                        Publicacion
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', my: 1 }}>
                        Te ayudamos a publicar en App store y Google Play. Con acompañamiento continuo.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProcesoDesarroloMovil
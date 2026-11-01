import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { 
    Box, 
    Container, 
    Typography 
} from '@mui/material'

function ProcesoDesarroloMovil() {
    return (
        <Box sx={{ 
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 2
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
                        -- PROCESO DE DESARROLLO MOVIL
                        </Typography>

                         <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35'}}>
                            De la idea a las tiendas de aplicaciones
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '0.9rem'}}
                        >Te acompañamos en todo el proceso con una metodologia agil y transparente.</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        mt: 1,
                    }}>
                        
                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff', flex: 1, boxShadow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2}}>
                            <Box sx={{ 
                                width: 40,
                                height: 40, 
                                borderRadius: 10, 
                                bgcolor: '#eef0ff', 
                                display: 'grid', 
                                placeItems: 'center', 
                                fontWeight: 'bold', 
                                flexShrink: 0 }}>
                                1
                            </Box>
                            <LightbulbIcon sx={{ fontSize: 40, color: '#7c4dff' }} />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                            Estrategia
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Analizamos tu idea, objetivos y usuarios para definir la mejor solucion.
                        </Typography>
                    </Box>

                    <Box sx={{ alignSelf: 'center', 
                        px: { md: 2 }, py: { xs: 1, md: 0 }, 
                        color: '#7c4dff', 
                        fontSize: '1.8rem', 
                        lineHeight: 1, 
                        transform: { xs: 'rotate(90deg)', md: 'none' } }}>
                        →
                    </Box>

                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff', flex: 1, boxShadow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ width: 40, 
                                height: 40, 
                                borderRadius: 10, 
                                bgcolor: '#eef0ff', 
                                display: 'grid', 
                                placeItems: 'center', 
                                fontWeight: 'bold', 
                                flexShrink: 0 }}>
                                2
                            </Box>
                            <ColorLensIcon sx={{ fontSize: 40, color: '#7c4dff' }} />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                            UX/UI
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Diseñamos una experiencia intuitiva, atractiva y centrada en el usuario.
                        </Typography>
                    </Box>

                    <Box sx={{ alignSelf: 'center', 
                        px: { md: 2 }, py: { xs: 1, md: 0 }, 
                        color: '#7c4dff', 
                        fontSize: '1.8rem', 
                        lineHeight: 1, 
                        transform: { xs: 'rotate(90deg)', md: 'none' } }}>
                        →
                    </Box>

                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff', flex: 1, boxShadow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ width: 40, 
                                height: 40, 
                                borderRadius: 10, 
                                bgcolor: '#eef0ff', 
                                display: 'grid', 
                                placeItems: 'center', 
                                fontWeight: 'bold', 
                                flexShrink: 0 }}>
                                3
                            </Box>
                            <CodeIcon sx={{ fontSize: 40, color: '#7c4dff' }} />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                            Desarrollo
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Construimos la app con tecnologias modernas, seguras y escalables.
                        </Typography>
                    </Box>

                    <Box sx={{ alignSelf: 'center', 
                        px: { md: 2 }, py: { xs: 1, md: 0 }, 
                        color: '#7c4dff', 
                        fontSize: '1.8rem', 
                        lineHeight: 1, 
                        transform: { xs: 'rotate(90deg)', md: 'none' } }}>
                        →
                    </Box>

                    <Box sx={{ p: 3, borderRadius: 3, bgcolor: '#fff', flex: 1, boxShadow: 1}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ width: 40, 
                                height: 40, 
                                borderRadius: 10, 
                                bgcolor: '#eef0ff', 
                                display: 'grid', 
                                placeItems: 'center', 
                                fontWeight: 'bold', 
                                flexShrink: 0 }}>
                                4
                            </Box>
                            <RocketLaunchIcon sx={{ fontSize: 40, color: '#7c4dff' }} />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', color: '#171b35' }}>
                            Publicacion
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Te ayudamos a publicar en App Store y Google Play con acompañamiento continuo.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProcesoDesarroloMovil
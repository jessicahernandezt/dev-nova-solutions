import PeopleIcon from '@mui/icons-material/People';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ExtensionIcon from '@mui/icons-material/Extension';
import BarChartIcon from '@mui/icons-material/BarChart';
import {
    Box,
    Container,
    Typography
} from '@mui/material'

function VentajasAppM() {
    return (
        <Box
            sx={{
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                py: 1
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
                        -- VENTAJAS PARA TU NEGOCIO
                        </Typography>

                         <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', lineHeight:'1'}}>
                            Más valor, más usuarios, más crecimiento
                        </Typography>
                         <Typography
                        sx={{color: '#666', fontSize: '1rem', mb:1}}
                        >Las aplicaciones móviles abren nuevas oportunidades para conectar con tus clientes y hacer crecer tu negocio.</Typography>
                    </Box>
                </Box>
                
                    <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'},
                        gap: 3,
                        mt: 1,
                    }}
                    >

                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 2, p: 1, borderRadius: 3, minHeight: 200, boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 80,
                                height: 80,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <PeopleIcon sx={{ color: "#5b6cf0", fontSize: 40 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '1.1rem', mb: 1 }}>
                                Mejor experiencia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Interfaces intuitivas que aumentan la satisfacción y la lealtad de tus usuarios.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 2, p: 1, borderRadius: 3, minHeight: 200, boxShadow: 2}}>
                            <Box
                                sx={{
                                width: 80,
                                height: 80,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <SmartphoneIcon sx={{ color: "#5b6cf0", fontSize: 40 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '1.1rem', mb: 1 }}>
                                Acceso desde cualquier lugar
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Tus servicios al alcance de tus usuarios, en todo momento.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 2, p: 1, borderRadius: 3, minHeight: 200, boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 80,
                                height: 80,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <ExtensionIcon sx={{ color: "#5b6cf0", fontSize: 40 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '1.1rem', mb: 1 }}>
                                Integración
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Conectamos tu app con sistemas existentes, APIs y servicios de terceros.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 2, p: 1, borderRadius: 2, minHeight: 200, boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 80,
                                height: 80,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <BarChartIcon sx={{ color: "#5b6cf0", fontSize: 40 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '1.1rem', mb: 1 }}>
                                Escalabilidad
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Arquitectura preparada para crecer junto con tu negocio.
                                </Typography>
                            </Box>
                        </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default VentajasAppM
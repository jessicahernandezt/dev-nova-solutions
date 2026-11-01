import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LockIcon from '@mui/icons-material/Lock';
import PaymentIcon from '@mui/icons-material/Payment';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {
    Box,
    Container,
    Typography
} from '@mui/material';

function FuncionalidadesAppsM() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                py: 1,
            }}>

            <Container maxWidth='lg'>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>

                    <Box sx={{ width: { xs: '100%', md: '60%' } }}>
                        <Typography
                        variant='overline'
                            sx={{
                                color: '#000000',
                                fontWeight: 'bold',
                                letterSpacing: 2
                            }}>

                            -- FUNCIONALIDADES FRECUENTES

                        </Typography>

                        <Typography
                            variant='h4'
                            sx={{ fontWeight: 'bold', color: '#171b35', mb: 1, lineHeight: 1 }}>
                            Todo lo que tu app puede incluir
                        </Typography>

                        <Typography
                        sx={{color: '#666', fontSize: '1rem', mb:3}}
                        >Integramos las funcionalidades que tu negocio necesita para ofrecer una experiencia completa y funcional. </Typography>
                    </Box>

                <Box
                    sx={{
                        width: {  md: '60%' },
                        display: 'grid',
                        gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'},
                        gap: 1.5
                    }}>

                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1, borderRadius: 3, aspectRatio: '1/1', boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 40,
                                height: 40,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <NotificationsNoneIcon sx={{ color: "#5b6cf0", fontSize: 25 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '0.9rem' }}>
                                Notificaciones
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                Notificaciones push para manetener informados a tus usuarios.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1, borderRadius: 3, aspectRatio: '1/1', boxShadow: 2}}>
                            <Box
                                sx={{
                                width: 40,
                                height: 40,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <LockIcon sx={{ color: "#5b6cf0", fontSize: 25 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '0.9rem', mb: 1 }}>
                                Login y usuarios
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                Registro, inicio de sesion y gestion de perfiles seguros.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1, borderRadius: 3, aspectRatio: '1/1', boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 40,
                                height: 40,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <PaymentIcon sx={{ color: "#5b6cf0", fontSize: 25 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '0.9rem', mb: 1 }}>
                                Pagos
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                Integracion con pasarelas de pago para cobros seguros y sencillos.
                                </Typography>
                            </Box>
                        </Box>


                        <Box sx={{ bgcolor: '#fff', display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 1, borderRadius: 2, aspectRatio: '1/1', boxShadow: 2 }}>
                            <Box
                                sx={{
                                width: 40,
                                height: 40,
                                flexShrink: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 2,
                                bgcolor: "#e8ecf8",
                                }}>
                                <FmdGoodIcon sx={{ color: "#5b6cf0", fontSize: 25 }} />
                            </Box>

                            <Box>
                                <Typography sx={{ fontWeight: 'bold', color: '#171b35', fontSize: '0.9rem', mb: 1 }}>
                                Geolocalizacion
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                Mapas, ubicacion en tiempo real y servicios basados en ubicacion.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default FuncionalidadesAppsM

import {
    Box,
    Typography
} from '@mui/material';

export default function Hero() {
    return (
        <Box sx={{
            width: '95%',
            margin: '2% 1%',
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0% 1%',
            }}>

                <Box sx={{
                    width: '50%',
                    height: 'auto',
                }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            width: '40px',
                            height: '3px',
                            backgroundColor: '#7c4dff',
                            marginRight: '10px',
                        }}>
                        </Box>

                        <Typography sx={{ fontWeight: 'bold', color: '#7c4dff' }}>
                            Experiencia y clientes
                        </Typography>
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: '#172554' }}>
                        La confianza de nuestros clientes nos impulsa
                    </Typography>
                    <Typography sx={{ color: '#888691', mt: 0.5 }}>
                        Resultados que hablan y relaciones construidas con la calidad e innovación.
                    </Typography>

                </Box>

                <Box sx={{
                    display: 'flex',
                    width: '50%',
                    justifyContent: 'space-between',
                }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/star.png' alt='icon' style={{ width: '40px', height: '40px' }} />
                        <Box sx={{ marginBottom: '14px', ml: 1 }}>
                            <h3>5+</h3>
                            <Typography sx={{ color: '#888691', marginTop: '-10px', fontSize: '0.85rem' }}>
                                Años de experiencia
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/star.png' alt='icon' style={{ width: '40px', height: '40px' }} />
                        <Box sx={{ marginBottom: '14px', ml: 1 }}>
                            <h3>+50</h3>
                            <Typography sx={{ color: '#888691', marginTop: '-10px', fontSize: '0.85rem' }}>
                                Proyectos entregados
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/star.png' alt='icon' style={{ width: '40px', height: '40px' }} />
                        <Box sx={{ marginBottom: '14px', ml: 1 }}>
                            <h3>30+</h3>
                            <Typography sx={{ color: '#888691', marginTop: '-10px', fontSize: '0.85rem' }}>
                                Casos exitosos
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/star.png' alt='icon' style={{ width: '40px', height: '40px' }} />
                        <Box sx={{ marginBottom: '14px', ml: 1 }}>
                            <h3>98%</h3>
                            <Typography sx={{ color: '#888691', marginTop: '-10px', fontSize: '0.85rem' }}>
                                Satisfacción
                            </Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>

            <Box sx={{
                height: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                mt: 3
            }}>

                <Box sx={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    padding: '20px',
                    width: { xs: '100%', md: '30%' },
                    display: 'flex',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
                    bgcolor: '#fff',
                }}>
                    <img src='/empresaria.jpeg' alt='icon' style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                    <Box sx={{ marginLeft: '15px' }}>
                        <Typography sx={{ color: '#888691', fontSize: '0.9rem' }}>
                            "El equipo de DevNova entendió perfectamente nuestras necesidades y entregó un producto de gran valor. Altamente recomendados"
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', marginTop: '15px', color: '#172554' }}>
                            Laura Martínez
                        </Typography>
                        <Typography sx={{ color: '#888691', fontSize: '0.8rem' }}>
                            Directora de Marketing Startup
                        </Typography>
                        <Typography sx={{ color: '#f5a623', mt: 1, letterSpacing: 2 }}>
                            ★★★★★
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    padding: '20px',
                    width: { xs: '100%', md: '30%' },
                    display: 'flex',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
                    bgcolor: '#fff',
                }}>
                    <img src='/empresario.jpeg' alt='icon' style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} />
                    <Box sx={{ marginLeft: '15px' }}>
                        <Typography sx={{ color: '#888691', fontSize: '0.9rem' }}>
                            "Soluciones creativas, comunicación efectiva y un gran dominio técnico. Sin duda los volvería a contratar para futuros proyectos."
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', marginTop: '15px', color: '#172554' }}>
                            Carlos Ramírez
                        </Typography>
                        <Typography sx={{ color: '#888691', fontSize: '0.8rem' }}>
                            CTO. Empresa de Retail
                        </Typography>
                        <Typography sx={{ color: '#f5a623', mt: 1, letterSpacing: 2 }}>
                            ★★★★★
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    padding: '20px',
                    width: { xs: '100%', md: '30%' },
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.08)',
                    bgcolor: '#fff',
                }}>
                    <Typography sx={{ color: '#888691', fontWeight: 'bold', mb: 2 }}>
                        Empresas que han confiado en nosotros
                    </Typography>

                    <Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '15px',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>BBVA</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>Cinépolis</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>Bimbo</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>Telcel</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>AWS</Typography>
                            <Typography sx={{ fontWeight: 'bold', color: '#64748b' }}>Microsoft</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

function FuncionalidadesAppsM() {
    return (
        <Box
            sx={{
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                py: 2
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
                </Box>
            </Container>
        </Box>
    )
}

export default FuncionalidadesAppsM
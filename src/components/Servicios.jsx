
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
                        alignItems: 'center',
                        gap: 10
                        
                    }}>

                    <Box sx={{ width: '60%' }}>
                        <Typography
                        variant='overline'
                        sx={{
                        color: '#7c4dff',
                        fontWeight: 'bold',
                        letterSpacing: 2
                        }}>
                        --Nuestros Servicios
                        </Typography>

                        <Button sx={{color: '#7c4dff'}}>Ver Todos Los Servicios →</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
        
    )
}

export default Servicios
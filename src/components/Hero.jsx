import {Box, 
    Button, 
    Container,
    Typography} from '@mui/material'

function Hero() {
    return(
        <Box
        sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}
        >

        <Container maxWidth='lg'>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>

                <Typography
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    letterSpacing: 2
                }}>

                    IDEAS · TECNOLOGIA · RESULTADOS

                </Typography>

            </Box>

        </Container>
        </Box>
    )
}
export default Hero
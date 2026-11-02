import {Box, Button, Container, Typography} from '@mui/material'

function ProyFuturo() {
    return(
        <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff'}}>
            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', borderRadius: 2, gap: 2, padding: 2, maxWidth: '55%', width: '100%'}}>

                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>¿TIENES UN PROYECTO EN MENTE?<Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}> -</Box>
                        </Typography>

                        <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.4rem', letterSpacing:2}}>
                            Hagamos realidad tu próxima gran idea
                        </Typography>
                    
                        <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                            Cuentanos sobre tu proyecto y descubre como podemos<br />
                            ayudarte a convertirlo en una solucion digital exitosa.
                        </Typography>
                        
                        <Box sx={{display: 'flex', /*width: '100%',*/ alignItems: 'center', justifyContent:'space-evenly', gap: 6, padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff', width:'100%'}}>Solicita cotizacion →</Button>
                            <Button sx={{color: '#7c4dff', fontWeight: 'bold', borderColor: '#7c4dff', border: 2, width:'100%'}}>Conoce nuestros servicios</Button>
                        </Box>
                        
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 6, borderRadius: 2, padding: 1, py: 2, maxWidth: '45%', width: '100%', height: '100%'}}>
                        <Box component='img' src='/img (8).png' alt='' sx={{width: '500px', height: '100%', objectFit:'contain'}}></Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProyFuturo
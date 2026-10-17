import {Box, Button, Typography, Container} from "@mui/material"

function Nosotros(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', paddingBottom: 1}}>
            <Container maxWidth='lg' sx={{padding: '1rem'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 1, width: '100%'}}>
                        <Box sx={{display: 'flex', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 1, width: '100%'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'blue', borderRadius: 2, padding: 0.2, width: '35px'}}>
                        
                    </Box>
                    holasd
                        </Box>
                    </Box>
                    <Box component='img' src="/img (1).png" alt="" sx={{width:'400px', height: '100%', objectFit: 'contain', flexShrink: 0, borderRadius: 2}}></Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 1, width: '100%'}}>
                        
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Nosotros
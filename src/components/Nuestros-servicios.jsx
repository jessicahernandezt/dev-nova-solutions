import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Servicios() {
    return (
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 6}}>

            <Container maxWidth='lg'>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 6}}>
                    
                    <Box sx={{width:"32%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Desarrollo web
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Sitios y plataformas web modernas, seguras y escalables.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>

                </Box>

            </Container>
        </Box>
    )
}
export default Servicios
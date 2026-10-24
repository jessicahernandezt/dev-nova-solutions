import {Box, Button, Container, Typography, Card, CardActions, CardContent, CardMedia} from '@mui/material'

function Tecnologias() {
    return(
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 1}}>
            <Container maxWidth='lg'>
                <Box sx={{/*display: 'flex', alignItems: 'center', gap: 3, backgroundImage: 'url("/img (8).png")', objectFit: 'contain', minHeight:'500px'*/}}>

                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>Tecnologias
                        </Typography>
                        <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                            Utilizamos tecnologias modernas y confiables<br /> para desarrollar soluciones escalables, seguras<br /> y de alto rendimiento
                        </Typography>
                    </Box>

                    <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.2rem', letterSpacing:2}}>
                        Herramientas que hacen posibles grandes ideas
                    </Typography>

                    <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                        <Box sx={{display:'flex', backgroundColor:'white'}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:'120px', height: '120px', objectFit: 'contain', flexShrink: 0}}></Box>
                            <Typography>
                                hola
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Tecnologias
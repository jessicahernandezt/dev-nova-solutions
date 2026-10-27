import {Box, Container, Typography, Card, CardContent, CardMedia} from '@mui/material'

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

                    <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'space-evenly', paddingTop:'2%'}}>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>React</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Vite</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Node.js</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Express</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>MongoDB</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>PostegreSQL</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Git</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>AWS</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Flutter</Box>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 120}}>
                            <CardMedia sx={{ height: 100, width: 100 }} image="/img (11).png" title="neko"/>
                            <CardContent>
                                <Box component='span' sx={{textAlign:'center'}}>Python</Box>
                            </CardContent>
                        </Card>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Tecnologias
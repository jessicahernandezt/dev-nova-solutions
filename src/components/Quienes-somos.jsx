import {Box, Button, Typography, Container} from "@mui/material"

function Nosotros(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', paddingBottom: 1}}>
            <Container maxWidth='lg' sx={{padding: '1rem'}}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: 2, gap: 2, padding: 1, width: '100%', maxWidth:'500px'}}>
                        <Box sx={{display: 'flex', backgroundColor: 'white', flexDirection: 'column', borderRadius: 2, gap: 2, padding: 1, width: '100%'}}>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '0.8rem', letterSpacing:2}}>
                                <Box component='span' sx={{color:'#7c4dff', fontWeight:'bolder', fontSize:'24px'}}>-</Box> ¿Quienes somos?
                            </Typography>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                                Un equipo que convierte ideas en impacto
                            </Typography>
                            <Typography sx={{color: '#666', letterSpacing: 2}}>
                                En Dev Nova Solutions somos un equipo de profecionales apasionados por la tecnologia y la inovacion. 
                                    Ayudamos a empresas y emprendedores a transformar sus ideas en soluciones digitales que generan valor real
                            </Typography>
                            <Button sx={{color: '#ffffff', fontWeight: 'bold', backgroundColor: '#7c4dff'}}>Conoce mas sobre nosotros →</Button>
                        </Box>
                    </Box>
                    <Box component='img' src="/img (1).png" alt="" sx={{width:'400px', height: '100%', objectFit: 'contain', flexShrink: 0, borderRadius: 2}}></Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, padding: 1, py: 0, backgroundColor: 'white', borderRadius: 2}}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                5+<br />
                                <Box component='span' sx={{color: '#a1a1a1'}}>
                                    Años de experiencia
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                50+<br />
                                <Box component='span' sx={{color: '#a1a1a1'}}>
                                    Proyectos completados
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                30+<br />
                                <Box component='span' sx={{color: '#a1a1a1'}}>
                                    Clientes satisfechos
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box component='img' src='/img (11).png' alt='' sx={{width:50, height:50, objectFit:'contain'}}></Box>
                            <Typography sx={{color: 'black', fontWeight: 'bold', letterSpacing: 2}}>
                                Talento multi diciplinario<br />
                                <Box component='span' sx={{color: '#a1a1a1'}}>
                                    Desarrolladores, diseñadores y estrategias
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Nosotros
import {Box, Button, Container, Typography} from '@mui/material'

function MetodologiasProy() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', paddingBottom: 1}}>

            <Container maxWidth='lg'>

                <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                    <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>NUESTRA METODOLOGIA
                </Typography>
                <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.4rem', letterSpacing:2}}>
                    Un proceso claro para resultados extraordinarios 
                </Typography>
                <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                    Seguimos una metodologia probada que nos permite desarrollar soluciones digitales de alta<br />
                    calidad, manteniendo una comunicacion cercana con nuestros clientes en todo momento.
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, justifyContent:'space-evenly'}}>
                    
                    <Box sx={{display: 'flex', gap: 2, backgroundColor: '#fff', padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                01
                            </Typography>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '15px'}}>
                                Descubrimiento
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Entendemos tus necesidades, objetivos y el contenido de tu negocio.
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{color:'#7c4dff'}}>
                        →
                    </Typography>
                    <Box sx={{display: 'flex', gap: 2, backgroundColor: '#fff', padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                02
                            </Typography>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '15px'}}>
                                Diseño
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Creamos la arquitectura, el diseño UI/UX y validamos la solucion.
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{color:'#7c4dff'}}>
                        →
                    </Typography>
                    <Box sx={{display: 'flex', gap: 2, backgroundColor: '#fff', padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                03
                            </Typography>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '15px'}}>
                                Desarrollo
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Construimos la solucion con tecnologias modernas y seguras.
                            </Typography>
                        </Box>
                    </Box>
                    <Typography sx={{color:'#7c4dff'}}>
                        →
                    </Typography>
                    <Box sx={{display: 'flex', gap: 2, backgroundColor: '#fff', padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                04
                            </Typography>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '15px'}}>
                                Lanzamiento
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Desplegamos, capacitamos y te acompañamos en el crecimiento.
                            </Typography>
                        </Box>
                    </Box>
                    
                </Box>
                
            </Container>
            
        </Box>
    )
}
export default MetodologiasProy
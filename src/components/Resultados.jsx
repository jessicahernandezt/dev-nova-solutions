import {Box, Button, Container, Typography} from '@mui/material'

function Resultados() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', paddingBottom: 1}}>

            <Container maxWidth='lg'>

                <Box sx={{display: 'flex', alignItems: 'center', gap: 2, justifyContent:'space-evenly'}}>

                    <Box sx={{minWidth:'200px'}}>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", letterSpacing:2}}>
                            <Box component='span' sx={{color:'#7c4dff', fontWeight:'bold', fontSize:'25px'}}>- </Box>NUESTROS RESULTADOS
                        </Typography>
                        <Typography sx={{color:'#171b35', fontWeight:"bold", fontSize: '1.4rem', letterSpacing:2}}>
                            Proyectos que generan impacto
                        </Typography>
                        <Typography sx={{color:'#666', letterSpacing:2, fontSize: '0.9rem', paddingBottom:'20px'}}>
                            Cuentanos sobre tu proyecto y descubre como podemos<br />
                            ayudarte a convertirlo en una solucion digital exitosa.
                        </Typography>
                        
                    </Box>
                    
                    <Box sx={{display: 'flex', gap: 2, padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '20px'}}>
                                50+
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Proyectos completados
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Soluciones entregadas con exito
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', gap: 2, padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '20px'}}>
                                30+
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Clientes satisfechos
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Empresas que confian en nosotros
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', gap: 2, padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '20px'}}>
                                98%
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Entregas a tiempo
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Compromiso con cada proyecto
                            </Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', gap: 2, padding: '5px', borderRadius: 2, border:'1px solid #d8d7d7'}}>
                        <Box component='img' src='/img (11).png' alt='' sx={{width:'80px', height: '80px', objectFit: 'contain', flexShrink: 0}}></Box>
                        <Box sx={{flex: 1, minWidth: 0}}>
                            <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '20px'}}>
                                4.5/5
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Calificacion promedio
                            </Typography>
                            <Typography sx={{color: '#666', fontSize:'13px'}}>
                                Basado en opiniones de nuestros clientes
                            </Typography>
                        </Box>
                    </Box>
                    
                </Box>
                
            </Container>
            
        </Box>
    )
}
export default Resultados
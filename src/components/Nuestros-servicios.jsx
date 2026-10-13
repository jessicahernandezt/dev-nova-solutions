import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Servicios() {
    return (
        <Box sx={{minHeight: '520px', display: 'flex', alignItems: 'center', backgroundColor: '#f7f7ff', py: 6}}>

            <Container maxWidth='lg' sx={{backgroundColor: '#fff', padding: '1rem', borderRadius: 2}}>
                <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6}}>
                    
                    <Box sx={{width:"20%", gridTemplateColumns: 'repeat(2,1fr)'}}>
                        <img src="../public/img (11).png" alt="asda" style={{width:'100%',height:'100%'}} />
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Desarrollo web
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Sitios y plataformas web modernas, seguras y escalables.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>
                    <Box sx={{width:"20%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Aplicaciones mobiles
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Apps mobiles e hibridas para iOS y Android. 
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>
                    <Box sx={{width:"20%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Desarrollo de software
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Soluciones a la medida para procesos especificos.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>

                    <Box sx={{width:"20%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Consultoria tecnologica
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Te ayudamos a definir la mejor estrategia tecnologica.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>
                    <Box sx={{width:"20%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Integracion de sistemas
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Conectamos tus herramientas y optimizamos procesos.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>
                    <Box sx={{width:"20%"}}>
                        <Typography sx={{color:"#171b35", fontWeight:"bold", fontSize: '1.1rem', letterSpacing:2}}>
                            Soporte y mantenimiento
                        </Typography>
                        <Typography sx={{color: '#666', mb:1}}>
                            Tu operacion siempre en funcionamiento.
                        </Typography>
                        <Button sx={{color: '#7c4dff', fontWeight:"bold"}}>Ver mas →</Button>
                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
export default Servicios
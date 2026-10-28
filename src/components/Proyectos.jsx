import {Box, Button, Container, Typography } from '@mui/material'

function Proyectos() {
    return(

        <Box /*Proyectos destacados*/>
            <Box sx={{marginTop: '30px'}}/*Info*/>
            <Typography>
                Soluciones reales para negocios reales
                <Typography>
                    Conode algunos de nuestros proyectos mas recientesy como ayudamos a nuestros clientes a alcanzar sus objetivos
                </Typography>
            </Typography>
            </Box>

            <Box sx={{display:'flex', gap:'20px'}}/*Tarjetas*/>

                <Box /*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'50px', height: '50px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button>Web</Button>
                    </Box>
                    
                    <Typography>
                        Plataforma de gestion empresarial
                        <Typography>
                            Sistema completo para la administracion<br/>
                            de procesos internos
                        </Typography>
                    </Typography>
                    <Box sx={{display:'flex'}}/*Etiquetas*/> 
                        <Button>React</Button>
                        <Button>Node.Js</Button>
                        <Button>PostgreSQL</Button>                                                
                    </Box>

                    <Button /*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

                <Box /*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'50px', height: '50px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button>Movil</Button>
                    </Box>
                    
                    <Typography>
                        Plataforma de gestion empresarial
                        <Typography>
                            Sistema completo para la administracion<br/>
                            de procesos internos
                        </Typography>
                    </Typography>
                    <Box sx={{display:'flex'}}/*Etiquetas*/> 
                        <Button>React</Button>
                        <Button>Node.Js</Button>
                        <Button>PostgreSQL</Button>                                                
                    </Box>

                    <Button /*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

                <Box /*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'50px', height: '50px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button>Web</Button>
                    </Box>
                    
                    <Typography>
                        Plataforma de gestion empresarial
                        <Typography>
                            Sistema completo para la administracion<br/>
                            de procesos internos
                        </Typography>
                    </Typography>
                    <Box sx={{display:'flex'}}/*Etiquetas*/> 
                        <Button>React</Button>
                        <Button>Node.Js</Button>
                        <Button>PostgreSQL</Button>                                                
                    </Box>

                    <Button /*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

                <Box /*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'50px', height: '50px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button>E-commerce</Button>
                    </Box>
                    
                    <Typography>
                        Plataforma de gestion empresarial
                        <Typography>
                            Sistema completo para la administracion<br/>
                            de procesos internos
                        </Typography>
                    </Typography>
                    <Box sx={{display:'flex'}}/*Etiquetas*/> 
                        <Button>React</Button>
                        <Button>Node.Js</Button>
                        <Button>PostgreSQL</Button>                                                
                    </Box>

                    <Button /*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

            </Box>
        </Box>



    )
}
export default Proyectos
import {Box, Button, Container, Typography } from '@mui/material'

function Proyectos() {
    return(

        <Box sx={{marginLeft:'100px'}} /*Proyectos destacados*/>
            <Box sx={{marginTop: '30px'}}/*Info*/>
            <Typography sx={{fontSize:'25px', fontWeight:'bold'}}>
                Soluciones reales para negocios reales
                <Typography sx={{fontSize:'15px'}}>
                    Conode algunos de nuestros proyectos mas recientesy como ayudamos a nuestros clientes a alcanzar sus objetivos
                </Typography>
            </Typography>
            </Box>

            <Box sx={{marginTop:'20px',display:'flex', gap:'20px'}}/*Tarjetas*/>

                <Box sx={{borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'300px', height: '130px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button sx={{borderRadius:'20px',fontWeight:'bold',color:'white', backgroundColor:'#720b98'}}>Web</Button>
                    </Box>
                    
                    <Typography sx={{marginTop:'5px',fontWeight:'bold'}}>
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

                    <Button sx={{color:'#720b98'}} /*Ver-proyecto*/>
                        Ver proyecto 
                    </Button>
                </Box>

                <Box sx={{borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'300px', height: '130px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button sx={{borderRadius:'20px',fontWeight:'bold',color:'white', backgroundColor:'#720b98'}}>Movil</Button>
                    </Box>
                    
                    <Typography sx={{marginTop:'5px',fontWeight:'bold'}}>
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

                    <Button sx={{color:'#720b98'}}/*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

                <Box sx={{borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'300px', height: '130px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button sx={{borderRadius:'20px',fontWeight:'bold',color:'white', backgroundColor:'#720b98'}}>Web</Button>
                    </Box>
                    
                    <Typography sx={{marginTop:'5px',fontWeight:'bold'}}>
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

                    <Button sx={{color:'#720b98'}}/*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

                <Box sx={{borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Gestion*/ >
                    <Box component="img" src='./img_1.png' alt='Gestion' sx={{width:'300px', height: '130px'}}>
                    </Box>
                    <Box /*Boton-web*/>
                        <Button sx={{borderRadius:'20px',fontWeight:'bold',color:'white', backgroundColor:'#720b98'}}>E-commerce</Button>
                    </Box>
                    
                    <Typography sx={{marginTop:'5px',fontWeight:'bold'}}>
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

                    <Button sx={{color:'#720b98'}}/*Ver-proyecto*/>
                        Ver proyecto
                    </Button>
                </Box>

            </Box>
        </Box>



    )
}
export default Proyectos
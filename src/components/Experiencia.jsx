import {Box, Button, Container, Typography } from '@mui/material'

function Experiencia() {
    return(

        <Box sx={{marginTop:'20px', marginLeft:'100px'}}/*Experiencia*/>
            <Box /*Exp-info*/>
                <Box /*info*/>
                    <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>
                        Experiencia y clientes
                    </Typography>
                    <Typography sx={{fontSize:'25px',fontWeight:'bold'}}>
                        La confianza de nuestros clientes nos impulsa
                    </Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Resultado que hablan y relaciones construidas con la calidad y la innovacion
                    </Typography>
                </Box>

                <Box /*Iconos*/>
                
                </Box>
            </Box>

            <Box sx={{display:'flex', marginTop:'20px'}} /*Exp-cards*/>

                <Box sx={{display:'flex',borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'60px', width:'60px'}}
                    ></Box>

                    <Box sx={{marginLeft:'10px'}}/*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography sx={{fontWeight:'bold'}}/*Nombre*/>
                            Laura Martinez
                        </Typography>

                        <Typography /*Rol-cliente*/>
                            Directora de marketing. Startup
                        </Typography>

                        <Typography /*Iconos*/>
                            ⭐⭐⭐⭐⭐
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex', marginLeft:'20px', borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'60px', width:'60px'}}
                    ></Box>

                    <Box sx={{marginLeft:'10px'}}/*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography sx={{fontWeight:'bold'}}/*Nombre*/>
                            Laura Martinez
                        </Typography>

                        <Typography /*Rol-cliente*/>
                            Directora de marketing. Startup
                        </Typography>

                        <Typography /*Iconos*/>
                            ⭐⭐⭐⭐⭐
                        </Typography>
                    </Box>
                </Box>
                
                <Box sx={{display:'flex', marginLeft:'20px', borderRadius:'12px', boxShadow:'1px 1px 1px rgba(0,0,0,0.7)'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'60px', width:'60px'}}
                    ></Box>

                    <Box sx={{marginLeft:'10px'}}/*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography sx={{fontWeight:'bold'}}/*Nombre*/>
                            Laura Martinez
                        </Typography>

                        <Typography /*Rol-cliente*/>
                            Directora de marketing. Startup
                        </Typography>

                        <Typography /*Iconos*/>
                            ⭐⭐⭐⭐⭐
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>




    )
}
export default Experiencia
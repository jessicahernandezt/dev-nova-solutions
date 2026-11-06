import {Box, Button, Container, Typography } from '@mui/material'

function Experiencia() {
    return(

        <Box sx={{marginTop:'20px', marginLeft:'100px'}}/*Experiencia*/>
            <Box /*Exp-info*/>
                <Box /*info*/>
                    <Typography>
                        Experiencia y clientes
                    </Typography>
                    <Typography>
                        La confianza de nuestros clientes nos impulsa
                    </Typography>
                    <Typography>
                        Resultado que hablan y relaciones construidas con la calidad y la innovacion
                    </Typography>
                </Box>

                <Box /*Iconos*/>
                
                </Box>
            </Box>

            <Box sx={{display:'flex'}} /*Exp-cards*/>

                <Box sx={{display:'flex'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'30px', width:'30px'}}
                    ></Box>

                    <Box /*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography /*Nombre*/>
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

                <Box sx={{display:'flex'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'30px', width:'30px'}}
                    ></Box>

                    <Box /*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography /*Nombre*/>
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
                
                <Box sx={{display:'flex'}}/*Card*/>
                    <Box /*Imagen-card*/component="img" src='./img_21.png' alt='cliente-1'
                        sx={{height:'30px', width:'30px'}}
                    ></Box>

                    <Box /*Info-card*/>
                        <Typography /*Reseña-card*/>
                            "El equipo de Devnova entendio perfectamente<br/>
                            Nuestras necesidades y entrego un producto<br/>
                            de gran valor. Altamente recomendados"
                        </Typography>

                        <Typography /*Nombre*/>
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
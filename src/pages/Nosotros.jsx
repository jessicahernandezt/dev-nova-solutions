import{Box,Button,colors,Container,Typography} from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


function nosotros(){
    return(
        <Box
        sx={{
            
            display:"flex",
            alignItems:"center",
            backgroundColor:"#f7f7ff",
            py:6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    alingItems:"center",
                    
                }}>
                    <Typography sx={{
                        color:"#000",
                        fontWeight:"bold",
                        letterSpacing:2
                    }}>Quienes somos
                    <HorizontalRuleIcon sx={{
                        color:"#7c4dff",
                        
                    }}/>


                    </Typography>
                </Box>
               
                <Typography variant="h5"sx={{
                    color:"#000",
                    fontWeight:"bold"
                }}>Un equipo que convierte ideas en <br/>
                
                <Typography variant="h5" sx={{
                    color:"#7c4dff",
                    fontWeight:"bold"
                }}>grandes realidades</Typography>
                </Typography>

                <Box 
                sx={{
                    display:"flex",
                    alingitems:"center"
                }}>
                    <Typography variant="subtitle2" sx={{
                        color:"#000",
                        fontWeight:"light"
                    }}>
                        En Dev Nova Solutions somos un equipo de profesionales
                        <br></br>
                        apasionados por la tecnologia,la innovacion y el crecimiento
                        <br></br>
                        de nuestros clientes. Desarollamos soluciones digitales que 
                        <br></br>
                        generan valor real en los negocios. 
                    </Typography>
                </Box>

                <Box sx={{
                    display:"flex",
                    alingitems:"center"
                }}>
                    <Button variant="contained" 
                    sx={{
                        
                        backgroundColor:"#7c4dff",
                        textTransform:"none",
                        borderRadius:2
                    }}>
                        Conoce mas sobre nosotros →
                    </Button>
                </Box>
            





            </Container>
        </Box>
    )
}

export default nosotros
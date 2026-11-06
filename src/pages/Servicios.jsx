import { AppBar, Box, Button, Container, Toolbar, Typography , Card} from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ComputerIcon from '@mui/icons-material/Computer';

function Servicios() {
    return(
        <Box sx={{
            minHeight:"120px",
            display:"flex",
            alignItems:"center",
            backgroundColor:"#f7f7ff",
            py:6
        }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:6
                }}>
                    <Typography 
                    sx={{
                        color:"#000",
                        fontWeight:"bold",
                        
                    }}>
                        <HorizontalRuleIcon sx={{ 
                            color:"#7c4dff",

 
                            

                        }} />
                        Nuestros Servicios
                    </Typography>



                </Box>

                <Box
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:2
                }}>
                    <Typography variant="h5"
                    sx={{
                        color:"#000",
                        fontWeight:"bold",
                        letterSpacing:3
                    }}>
                        Soluciones tecnologicas para cada necesidad
                    </Typography>
                </Box>

                <Box 
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:2
                }}>
                    <Typography variant="subtitle2"
                    sx={{
                        color:"#000",
                        fontWeight:"bold"
        
                    }}>
                        Ofrecemos servicios de desarrollo de software aplicaciones web y moviles, consultoria<br>
                        </br>
                        y soporte , para ayudarte a optimizar tus procesos y alcanzar tus objetivos
                    </Typography>
                </Box>



                <Card sx={{
                    display:"flex",
                    width:"45%"
                }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    padding:"15px",
                    gap:3
                }}>
                    
                    <Typography
                    sx={{
                        color:"#000",
                        display:"flex",
                        gap:5,
                        fontWeight:"bold"
                        
                    }}><ComputerIcon sx={{
                        color:"#7c4dff",
                        width:"35%"
                        
                        
                    }}/> Desarrollo Web
                    </Typography>


                    <Typography
                    sx={{
                        
                        width:"300%",
                        padding:"18px"
                        

                    }}>Sitios y plataformas web modernas,<br></br>seguras y escalables</Typography>

                    <Box sx={{
                        display:"flex",

                    }}>
                        <Button sx={{
                          color:"#7c4dff",
                          
                        }}>
                            ver mas →
                        </Button>
                    </Box>

                   
                </Box>
                </Card>
                
                



            </Container>
        </Box>
    )

}








export default Servicios
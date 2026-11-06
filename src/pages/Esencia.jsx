import{Box,Button,Card,colors,Container,Typography} from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import GamesIcon from '@mui/icons-material/Games';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Esencia(){
    return(
   <Box
        sx={{
            minHeight:"380px",
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
                    <HorizontalRuleIcon sx={{
                        color:"#7c4dff",
                        
                    }}/>
                    <Typography sx={{
                        color:"#000",
                        fontWeight:"bold",
                    }}>Nuestra esencia
                 


                    </Typography>
                </Box>
               
                <Typography variant="h5"sx={{
                    color:"#000",
                    fontWeight:"bold"
                }}>Mision y vision</Typography>

                <Box 
                sx={{
                    display:"flex",
                    alingitems:"center"
                }}>
                    <Typography variant="subtitle2" sx={{
                        color:"#000",
                        fontWeight:"light"
                    }}>
                        Estos son los principales que guian nuestro trabajo y nos inspiran 
                        <br></br>
                        a seguir construyen un futuro mejor a traves de la tecnologia
                        <br></br>
                    </Typography>
                </Box>

              <Card sx={{
                width:"45%",
            
              }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    gap:2
                }}>
                    <Typography sx={{
                        color:"#7c4dff",
                    }}>
                        <GamesIcon/>
                    </Typography>

                    <Box sx={{
                        
                        width:"100%",
                        gap:3
                    }}>
                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"bold"
                        }}>Nuestra mision</Typography>

                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"light"
                        }}>
                            Desarollamos soluciones tecnologias de alta calidad 
                            <br></br>
                            que impulsen al crecimiento de nuestros clientes 
                            <br></br>
                            combinando innovacion, experencia y un enfoque
                            <br></br>
                            humano en cada proyecto

                        </Typography>

                        

                    </Box>
                </Box>
                </Card>

              
                <Card sx={{
                width:"45%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                ml:63,
                mt:-15,

                
              }}>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    gap:2,
                }}>
                    <Typography sx={{
                        color:"#7c4dff",
                    }}>
                        <VisibilityIcon/>
                    </Typography>

                    <Box sx={{
                        
                        width:"100%",
                        gap:3
                    }}>
                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"bold",
                            
                        }}>Nuestra vision</Typography> 

                        <Typography sx={{
                            display:"flex",
                            color:"#000",
                            fontWeight:"light",

                        }}>
                            Ser una empresa referente en LatinoAmerica por nuestra
                            <br></br>
                            capacidad de transformar ideas en soluciones digitales 
                            <br></br>
                            que generan un impacto positivo en las personas,
                            <br></br>
                            los negocios y la sociedad

                        </Typography>
                    </Box>
                </Box>
                </Card>
                
              



         





            </Container>
        </Box>

    )

}

export default Esencia
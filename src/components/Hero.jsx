import{Box,Button,colors,Container,Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ComputerIcon from '@mui/icons-material/Computer';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Hero() {
    return(
        <Box
        sx={{
            minHeight:"520PX",
            display:"flex",
            alignItems:"center",
            backgroundColor:"#f7f7ff",
            py: 6
        }}>
          <Container maxWidth="lg">
            <Box
            sx={{
                display:"flex",
                alignItems:"center",
                gap:6
            }}>
               
               <Typography
               sx={{
                color:"#7c4dff",
                fontWeight:"bold",
                letterSpacing:2



               }}>
                IDEAS· TECNOLOGIAS· RESULTADOS

                <Box 
                sx={{
                    display:"flex",
                    alignItems:"center",
                    gap:2
                }}>

                    
                    <Typography variant='h4' 
                    sx={{
                        color:"#000",
                        fontWeight:"bold",
                        letterSpacing:3
                       
                    }}>

                        Transformamos ideas  <br/>
                         <Typography variant='h4'
                    sx={{
                        color:"#7c4dff",
                        fontWeight:"bold",
                        letterSpacing:3

                    }}>

                      en soluciones digitales 
                    </Typography>
                    </Typography>

                    

                    

                </Box>

                <Box
                sx={{
                    display:"flex",
                    alignItems:"center",
                    
                }}>
                    <Typography variant='subtitle2'
                    sx={{
                        color:"#000",
                        fontWeight:"bold",

                    }}>
                        Desarrollamos software a la medida para impulsar el crecimiento 
                        <br></br>
                         de tu negocio.Combinamos tecnologias.creatividad y experencia
                        <br></br>
                        para convetir tus ideas productos reales.

                    </Typography>

                </Box>

                    <Box 
                    sx={{
                        display:"flex",
                        gap:3
                    }}>
                      <Button variant="contained" size='large'
                      sx={{
                        backgroundColor:'#7c4dff'
                      }}>Comenzar proyecto → </Button>

                        

                      <Button variant='contained' size='large'
                      sx={{
                        backgroundColor:"#fff",
                        color:"#000",
                        
                        
                      }}>Conocer nuestros servicios</Button>
                    </Box>


                   <Box
                   sx={{
                    display:"flex",
                    width:"100%",
                    padding:"15px",
                    gap:3
                   }}>

                        <Typography
                        sx={{
                            color:"#000",
                            display:"flex",
                            gap:2
                        }}> <FavoriteIcon sx={{
                            color:"#7c4dff"
                        }}/>100%<br></br>Comprometidos</Typography>


                        <Typography
                        sx={{
                            color:"#000",
                            display:"flex",
                            gap:2
                        }}> <ComputerIcon sx={{
                            color:"#7c4dff"
                        }} />+50<br></br>Proyectos entregados</Typography>

                        <Typography sx={{
                            color:"#000",
                            display:"flex",
                            gap:2
                        }}> <PersonAddIcon sx={{
                            color:"#7c4dff"
                        }}/>98%<br></br> Clientes satisfecho</Typography>
                    
                   </Box>



                 


   

               </Typography>


            </Box>

            <Box sx={{
               display:"flex",
               width:"10%",
               padding:"10px"
            }}>
                <Box component="img" src='./img (8).png'></Box>
            </Box>
            </Container>  
        </Box>

    )
}

export default Hero
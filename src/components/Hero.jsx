import{Box,Button,Container,Typography} from '@mui/material'



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
                        gap:5
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
                    gap:2
                   }}>

                    <Typography
                    sx={{
                        color:"#000"
                    }}> favorite_border 100%<br></br>Comprometidos</Typography>


                    <Typography
                    sx={{
                        color:"#000"
                    }}>+50<br></br>Proyectos entregados</Typography>

                    <Typography sx={{
                        color:"#000"
                    }}>98%<br></br>satisfecho</Typography>
                    
                   </Box>

                 


   

               </Typography>


            </Box>
            </Container>  
        </Box>

    )
}

export default Hero
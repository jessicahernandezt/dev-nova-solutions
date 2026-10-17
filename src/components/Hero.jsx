import { HeatPumpOutlined } from '@mui/icons-material'
import {Box, 
    Button, 
    Container,
    Typography} from '@mui/material'

function Hero() {
    return(
        <Box
        sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}
        >

        <Container maxWidth='lg'>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>

                <Typography
                sx={{
                    color: '#7c4dff',
                    fontWeight: 'bold',
                    letterSpacing: 2
                }}>

                    IDEAS · TECNOLOGIA · RESULTADOS

                </Typography>

            </Box>

         <Box>
                          <Typography
                    sx={{
                           fontWeight: 'bold',
                             justifyContent: 'left',
                               fontSize: '40px',
                                marginBottom: '20px'
                             }}>
                                    Transformando ideas en soluciones digitales
                                                                                </Typography>

    <Typography
                           sx= {{ 
                             fontWeight: 'arial',
                             justifyContent: ' right',
                               fontSize: '20px',
                               marginBottom: '20px' }}>
      Desarrollamos software a la medida,
      para poder impulsar el crecimiento de tu negocio,
      combinando tu negocio con la tecnología, creatividad y experiencia
      para convertir tus ideas en productos reales.
                                                                 </Typography>

</Box>
            <div style={{ display: "flex", gap: "20px" }}>
                <button
                    style={{
                            backgroundColor: "#8B5CF6",
                            color: "white",
                            padding: "12px 24px",
                            border: "none",
                            borderRadius: "8px",
                             cursor: "pointer"
                                             }}
                         > Comenzar el Proyecto   </button>     

<button>
Conoce nuestro servicio
</button>



</div>
    
        </Container>
</Box>
    )
}
export default Hero
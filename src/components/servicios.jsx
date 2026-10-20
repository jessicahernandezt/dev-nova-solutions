import { ArrowForward, HorizontalRule } from '@mui/icons-material'
import {
    Box,
    Button,
    Container,
    ImageListItem,
    Typography
} from '@mui/material'

function Servicios(){
    return (
        <Box sx={{
            minHeight:'520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f7f7ff',
            py: 6
        }}>
            <Container maxWidth="lg">
                <Box 
                sx={{
                    display:"flex",
                    
                }}>
                    

                    <Box alt="info"
                    sx={{
                        width:"100%",
                        
                    }}>
                        <Box 
                        sx={{
                            alignItems:"flex-start",
                            justifyContent:"flex-end",
                            display:"flex",
                            gap:2,
                            
                        }}>
                            
                                <Typography sx={
                                {
                                    color:"#7c4dff",
                                    width:"3px",
                                    height:"3px",
                                    
                                    
                                }
                                }>
                                    Ver todos nuestros servicios<ArrowForward></ArrowForward>
                                </Typography>
                        
                   
                        </Box>
                        <Typography variant='overline'
                        sx={{
                            gap:1
                        }}>
                            <HorizontalRule sx={{
                                color:"#7c4dff"
                                
                            }}></HorizontalRule> Nuestros servicios
                        </Typography>

                        <Typography variant='h4'
                        sx={{
                            fontSize:"bold"
                        }}>
                            Soluciones tecnologicas para cada necesidad
                        </Typography>
                        <Typography variant='subtittle'>
                            Ofrecemos servicios de desarrollo de software y móviles, consultoria y soporte, para ayudar a optimizar los procesos y alcanzar tus objetivos
                        </Typography>

                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Servicios
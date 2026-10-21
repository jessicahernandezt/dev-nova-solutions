import { ArrowForward, ArrowRightAlt, Bolt, Directions, HorizontalRule, Rule } from '@mui/icons-material'
import {
    Box,
    Button,
    Card,
    CardContent,
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
                    display:"block",
                    
                }}>
                    <Box alt="box general">
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",

                        }}>
                            <Box sx={{
                                position:"relative",
                                zIndex:1,
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                gap:"8px"
                            }}>
                                <Box alt="text" 
                                sx={{
                                    width:"50%"

                                }}>
                                    <Typography variant='overline' sx={{
                                        
                                        fontSize:"bold"
                                    }}>
                                        <ArrowRightAlt sx={{color:"#7c4dff",}}></ArrowRightAlt> Nuestros servicios
                                        
                                    </Typography>

                                </Box>
                                <Box sx={{
                                    justifyContent:"flex-end",
                                    
                                }}>
                                    <Button size='small'  sx={{
                                        
                                        color:"#7c4dff",
                                        padding: '4px 8px', 
                                        fontSize: '0.75rem',
                                        minWidth: 'auto'
                                        
                                    }}>
                                        <Typography variant='caption' >
                                            Ver todos nuestros servicios <ArrowForward sx={{
                                                width:"18px",
                                                height:"10px"
                                            }}></ArrowForward>
                                        </Typography>
                                    </Button>

                                </Box>

                            </Box>
                            <Box>
                                <Typography variant='h5' 
                                sx={{
                                    fontSize:"bold"
                                }}>
                                    Soluciones tecnologicas para cada necesidad
                                </Typography>
                                <Typography variant='caption'>
                                    ofrecemos servicios de desarrollo de software, aplicaciones web y movil, consultoria <br/> y soporte, para ayudarte a optimizar los procesos y alcanzar tus objetivos
                                    
                                </Typography>                                
                            </Box>

                        </Box>
                        <Box>
                            <Card>
                                <CardContent>
                                    
                                </CardContent>
                            </Card>
                        </Box>

                    </Box>

                    

                    

                </Box>
            </Container>
        </Box>
    )
}

export default Servicios
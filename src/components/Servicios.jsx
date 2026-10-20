import { ArrowForward } from '@mui/icons-material'
import {Box, 
    Button, 
    Container,
    ResponsiveFontSizes,
    Typography} from '@mui/material'

function Servicios() {
    return(
        <Box sx={{
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fcfcfc',
            py: 6

        }}>
            <Container>
                <Box>
                    <Box>

                    </Box>
                    <Box sx={{width:"50%"}}>
                        <Typography sx={{padding:'2px',fontStyle:"italic",fontWeight:"bold", }}>
                                Nuestros servicios                                
                        </Typography>
                        <Typography sx={{
                            color:'#7c4dff',
                            fontWeight:'bold',
                            fontSize:'25px',
                            
                        }}>
                            Soluciones tecnologicas para cada necesidad
                        </Typography>
                        <Typography sx={{color:"grey", padding:"2", textSpacingTrim}}>
                            Ofrecemos servicios de desarrollo de software, aplicaciones web y moviles, consultoria y transporte, para ayudarte a optimizar tus procesos y alcanzar tus objetivos
                        </Typography>
                    </Box>

                </Box>
            </Container>

        </Box>
    )
}
export default Servicios
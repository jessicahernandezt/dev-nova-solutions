import { ArrowForward } from '@mui/icons-material'

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import PhoneIcon from '@mui/icons-material/Phone'

import {Box, 
    Button, 
    Container,
    Typography,
    TextField} from '@mui/material'

function Contacto_y_preguntas_frecuentes() {
    return(
        <Box
        sx={{
            
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F5FA',
            

        }}
        >

        <Container maxWidth='lg'  >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>
                <Box sx={{ width: '50%',display:'flow', alignContent:'flex-start'}}>
                    <Typography sx={{display: "flex",
                                    flexDirection: "row",
                                    fontWeight:'bold',
                                    alignItems: "center",
                                    }}><HorizontalRuleIcon sx={{color:'#7c4dff', fontWeight:"bold"}}></HorizontalRuleIcon>¿Listo para ser nuestro siguiente caso de exito?</Typography>
                    <Typography sx={{
                        fontWeight: 'bold',
                        justifyContent: 'left',
                        fontSize: '40px'
                    }}>
                        Hablemos de tu proyecto </Typography>
                        
                
                    <Typography sx={{py:1, color:'gray'}}>
                    Nos encantaría conocer tus ideas y ayudarte a alcanzar grandes resultados con soluciones digitales a la medida   

                    </Typography>
                    <Box 
                    sx={{
                        display: 'flex',
                        gap: 2
                    }}>
                        <Button variant='contained' 
                    sx={{
                        backgroundColor:'#7c4dff',
                        color: 'white',
                        gap: 1

                    }}>
                        Contactanos<ArrowForward sx={{
                            width:'20px',
                            height:'20px',

                        }}></ArrowForward>
                    </Button>
                    <Button variant='outlined' sx={{
                        color: '#202020',
                        borderColor:'#494949',
                        backgroundColor:'white'

                    }}>
                        Conocer nuestros servicios

                    </Button>
                    </Box>
                    

                </Box>
                <Box sx={{width:"50%",height:"50%", }}>
                    <Box component="img" sx={{width:"100%",height:"100%",borderRadius:"20px" }}
                    src="public/img (9).png">

                    </Box>
                </Box>
                
            </Box>
            


        </Container>
        </Box>

        )

}
export default Contacto_y_preguntas_frecuentes
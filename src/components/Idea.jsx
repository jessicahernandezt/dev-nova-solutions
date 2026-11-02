import {
    Box,
    Button,
    Typography
} from '@mui/material'

function Idea() {
    return(
        <Box sx={{marginLeft: '100px', display:'flex', marginTop:'20px'}}/*Idea*/>
            <Box /*Idea-info*/>
                <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                    ¿Tienes un proyecto en mente?
                </Typography>
                <Typography sx={{fontSize:'25px', color:'#4d084b',fontWeight:'bold'}}>
                    Hagamos realidad tu proxima gran idea
                </Typography>
                <Typography sx={{font:'15px'}}>
                    Cuentanos sobre tu proyecto y te ayudaremos a definir la mejor stack tecnologica<br/>
                    para convertirlo en una solucion digital exitosa
                </Typography>

                <Box sx={{display:'flex', gap:'15px',marginTop:'10px'}}/*Botones*/>
                    <Button sx={{backgroundColor:'#7c4dff',color:'white',fontWeight:'bold'}}>Solicitar cotizacion→</Button>
                    <Button sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}>Conocer nuestros servicios</Button>
                </Box>
            </Box>

            <Box component="img" src='./img_9.png' alt='gato' sx={{
                width:'200px', height:'200px',marginLeft:'20px'
            }}>

            </Box>
        </Box>
    )
}
export default Idea
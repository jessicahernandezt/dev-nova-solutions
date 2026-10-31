import SettingsIcon from '@mui/icons-material/Settings';

import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material'

function Hero() {
    return (
        <Box sx={{display:'flex', marginLeft:'100px'}}/*Tecnologias-Hero*/>
            <Box /*Info-Hero*/>
                <Typography sx={{fontSize: '16px'}}>
                    Nuestras tecnologias
                </Typography>
                <Typography sx={{fontWeight: 'bold', fontSize: '40px'}}>
                    Tecnologias que impulsan<br/>
                    Soluciones reales
                </Typography>
                <Typography sx={{fontSize: '16px', marginLeft:'10px'}}>
                    Utilizamos tecnologias modernas, seguras y confiables para<br/>
                    desarrollar soluciones digitales de alto rendimiento, escllables<br/>
                    y alineadas a los objetivos de tu negocio.
                </Typography>

                <Box sx={{display: 'flex', gap: '10px', padding:'10px'}}/*Botones-Hero*/>
                    <Button sx={{backgroundColor:'#7c4dff',color:'white',fontWeight:'bold'}}>Conocer nuestros servicios</Button>
                    <Button sx={{backgroundColor:'#7c4dff',color:'white',fontWeight:'bold'}}>Hablemos de tu proyecto</Button>
                </Box>

                <Box /*Iconos hero*/>
                    <Box /*Tecnologias*/>
                        <SettingsIcon></SettingsIcon>
                    </Box>

                    <Box /*Proyectos*/>

                    </Box>

                    <Box /*Clientes*/>

                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default Hero
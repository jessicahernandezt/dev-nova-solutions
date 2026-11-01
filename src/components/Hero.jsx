import SettingsIcon from '@mui/icons-material/Settings';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';



import {
    Box,
    Button,
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

                <Box sx={{display:'flex'}} /*Iconos hero*/>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <SettingsIcon></SettingsIcon>
                        <Box>
                            <Typography>10+</Typography>
                            <Typography>Tecnologias principales</Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <LayersIcon></LayersIcon>
                        <Box>
                            <Typography>50+</Typography>
                            <Typography>Proyectos con nuestra stack</Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <PeopleIcon></PeopleIcon>
                        <Box>
                            <Typography>98%</Typography>
                            <Typography>Clientes satisfechos</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box /*Imagen-Hero*/ component="img" src='./img_hero.png' alt='TecnologiasHero' sx={{
                height: '400px', width: '600px'
            }}></Box>

        </Box>
    )
}
export default Hero
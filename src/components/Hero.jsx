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
        <Box sx={{display:'flex', marginLeft:'100px',backgroundColor:'#f7f7ff'}}/*Tecnologias-Hero*/>
            <Box /*Info-Hero*/>
                <Typography sx={{fontSize: '16px'}}>
                    Nuestras tecnologias
                </Typography>
                <Typography sx={{fontWeight: 'bold', fontSize: '40px'}}>
                    Tecnologias que impulsan<br/>
                </Typography>
                <Typography sx={{fontWeight: 'bold', fontSize: '40px',color:'#720b98'}}>Soluciones reales</Typography>
                <Typography sx={{fontSize: '16px', marginLeft:'10px'}}>
                    Utilizamos tecnologias modernas, seguras y confiables para<br/>
                    desarrollar soluciones digitales de alto rendimiento, escllables<br/>
                    y alineadas a los objetivos de tu negocio.
                </Typography>

                <Box sx={{display: 'flex', gap: '10px', padding:'10px'}}/*Botones-Hero*/>
                    <Button sx={{backgroundColor:'#7c4dff',color:'white',fontWeight:'bold'}}>Conocer nuestros servicios</Button>
                    <Button sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}>Hablemos de tu proyecto</Button>
                </Box>

                <Box sx={{display:'flex'}} /*Iconos hero*/>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <SettingsIcon sx={{color:'#431c53', height:'50px',width:'50px'}}></SettingsIcon>
                        <Box>
                            <Typography sx={{color:'#720b98', fontWeight:'bold'}}>10+</Typography>
                            <Typography sx={{fontWeight:'bold'}}>Tecnologias principales</Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <LayersIcon sx={{color:'#431c53', height:'50px',width:'50px'}}></LayersIcon>
                        <Box>
                            <Typography sx={{color:'#720b98', fontWeight:'bold'}}>50+</Typography>
                            <Typography sx={{fontWeight:'bold'}}>Proyectos con nuestra stack</Typography>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex'}} /*Tecnologias*/>
                        <PeopleIcon sx={{color:'#431c53', height:'50px',width:'50px'}}></PeopleIcon>
                        <Box>
                            <Typography sx={{color:'#720b98', fontWeight:'bold'}}>98%</Typography>
                            <Typography sx={{fontWeight:'bold'}}>Clientes satisfechos</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box /*Imagen-Hero*/ component="img" src='./img_hero.png' alt='TecnologiasHero' sx={{
                height: '400px', width: '800px'
            }}></Box>

        </Box>
    )
}
export default Hero
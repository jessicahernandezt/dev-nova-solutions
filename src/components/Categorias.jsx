import MonitorIcon from '@mui/icons-material/Monitor';
import StorageIcon from '@mui/icons-material/Storage';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import {
    Box,
    Button,
    Typography
} from '@mui/material'

function Categorias() {
    return (
        <Box sx={{marginLeft: '100px'}}/*Categorias-Tecnologias*/>
            
            <Box /*Info*/>
            <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>Categorias de tecnologias</Typography>
            <Typography sx={{fontSize:'25px', color:'#4d084b',fontWeight:'bold'}}>Un stack completo para cada necesidad</Typography>
            <Typography sx={{font:'15px'}}>
                Seleccionamos las mejores herramientas para cada proyecto, combinando tecnologia<br/>
                experiencia y buenas practicas para garantiza resultados de alto nivel.
            </Typography>
            </Box>

            <Box sx={{marginTop:'10px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)',gap:'10px'}}/*Tarjetas*/>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Font-End*/>
                    <MonitorIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></MonitorIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Frontend</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Interfaces modernas,<br/>
                        rapidas y escalables
                    </Typography>

                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>React</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Next.js</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Vite</Button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Back-End*/>
                    <StorageIcon sx={{color:'#720b98', width:'60px',height:'60px', borderRadius:'12px', backgroundColor:'#b39eb5'}}></StorageIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Backend</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        APIs seguras y de<br/>
                        alto rendimiento
                    </Typography>

                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Node js</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Express</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Python</Button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Bases-Datos*/>
                    <JoinFullIcon sx={{color:'#720b98', width:'60px',height:'60px', borderRadius:'12px', backgroundColor:'#b39eb5'}}></JoinFullIcon>

                    <Box sx={{marginLeft:'10px'}} /*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Bases de datos</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Almacenamiento confiable<br/>
                        y escalable.
                    </Typography>

                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>MongoDB</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>PostgreSQL</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>MySQL</Button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Cloud*/>
                    <CloudIcon sx={{color:'#720b98', width:'60px',height:'60px', borderRadius:'12px', backgroundColor:'#b39eb5'}}></CloudIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Cloud</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Infraestructura segura<br/>
                        y escalable.
                    </Typography>

                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>AWS</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Google Cloud</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Azure</Button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Desarrollo*/>
                    <CodeOffIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></CodeOffIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Herramientas de desarrollo</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Productividad, control<br/>
                        y calidad del codigo
                    </Typography>

                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Git</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Docker</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>CI/CD</Button>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Mobile*/>
                    <PhoneAndroidIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></PhoneAndroidIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                    <Typography sx={{color:'#4d084b', fontWeight:'bold'}}>Mobile</Typography>
                    <Typography sx={{fontSize:'15px'}}>
                        Apps nativas e hibridas<br/>
                        de alto rendimiento
                    </Typography>
                    
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Flutter</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>React Native</Button>
                    <Button sx={{borderRadius:'12px', backgroundColor:'#f7f7ff', color: '#4d084b'}}>Firebase</Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}
export default Categorias
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';

import {
    Box,
    Button,
    Typography
} from '@mui/material'

function Stack() {
    return (
        <Box /*Stack*/ sx={{ marginLeft: '100px', marginTop:'20px',backgroundColor:'#f7f7ff' }}>
            <Box /*stack-info*/>
                <Typography sx={{fontSize: "25px", fontWeight:'bold', color:'#431c53'}}>
                    ¿Porque nuestra stack?
                </Typography>
                <Typography sx={{font:'15px'}}>
                    Combinamos experiencia, herramientas de vanguardia y buenas practicas<br />
                    para ofrecer soluciones confiables y preparadas para el futuro.
                </Typography>
            </Box>

            <Box sx={{display:'flex', gap:'20px', marginTop:'20px'}}/*Stack-Tarjetas*/>
                
                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta*/>
                    <ElectricBoltIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></ElectricBoltIcon>

                    <Box sx={{marginLeft:'10px', fontSize:'15px'}}/*Tarjeta-info*/>
                        <Typography>
                            Alto rendimiento
                        </Typography>
                        <Typography>
                            Soluciones rapidas,<br/>
                            escalables y optimizadas
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta*/>
                    <GppGoodIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></GppGoodIcon>

                    <Box sx={{marginLeft:'10px', fontSize:'15px'}}/*Tarjeta-info*/>
                        <Typography>
                            Seguridad
                        </Typography>
                        <Typography>
                            Mejores practicas<br/>
                            y estandares de la industria
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta*/>
                    <SettingsIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></SettingsIcon>

                    <Box sx={{marginLeft:'10px', fontSize:'15px'}}/*Tarjeta-info*/>
                        <Typography>
                            Flexibilidad
                        </Typography>
                        <Typography>
                            Aseguramos rendimiento<br/>
                            seguridad y escalabilidad<br/>
                            en cada proyecto
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta*/>
                    <PeopleIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></PeopleIcon>

                    <Box sx={{marginLeft:'10px', fontSize:'15px'}}/*Tarjeta-info*/>
                        <Typography>
                            Talento especializado
                        </Typography>
                        <Typography>
                            Equipo con experiencia<br/>
                            en tecnologias lideres
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Stack
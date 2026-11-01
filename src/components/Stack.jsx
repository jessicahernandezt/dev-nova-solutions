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
        <Box /*Stack*/ sx={{ marginLeft: '100px' }}>
            <Box /*stack-info*/>
                <Typography>
                    ¿Porque nuestra stack?
                </Typography>
                <Typography>
                    Combinamos experiencia, herramientas de vanguardia y buenas practicas<br />
                    para ofrecer soluciones confiables y preparadas para el futuro.
                </Typography>
            </Box>

            <Box sx={{display:'flex'}}/*Stack-Tarjetas*/>
                
                <Box sx={{display:'flex'}}/*Tarjeta*/>
                    <ElectricBoltIcon></ElectricBoltIcon>

                    <Box /*Tarjeta-info*/>
                        <Typography>
                            Alto rendimiento
                        </Typography>
                        <Typography>
                            Soluciones rapidas,<br/>
                            escalables y optimizadas
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Tarjeta*/>
                    <GppGoodIcon></GppGoodIcon>

                    <Box /*Tarjeta-info*/>
                        <Typography>
                            Seguridad
                        </Typography>
                        <Typography>
                            Mejores practicas<br/>
                            y estandares de la industria
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Tarjeta*/>
                    <SettingsIcon></SettingsIcon>

                    <Box /*Tarjeta-info*/>
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

                <Box sx={{display:'flex'}}/*Tarjeta*/>
                    <PeopleIcon></PeopleIcon>

                    <Box /*Tarjeta-info*/>
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
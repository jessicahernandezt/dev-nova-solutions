import {Box, Button, Container, Typography } from '@mui/material'
import MonitorIcon from '@mui/icons-material/Monitor';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import GppGoodIcon from '@mui/icons-material/GppGood';

function Servicios() {
return(
    <Box sx={{alignItems:'center'}}/*Nuestros-Servicios*/ >
        <Typography>
                Nuestros servicios
                    <Typography>
                        Soluciones tecnologicas para cada necesidad
                    </Typography>
                <Typography>
                    Ofrecemos servicios de desarrollo de software, aplicaciones web, moviles y moviles, consultoria<br/>
                    y soporte , para ayudarte a optimizar tus procesos y alcanzar tus objetivos.
                </Typography>
        </Typography>

        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1'}}/*tarjetas*/>
            <Box sx={{display: 'flex'}}/*Tarjeta Desarrollo web*/>
                <MonitorIcon>
                    
                </MonitorIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>

            <Box sx={{display: 'flex'}}/*Tarjeta Apps*/>
                <PhoneIphoneIcon>
                    
                </PhoneIphoneIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>

            <Box sx={{display: 'flex'}}/*Tarjeta Desarrollo software*/>
                <CodeIcon>
                    
                </CodeIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>

            <Box sx={{display: 'flex'}}/*Tarjeta Consuloria*/>
                <LightbulbIcon>
                    
                </LightbulbIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}/*Tarjeta Integracion*/>
                <DeviceHubIcon>
                    
                </DeviceHubIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}/*Tarjeta Sporte*/>
                <GppGoodIcon>
                    
                </GppGoodIcon>

                <Typography>
                    Desarrollo Web
                    <Typography>
                        Sitios y plataformas web modernas<br/>
                        seguras y escalables
                    </Typography>
                    <Button>
                        Ver mas →
                    </Button>
                </Typography>
            </Box>
        </Box>

    </Box>
)
}
export default Servicios
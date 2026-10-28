import {Box, Button, Container, Typography } from '@mui/material'
import MonitorIcon from '@mui/icons-material/Monitor';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import GppGoodIcon from '@mui/icons-material/GppGood';

function Servicios() {
return(

    <Box sx={{marginLeft: '80px'}}/*Nuestros-Servicios*/ >

        <Typography sx={{fontSize:'20px', fontWeight:'bold'}}>
                Nuestros servicios
                    <Typography sx={{fontSize: '30px', fontWeight:'bold'}}>
                        Soluciones tecnologicas para cada necesidad
                    </Typography>
                <Typography sx={{fontSize:'15px'}}>
                    Ofrecemos servicios de desarrollo de software, aplicaciones web, moviles y moviles, consultoria<br/>
                    y soporte , para ayudarte a optimizar tus procesos y alcanzar tus objetivos.
                </Typography>
        </Typography>

        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3,max-content)', gap: '32px', marginTop:'20px', justifyContent:'center'}}/*tarjetas*/>
            <Box sx={{display: 'flex'}}/*Tarjeta Desarrollo web*/>
                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}>
                <MonitorIcon sx={{fontSize:'70px', color:'#7c4dff'}}></MonitorIcon>
                </Box>
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
                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}>
                    <PhoneIphoneIcon sx={{fontSize:'70px', color:'#7c4dff'}}></PhoneIphoneIcon>
                </Box>


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

                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}><CodeIcon sx={{fontSize:'70px', color:'#7c4dff'}}></CodeIcon></Box>

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

                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}><LightbulbIcon sx={{fontSize:'70px', color:'#7c4dff'}}></LightbulbIcon></Box>

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
                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}>
                <DeviceHubIcon sx={{fontSize:'70px', color:'#7c4dff'}}></DeviceHubIcon>
                </Box>

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
                <Box sx={{bgcolor:'#e068e0', borderRadius:3, height:"70px", marginRight:'20px'}}>
                <GppGoodIcon sx={{fontSize:'70px', color:'#7c4dff'}}></GppGoodIcon>
                </Box>

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
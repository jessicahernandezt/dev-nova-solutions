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
            <Typography>Categorias de tecnologias</Typography>
            <Typography>Un stack completo para cada necesidad</Typography>
            <Typography>
                Seleccionamos las mejores herramientas para cada proyecto, combinando tecnologia<br/>
                experiencia y buenas practicas para garantiza resultados de alto nivel.
            </Typography>
            </Box>

            <Box sx={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}/*Tarjetas*/>

                <Box sx={{display:'flex'}}/*Font-End*/>
                    <MonitorIcon></MonitorIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Frontend</Typography>
                    <Typography>
                        Interfaces modernas,<br/>
                        rapidas y escalables
                    </Typography>

                    <Button>React</Button>
                    <Button>Next.js</Button>
                    <Button>Vite</Button>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Back-End*/>
                    <StorageIcon></StorageIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Backend</Typography>
                    <Typography>
                        APIs seguras y de<br/>
                        alto rendimiento
                    </Typography>

                    <Button>Node js</Button>
                    <Button>Express</Button>
                    <Button>Python</Button>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Bases-Datos*/>
                    <JoinFullIcon></JoinFullIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Bases de datos</Typography>
                    <Typography>
                        Almacenamiento confiable<br/>
                        y escalable.
                    </Typography>

                    <Button>MongoDB</Button>
                    <Button>PostgreSQL</Button>
                    <Button>MySQL</Button>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Cloud*/>
                    <CloudIcon></CloudIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Cloud</Typography>
                    <Typography>
                        Infraestructura segura<br/>
                        y escalable.
                    </Typography>

                    <Button>AWS</Button>
                    <Button>Google Cloud</Button>
                    <Button>Azure</Button>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Desarrollo*/>
                    <CodeOffIcon></CodeOffIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Herramientas de desarrollo</Typography>
                    <Typography>
                        Productividad, control<br/>
                        y calidad del codigo
                    </Typography>

                    <Button>Git</Button>
                    <Button>Docker</Button>
                    <Button>CI/CD</Button>
                    </Box>
                </Box>

                <Box sx={{display:'flex'}}/*Mobile*/>
                    <PhoneAndroidIcon></PhoneAndroidIcon>

                    <Box /*info-tarjeta*/>
                    <Typography>Mobile</Typography>
                    <Typography>
                        Apps nativas e hibridas<br/>
                        de alto rendimiento
                    </Typography>

                    <Button>Flutter</Button>
                    <Button>React Native</Button>
                    <Button>Firebase</Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}
export default Categorias
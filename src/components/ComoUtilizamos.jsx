import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SettingsIcon from '@mui/icons-material/Settings';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';



import {
    Box,
    Button,
    Typography
} from '@mui/material'

function ComoUtilizamos() {
    return(
        <Box sx={{marginLeft: '100px'}}/*Como Utilizamos*/>
            <Box /*Info*/>
                <Typography>
                    Como las utilizamos
                </Typography>
                <Typography>
                    Del conocimiento a resultados reales
                </Typography>
                <Typography>
                    Integramos estas tecnologias en un proceso probado que nos permite desarrollar<br/>
                    Soluciones digitales de calidad, escalables y alineadas a tus objetivos
                </Typography>
            </Box>

            <Box sx={{display:'flex'}}/*Tarjetas*/>
                
                <Box sx={{display:'flex'}}/*Tarjeta-Analisis*/>
                    <SearchIcon></SearchIcon>

                    <Box /*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography>
                            Analisis y seccion
                        </Typography>
                        <Typography>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    

                </Box>

                <ArrowRightAltIcon></ArrowRightAltIcon>


                <Box sx={{display:'flex'}}/*Tarjeta-Desarrollo*/>
                    <CodeOffIcon></CodeOffIcon>

                    <Box /*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography>
                            Analisis y seccion
                        </Typography>
                        <Typography>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    
                    
                </Box>

                <ArrowRightAltIcon></ArrowRightAltIcon>

                <Box sx={{display:'flex'}}/*Tarjeta-Pruebas*/>
                    <SettingsIcon></SettingsIcon>

                    <Box /*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography>
                            Analisis y seccion
                        </Typography>
                        <Typography>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    
                    
                </Box>

                <ArrowRightAltIcon></ArrowRightAltIcon>

                <Box sx={{display:'flex'}}/*Tarjeta-Resultados*/>
                    <LeaderboardIcon></LeaderboardIcon>

                    <Box /*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography>
                            Analisis y seccion
                        </Typography>
                        <Typography>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    
                    
                </Box>
            </Box>
            
        </Box>



    )
} 
export default ComoUtilizamos
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
        <Box sx={{marginLeft: '100px', backgroundColor:'#f7f7ff'}}/*Como Utilizamos*/>
            <Box sx={{marginTop:'20px'}}/*Info*/>
                <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                    Como las utilizamos
                </Typography>
                <Typography sx={{fontSize:'25px', color:'#4d084b',fontWeight:'bold'}}>
                    Del conocimiento a resultados reales
                </Typography>
                <Typography sx={{font:'15px'}}>
                    Integramos estas tecnologias en un proceso probado que nos permite desarrollar<br/>
                    Soluciones digitales de calidad, escalables y alineadas a tus objetivos
                </Typography>
            </Box>

            <Box sx={{display:'flex', marginTop:'20px'}}/*Tarjetas*/>
                
                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta-Analisis*/>
                    <SearchIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></SearchIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                            Analisis y seccion
                        </Typography>
                        <Typography sx={{color:'#54626f'}}>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    

                </Box>

                <ArrowRightAltIcon sx={{width:'50px',height:'60px', color:'#4d084b'}}></ArrowRightAltIcon>


                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta-Desarrollo*/>
                    <CodeOffIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></CodeOffIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                            Analisis y seccion
                        </Typography>
                        <Typography sx={{color:'#54626f'}}>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    
                    
                </Box>

                <ArrowRightAltIcon sx={{width:'50px',height:'60px', color:'#4d084b'}}></ArrowRightAltIcon>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta-Pruebas*/>
                    <SettingsIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></SettingsIcon>

                    <Box sx={{marginLeft:'10px'}} /*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                            Analisis y seccion
                        </Typography>
                        <Typography sx={{color:'#54626f'}}>
                            Elegimos las tecnologias<br/>
                            ideales segun tus necesidades<br/>
                            y objetivos de negocio
                        </Typography>
                    </Box>
                    
                    
                </Box>

                <ArrowRightAltIcon sx={{width:'50px',height:'60px', color:'#4d084b'}}></ArrowRightAltIcon>

                <Box sx={{backgroundColor:'white',display:'flex',borderRadius:'12px',boxShadow:'0 1px 1px rgba(0,0,0,0.7)'}}/*Tarjeta-Resultados*/>
                    <LeaderboardIcon sx={{color:'#720b98', width:'60px',height:'60px',borderRadius:'12px', backgroundColor:'#b39eb5'}}></LeaderboardIcon>

                    <Box sx={{marginLeft:'10px'}}/*info-tarjeta*/>
                        <Typography>
                            01
                        </Typography>
                        <Typography sx={{fontSize: "15px", fontWeight:'bold', color:'#431c53'}}>
                            Analisis y seccion
                        </Typography>
                        <Typography sx={{color:'#54626f'}}>
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